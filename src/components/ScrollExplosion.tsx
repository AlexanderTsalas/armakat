import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, useSpring, useMotionValueEvent } from 'framer-motion';

const TOTAL_FRAMES = 192;
const FRAME_PATH = '/explosion/ezgif-frame-';

export const ScrollExplosion: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // Scroll Progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map scroll progress to image index
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      try {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        const loadImage = (index: number) => {
          return new Promise<void>((resolve, reject) => {
            const img = new Image();
            const frameNumber = (index + 1).toString().padStart(3, '0');
            img.src = `${FRAME_PATH}${frameNumber}.jpg`;
            img.onload = () => {
              loadedImages[index] = img;
              loadedCount++;
              setLoadingProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
              resolve();
            };
            img.onerror = () => {
              console.error(`Failed to load frame ${frameNumber}`);
              reject(`Failed to load frame ${frameNumber}`);
            };
          });
        };

        const promises = Array.from({ length: TOTAL_FRAMES }, (_, i) => loadImage(i));
        await Promise.all(promises);
        setImages(loadedImages);
        setImagesLoaded(true);
      } catch (err) {
        setError("Error loading product sequence. Please check connection.");
        console.error(err);
      }
    };

    preloadImages();
  }, []);

  // Update canvas on frame change
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!imagesLoaded || !canvasRef.current || images.length === 0) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const index = Math.min(Math.round(latest), TOTAL_FRAMES - 1);
    const img = images[index];
    if (!img) return;

    const canvas = canvasRef.current;
    
    // Contain fit
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.min(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw background color explicitly if needed, but the canvas is in a black div
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(
      img, 
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  });

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth * window.devicePixelRatio;
      canvasRef.current.height = window.innerHeight * window.devicePixelRatio;
      
      if (imagesLoaded && images[0]) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          const img = images[0];
          const ratio = Math.min(canvasRef.current.width / img.width, canvasRef.current.height / img.height);
          const x = (canvasRef.current.width - img.width * ratio) / 2;
          const y = (canvasRef.current.height - img.height * ratio) / 2;
          ctx.fillStyle = "#000000";
          ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          ctx.drawImage(img, 0, 0, img.width, img.height, x, y, img.width * ratio, img.height * ratio);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [imagesLoaded, images]);

  // Opacity transforms for text sections
  const heroOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);
  const feature1Opacity = useTransform(smoothProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const feature2Opacity = useTransform(smoothProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const ctaOpacity = useTransform(smoothProgress, [0.85, 0.95], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full bg-black min-h-[800vh]">
      {/* Preloader */}
      {(!imagesLoaded || error) && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black gap-6">
          {error ? (
            <div className="text-red-500 font-mono text-sm uppercase tracking-widest">{error}</div>
          ) : (
            <>
              <div className="relative w-24 h-24">
                <svg className="w-full h-full rotate-[-90deg]">
                  <circle cx="48" cy="48" r="44" stroke="white" strokeOpacity="0.1" strokeWidth="1" fill="none" />
                  <motion.circle
                    cx="48" cy="48" r="44" stroke="white" strokeWidth="1" fill="none"
                    initial={{ strokeDasharray: "276 276", strokeDashoffset: 276 }}
                    animate={{ strokeDashoffset: 276 - (276 * loadingProgress) / 100 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-white">
                  {loadingProgress}%
                </div>
              </div>
              <div className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-bold">
                Syncing 192 Hi-Res Frames
              </div>
            </>
          )}
        </div>
      )}

      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center z-0">
        <canvas 
          ref={canvasRef} 
          className="max-w-full max-h-full pointer-events-none"
          style={{ 
            width: '100vw', 
            height: '100vh',
            display: 'block',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* Narrative Overlays - POSITONED RELATIVE TO SCROLL */}
      <div className="absolute top-0 left-0 w-full z-10">
        {/* HERO */}
        <section className="h-screen flex items-center justify-center px-10">
          <motion.div style={{ opacity: heroOpacity }} className="text-center">
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-4">
              ARMAKAT.
            </h1>
            <p className="text-white/50 uppercase tracking-[0.5em] text-xs font-bold">
              Engineering the Future
            </p>
          </motion.div>
        </section>

        {/* FEATURE 1 */}
        <section className="h-screen flex items-center justify-start px-10 md:px-32">
          <motion.div style={{ opacity: feature1Opacity }} className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Hyper-Modular Design.
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed">
              Every detail is meticulously crafted to fit your ecosystem. 
              Pure synergy between hardware and software.
            </p>
          </motion.div>
        </section>

        {/* FEATURE 2 */}
        <section className="h-screen flex items-center justify-end px-10 md:px-32">
          <motion.div style={{ opacity: feature2Opacity }} className="max-w-2xl text-right">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              A Neural Core.
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed">
              Witness the power of unified intelligence. 
              The system evolves with you, anticipating every move.
            </p>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="h-screen flex items-center justify-center px-10">
          <motion.div style={{ opacity: ctaOpacity }} className="text-center">
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-10">
              UNLIMITED <br />POTENTIAL.
            </h2>
            <button className="px-16 py-6 bg-white text-black font-black uppercase text-xs tracking-widest rounded-full hover:bg-neutral-200 transition-colors">
              Pre-Order Now
            </button>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

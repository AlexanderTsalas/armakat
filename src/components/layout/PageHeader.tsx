interface PageHeaderProps {
  title: string;
  subtitle: string;
  label: string;
}

export const PageHeader = ({ title, subtitle, label }: PageHeaderProps) => {
  return (
    <div className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-slate-800 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-slate-700 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <span className="font-mono-label text-indigo-400 mb-4 block animate-in fade-in slide-in-from-bottom-2 duration-700">{label}</span>
        <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          {title}
        </h1>
        <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

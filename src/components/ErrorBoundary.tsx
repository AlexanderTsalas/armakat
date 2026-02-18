import { Component, type ErrorInfo } from 'react';
import type { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', color: '#721c24', background: '#f8d7da', border: '1px solid #f5c6cb', margin: '20px' }}>
          <h1 style={{ marginBottom: '10px' }}>Runtime Error Detected</h1>
          <p style={{ fontWeight: 'bold' }}>{this.state.error?.message}</p>
          <pre style={{ fontSize: '12px', background: '#fff', padding: '10px', overflow: 'auto', maxHeight: '50vh' }}>
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

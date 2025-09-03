'use client';

import { Component, ErrorInfo, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class RedirectErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log the error to an error reporting service
    console.error('Error caught by error boundary:', error, errorInfo);
    
    // Redirect to projects page when an error occurs
    if (typeof window !== 'undefined') {
      window.location.href = '/projects';
    }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback || null;
    }

    return this.props.children;
  }
}

// Client-side wrapper component that uses hooks
export function ClientRedirectErrorBoundary({ children, fallback }: ErrorBoundaryProps) {
  const router = useRouter();
  
  // Handle client-side errors
  if (typeof window !== 'undefined') {
    window.onerror = function(message, source, lineno, colno, error) {
      console.error('Client-side error:', { message, source, lineno, colno, error });
      router.push('/projects');
      return true; // Prevent default error handling
    };
  }
  
  return (
    <RedirectErrorBoundary fallback={fallback}>
      {children}
    </RedirectErrorBoundary>
  );
}
          
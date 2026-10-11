import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import { useTheme } from '../../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
  onOpenResume?: () => void;
  isResumeOpen?: boolean;
}

export default function Layout({ children, onOpenResume, isResumeOpen }: LayoutProps) {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen relative overflow-x-hidden w-full max-w-full flex flex-col selection:bg-blue-500/30 selection:text-[var(--text-primary)] print:bg-white print:min-h-0 ${theme}`}>
      {/* Interactive custom cursor */}
      <CustomCursor />

      {/* Ambient background glow accents adapted to theme */}
      <div className="fixed inset-0 pointer-events-none z-0 ambient-grid opacity-75 print:hidden" />
      
      {theme === 'dark' ? (
        <>
          <div className="fixed top-0 left-1/4 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0 print:hidden" />
          <div className="fixed bottom-1/3 right-1/4 translate-x-1/2 w-[550px] h-[450px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none z-0 print:hidden" />
        </>
      ) : (
        <>
          <div className="fixed top-0 left-1/4 -translate-x-1/2 w-[600px] h-[400px] bg-blue-400/15 rounded-full blur-[140px] pointer-events-none z-0 print:hidden" />
          <div className="fixed bottom-1/3 right-1/4 translate-x-1/2 w-[550px] h-[450px] bg-amber-400/10 rounded-full blur-[160px] pointer-events-none z-0 print:hidden" />
        </>
      )}

      {/* Floating Header */}
      <Navbar onOpenResume={onOpenResume} isHidden={isResumeOpen} />

      {/* Main Content */}
      <main className="relative z-10 flex-1 pt-24 sm:pt-28 md:pt-32 print:p-0 print:pt-0">
        {children}
      </main>

      {/* Footer */}
      <Footer onOpenResume={onOpenResume} />
    </div>
  );
}

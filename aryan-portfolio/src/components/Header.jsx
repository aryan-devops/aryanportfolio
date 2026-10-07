import React from 'react';
import { useTheme } from '../hooks/useTheme';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header" style={headerStyle}>
      <div className="container" style={headerInner}>
        <div style={brandStyle}>Aryan Pandey</div>
        
        <nav style={navStyle}>
          <a href="#projects" style={navLink}>Projects</a>
          <a href="#experience" style={navLink}>Experience</a>
          <a href="#stack" style={navLink}>Stack</a>
          <a href="#research" style={navLink}>Research</a>
          <a href="#contact" style={navLink}>Contact</a>
          
          <button onClick={toggleTheme} style={themeToggle}>
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </nav>
      </div>
    </header>
  );
}

const headerStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 100,
  backgroundColor: 'var(--bg)',
  borderBottom: '1px solid var(--line)',
  padding: '16px 0',
};

const headerInner = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '16px',
};

const brandStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: '20px',
  color: 'var(--ink)',
};

const navStyle = {
  display: 'flex',
  gap: '24px',
  alignItems: 'center',
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--text-label)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
};

const navLink = {
  color: 'var(--muted)',
  transition: 'color 0.2s',
};

const themeToggle = {
  padding: '6px 12px',
  border: '1px solid var(--line)',
  borderRadius: '4px',
  color: 'var(--ink)',
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--text-label)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
};

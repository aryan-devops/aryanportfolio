import React from 'react';
import { content } from '../data/content';
import { useCopy } from '../hooks/useCopy';
import ApiCard from './ApiCard';

export default function Hero() {
  const { copied, copyToClipboard } = useCopy();

  const [firstName, lastName] = content.name.split(' ');

  return (
    <section style={heroStyle}>
      <div className="container" style={innerStyle}>
        
        <div style={contentCol}>
          <div style={pillStyle}>
            <span style={dotStyle}></span>
            Open to internships
          </div>
          
          <h1 style={h1Style}>
            {firstName} <br />
            <span style={{ color: 'var(--accent)' }}>{lastName}</span>
          </h1>
          
          <p style={leadStyle}>{content.summary}</p>
          
          <div style={actionsStyle}>
            <a href="#projects" style={btnPrimary}>See projects</a>
            <button onClick={() => copyToClipboard(content.email)} style={btnSecondary}>
              {copied ? 'Copied' : 'Copy email'}
            </button>
          </div>
          
          <div style={metaStyle}>
            Raipur, Chhattisgarh · MCA, Amity University Raipur, 2027 · 2 papers published
          </div>
        </div>

        <div style={cardCol}>
          <ApiCard />
        </div>

      </div>
    </section>
  );
}

const heroStyle = {
  padding: '120px 0 96px',
  borderBottom: '1px solid var(--line)',
};

const innerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '64px',
  alignItems: 'center',
};

const contentCol = {
  flex: '1 1 500px',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
};

const cardCol = {
  flex: '1 1 400px',
  display: 'flex',
  justifyContent: 'center',
};

const pillStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '6px 12px',
  border: '1px solid var(--ok)',
  borderRadius: '99px',
  color: 'var(--ok)',
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--text-label)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  width: 'fit-content',
};

const dotStyle = {
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  backgroundColor: 'var(--ok)',
};

const h1Style = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--text-h1)',
  lineHeight: '0.9',
  letterSpacing: '-0.02em',
  margin: 0,
};

const leadStyle = {
  fontSize: '18px',
  color: 'var(--muted)',
  maxWidth: '540px',
};

const actionsStyle = {
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap',
};

const btnPrimary = {
  padding: '12px 24px',
  backgroundColor: 'var(--accent)',
  color: 'var(--accent-ink)',
  borderRadius: '4px',
  fontWeight: 500,
  transition: 'opacity 0.2s',
};

const btnSecondary = {
  padding: '12px 24px',
  backgroundColor: 'transparent',
  border: '1px solid var(--line)',
  color: 'var(--ink)',
  borderRadius: '4px',
  fontWeight: 500,
  transition: 'border-color 0.2s',
};

const metaStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--text-label)',
  color: 'var(--muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginTop: '16px',
};

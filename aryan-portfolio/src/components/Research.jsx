import React from 'react';
import Section from './Section';
import { content } from '../data/content';

export default function Research() {
  return (
    <Section id="research" title="Research">
      <div style={listStyle}>
        {content.publications.map((pub, i) => (
          <div key={i} style={itemStyle}>
            <div style={citationMarker}>[{i + 1}]</div>
            <div style={contentStyle}>
              <h3 style={titleStyle}>{pub.title}</h3>
              <div style={metaStyle}>
                {pub.venue} {pub.date && <span style={dotStyle}>·</span>} {pub.date}
              </div>
              <p style={descStyle}>{pub.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const listStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '48px',
};

const itemStyle = {
  display: 'flex',
  gap: '16px',
};

const citationMarker = {
  fontFamily: 'var(--font-mono)',
  color: 'var(--muted)',
  fontSize: '14px',
  marginTop: '4px',
};

const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const titleStyle = {
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: 1.4,
  margin: 0,
};

const metaStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--text-label)',
  color: 'var(--muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const dotStyle = {
  color: 'var(--line)',
};

const descStyle = {
  color: 'var(--ink)',
  marginTop: '8px',
};

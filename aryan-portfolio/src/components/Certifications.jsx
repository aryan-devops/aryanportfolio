import React from 'react';
import Section from './Section';
import { content } from '../data/content';

export default function Certifications() {
  // Split array in half for two columns
  const half = Math.ceil(content.certifications.length / 2);
  const col1 = content.certifications.slice(0, half);
  const col2 = content.certifications.slice(half);

  return (
    <Section id="certifications" title="Certifications">
      <div style={gridStyle}>
        <ul style={listStyle}>
          {col1.map((cert, i) => (
            <li key={i} style={itemStyle}>
              {cert}
            </li>
          ))}
        </ul>
        <ul style={listStyle}>
          {col2.map((cert, i) => (
            <li key={i} style={itemStyle}>
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '32px',
};

const listStyle = {
  flex: '1 1 300px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

const itemStyle = {
  padding: '16px',
  border: '1px solid var(--line)',
  borderRadius: '4px',
  color: 'var(--ink)',
};

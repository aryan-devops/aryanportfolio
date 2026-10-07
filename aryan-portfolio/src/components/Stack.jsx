import React from 'react';
import Section from './Section';
import { content } from '../data/content';

export default function Stack() {
  return (
    <Section id="stack" title="Stack">
      <ul style={listStyle}>
        {content.skills.map((skill, i) => (
          <li key={i} style={itemStyle}>
            <div style={labelCol}>
              <span className="mono-label">{skill.label}</span>
            </div>
            <div style={valCol}>
              {skill.value}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

const listStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
};

const itemStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '24px',
  padding: '24px 0',
  borderBottom: '1px solid var(--line)',
};

const labelCol = {
  flex: '0 0 200px',
};

const valCol = {
  flex: '1 1 300px',
  color: 'var(--ink)',
};

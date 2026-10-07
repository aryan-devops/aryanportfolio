import React, { useState } from 'react';
import { content } from '../data/content';

const Syntax = ({ type, children }) => {
  const colors = {
    key: 'var(--accent)',
    string: 'var(--ok)',
    punctuation: 'var(--muted)',
  };
  return <span style={{ color: colors[type] || 'inherit' }}>{children}</span>;
};

export default function ApiCard() {
  const [activeTab, setActiveTab] = useState('profile');
  const data = content.apiData[activeTab];

  const renderJson = (obj, indent = 1) => {
    if (Array.isArray(obj)) {
      return (
        <>
          <Syntax type="punctuation">[</Syntax>
          {obj.map((item, i) => (
            <div key={i} style={{ paddingLeft: `${indent * 16}px` }}>
              {renderJson(item, indent + 1)}
              {i < obj.length - 1 && <Syntax type="punctuation">,</Syntax>}
            </div>
          ))}
          <div style={{ paddingLeft: `${(indent - 1) * 16}px` }}>
            <Syntax type="punctuation">]</Syntax>
          </div>
        </>
      );
    }
    
    if (typeof obj === 'object' && obj !== null) {
      return (
        <>
          <Syntax type="punctuation">{'{'}</Syntax>
          {Object.entries(obj).map(([key, value], i, arr) => (
            <div key={key} style={{ paddingLeft: `${indent * 16}px` }}>
              <Syntax type="key">"{key}"</Syntax>
              <Syntax type="punctuation">: </Syntax>
              {typeof value === 'string' ? (
                <Syntax type="string">"{value}"</Syntax>
              ) : (
                renderJson(value, indent + 1)
              )}
              {i < arr.length - 1 && <Syntax type="punctuation">,</Syntax>}
            </div>
          ))}
          <div style={{ paddingLeft: `${(indent - 1) * 16}px` }}>
            <Syntax type="punctuation">{'}'}</Syntax>
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle} role="tablist">
        {['profile', 'stack', 'papers'].map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            style={{
              ...tabStyle,
              color: activeTab === tab ? 'var(--ink)' : 'var(--muted)',
              borderBottom: activeTab === tab ? '2px solid var(--accent)' : '2px solid transparent',
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div style={bodyStyle}>
        <pre style={preStyle}>
          {renderJson(data)}
        </pre>
      </div>

      <div style={footerStyle}>
        <span style={{ color: 'var(--ok)' }}>200 OK</span>
        <span>application/json</span>
      </div>
    </div>
  );
}

const cardStyle = {
  background: 'var(--surface)',
  border: '1px solid var(--line)',
  borderRadius: '8px',
  fontFamily: 'var(--font-mono)',
  fontSize: '13px',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '500px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
};

const headerStyle = {
  display: 'flex',
  borderBottom: '1px solid var(--line)',
  padding: '0 16px',
  gap: '16px',
};

const tabStyle = {
  padding: '12px 0',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  fontSize: '12px',
  transition: 'color 0.2s',
};

const bodyStyle = {
  padding: '24px 16px',
  minHeight: '220px', // Prevent height jump
  overflowX: 'auto',
};

const preStyle = {
  margin: 0,
  lineHeight: 1.6,
};

const footerStyle = {
  borderTop: '1px solid var(--line)',
  padding: '8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: 'var(--muted)',
};

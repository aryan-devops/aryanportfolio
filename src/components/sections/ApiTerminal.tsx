import { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Server } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

type TabKey = 'profile' | 'stack' | 'research';

export default function ApiTerminal() {
  const [activeTab, setActiveTab] = useState<TabKey>('profile');
  const [copied, setCopied] = useState(false);

  const rawData = portfolioData.apiData[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(rawData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderHighlightedJson = (val: unknown, depth = 1): ReactNode => {
    if (Array.isArray(val)) {
      return (
        <span>
          <span className="text-gray-500">[</span>
          <div className="pl-3 sm:pl-4">
            {val.map((item, idx) => (
              <div key={idx}>
                {renderHighlightedJson(item, depth + 1)}
                {idx < val.length - 1 && <span className="text-gray-500">,</span>}
              </div>
            ))}
          </div>
          <span className="text-gray-500">]</span>
        </span>
      );
    }

    if (typeof val === 'object' && val !== null) {
      const entries = Object.entries(val);
      return (
        <span>
          <span className="text-gray-500">{'{'}</span>
          <div className="pl-3 sm:pl-4">
            {entries.map(([k, v], idx) => (
              <div key={k} className="leading-relaxed">
                <span className="text-blue-400 font-mono-code font-medium">"{k}"</span>
                <span className="text-gray-500">: </span>
                {typeof v === 'string' ? (
                  <span className="text-emerald-400 font-mono-code">"{v}"</span>
                ) : (
                  renderHighlightedJson(v, depth + 1)
                )}
                {idx < entries.length - 1 && <span className="text-gray-500">,</span>}
              </div>
            ))}
          </div>
          <span className="text-gray-500">{'}'}</span>
        </span>
      );
    }

    if (typeof val === 'string') {
      return <span className="text-emerald-400 font-mono-code">"{val}"</span>;
    }

    return <span className="text-purple-400 font-mono-code">{String(val)}</span>;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      id="api-inspector"
      className="bento-card col-span-4 lg:col-span-2 row-span-2 flex flex-col justify-between"
    >
      <div>
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[var(--border-subtle)] mb-3 sm:mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono-code text-[var(--text-secondary)]">
              <Server className="w-3.5 h-3.5 text-blue-500" />
              <span>api.aryan.dev</span>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-[11px] font-mono-code px-2.5 py-1 rounded-md bg-[var(--pill-bg)] hover:bg-[var(--pill-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all"
            title="Copy JSON to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-500" />
                <span className="text-emerald-500 font-semibold">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy JSON</span>
              </>
            )}
          </button>
        </div>

        {/* Endpoint path and interactive tabs */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3 sm:mb-4">
          <div className="flex items-center gap-1.5 font-mono-code text-xs bg-[var(--pill-bg)] px-2.5 py-1 rounded-lg border border-[var(--border-subtle)]">
            <span className="text-blue-500 font-bold">GET</span>
            <span className="text-[var(--text-muted)]">/v1/developer/</span>
            <span className="text-[var(--text-primary)] font-semibold">{activeTab}</span>
          </div>

          <div className="flex items-center gap-1 bg-[var(--pill-bg)] p-1 rounded-lg border border-[var(--border-subtle)]">
            {(['profile', 'stack', 'research'] as TabKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs px-2.5 py-1 rounded-md capitalize font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-blue-600/20 text-blue-500 font-bold border border-blue-500/30 shadow-xs'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--pill-border)]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Code Output Window */}
        <div className="bg-[#05070c] text-gray-200 rounded-xl p-3.5 sm:p-4 border border-[var(--border-subtle)] overflow-x-auto max-h-[320px] sm:max-h-[360px] text-xs font-mono-code shadow-inner">
          <pre className="text-gray-300">
            {renderHighlightedJson(rawData)}
          </pre>
        </div>
      </div>

      {/* Terminal Footer with 200 OK status */}
      <div className="mt-3 sm:mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono-code text-[var(--text-muted)]">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-emerald-500 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            200 OK
          </span>
          <span>•</span>
          <span>14ms</span>
        </div>
        <span>application/json</span>
      </div>
    </motion.div>
  );
}

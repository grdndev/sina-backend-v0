import React from 'react';
import labels from '../../locales/labels.json';
import GlassCard from '../atoms/GlassCard';

/**
 * EarningsChart - Placeholder for high-end earnings visualization.
 */
const EarningsChart = ({ data = [], lang = 'fr' }) => {
    const t = labels[lang].earnings;

    return (
        <div className="earnings-container">
            <header className="earnings-header">
                <h2 style={{ fontSize: '24px', fontWeight: '800' }}>{t.title}</h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>{t.stats_title}</p>
            </header>

            <GlassCard className="chart-card">
                <div className="chart-placeholder">
                    {/* Conceptual Chart visualization using CSS */}
                    <div className="chart-bars">
                        {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                            <div
                                key={i}
                                className="chart-bar"
                                style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                            ></div>
                        ))}
                    </div>
                    <div className="chart-labels">
                        <span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span>
                    </div>
                </div>
            </GlassCard>

            <div className="threshold-alert">
                <p>⚠️ {t.threshold_notice}</p>
            </div>

            <style jsx>{`
        .earnings-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .chart-card {
          height: 240px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .chart-bars {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          height: 140px;
          padding: 0 16px;
        }
        .chart-bar {
          width: 32px;
          background: linear-gradient(180deg, var(--color-primary), var(--color-secondary));
          border-radius: 6px 6px 0 0;
          opacity: 0.8;
          transition: var(--transition-smooth);
        }
        .chart-bar:hover {
          opacity: 1;
          filter: brightness(1.2);
          cursor: pointer;
        }
        .chart-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 16px;
          color: var(--color-text-muted);
          font-size: 11px;
          padding: 0 8px;
        }
        .threshold-alert {
          padding: 12px;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: var(--radius-md);
          color: #f59e0b;
          font-size: 13px;
          text-align: center;
        }
      `}</style>
        </div>
    );
};

export default EarningsChart;

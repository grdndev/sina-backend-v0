import React from 'react';
import GlassCard from '../atoms/GlassCard';
import labels from '../../locales/labels.json';

/**
 * AdminCockpit - Real-time finance and mode switcher for Admins.
 */
const AdminCockpit = ({ stats = { margin: 52, revenue: 1450, cloudXp: 12000 }, lang = 'fr' }) => {
    return (
        <div className="admin-cockpit">
            <header className="ios-header">
                <span className="ios-date">Cockpit Admin</span>
                <h1>Finance & Pilotage</h1>
            </header>

            <main className="ios-content">
                <GlassCard className="margin-card apple-shadow">
                    <div className="margin-header">
                        <span className="label">Marge Net Platform</span>
                        <span className={`margin-value ${stats.margin < 48 ? 'critical' : 'healthy'}`}>
                            {stats.margin}%
                        </span>
                    </div>
                    <div className="margin-progress">
                        <div className="progress-fill" style={{ width: `${stats.margin}%` }}></div>
                        <div className="target-line" style={{ left: '48%' }}></div>
                    </div>
                    <p className="margin-desc">Target: 48.0% (Zero-Debt Safety)</p>
                </GlassCard>

                <div className="grid-px">
                    <GlassCard className="card-stat">
                        <span className="label">Revenue CA</span>
                        <span className="val">{stats.revenue.toFixed(2)} $</span>
                    </GlassCard>
                    <GlassCard className="card-stat">
                        <span className="label">Cloud XP Vol.</span>
                        <span className="val">{stats.cloudXp} ☁️</span>
                    </GlassCard>
                </div>

                <section className="mode-switcher-section">
                    <h3>Business Modes</h3>
                    <div className="mode-buttons">
                        {['NORMAL', 'SMART', 'SHIELD', 'CRITICAL'].map(m => (
                            <button key={m} className={`mode-btn ${m.toLowerCase()}`}>{m}</button>
                        ))}
                    </div>
                </section>

                <section className="cloud-action">
                    <button className="cloud-btn-action glass-effect apple-shadow">
                        Redistribuer Cloud XP Surplus
                    </button>
                </section>
            </main>

            <style jsx>{`
        .admin-cockpit {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 32px;
          background: var(--color-background);
          min-height: 100vh;
        }
        .ios-header h1 {
          font-size: 34px;
          font-weight: 800;
          letter-spacing: -1px;
        }
        .ios-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .margin-card {
          padding: 24px;
        }
        .margin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .margin-header .label {
          font-weight: 700;
          color: var(--color-text-muted);
          font-size: 15px;
        }
        .margin-value {
          font-size: 28px;
          font-weight: 800;
        }
        .margin-value.healthy { color: var(--color-open); }
        .margin-value.critical { color: var(--color-critical); }

        .margin-progress {
          height: 8px;
          background: rgba(0,0,0,0.05);
          border-radius: 4px;
          position: relative;
          margin-bottom: 12px;
        }
        .progress-fill {
          height: 100%;
          background: var(--color-primary);
          border-radius: 4px;
        }
        .target-line {
          position: absolute;
          top: -4px;
          height: 16px;
          width: 2px;
          background: var(--color-text);
        }
        .margin-desc {
          font-size: 12px;
          color: var(--color-text-muted);
        }

        .grid-px {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .card-stat {
          padding: 20px;
        }
        .card-stat .label { font-size: 12px; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase; }
        .card-stat .val { font-size: 22px; font-weight: 800; margin-top: 4px; display: block; }

        .mode-switcher-section h3 {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .mode-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .mode-btn {
          padding: 16px;
          border: none;
          border-radius: var(--radius-md);
          font-weight: 800;
          font-size: 14px;
          cursor: pointer;
          background: white;
          box-shadow: var(--shadow-soft);
          transition: var(--transition-smooth);
        }
        .mode-btn:active { transform: scale(0.95); }
        .mode-btn.normal { border-left: 4px solid var(--color-open); }
        .mode-btn.smart { border-left: 4px solid var(--color-smart); }
        .mode-btn.shield { border-left: 4px solid var(--color-shield); }
        .mode-btn.critical { border-left: 4px solid var(--color-critical); }

        .cloud-action {
          margin-top: 24px;
        }
        .cloud-btn-action {
          width: 100%;
          padding: 20px;
          border: none;
          background: white;
          color: var(--color-primary);
          font-weight: 800;
          font-size: 16px;
          border-radius: var(--radius-lg);
          cursor: pointer;
        }
      `}</style>
        </div>
    );
};

export default AdminCockpit;

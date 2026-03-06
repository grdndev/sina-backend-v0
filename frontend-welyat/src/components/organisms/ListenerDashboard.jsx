import React, { useState } from 'react';
import labels from '../../locales/labels.json';
import GlassCard from '../atoms/GlassCard';
import GlowButton from '../atoms/GlowButton';
import MomentumCard from '../molecules/MomentumCard';

/**
 * ListenerDashboard - High-end dashboard for écoutants.
 */
const ListenerDashboard = ({
  user = { balance: 124.50, xp: 450, isAvailable: true },
  lang = 'fr',
  onShowProfile
}) => {
  const [isAvailable, setIsAvailable] = useState(user.isAvailable);
  const t = labels[lang].dashboard;

  return (
    <div className="listener-dashboard">
      <header className="ios-header-refined">
        <div className="header-left">
          <button className="profile-bubble apple-shadow" onClick={onShowProfile}>
            {user.email ? user.email[0].toUpperCase() : 'E'}
          </button>
        </div>
        <div className="header-right">
          <span className="ios-date">Mardi 24 Février</span>
          <h1>Écoutant</h1>
        </div>
      </header>

      <main className="ios-content">
        <section className="status-card glass-effect apple-shadow">
          <div className="status-info">
            <span className="status-label">Statut Actuel</span>
            <div className="status-indicator">
              <span className={`status-dot ${isAvailable ? 'available' : ''}`}></span>
              <span className="status-text">{isAvailable ? 'En ligne' : 'Hors-ligne'}</span>
            </div>
          </div>
          <div className="ios-switch-container">
            <label className="ios-switch">
              <input
                type="checkbox"
                checked={isAvailable}
                onChange={() => setIsAvailable(!isAvailable)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </section>

        <MomentumCard paidMinutes={12} ratePerMin={0.22} />

        <div className="grid-2">
          <GlassCard className="mini-stat premium-stat">
            <span className="stat-label">Solde</span>
            <span className="stat-value">{user.balance.toFixed(2)} <span className="small-currency">$</span></span>
          </GlassCard>
          <GlassCard className="mini-stat premium-stat">
            <span className="stat-label">Cloud XP</span>
            <span className="stat-value">{user.xp} <span className="small-xp">XP</span></span>
          </GlassCard>
        </div>

        <section className="action-section">
          <button className="premium-emergency-btn apple-shadow">
            <span className="btn-icon">🛡️</span>
            Aide d'Urgence (911)
          </button>
        </section>
      </main>

      <style jsx>{`
        .listener-dashboard {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          background: var(--color-background);
          min-height: 100vh;
        }
        .ios-header-refined {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 8px;
            padding-top: 10px;
        }
        .profile-bubble {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: white;
            border: none;
            font-weight: 800;
            color: var(--color-primary);
            font-size: 18px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .ios-date {
            text-transform: uppercase;
            font-size: 13px;
            font-weight: 700;
            color: var(--color-text-muted);
            display: block;
            text-align: right;
        }
        .ios-header-refined h1 {
            font-size: 34px;
            font-weight: 800;
            letter-spacing: -1px;
            margin-top: 4px;
            text-align: right;
        }
        .ios-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .status-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-radius: var(--radius-lg);
          background: white;
        }
        .status-info {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        .status-label {
            font-size: 12px;
            font-weight: 700;
            color: var(--color-text-muted);
            text-transform: uppercase;
        }
        .status-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .status-text {
            font-size: 17px;
            font-weight: 700;
        }
        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-text-muted);
          box-shadow: 0 0 5px rgba(0,0,0,0.1);
        }
        .status-dot.available {
          background: var(--color-open);
          box-shadow: 0 0 10px rgba(52, 199, 89, 0.4);
        }
        
        /* IOS Switch */
        .ios-switch {
          position: relative;
          display: inline-block;
          width: 51px;
          height: 31px;
        }
        .ios-switch input { opacity: 0; width: 0; height: 0; }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: #E9E9EB;
          transition: .4s;
          border-radius: 34px;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 27px; width: 27px;
          left: 2px; bottom: 2px;
          background-color: white;
          transition: .4s;
          border-radius: 50%;
          box-shadow: 0 3px 8px rgba(0,0,0,0.15);
        }
        input:checked + .slider { background-color: var(--color-open); }
        input:checked + .slider:before { transform: translateX(20px); }

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .premium-stat {
          padding: 20px;
          background: white !important;
          border: none !important;
        }
        .stat-label {
          font-size: 11px;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
        }
        .stat-value {
          font-size: 24px;
          font-weight: 900;
          margin-top: 4px;
        }
        .small-currency, .small-xp {
            font-size: 14px;
            color: var(--color-primary);
            opacity: 0.8;
            margin-left: 2px;
        }
        .premium-emergency-btn {
            width: 100%;
            height: 64px;
            border-radius: 20px;
            border: none;
            background: white;
            color: var(--color-critical);
            font-size: 17px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            cursor: pointer;
            transition: all 0.2s;
            border: 2px solid rgba(255, 59, 48, 0.1);
        }
        .premium-emergency-btn:active {
            transform: scale(0.98);
            background: #FFF5F5;
        }
        .btn-icon {
            font-size: 20px;
        }
      `}</style>
    </div>
  );
};

export default ListenerDashboard;

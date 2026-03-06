import React, { useState, useEffect } from 'react';
import labels from '../../locales/labels.json';
import GlassCard from '../atoms/GlassCard';
import GlowButton from '../atoms/GlowButton';

/**
 * ActiveCallView - Real-time call interface.
 */
const ActiveCallView = ({
  mode = 'OPEN',
  startTime = Date.now(),
  onEndCall,
  onEmergency,
  lang = 'fr'
}) => {
  const t = labels[lang].call;
  const modeLabel = labels[lang].modes[mode];
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  const formatTime = (sec) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="active-call-container">
      <div className="mode-badge-container">
        <span className={`mode-badge ${mode.toLowerCase()}`}>
          {modeLabel}
        </span>
      </div>

      <div className="call-visual-center">
        <div className="timer-ring">
          <div className="inner-timer glass-effect">
            <span className="timer-label">{t.timer}</span>
            <h1 className="timer-value">{formatTime(seconds)}</h1>
          </div>
        </div>
      </div>

      <div className="call-actions">
        <button className="premium-emergency-btn apple-shadow pulse-red" onClick={onEmergency}>
          <span className="btn-icon">🚨</span>
          Aide d'Urgence (911)
        </button>

        <GlowButton
          variant="secondary"
          onClick={onEndCall}
          style={{ width: '100%', height: '56px', borderRadius: '16px' }}
        >
          {t.end_call}
        </GlowButton>
      </div>

      <style jsx>{`
        .active-call-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
          align-items: center;
          padding: 40px 24px;
          min-height: 80vh;
          justify-content: center;
        }
        .mode-badge-container {
          margin-bottom: 20px;
        }
        .mode-badge {
          padding: 8px 20px;
          border-radius: var(--radius-full);
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: var(--shadow-soft);
        }
        .mode-badge.open { background: var(--color-open); color: white; }
        .mode-badge.smart { background: var(--color-smart); color: white; }
        .mode-badge.shield { background: var(--color-shield); color: white; }
        .mode-badge.critical { background: var(--color-critical); color: white; }

        .call-visual-center {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .timer-ring {
            width: 280px;
            height: 280px;
            border-radius: 50%;
            background: linear-gradient(135deg, rgba(0,122,255,0.05) 0%, rgba(0,122,255,0) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(0,122,255,0.1);
        }
        .inner-timer {
          width: 240px;
          height: 240px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: white;
          box-shadow: var(--shadow-medium);
        }
        .timer-label {
          color: var(--color-text-muted);
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .timer-value {
          font-size: 56px;
          font-weight: 900;
          font-variant-numeric: tabular-nums;
          margin-top: 4px;
          letter-spacing: -2px;
          color: var(--color-text);
        }
        .call-actions {
          width: 100%;
          max-width: 320px;
          display: flex;
          flex-direction: column;
          gap: 16px;
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
        }
        .btn-icon {
            font-size: 20px;
        }
        @keyframes pulse-red {
            0% { box-shadow: 0 0 0 0 rgba(255, 59, 48, 0.2); }
            70% { box-shadow: 0 0 0 15px rgba(255, 59, 48, 0); }
            100% { box-shadow: 0 0 0 0 rgba(255, 59, 48, 0); }
        }
        .pulse-red {
            animation: pulse-red 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default ActiveCallView;

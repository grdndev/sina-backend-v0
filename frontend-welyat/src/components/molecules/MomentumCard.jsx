import React from 'react';
import GlassCard from '../atoms/GlassCard';

/**
 * MomentumCard - Apple Health style projection card.
 * Shows income projection if > 5min paid today.
 */
const MomentumCard = ({ paidMinutes = 0, ratePerMin = 0.22, lang = 'fr' }) => {
    const isEligible = paidMinutes >= 5;
    const projectedMonthly = (paidMinutes * ratePerMin * 30).toFixed(2);

    return (
        <GlassCard className="momentum-card">
            <div className="momentum-header">
                <span className="momentum-icon">📈</span>
                <span className="momentum-title">Today's Momentum</span>
            </div>

            {isEligible ? (
                <div className="momentum-content">
                    <div className="projection-value">
                        <span className="currency">$</span>
                        <span className="amount">{projectedMonthly}</span>
                        <span className="period">/mo</span>
                    </div>
                    <p className="momentum-desc">Projection based on your current activity.</p>
                    <div className="momentum-progress-bg">
                        <div className="momentum-progress-fill" style={{ width: '70%' }}></div>
                    </div>
                </div>
            ) : (
                <div className="momentum-content empty">
                    <p>Complete 5 mins of paid calls to see your monthly projection.</p>
                </div>
            )}

            <style jsx>{`
        .momentum-card {
          padding: 20px;
          color: var(--color-text);
        }
        .momentum-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .momentum-icon {
          font-size: 20px;
        }
        .momentum-title {
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--color-text-muted);
        }
        .projection-value {
          display: flex;
          align-items: baseline;
          margin-bottom: 4px;
        }
        .currency {
          font-size: 24px;
          font-weight: 600;
          color: var(--color-primary);
        }
        .amount {
          font-size: 40px;
          font-weight: 800;
          letter-spacing: -1px;
        }
        .period {
          font-size: 18px;
          color: var(--color-text-muted);
          margin-left: 4px;
        }
        .momentum-desc {
          font-size: 13px;
          color: var(--color-text-muted);
          margin-bottom: 12px;
        }
        .momentum-progress-bg {
          height: 6px;
          background: rgba(0,0,0,0.05);
          border-radius: 3px;
          overflow: hidden;
        }
        .momentum-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
          border-radius: 3px;
        }
        .empty p {
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.4;
        }
      `}</style>
        </GlassCard>
    );
};

export default MomentumCard;

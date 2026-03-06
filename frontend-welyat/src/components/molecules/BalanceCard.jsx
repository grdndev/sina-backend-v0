import React from 'react';
import labels from '../../locales/labels.json';
import theme from '../../theme/theme_config.json';
import GlassCard from '../atoms/GlassCard';
import GlowButton from '../atoms/GlowButton';

/**
 * BalanceCard - Molecule showing user balance and calls to action.
 */
const BalanceCard = ({ balance = 0, onWithdraw, currency = '$', lang = 'fr' }) => {
    const t = labels[lang].dashboard;

    return (
        <div className="balance-card apple-shadow">
            <div className="balance-info">
                <span className="balance-label">{t.balance}</span>
                <h2 className="balance-amount">
                    {balance.toFixed(2)} <span className="currency">{currency}</span>
                </h2>
            </div>
            <button
                className={`withdraw-btn ${balance < 10 ? 'disabled' : ''}`}
                onClick={onWithdraw}
                disabled={balance < 10}
            >
                {t.withdraw}
            </button>

            <style jsx>{`
                .balance-card {
                    background: linear-gradient(135deg, #FFFFFF 0%, #F8F9FF 100%);
                    padding: 24px;
                    border-radius: 28px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    position: relative;
                    overflow: hidden;
                    border: 1px solid rgba(0,0,0,0.03);
                }
                .balance-card::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    right: -20%;
                    width: 200px;
                    height: 200px;
                    background: radial-gradient(circle, rgba(0,122,255,0.05) 0%, rgba(255,255,255,0) 70%);
                    pointer-events: none;
                }
                .balance-label {
                    color: var(--color-text-muted);
                    font-size: 13px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .balance-amount {
                    font-size: 44px;
                    font-weight: 900;
                    letter-spacing: -1.5px;
                    margin-top: 4px;
                    color: var(--color-text);
                }
                .currency {
                    font-size: 24px;
                    color: var(--color-primary);
                    vertical-align: super;
                    margin-left: 2px;
                }
                .withdraw-btn {
                    background: rgba(0, 122, 255, 0.1);
                    border: none;
                    color: var(--color-primary);
                    padding: 14px;
                    border-radius: 16px;
                    font-weight: 700;
                    font-size: 16px;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .withdraw-btn:hover:not(.disabled) {
                    background: var(--color-primary);
                    color: white;
                }
                .withdraw-btn.disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    background: rgba(0,0,0,0.05);
                    color: var(--color-text-muted);
                }
            `}</style>
        </div>
    );
};

export default BalanceCard;

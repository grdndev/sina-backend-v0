import React, { useState } from 'react';
import '../theme/base.css';
import labels from '../locales/labels.json';
import BalanceCard from '../components/molecules/BalanceCard';
import GlowButton from '../components/atoms/GlowButton';
import MatchSpinner from '../components/molecules/MatchSpinner';
import ActiveCallView from '../components/organisms/ActiveCallView';
import ListenerDashboard from '../components/organisms/ListenerDashboard';
import AdminCockpit from '../components/organisms/AdminCockpit';
import AuthPage from './AuthPage';

/**
 * Dashboard - Global Router for WELYAT V0 Demo.
 */
const Dashboard = ({ lang = 'fr' }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState('TALKER'); // TALKER, LISTENER, ADMIN
    const [view, setView] = useState('MAIN'); // MAIN, MATCHING, ACTIVE_CALL
    const [showProfile, setShowProfile] = useState(false);
    const t = labels[lang].dashboard;

    const handleLogin = (userData) => {
        setUser(userData);
    };

    const handleStartCall = () => {
        setView('MATCHING');
        setTimeout(() => {
            setView('ACTIVE_CALL');
        }, 3000);
    };

    if (!user) {
        return <AuthPage onLogin={handleLogin} />;
    }

    const renderProfileModal = () => (
        <div className="ios-modal-overlay" onClick={() => setShowProfile(false)}>
            <div className="ios-modal glass-effect" onClick={e => e.stopPropagation()}>
                <header className="modal-header">
                    <button className="close-btn" onClick={() => setShowProfile(false)}>Terminer</button>
                    <h2>Profil</h2>
                    <div style={{ width: 60 }}></div>
                </header>
                <div className="modal-content">
                    <div className="profile-hero">
                        <div className="profile-avatar">J</div>
                        <h3>{user.email}</h3>
                        <p className="role-badge">{role}</p>
                    </div>

                    <section className="modal-section">
                        <h4>Historique des Appels</h4>
                        <div className="history-list">
                            <div className="history-item">
                                <div className="item-left">
                                    <span className="item-icon">📞</span>
                                    <div>
                                        <p className="item-title">Appel avec un Écoutant</p>
                                        <p className="item-date">Hier, 18:42</p>
                                    </div>
                                </div>
                                <span className="item-xp">+45 XP</span>
                            </div>
                            <div className="history-item">
                                <div className="item-left">
                                    <span className="item-icon">📞</span>
                                    <div>
                                        <p className="item-title">Appel avec un Écoutant</p>
                                        <p className="item-date">24 Février, 10:15</p>
                                    </div>
                                </div>
                                <span className="item-xp">+120 XP</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <style jsx>{`
                .ios-modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0,0,0,0.4);
                    backdrop-filter: blur(5px);
                    z-index: 2000;
                    display: flex;
                    align-items: flex-end;
                }
                .ios-modal {
                    width: 100%;
                    background: var(--color-background);
                    border-radius: 30px 30px 0 0;
                    padding-bottom: 40px;
                    animation: slideUp 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
                }
                @keyframes slideUp {
                    from { transform: translateY(100%); }
                    to { transform: translateY(0); }
                }
                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 16px 20px;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }
                .close-btn {
                    background: none;
                    border: none;
                    color: var(--color-primary);
                    font-weight: 600;
                    font-size: 17px;
                    cursor: pointer;
                }
                .modal-header h2 {
                    font-size: 17px;
                    font-weight: 700;
                }
                .modal-content {
                    padding: 32px 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }
                .profile-hero {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                }
                .profile-avatar {
                    width: 80px;
                    height: 80px;
                    background: var(--color-primary);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 32px;
                    font-weight: 800;
                    border-radius: 50%;
                }
                .role-badge {
                    background: rgba(0,0,0,0.05);
                    padding: 4px 12px;
                    border-radius: var(--radius-full);
                    font-size: 12px;
                    font-weight: 700;
                    color: var(--color-text-muted);
                    text-transform: uppercase;
                }
                .modal-section h4 {
                    font-size: 20px;
                    font-weight: 800;
                    margin-bottom: 16px;
                }
                .history-list {
                    background: white;
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    box-shadow: var(--shadow-soft);
                }
                .history-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 16px;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }
                .item-left {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .item-icon { font-size: 20px; }
                .item-title { font-weight: 600; font-size: 15px; }
                .item-date { font-size: 13px; color: var(--color-text-muted); }
                .item-xp { font-weight: 700; color: var(--color-open); font-size: 15px; }
            `}</style>
        </div>
    );

    const renderContent = () => {
        if (view === 'MATCHING') return <div className="center-view"><MatchSpinner lang={lang} /></div>;
        if (view === 'ACTIVE_CALL') return (
            <ActiveCallView
                mode="SMART"
                onEndCall={() => setView('MAIN')}
                onEmergency={() => alert('Emergency 911 Triggered')}
                lang={lang}
            />
        );

        switch (role) {
            case 'LISTENER': return <ListenerDashboard lang={lang} user={{ ...user, balance: 124.50, xp: 450, isAvailable: true }} onShowProfile={() => setShowProfile(true)} />;
            case 'ADMIN': return <AdminCockpit lang={lang} />;
            default: return (
                <div className="page-container">
                    <header className="ios-header-refined">
                        <div className="header-left">
                            <button className="profile-bubble apple-shadow" onClick={() => setShowProfile(true)}>
                                {user.email[0].toUpperCase()}
                            </button>
                        </div>
                        <div className="header-right">
                            <span className="ios-date">Mardi 24 Février</span>
                            <h1>{t.title}</h1>
                        </div>
                    </header>

                    <main className="dashboard-content">
                        <BalanceCard
                            balance={45.30}
                            onWithdraw={() => console.log('Withdraw')}
                            lang={lang}
                        />
                        <div className="cta-section">
                            <GlowButton
                                variant="primary"
                                pulse={true}
                                onClick={handleStartCall}
                                style={{ width: '100%', height: '80px', fontSize: '18px', borderRadius: '20px' }}
                            >
                                {t.call_button}
                            </GlowButton>
                        </div>

                        <div className="safety-disclaimer mt-auto pt-8 text-center pb-4">
                            <p className="text-[11px] text-[#8e8e93] leading-relaxed max-w-xs mx-auto opacity-60">
                                WELYAT is for loneliness, not for medicine.
                                If you are in danger, please call 911 or localized emergency services.
                            </p>
                        </div>
                    </main>
                </div>
            );
        }
    };

    return (
        <div className="welyat-app">
            <div className="scrollable-content">
                {renderContent()}
            </div>

            {showProfile && renderProfileModal()}

            {view === 'MAIN' && (
                <nav className="ios-tab-bar glass-effect">
                    <button onClick={() => setRole('TALKER')} className={role === 'TALKER' ? 'active' : ''}>
                        <span className="tab-icon">👤</span>
                        <span className="tab-label">Talker</span>
                    </button>
                    <button onClick={() => setRole('LISTENER')} className={role === 'LISTENER' ? 'active' : ''}>
                        <span className="tab-icon">🎧</span>
                        <span className="tab-label">Listener</span>
                    </button>
                    <button onClick={() => setRole('ADMIN')} className={role === 'ADMIN' ? 'active' : ''}>
                        <span className="tab-icon">⚙️</span>
                        <span className="tab-label">Admin</span>
                    </button>
                </nav>
            )}

            <style jsx>{`
                .welyat-app {
                    background: var(--color-background);
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }
                .scrollable-content {
                    flex: 1;
                    padding-bottom: 90px;
                }
                .ios-tab-bar {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 84px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    padding-bottom: 20px;
                    z-index: 1000;
                    border-top: 1px solid rgba(0,0,0,0.05);
                    background-color: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                }
                .ios-tab-bar button {
                    background: none;
                    border: none;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                    color: var(--color-text-muted);
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .ios-tab-bar button.active {
                    color: var(--color-primary);
                }
                .tab-icon {
                    font-size: 24px;
                }
                .tab-label {
                    font-size: 10px;
                    font-weight: 600;
                    text-transform: uppercase;
                }
                .page-container {
                    padding: 24px;
                    max-width: 600px;
                    margin: 0 auto;
                }
                .ios-header-refined {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 32px;
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
                .dashboard-content {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }
                .center-view {
                    min-height: 80vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </div>
    );
};

export default Dashboard;

import React, { useState } from 'react';
import '../theme/base.css';
import GlassCard from '../components/atoms/GlassCard';
import GlowButton from '../components/atoms/GlowButton';

/**
 * AuthPage - Apple-style Login/Signup interface.
 */
const AuthPage = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, logic for API auth would be here
    onLogin({ email: formData.email, role: 'TALKER' });
  };

  return (
    <div className="auth-container">
      <div className="mesh-background">
        <div className="mesh-sphere sphere-1"></div>
        <div className="mesh-sphere sphere-2"></div>
        <div className="mesh-sphere sphere-3"></div>
      </div>

      <div className="auth-branding">
        <div className="welyat-logo-large glass-effect apple-shadow">
          <span className="logo-letter">W</span>
        </div>
        <h1 className="ios-title">WELYAT</h1>
        <p className="ios-subtitle">For loneliness, not for medicine.</p>
      </div>

      <GlassCard className="auth-card apple-shadow premium-glass">
        <header className="auth-header">
          <h2>{isLogin ? 'Authentification' : 'Créer un compte'}</h2>
          <p className="subtitle-fade">{isLogin ? 'Connectez-vous pour continuer' : 'Rejoignez la communauté Welyat'}</p>
        </header>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="ios-input-group glass-input-container">
            <div className="input-wrapper">
              <span className="input-icon">✉️</span>
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="input-wrapper">
              <span className="input-icon">🔒</span>
              <input
                type="password"
                placeholder="Mot de passe"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          <button type="submit" className="premium-login-btn pulse-primary">
            {isLogin ? 'Se connecter' : 'S\'inscrire'}
          </button>
        </form>

        <footer className="auth-footer">
          <button className="ios-link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Pas encore de compte ? S\'inscrire' : 'Déjà inscrit ? Se connecter'}
          </button>
        </footer>
      </GlassCard>

      <div className="medical-disclaimer-bottom">
        WELYAT is an app for social support. <br />
        In case of emergency, call 112 or 911 immediately.
      </div>

      <style jsx>{`
        .auth-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
          gap: 40px;
          position: relative;
        }
        .auth-branding {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          z-index: 1;
        }
        .welyat-logo-large {
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 22px;
          background: white;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 122, 255, 0.2);
        }
        .logo-letter {
          font-size: 52px;
          font-weight: 900;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .ios-title {
          font-size: 38px;
          font-weight: 800;
          letter-spacing: -1.5px;
          background: linear-gradient(180deg, #1C1C1E 0%, #48484A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .ios-subtitle {
          color: var(--color-text-muted);
          font-size: 16px;
          font-weight: 500;
          letter-spacing: -0.2px;
        }
        .auth-card {
          width: 100%;
          max-width: 400px;
          padding: 40px;
          z-index: 1;
        }
        .auth-header {
          margin-bottom: 32px;
          text-align: center;
        }
        .auth-header h2 {
          font-size: 26px;
          font-weight: 800;
          margin-bottom: 8px;
          letter-spacing: -0.5px;
        }
        .subtitle-fade {
          color: var(--color-text-muted);
          font-size: 15px;
          font-weight: 400;
        }
        .glass-input-container {
          background: rgba(0, 0, 0, 0.04);
          border-radius: 14px;
          border: 1px solid rgba(0, 0, 0, 0.02);
          margin-bottom: 24px;
        }
        .input-wrapper {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          gap: 12px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        .input-wrapper:last-child {
          border-bottom: none;
        }
        .input-icon {
          font-size: 18px;
          opacity: 0.6;
        }
        .input-wrapper input {
          flex: 1;
          border: none;
          background: transparent;
          padding: 8px 0;
          font-size: 17px;
          outline: none;
          color: var(--color-text);
        }
        .premium-login-btn {
          width: 100%;
          height: 56px;
          border: none;
          border-radius: 14px;
          background: linear-gradient(180deg, var(--color-primary), #0056b3);
          color: white;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(0, 122, 255, 0.3);
        }
        .premium-login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 122, 255, 0.4);
        }
        .premium-login-btn:active {
          transform: scale(0.97);
        }
        .auth-footer {
          margin-top: 32px;
          text-align: center;
        }
        .ios-link {
          background: none;
          border: none;
          color: var(--color-primary);
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .ios-link:hover {
          opacity: 0.7;
        }
        .medical-disclaimer-bottom {
          text-align: center;
          font-size: 12px;
          color: var(--color-text-muted);
          line-height: 1.6;
          max-width: 340px;
          margin-top: auto;
          padding-bottom: 24px;
        }
      `}</style>
    </div>
  );
};

export default AuthPage;

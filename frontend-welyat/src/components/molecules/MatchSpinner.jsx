import React from 'react';
import './MatchSpinner.css';
import labels from '../../locales/labels.json';

/**
 * MatchSpinner - High-end animated spinner with progressive feedback.
 */
const MatchSpinner = ({ lang = 'fr', statusText }) => {
    const t = labels[lang].matching;

    return (
        <div className="match-spinner-container">
            <div className="spinner-outer">
                <div className="spinner-inner"></div>
                <div className="spinner-core"></div>
            </div>
            <div className="spinner-text">
                <h3>{statusText || t.status}</h3>
                <p>{t.neutral_text}</p>
            </div>
        </div>
    );
};

export default MatchSpinner;

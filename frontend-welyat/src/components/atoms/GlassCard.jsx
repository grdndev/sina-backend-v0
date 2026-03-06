import React from 'react';
import './GlassCard.css';

/**
 * GlassCard - Organic container with kristall borders and heavy blur.
 */
const GlassCard = ({ children, className = '', padding = '24px' }) => {
    return (
        <div
            className={`glass-card glass-effect cristal-border ${className}`}
            style={{ padding }}
        >
            {children}
        </div>
    );
};

export default GlassCard;

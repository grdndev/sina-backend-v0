import React from 'react';
import './GlowButton.css';

/**
 * GlowButton - Premium button with pulse glow and glass effect.
 */
const GlowButton = ({
    children,
    onClick,
    variant = 'primary',
    pulse = false,
    disabled = false,
    className = ''
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`glow-button glass-effect ${variant} ${pulse ? 'pulse-primary' : ''} ${className}`}
        >
            <span className="button-text">{children}</span>
        </button>
    );
};

export default GlowButton;

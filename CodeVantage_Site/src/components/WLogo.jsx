import React from 'react';

const WLogo = ({ size = 40, className = '' }) => {
    return (
        <img
            src="/logo-w.png"
            alt="codeWINtage Logo"
            width={size}
            height={size}
            className={`object-contain ${className}`}
            style={{
                filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.5))'
            }}
        />
    );
};

export default WLogo;

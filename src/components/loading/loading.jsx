import React from 'react';
import './loading.scss';

const LoadingComponent = (props) => {
    return (
        <div className="loading-box">
            <div className="spin spin-spinning">
                <span className="spin-dot spin-dot-spin">
                    <i className="spin-dot-item"></i>
                    <i className="spin-dot-item"></i>
                    <i className="spin-dot-item"></i>
                    <i className="spin-dot-item"></i>
                </span>
            </div>
        </div>
    )
}

export default LoadingComponent;
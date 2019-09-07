import React from 'react';
const LoadingComponent = () => {
    return (
        <div className="box">
            <div className="spin spinSpinning">
                <span className="spinDot spinDotSpin">
                    <i className="spinDotItem"></i>
                    <i className="spinDotItem"></i>
                    <i className="spinDotItem"></i>
                    <i className="spinDotItem"></i>
                </span>
            </div>
            <style jsx>{`
                .box {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 200px;
                }
                
                .spin {
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    color: rgba(0, 0, 0, 0.65);
                    font-size: 14px;
                    font-variant: tabular-nums;
                    line-height: 1.5;
                    list-style: none;
                    -webkit-font-feature-settings: 'tnum';
                    font-feature-settings: 'tnum';
                    position: absolute;
                    display: none;
                    color: #1890ff;
                    text-align: center;
                    vertical-align: middle;
                    opacity: 0;
                    -webkit-transition: -webkit-transform .3s cubic-bezier(.78, .14, .15, .86);
                    transition: -webkit-transform .3s cubic-bezier(.78, .14, .15, .86);
                    transition: transform .3s cubic-bezier(.78, .14, .15, .86);
                    transition: transform .3s cubic-bezier(.78, .14, .15, .86), -webkit-transform .3s cubic-bezier(.78, .14, .15, .86);
                
                
                }
                
                .spin.spinSpinning {
                    position: static;
                    display: inline-block;
                    opacity: 1;
                }
                
                .spinDot {
                    position: relative;
                    display: inline-block;
                    width: 1em;
                    height: 1em;
                    font-size: 32px;
                }
                
                .spinDotItem {
                    position: absolute;
                    display: block;
                    background-color: #6190e8;
                    border-radius: 100%;
                    -webkit-transform: scale(.75);
                    -ms-transform: scale(.75);
                    transform: scale(.75);
                    -webkit-transform-origin: 50% 50%;
                    -ms-transform-origin: 50% 50%;
                    transform-origin: 50% 50%;
                    opacity: .3;
                    -webkit-animation: antSpinMove 1s infinite linear alternate;
                    animation: antSpinMove 1s infinite linear alternate;
                    width: 14px;
                    height: 14px;
                
                
                }
                
                .spinDotItem:nth-child(1) {
                    top: 0;
                    left: 0;
                }
                
                .spinDotItem:nth-child(2) {
                    top: 0;
                    right: 0;
                    -webkit-animation-delay: .4s;
                    animation-delay: .4s;
                }
                
                .spinDotItem:nth-child(3) {
                    right: 0;
                    bottom: 0;
                    -webkit-animation-delay: .8s;
                    animation-delay: .8s;
                }
                
                .spinDotItem:nth-child(4) {
                    bottom: 0;
                    left: 0;
                    -webkit-animation-delay: 1.2s;
                    animation-delay: 1.2s;
                }
                
                .spinDotSpin {
                    -webkit-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                    -webkit-animation: antRotate 1.2s infinite linear;
                    animation: antRotate 1.2s infinite linear;
                }
                
                @-webkit-keyframes antSpinMove {
                    to {
                        opacity: 1
                    }
                }
                
                @keyframes antSpinMove {
                    to {
                        opacity: 1
                    }
                }
                
                @-webkit-keyframes antRotate {
                    to {
                        -webkit-transform: rotate(405deg);
                        transform: rotate(405deg)
                    }
                }
                
                @keyframes antRotate {
                    to {
                        -webkit-transform: rotate(405deg);
                        transform: rotate(405deg)
                    }
                }
                
        `}</style>
        </div>
    )
}

export default LoadingComponent;
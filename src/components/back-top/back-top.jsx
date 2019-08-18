import React from 'react';
import raf from 'raf';
import PropTypes from 'prop-types';
import styles from './back-top.module.css'

function getDefaultTarget() {
    return window;
}

function getScroll(target, top) {
    if (typeof window === 'undefined') {
        return 0;
    }

    const prop = top ? 'pageYOffset' : 'pageXOffset';
    const method = top ? 'scrollTop' : 'scrollLeft';
    const isWindow = target === window;

    let ret = isWindow ? target[prop] : target[method];
    // ie6,7,8 standard mode
    if (isWindow && typeof ret !== 'number') {
        ret = document.documentElement[method];
    }

    return ret;
}

function easeInOutCubic(t, b, c, d) {
    const cc = c - b;
    t /= d / 2;
    if (t < 1) {
        return (cc / 2) * t * t * t + b;
    }
    return (cc / 2) * ((t -= 2) * t * t + 2) + b;
}

function scrollTo(y, options = {}) {
    const { getContainer = () => window, callback, duration = 450 } = options;

    const container = getContainer();
    const scrollTop = getScroll(container, true);
    const startTime = Date.now();

    const frameFunc = () => {
        const timestamp = Date.now();
        const time = timestamp - startTime;
        const nextScrollTop = easeInOutCubic(time > duration ? duration : time, scrollTop, y, duration);
        if (container === window) {
            window.scrollTo(window.pageXOffset, nextScrollTop);
        } else {
            container.scrollTop = nextScrollTop;
        }
        if (time < duration) {
            raf(frameFunc);
        } else if (typeof callback === 'function') {
            callback();
        }
    };
    raf(frameFunc);
}

class BackTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }
    componentDidMount() {
        const getTarget = this.props.target || getDefaultTarget;
        this.scrollEvent = getTarget().addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    }
    handleScroll = () => {
        const { visibilityHeight, target = getDefaultTarget } = this.props;
        const scrollTop = getScroll(target(), true);
        this.setState({
            visible: scrollTop > visibilityHeight
        });
    };
    scrollToTop = (e) => {
        const { target = getDefaultTarget } = this.props;
        scrollTo(0, {
            getContainer: target,
        });
        if (typeof this.props.onClick === 'function') {
            this.props.onClick(e);
        }
    };
    render() {
        return (this.state.visible ? (
            <div className={styles.backTop} onClick={this.scrollToTop}>
                <div className={styles.inner}>
                    UP
                </div>
            </div>
        ) : null)
    }
}

BackTop.propTypes = {
    target: PropTypes.func,
    visibilityHeight: PropTypes.number,
    onClick: PropTypes.func
}

BackTop.defaultProps = {
    visibilityHeight: 400
}

export default BackTop;
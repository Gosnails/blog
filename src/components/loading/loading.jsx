import React from 'react';
import classNames from 'classnames';
import styles from './loading.module.css'
const LoadingComponent = (props) => {
    return (
        <div className={styles.box}>
            <div className={classNames(styles.spin, styles.spinSpinning)}>
                <span className={classNames(styles.spinDot, styles.spinDotSpin)}>
                    <i className={styles.spinDotItem}></i>
                    <i className={styles.spinDotItem}></i>
                    <i className={styles.spinDotItem}></i>
                    <i className={styles.spinDotItem}></i>
                </span>
            </div>
        </div>
    )
}

export default LoadingComponent;
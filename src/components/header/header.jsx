import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from "react-router-dom";
import classNames from 'classnames';
import styles from './header.module.css';
// import Logo from './logo.png'


const oddEvent = (match, location) => {
    if (!match) {
        return false;
    }
    return match.isExact;
}

const HaderComponent = props => (
    <div className={styles.header}>
        <div className={styles.grid}>
            <div className={styles.logo}>
                <Link to="/">
                    {/* <img src={Logo} alt="faustun" /> */}
                </Link>
            </div>
            <span className={styles.toggle} onClick={props.onToggle}>
                <i className="iconfont icon-ego-menu"></i>
            </span>
            <div className={classNames(styles.main, { [styles.expand]: props.expand })}>
                <div className={styles.inner}>
                    <div className={styles.nav}>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <NavLink to="/" activeClassName={styles.active} isActive={oddEvent}>首页</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={classNames(styles.search, styles.active)}>
                        <span className={styles.searchIco}>
                            <i className="iconfont icon-sousuo"></i>
                        </span>
                        <div className={classNames(styles.searchForm, styles.show)}>
                            <input className={styles.searchIpt} onKeyDown={props.onSearch} value={props.value} onChange={props.onChange} type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

HaderComponent.propTypes = {
    onToggle: PropTypes.func,
    onSearch: PropTypes.func,
    onChange: PropTypes.func,
    expand: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired
}

export default HaderComponent;
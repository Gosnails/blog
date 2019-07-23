import React from 'react';
import { NavLink } from "react-router-dom";
import './header.scss';


const oddEvent = (match, location) => {
    if (!match) {
        return false;
    }
    return match.isExact;
}

const HaderComponent = props => (
    <div className="header">
        <div className="grid">
            <div className="logo"></div>
            <span className="toggle">
                <i className="iconfont icon-ego-menu"></i>
            </span>
            <div className="main">
                <div className="inner">
                    <div className="nav">
                        <ul className="list">
                            <li className="item">
                                <NavLink to="/" isActive={oddEvent}>首页</NavLink>
                            </li>
                            <li className="item">
                                <NavLink to="/about" isActive={oddEvent}>关于我们</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="search active">
                        <span className="search-ico" onClick={props.onSearch}>
                            <i className="iconfont icon-sousuo"></i>
                        </span>
                        <div className="search-form show">
                            <input className="search-ipt" value={props.value} onChange={props.onChange} type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default HaderComponent;
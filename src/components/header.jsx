import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link'

const Header = props => (
    <div className="header">
        <div className="grid">
            <span className="toggle" onClick={props.onToggleExpand}>
                <i className="icon-ego-menu"></i>
            </span>
            <div className={classNames('main', { ['expand']: props.expand })}>
                <div className='inner'>
                    <div className="nav">
                        <ul className="list">
                            <li className="item">
                                <Link href="/"><a className={classNames({ ['active']: props.path === '/' })}>首页</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className={classNames('search', { ['active']: props.show })}>
                        <span className="searchIco" onClick={props.onToggleSearch}>
                            <i className="icon-sousuo"></i>
                        </span>
                        <div className={classNames('searchForm', { ['show']: props.show })}>
                            <input className="searchIpt" onKeyDown={props.onSearch} value={props.value} onChange={props.onChange} type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .header {
                height: 60px;
                width: 100%;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                background-color: rgba(255, 255, 255, .95);
                z-index: 100;
                margin-bottom: 15px;
                border-bottom: 1px solid #eee;
                box-shadow: 0px 2px 3px 0px rgba(227,227,227,0.38);
            }
            
            .grid {
                margin: auto;
            }
            
            .grid:after,
            .grid:before {
                content: " ";
                display: table;
            }
            
            .grid:before {
                clear: both;
            }
            
            .logo {
                height: 100%;
                float: left;
                padding-top: 12px;
                margin-right: 50px;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
            }
            
            .logo a {
                display: block;
                width: 98px;
                overflow: hidden;
            }
            
            .toggle {
                display: none;
                float: right;
                padding: 5px 12px;
                margin: 15px 0 0;
                color: #6190e8;
                text-align: center;
            }

            .icon-ego-menu {
                display:block;
                height: 30px;
                width: 30px;
                background-image: url('data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgBAMAAACIv8e9AAAAG1BMVEUAAABgkOhgkOlgkOhgj+hg
                j+9gkOhgj+dhkOilmbnkAAAACHRSTlMAgD/AcBCgYLdkO60AAABASURBVCjPY6AuCDNGALMAsJBE
                BxIQAAt5IAsVgIWYlJAAwwCBEEEEEGHAdKoDDiFMjfQHmEGIGdCY0YEt0qgKAIv0NKWZx9RtAAAA
                AElFTkSuQmCC');
                background-repeat: no-repeat;
                background-size: 30px 30px;
            }
            
            .nav {
                float: left;
            }
            
            .list {
                list-style: none;
                margin-bottom: 0;
                margin-top: 0;
            }
            
            .item {
                position: relative;
                float: left;
                height: 100%;
                margin: 0 10px;
                line-height: 60px;
            }
            
            .item a {
                padding: 0 15px;
                height: 100%;
                display: block;
                -webkit-transition: color .2s;
                -moz-transition: color .2s;
                -o-transition: color .2s;
                -ms-transition: color .2s;
                transition: color .2s;
            }
            
            .item a.active:after {
                content: ' ';
                position: absolute;
                top: 0;
                left: 0;
                height: 3px;
                width: 100%;
                background-color: #6190e8;
            }
            
            .search {
                float: right;
                padding: 0 0 0 30px;
                margin-top: 14px;
                position: relative;
            
            
            }

            .search.active .searchIco {
                background-color: #eee;
            }
            
            .searchIco {
                position: absolute;
                top: 0;
                left: 0;
                height: 30px;
                width: 30px;
                line-height: 30px;
                text-align: center;
            }

            .icon-sousuo {
                display:block;
                height: 20px;
                width: 20px;
                margin-left: 5px;
                margin-top: 5px;
                background-image: url('data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAllBMVEUAAAAvLy8yMjIyMjIyMjIx
                MTEMDAwAAAAyMjIyMjIyMjIyMjIwMDAuLi4fHx8zMzMyMjIyMjIyMjIyMjIxMTEyMjIxMTEyMjIy
                MjIyMjIyMjIzMzMyMjIyMjIyMjIyMjIyMjIxMTEvLy8rKysrKysyMjIyMjIyMjIyMjIxMTEyMjIz
                MzMyMjIyMjIyMjIyMjIzMzMzMzPcTokHAAAAMXRSTlMAD/P32DsDAe/nyFIvGQjOqaSVY0Y2Ht+/
                urSwnYR+eUw/FRML65GIdHFn04xuXlsjVcsvOQAAAVJJREFUOMt90OmWojAQhuEPgqyKoIi7re3S
                2tvMe/83N2TkNLagz49U5VAklVLj9TLzQhMNs/FAHfpLGlmr5DUDE39+JcX3ywxw3+9+j2DkqLa/
                RLDy1egZpv0qTt7rqvQEs7Q5/0i8V/DHAwpdrWEZqDbDc5Qugbi5+gTnOk1wSx1iyEs1/AWhc808
                1tICU9w9zOVN1hbXUQJb3dkQycrJFUwZ6d4AJja6JCrgr1piNnYqMNCOpdpOrOwQIahWX20vzKt1
                R6gHxgzteEHWwxNKcNRtRG5DSKFuMWsbFvXAuubQs/GbKHjQwvH/hzRkrA6HkPU1++KYqu0Nt+7e
                n5uOdySw0ROJYRH8mlr/dudvgFI3evDpNDsP4MO5bXkK7mjcGzi7c1blxgWGtxXpOeKHyctJq0L+
                duWB8eary77aXisOeqznApmeVRj40DM719vqH4eLJ+xw0Nn3AAAAAElFTkSuQmCC');
                background-repeat: no-repeat;
                background-size: 20px 20px;
            }
            
            .searchForm {
                overflow: hidden;
                opacity: 0;
                -webkit-transition: all .6s ease;
                -moz-transition: all .6s ease;
                -o-transition: all .6s ease;
                -ms-transition: all .6s ease;
                transition: all .6s ease;
                width: 0;
            }
            
            .searchForm.show {
                width: 200px;
                opacity: 1;
                -ms-filter: none;
                filter: none;
            }
            
            .searchIpt {
                height: 30px;
                line-height: 20px;
                width: 100%;
                padding: 5px;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                border: 1px solid #eee;
                background-color: #fcfcfc;
                outline: 0;
            }
            
            @media screen and (max-width: 560px) {
                .grid {
                    width: 100%;
                }
            }
            
            @media screen and (max-width: 768px) {
                .header {
                    padding: 0 15px;
                    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
                    box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
                }
            
                .toggle {
                    display: block;
                }
            
                .main {
                    position: absolute;
                    top: 60px;
                    left: 0;
                    width: 100%;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                    z-index: 99;
                    height: 0;
                    overflow: hidden;
                    background-color: #fff;
                    -webkit-transition: height .5s;
                    -moz-transition: height .5s;
                    -o-transition: height .5s;
                    -ms-transition: height .5s;
                    transition: height .5s;
                }
            
                .main.expand {
                    height: 60px;
                    border-bottom: 1px solid #eee;
                }
            
                .inner {
                    padding: 15px;
                }
            
                .search {
                    float: none;
                    margin-top: 0;
                    margin-left: 5px;
                }
            
                .nav {
                    float: none;
                    padding-left: 0;
                    margin: 0;
            
                }
            
                .item {
                    margin: 0 0 15px;
                    float: none;
                    height: 30px;
                    line-height: 30px;
            
            
                }
            
                .item a.active:after {
                    height: 100%;
                    width: 2px;
                }
            
            }
            
            @media screen and (min-width: 768px) {
                .grid {
                    width: 672px;
                }
            }
            
            @media screen and (min-width: 1160px) {
                .grid {
                    width: 1024px;
                }
            }
        `}</style>
    </div>
)

Header.propTypes = {
    onToggleExpand: PropTypes.func,
    onToggleSearch: PropTypes.func,
    onSearch: PropTypes.func,
    onChange: PropTypes.func,
    expand: PropTypes.bool.isRequired,
    show: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired
}

export default Header;
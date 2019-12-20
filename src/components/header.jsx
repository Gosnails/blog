import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link'

const Header = props => (
    <div className="header">
        <div className="grid">
            <div className="logo">
                <a href="/">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAA7CAMAAACZv46RAAABO1BMVEUAAAButvJhkOhhkOhhkOhhkOhhkOiA5/9nou2A5/9hkehhkOhhkOiA5/+A5/+A5/9ilOmA5/9hkOiA5/9hkOhhkOiA5/+A5/9hkOhhkOiA5/+A5/9hkOiA5/9hkOiA5/9hkOiA5/9hkOiA5/+A5/9hkOhhkOiA5/9hkOiA5/+A5/9hkOhhkOh62PuA5/+A5/9hkOiA5/9hkOiA5/9hkOiA5/9hkOiA5/9hkOiA5/+A5/9hkOhhkeiA5/+A5/9hkOiA5/9hkOhhkOhhkOhhkOiA5/9hkehppe6A5/9lm+t0xfZppu5jlelhkOiA5/+A5/9hkOiA5/+A5/9hkOh0xfaA5/9ssPBhkOiA5/9hkOiA5/9ilOp40/pxvfRopO1oo+1km+t94P183fx1yPd0xfZzwvVtsvFsrvBnou2yM6vQAAAAWXRSTlMAAlvyfEkmEQbS0simZFhBQB0OB/v28vDl4NvLwbmwppSKinVvbVRIODAjHhD++evr49rVu52bk4OCaWZjUT09NzMxLRb7+ffn2dHPy8vDwLmwrp+clpJwG87Oyl0AAANoSURBVFjDrdlnV+JAFAbgS5eiIEUUwbUhRXfXtay9997LvWB31f//CxbOnpzNMJm5JPDwNZCThMn73gSa11H76Lhqn7ZLFFZHoisB9U+vbbn9RWizzmAwTelMZvEerMR9M6EpnAoPxKCNov1kyEVBthlBQ2Qc2qT7G5kEu6CRL4wm8225xK4FEk0HGrcIJ9Gs1w0t6/pFjeZA5MVG2SK0ZP2UZOkymG33ouxqGxwLzJKVnUWX+RS70UrSCw6N/CBLP0aE3eZTaKlvDBxYyZDKLJj9RpWZTbCplCO1IeFoB1FtcMLWRZ0jHXHlulHDcwdNG+0hrW4w86NWyAdNKQRJLweiLOoN+IFVviTG/jqIYilkDHcw8TZEnJ5OaORl9zu5pI23n8QaTUCjiWFknSgjcbWfWGclsDLWh6zIuCLeWL+6QMWLPDkS49ff/3yvkt6CLknHI8iQI/F277FSqTw9vZPat27QWwsjK7thWgFHaPhSHXF/FHjLk8jKG4tp46CC/32+kuxnZ5Oldhg5HuNEH6PoQb73J6BZ/gFk9Pn/nRls9PxGZhdlsMMXQr3fUBO32uqxSobpAtiV9+hPcz0NfdbbfLxQXc8oOBAfRJ16wRvbRUuV+iW+CYAzW+eolFxy6W4vz4clcKx0+IwqXgDXUhKVzrecds4bInqooKXdercros5gHFT4evLygVY8vnpqMX+7PNhVmCZD9RFlobhUOLkyxCtfkNmbfImXoc7fhy2UIb6ePKDo2GicHmyhDPH15PXTvC4PjAzqyCNrctnG9C2pfqHhyFRuNrLICq/x07fa+9NTLdAf925B4O61U4b46VtWrdWX67j0tXnkefnpm6knXBmyNTyWzojVvwoKsRNkDU/Ii2aUGFw9WWLLUMorr5oe4gwlWi1DqRiI1veJcVluQxnKgihHesFCe8qQX1yupGK7ntx5UMMtLh3SmbNVTya0DySERxdDpJazXU82ZzSF02yWVDIrwLAzPKbywtGqn16BQ94kWnELu13cISuzAXBs+wplvdtim0iT7HQdWlLMsnkwx0zfDsiRmAy7QBSYZqZv++RIDPvk0Aty8cZjIjGyCbJojpm+nYoNhKdwKjTjs27r94uZTJrSwWAntFnR795aU795CqxER1YLCXCKf6nFvxTj/QVAASj9yyyYdAAAAABJRU5ErkJggg==" alt="开发笔记" />
                </a>
            </div>
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
                            <li className="item">
                                <a target="_blank" href="https://gosnails.github.io/blogs/">Hexo</a>
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
                padding-top: 13px;
                margin-right: 50px;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
            }
            
            .logo a {
                display: block;
                width: 60px;
                overflow: hidden;
            }

            .logo a img {
                display: block;
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
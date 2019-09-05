import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link'



const HeaderComponent = props => (
    <div className="header">
        <div className="grid">
            <div className="logo">
            </div>
            <span className="toggle" onClick={props.onToggle}>
                <i className="iconfont icon-ego-menu"></i>
            </span>
            <div className={classNames('main', { ['expand']: props.expand })}>
                <div className='inner'>
                    <div className="nav">
                        <ul className="list">
                            <li className="item">
                                <Link href="/"><a className="active">首页</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className={classNames('search', 'active')}>
                        <span className={'searchIco'}>
                            <i className="iconfont icon-sousuo"></i>
                        </span>
                        <div className={classNames('searchForm', 'show')}>
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
                background: #eee;
            }
            
            .searchIco {
                position: absolute;
                top: 0;
                left: 0;
                height: 30px;
                width: 30px;
                line-height: 30px;
                text-align: center;
                color: #333;
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


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            expand: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        // this.props.onArticleKeywords(event.target.value);
    }
    handleSearch(e) {
        if (e.keyCode === 13) {
            this.props.history.push(`/`);
            this.props.onArticleLoading(true)
            getArticleList({ type: this.props.type, page: this.props.pageNum, q: this.props.keywords }).then(res => {
                this.props.onArticleLoading(false);
                this.props.onArticleList(res.data);
            })
        }
    }
    handleToggle() {
        if (this.state.expand) {
            this.setState({ expand: false });
            return;
        }
        this.setState({ expand: true });
    }
    render() {
        return (
            <HeaderComponent
                onToggle={this.handleToggle}
                onSearch={this.handleSearch}
                onChange={this.handleChange}
                expand={this.state.expand}
                value={this.state.value}
            />
        )
    }
}

// HaderComponent.propTypes = {
//     onToggle: PropTypes.func,
//     onSearch: PropTypes.func,
//     onChange: PropTypes.func,
//     expand: PropTypes.bool.isRequired,
//     value: PropTypes.string.isRequired
// }

export default Header;
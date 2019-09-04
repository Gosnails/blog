import React from 'react';
import PropTypes from 'prop-types';
import { BASE_IMG_URL } from '../src/utils/config.js'
import classNames from 'classnames';

const getList = props => {
    return props.data.map(item => {
        return (
            <div className="el-col el-col-24 el-col-xs-12 el-col-sm-8 el-col-md-6" key={item._id}>
                <div className="card" onClick={() => props.onHistoryPush(item._id)}>
                    <div className="cover" style={{ background: `url('${BASE_IMG_URL}${item.cover}') rgb(204, 204, 204)` }}></div>
                    <div className="title">{item.title}</div>
                    <div className="foot">
                        <span>{item.createdAt}</span>
                        <span className="division">/</span>
                        <span>{item.type}</span>
                    </div>
                </div>
                <style jsx>{`
                    .card {
                            position: relative;
                            height: 0;
                            padding-top: 80%;
                            cursor: pointer;
                        }
                        .cover {
                            position: absolute;
                            top: 0;
                            width: 100%;
                            height: 75%;
                            height: calc(100% - 60px);
                            background-size: cover !important;
                            background-position: 50% !important;
                        }
                        .title {
                            position: absolute;
                            bottom: 20px;
                            width: 100%;
                            height: 40px;
                            line-height: 56px;
                            box-sizing: border-box;
                            font-size: 16px;
                            overflow: hidden;
                            white-space: nowrap;
                            -o-text-overflow: ellipsis;
                            text-overflow: ellipsis;
                        }
                        .title:hover {
                            color: #6190e8;
                        }
                        
                        .foot {
                            position: absolute;
                            bottom: 0;
                            width: 100%;
                            height: 20px;
                            line-height: 20px;
                            font-size: 12px;
                            color: #555;
                        }
                        
                        .division {
                            margin-left: 5px;
                            margin-right: 5px;
                        }
                    `}</style>
            </div>
        )
    })
}

const getCates = props => {
    return props.cates.map(item => {
        const isActive = props.type === item.value
        return (
            <li className={classNames('cateMenuItem', { ['active']: isActive })} key={item.label}
                onClick={() => props.onCates(item.value)}>
                {item.label}
                <style jsx>{`
                    .cateMenuItem {
                        display: inline-block;
                        padding: 0 10px;
                        font-size: 16px;
                        margin: 10px 10px 10px 0;
                        height: 30px;
                        line-height: 30px;
                        cursor: pointer;
                    }
                    
                    .active {
                        color: #fff;
                        background: #6190e8;
                        font-weight: 400;
                    }
                 `}</style>
            </li>
        )
    })
}

const HomeComponent = props => (
    <div className="content">
        <div className="grid">
            <div className="cates">
                <ul className="cateMenu">
                    {getCates(props)}
                </ul>
            </div>

            <div className="el-row">
                {getList(props)}
            </div>
        </div>
        <style jsx>{`
            .grid {
                width: 100%;
                margin: auto;
            }
            .cates {
                overflow: hidden;
                font-size: 16px;
                margin-bottom: 15px;
                height: 50px;
                line-height: 50px;
                overflow: hidden;
                background: #fff;
            }
            
            .cates::-webkit-scrollbar {
                display: none;
            }
            
            .cateMenu {
                display: block;
                white-space: nowrap;
                height: 100%;
                font-size: 0;
                position: relative;
                -webkit-overflow-scrolling: touch;
                overflow-x: auto;
                overflow-y: hidden;
            }
            
            
        `}</style>
        <style global jsx>{`
            body {
                margin: 0;
                background-color: #fff;
            }

            ul {
                margin: 0;
                padding-left: 0;
                list-style: none;
            }

            a {
                color: #333;
                text-decoration: none;
            }

            img {
                width: 100%;
            }

            .content {
                margin: 0 auto;
                box-sizing: border-box;
            }

            .el-row {
                margin-left: -10px;
                margin-right: -10px;
            }

            .el-row:before,
            .el-row:after {
                content: "";
                display: table;
            }

            .el-row:after {
                clear: both;
            }

            .el-col {
                float: left;
                padding-left: 10px;
                padding-right: 10px;
                margin-bottom: 30px;
                box-sizing: border-box;
            }

            .el-col-24 {
                width: 100%;
            }

            @media screen and (max-width: 560px) {
                .content {
                    width: 100%;
                }

                .el-col-xs-24 {
                    width: 100%;
                }
            }

            @media screen and (max-width: 768px) {
                .content {
                    width: 512px;
                }
            }

            @media screen and (min-width: 768px) {
                .content {
                    width: 672px;
                }

                .el-col-xs-12 {
                    width: 50%;
                }
            }

            @media screen and (min-width: 1160px) {
                .content {
                    width: 1024px;
                }

                .el-col-sm-8 {
                    width: 33.33333%;
                }
            }
    `}</style>
    </div>
)

HomeComponent.propTypes = {
    loading: PropTypes.bool,
    type: PropTypes.string,
    cates: PropTypes.array,
    data: PropTypes.array.isRequired,
    onHistoryPush: PropTypes.func,
    onCates: PropTypes.func
}

export default HomeComponent;
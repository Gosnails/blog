import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import { BASE_IMG_URL } from '../utils/config.js';

const getList = props => {
    return props.data.map(item => {
        return (
            <div className="el-col el-col-24 el-col-xs-12 el-col-sm-8 el-col-md-6" key={item._id}>
                <div className="card">
                    <div className="cover" style={{ background: `url('${BASE_IMG_URL}${item.cover}') rgb(204, 204, 204)` }}></div>
                    <div className="title">
                        <Link as={`/post/${item._id}`} href={`/post?id=${item._id}`}>
                            <a>{item.title}</a>
                        </Link>
                    </div>
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
                            padding-top: 70%;
                            border-bottom-left-radius: 4px;
                            border-bottom-right-radius: 4px;
                            box-shadow: 0px 2px 10px 0px rgba(46,61,72,0.05);
                        }
                        .cover {
                            position: absolute;
                            top: 0;
                            width: 100%;
                            height: 68%;
                            height: calc(100% - 70px);
                            border-top-left-radius: 4px;
                            border-top-right-radius: 4px;
                            background-size: cover !important;
                            background-position: 50% !important;
                        }
                        .title {
                            position: absolute;
                            bottom: 30px;
                            width: 100%;
                            height: 40px;
                            line-height: 40px;
                            padding-left: 10px;
                            padding-right: 10px;
                            box-sizing: border-box;
                            font-size: 16px;
                            overflow: hidden;
                            white-space: nowrap;
                            -o-text-overflow: ellipsis;
                            text-overflow: ellipsis;
                        }
                        .title a:hover {
                            color: #6190e8;
                        }
                        
                        .foot {
                            position: absolute;
                            bottom: 12px;
                            width: 100%;
                            height: 20px;
                            line-height: 20px;
                            padding-left: 10px;
                            padding-right: 10px;
                            font-size: 12px;
                            color: #555;
                            box-sizing: border-box;
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

const List = props => (
    <div className="grid">
        <div className="el-row">
            {getList(props)}
        </div>
        <style jsx>{`
            .grid {
                width: 100%;
                margin: auto;
            }
        `}</style>
    </div>
)

List.propTypes = {
    data: PropTypes.array
}

export default List;
import React from 'react';
import './home.scss';

const getList = props => {
    return props.data.map(item => {
        return (
            <div className="el-col el-col-24 el-col-xs-12 el-col-sm-8 el-col-md-6" key={item._id}>
                <div className="card__box" onClick={() => props.onHistoryPush(item._id)}>
                    <div className="cover" style={{ background: "url('https://img.alicdn.com/tfs/TB1ng7ewCzqK1RjSZFLXXcn2XXa-900-500.png') rgb(204, 204, 204)" }}></div>
                    <div className="title">{item.title}</div>
                </div>
            </div>
        )
    })
}

const HomeComponent = props => (
    <div className="content">
        <div className="grid">
            <div className="el-row">
                {getList(props)}
            </div>
        </div>
    </div>
)

export default HomeComponent;
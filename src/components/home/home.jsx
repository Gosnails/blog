import React from 'react';
import LoadingComponent from '@/components/loading/loading.jsx';
import { BASE_IMG_URL } from '@/utils/config.js'
import classNames from 'classnames';
import './home.scss';

const getList = props => {
    return props.data.map(item => {
        return (
            <div className="el-col el-col-24 el-col-xs-12 el-col-sm-8 el-col-md-6" key={item._id}>
                <div className="card__box" onClick={() => props.onHistoryPush(item._id)}>
                    <div className="cover" style={{ background: `url('${BASE_IMG_URL}${item.cover}') rgb(204, 204, 204)` }}></div>
                    <div className="title">{item.title}</div>
                </div>
            </div>
        )
    })
}

const getCates = props => {
    return props.cates.map(item => {
        return (
            <li className={classNames('cate-menu-item', { active: props.type === item.value })} key={item.label}
                onClick={() => props.onCates(item.value)}>
                {item.label}
            </li>
        )
    })
}

const HomeComponent = props => (
    <div className="content">
        <div className="grid">
            <div className="cates">
                <ul className="cate-menu">
                    {getCates(props)}
                </ul>
            </div>

            <div className="el-row">
                {props.loading ? <LoadingComponent /> : getList(props)}
            </div>
        </div>
    </div>
)

export default HomeComponent;
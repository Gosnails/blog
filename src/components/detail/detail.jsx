import React from 'react';
import './detail.scss'
import LoadingComponent from '@/components/loading/loading.jsx';

const HomeComponent = props => (
    <div className="content detail">
        {props.loading ? <LoadingComponent /> : (<div className="grid">
            <h2 className="title">{props.title}</h2>
            <div className="time">日期：{props.time}</div>
            <div className="detail-html" dangerouslySetInnerHTML={{ __html: props.content }}></div>
        </div>)}
    </div>
)

export default HomeComponent;
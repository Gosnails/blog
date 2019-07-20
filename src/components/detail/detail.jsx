import React from 'react';
import './detail.scss'

const HomeComponent = props => (
    <div className="content detail">
        <div className="grid">
            <h2 className="title">{props.title}</h2>
            <div className="detail" dangerouslySetInnerHTML={{ __html:props.content}}></div>
        </div>
    </div>
)

export default HomeComponent;
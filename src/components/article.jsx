import React from 'react';
import PropTypes from 'prop-types';
import { BASE_IMG_URL } from '../utils/config.js'



const Article = props => (
    <div className="grid">
        <div className="cover">
            <img src={BASE_IMG_URL + props.cover} alt="" />
        </div>
        <h2 className="title">{props.title}</h2>
        <div className="time">日期：{props.time}</div>
        <div className="html" dangerouslySetInnerHTML={{ __html: props.content }}></div>
        <style jsx>{`
        .grid {
            width: 100%;
            max-width: 760px;
            padding-bottom: 30px;
            margin: 0 auto;
        }
        
        .title {
            font-weight: 700;
            line-height: 60px;
            border-bottom: 1px solid #eee;
        }
        
        .time {
            margin-bottom: 30px;
        }
        
        .cover {
            display: flex;
            align-items: center;
            max-height: 400px;
            overflow: hidden;
        
        }
        .html {
            margin-bottom: 50px;
            line-height: 1.75;
        }
        @media screen and (min-width: 1367px) {
            .grid {
                margin-left: 100px;
            }
        }
    `}</style>
    </div>
)

Article.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default Article;
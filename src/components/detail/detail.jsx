import React from 'react';
import PropTypes from 'prop-types';
import styles from './detail.module.css'
import { BASE_IMG_URL } from '@/utils/config.js'
import LoadingComponent from '@/components/loading/loading.jsx';

const comment = commentList => {
    return commentList.map(item => {
        return (<div className={styles.commentListItem} key={item._id}>
            <div className={styles.commentListHeader}>
                <span className={styles.name}>{item.name}</span>
                <span>发表于</span>
                <span className={styles.commentTime}>{item.createdAt}</span>
            </div>
            <div className={styles.comment}>{item.content}</div>
            
        </div>)
    })
}

const HomeComponent = props => (
    <div className="content">
        {props.loading ? <LoadingComponent /> : (<div className={styles.grid}>
            <div className={styles.cover}>
                <img src={BASE_IMG_URL + props.cover} alt="" />
            </div>
            <h2 className={styles.title}>{props.title}</h2>
            <div className={styles.time}>日期：{props.time}</div>
            <div className={styles.html} dangerouslySetInnerHTML={{ __html: props.content }}></div>
            <div className={styles.commentHeader}>评论</div>
            <div className={styles.commentPust}>
                <div className={styles.commentPustItem}>
                    <textarea value={props.comment} onChange={props.onCommentChange} />
                </div>
                <div className={styles.commentPustItem}>
                    <input type="text" value={props.name} onChange={props.onNameChange} />
                    <span className={styles.label}>昵称</span>
                </div>
                <div className={styles.commentPustItem}>
                    <input type="text" value={props.email} onChange={props.onEmailChange} />
                    <span className={styles.label}>邮箱</span>
                </div>
                <div className={styles.commentPustItem}>
                    <button onClick={props.onSubmit}>
                        <span>提交</span>
                    </button>
                </div>
            </div>
            <div className={styles.commentGet}>
                {props.commentList.length ? (<div className={styles.commentList}>
                    {comment(props.commentList)}
                </div>) : <p>来做第一个留言的人吧！</p>}
            </div>
        </div>)}
    </div>
)

HomeComponent.propTypes = {
    loading: PropTypes.bool.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default HomeComponent;
import React from 'react';
import PropTypes from 'prop-types';


const getComment = commentList => {
    return commentList.map(item => {
        return (<div className="commentListItem" key={item._id}>
            <div className="commentListHeader">
                <span className="name">{item.name}</span>
                <span>发表于</span>
                <span className="commentTime">{item.createdAt}</span>
            </div>
            <div className="comment">{item.content}</div>
            <style jsx>{`
                .commentListItem {
                    margin-bottom: 20px;
                    padding-bottom: 10px;
                    border-bottom: 1px solid #eee;
                }
                .commentListHeader {
                    color: #999;
                    margin-bottom: 10px;
                }
                .name {
                    color: #6190e8;
                    margin-right: 5px;
                }
                
                .comment {
                    line-height: 24px;
                    margin-bottom: 10px;
                }
                
                .commentTime {
                    margin-left: 5px;
                }
            `}</style>
        </div>)
    })
}

const Comment = props => {
    return (
        <div className="grid">
            <div className="commentHeader">评论</div>
            <div className="commentPust">
                <div className="commentPustItem">
                    <textarea value={props.comment} onChange={props.onCommentChange} />
                </div>
                <div className="commentPustItem">
                    <input type="text" value={props.name} onChange={props.onNameChange} />
                    <span className="label">昵称</span>
                </div>
                <div className="commentPustItem">
                    <input type="text" value={props.email} onChange={props.onEmailChange} />
                    <span className="label">邮箱</span>
                </div>
                <div className="commentPustItem">
                    <button onClick={props.onSubmit}>
                        <span>提交</span>
                    </button>
                </div>
            </div>
            <div className="commentGet">
                {props.commentList.length ? (<div className="commentList">
                    {getComment(props.commentList)}
                </div>) : <p>来做第一个留言的人吧！</p>}
            </div>
            <style jsx>{`
                .grid {
                    width: 100%;
                    max-width: 760px;
                    padding-bottom: 30px;
                    margin: 0 auto;
                }
                .commentPust {
                    margin-bottom: 50px;
                }
                .commentPustItem {
                    margin-bottom: 20px;
                    font-size: 0.875em;
                }
                .commentPustItem textarea {
                    padding: 0.75em;
                    display: block;
                    box-sizing: border-box;
                    width: 100%;
                    min-height : 5.125em;
                    max-height: 15em;
                    border-radius: 5px;
                    border: 1px solid rgba(0, 0, 0, 0.1);
                    font-size: inherit;
                    word-wrap: break-word;
                    resize: vertical;
                    background-color: #f6f6f6;
                    outline: none;
                    transition: all 0.25s ease;
                }
                .commentPustItem input {
                    max-width: 100%;
                    padding: 0 15px;
                    font-size: inherit;
                    height: 40px;
                    line-height: 40px;
                    outline: none;
                    border: 1px solid rgba(0, 0, 0, 0.1);
                    word-wrap: break-word;
                    resize: vertical;
                    border-radius: 5px;
                    background-color: #f6f6f6;
                    transition: all 0.25s ease;
                }
                .commentPustItem button {
                    display: inline-block;
                    line-height: 1;
                    white-space: nowrap;
                    cursor: pointer;
                    background: #6190e8;
                    border: 1px solid #6190e8;
                    color: #fff;
                    -webkit-appearance: none;
                    text-align: center;
                    box-sizing: border-box;
                    outline: none;
                    margin: 0;
                    transition: .1s;
                    font-weight: 500;
                    -moz-user-select: none;
                    -webkit-user-select: none;
                    -ms-user-select: none;
                    padding: 12px 20px;
                    font-size: 14px;
                    border-radius: 4px;
                }
                .label {
                    margin-left: 20px;
                }
                .commentHeader {
                    text-align: center;
                    margin-bottom: 20px;
                }
                .commentList {
                    margin-bottom: 20px;
                    padding-bottom: 10px;
                }
                @media screen and (min-width: 1367px) {
                    .grid {
                        margin-left: 100px;
                    }
                }
            `}</style>
        </div>
    )
}

Comment.propTypes = {
    name: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    commentList: PropTypes.array.isRequired,
    onCommentChange: PropTypes.func,
    onEmailChange: PropTypes.func,
    onNameChange: PropTypes.func,
    onSubmit: PropTypes.func
}


export default Comment;
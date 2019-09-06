
import { getArticleList } from '../api/article';
import { parseTime } from '../utils';

const ARTICLE_LIST = 'blog/article/ARTICLE_LIST';

const initArticleState = {
    articleList: []
};


const handleFormTime = time => {
    let timeStamp = new Date(time).getTime()
    return parseTime(timeStamp, '{y}-{m}-{d}');
}

const handleArticleList = data => {
    for (let i = 0; i < data.length; i++) {
        data[i].createdAt = handleFormTime(data[i].createdAt);
    }
    return data;
}

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initArticleState;
    switch (action.type) {
        case ARTICLE_LIST:
            return Object.assign({}, state, {
                articleList: action.list
            });
        default:
            return state;
    }
};

const thunkArticleList = function (params) {
    return (dispatch) => {
        return getArticleList(params).then(response => {
            const data = response.data
            dispatch(setArticleList(data))
        })
    }
}

const setArticleList = function (list) {
    return {
        type: ARTICLE_LIST,
        list: list
    };
}

export {
    reducer as
        default,
    initArticleState,
    setArticleList,
    thunkArticleList
};

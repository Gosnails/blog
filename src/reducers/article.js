
import { getArticleList } from '../api/article';
import { parseTime } from '../utils';

const ARTICLE_LIST = 'blog/article/ARTICLE_LIST';
const CLASSIFY_DATA = 'blog/article/CLASSIFY_DATA';
const ARTICLE_LIST_JOIN = 'blog/article/ARTICLE_LIST_JOIN';
const ARTICLE_LOADING = 'blog/article/ARTICLE_LOADING';
const ARTICLE_TOTAL = 'blog/article/ARTICLE_TOTAL';

const initArticleState = {
    articleList: [],
    classifyData: [],
    loading: false,
    total: 20
};


const handleFormTime = time => {
    let timeStamp = new Date(time).getTime()
    return parseTime(timeStamp, '{y}-{m}-{d}');
}

const handleArticleList = (data, initArticleState) => {
    const cates = [].concat.apply([], Object.values(initArticleState.classifyData));
    for (let i = 0; i < data.length; i++) {
        data[i].createdAt = handleFormTime(data[i].createdAt);
        for (let j = 0; j < cates.length; j++) {
            if (cates[j]._id && data[i].type === cates[j]._id) {
                data[i].type = cates[j].name;
                break;
            }
        }
    }
    return data;
}

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initArticleState;
    switch (action.type) {
        case ARTICLE_LIST:
            return Object.assign({}, state, {
                articleList: handleArticleList(action.list, state)
            });
        case ARTICLE_LIST_JOIN:
            return Object.assign({}, state, {
                articleList: state.articleList.concat(handleArticleList(action.list, state))
            });
        case ARTICLE_LOADING:
            return Object.assign({}, state, {
                loading: action.loading
            });
        case ARTICLE_TOTAL:
            return Object.assign({}, state, {
                total: action.total
            });
        case CLASSIFY_DATA:
            return Object.assign({}, state, {
                classifyData: action.classifyData
            });
        default:
            return state;
    }
};
const thunkArticleList = function (params = {}, isLoading, isJoin) {
    return (dispatch) => {
        if (!isLoading) {
            dispatch(setArticleLoading(true))
        }
        return getArticleList(params).then(response => {
            const data = response.data
            const total = response.total
            if (!isLoading) {
                dispatch(setArticleLoading(false))
            }
            if (isJoin) {
                dispatch(setArticleListJoin(data))
            } else {
                dispatch(setArticleList(data))
            }
            dispatch(setArticleTotal(total))
        })
    }
}

const setArticleList = function (list) {
    return {
        type: ARTICLE_LIST,
        list: list
    };
}

const setArticleListJoin = function (list) {
    return {
        type: ARTICLE_LIST_JOIN,
        list: list
    };
}

const setArticleTotal = function (total) {
    return {
        type: ARTICLE_TOTAL,
        total: total
    };
}

const setArticleLoading = function (bool) {
    return {
        type: ARTICLE_LOADING,
        loading: bool
    };
}

const setClassifyData = function (classifyData) {
    return {
        type: CLASSIFY_DATA,
        classifyData: classifyData
    };
}


export {
    reducer as
        default,
    initArticleState,
    setArticleList,
    thunkArticleList,
    setArticleLoading,
    setClassifyData
};

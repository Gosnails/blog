const ARTICLE_LIST = 'blog/article/ARTICLE_LIST';
const ARTICLE_TYPE = 'blog/article/ARTICLE_TYPE';
const ARTICLE_KEYWORDS = 'blog/article/ARTICLE_KEYWORDS';
const ARTICLE_PAGE_NUM = 'blog/article/ARTICLE_PAGE_NUM';
const ARTICLE_LOADING = 'blog/article/ARTICLE_LOADING';

const initArticleState = {
    articleList: [],
    type: '',
    keywords: '',
    pageNum: 1,
    loading: true
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initArticleState;
    switch (action.type) {
        case ARTICLE_LIST:
            return Object.assign({}, state, {
                articleList: action.list
            });
        case ARTICLE_TYPE:
            return Object.assign({}, state, {
                type: action.cates
            });
        case ARTICLE_KEYWORDS:
            return Object.assign({}, state, {
                keywords: action.keywords
            });
        case ARTICLE_PAGE_NUM:
            return Object.assign({}, state, {
                pageNum: action.num
            });
            case ARTICLE_LOADING:
                return Object.assign({}, state, {
                    loading: action.bool
                });
        default:
            return state;
    }
};

const setArticleLoading = function (bool) {
    return {
        type: ARTICLE_LOADING,
        bool: bool
    };
}
const setArticlePageNum = function (num) {
    return {
        type: ARTICLE_PAGE_NUM,
        num: num
    };
}

const setArticleKeywords = function (keywords) {
    return {
        type: ARTICLE_KEYWORDS,
        keywords: keywords
    };
}

const setArticleCates = function (cates) {
    return {
        type: ARTICLE_TYPE,
        cates: cates
    };
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
    setArticleCates,
    setArticleKeywords,
    setArticlePageNum,
    setArticleLoading
};

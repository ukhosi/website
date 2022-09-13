import {
    ADD_TALES_ARTICLE_SUCCESS,
    GET_TALES_ARTICLES_SUCCESS,
    EDIT_TALES_ARTICLE_SUCCESS,
    REMOVE_TALES_ARTICLE_SUCCESS
} from 'src/constants/constants';

export default (state = {
    lastRefKey: null,
    total: 0,
    items: [],
}, action) => {
    switch (action.type) {
        case GET_TALES_ARTICLES_SUCCESS:
            return {
                ...state,
                lastRefKey: action.payload.lastKey,
                total: action.payload.total,
                items: [...state.items, ...action.payload.talesArticles]
            };
        case ADD_TALES_ARTICLE_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case REMOVE_TALES_ARTICLE_SUCCESS:
            return {
                ...state,
                items: state.items.filter((talesArticle) => talesArticle.id !== action.payload)
            };
        case EDIT_TALES_ARTICLE_SUCCESS:
            return {
                ...state,
                items: state.items.map((talesArticle) => {
                    if (talesArticle.id === action.payload.id) {
                        return {
                            ...talesArticle,
                            ...action.payload.updates
                        };
                    }
                    return talesArticle;
                })
            };
        default:
            return state;
    }
};



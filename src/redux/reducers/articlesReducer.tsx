import {
    ADD_ARTICLE_SUCCESS,
    GET_ARTICLES_SUCCESS,
    EDIT_ARTICLE_SUCCESS,
    REMOVE_ARTICLE_SUCCESS
} from 'src/constants/constants';

export default (state = {
    lastRefKey: null,
    total: 0,
    items: [],
}, action) => {
    switch (action.type) {
        case GET_ARTICLES_SUCCESS:
            return {
                ...state,
                lastRefKey: action.payload.lastKey,
                total: action.payload.total,
                items: [...state.items, ...action.payload.articles]
            };
        case ADD_ARTICLE_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case REMOVE_ARTICLE_SUCCESS:
            return {
                ...state,
                items: state.items.filter((article) => article.id !== action.payload)
            };
        case EDIT_ARTICLE_SUCCESS:
            return {
                ...state,
                items: state.items.map((article) => {
                    if (article.id === action.payload.id) {
                        return {
                            ...article,
                            ...action.payload.updates
                        };
                    }
                    return article;
                })
            };
        default:
            return state;
    }
};



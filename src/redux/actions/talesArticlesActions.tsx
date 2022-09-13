import {
    ADD_TALES_ARTICLE,
    ADD_TALES_ARTICLE_SUCCESS,
    CANCEL_GET_TALES_ARTICLES,
    EDIT_TALES_ARTICLE,
    EDIT_TALES_ARTICLE_SUCCESS,
    GET_TALES_ARTICLES,
    GET_TALES_ARTICLES_SUCCESS,
    REMOVE_TALES_ARTICLE,
    REMOVE_TALES_ARTICLE_SUCCESS,
} from '../../constants/constants';


export const getTalesArticles = (lastRef: any) => ({
    type: GET_TALES_ARTICLES,
    payload: lastRef
});

export const getTalesArticlesSuccess = (talesArticles: any) => ({
    type: GET_TALES_ARTICLES_SUCCESS,
    payload: talesArticles
});

export const cancelGetTalesArticles = () => ({
    type: CANCEL_GET_TALES_ARTICLES
});

export const addTalesArticle = (talesArticle: any) => ({
    type: ADD_TALES_ARTICLE,
    payload: talesArticle
});

export const addTalesArticleSuccess = (talesArticle: any) => ({
    type: ADD_TALES_ARTICLE_SUCCESS,
    payload: talesArticle
});

export const removeTalesArticle = (id: any) => ({
    type: REMOVE_TALES_ARTICLE,
    payload: id
});

export const removeTalesArticleSuccess = (id: any) => ({
    type: REMOVE_TALES_ARTICLE_SUCCESS,
    payload: id
});

export const editTalesArticle = (id: any, updates: any) => ({
    type: EDIT_TALES_ARTICLE,
    payload: {
        id,
        updates
    }
});

export const editTalesArticleSuccess = (updates: any) => ({
    type: EDIT_TALES_ARTICLE_SUCCESS,
    payload: updates
});

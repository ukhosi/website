import {
    ADD_ARTICLE,
    ADD_ARTICLE_SUCCESS,
    CANCEL_GET_ARTICLES,
    EDIT_ARTICLE,
    EDIT_ARTICLE_SUCCESS,
    GET_ARTICLES,
    GET_ARTICLES_SUCCESS,
    REMOVE_ARTICLE,
    REMOVE_ARTICLE_SUCCESS,
} from '../../constants/constants';


export const getArticles = (lastRef: any) => ({
    type: GET_ARTICLES,
    payload: lastRef
  });
  
  export const getArticlesSuccess = (articles: any) => ({
    type: GET_ARTICLES_SUCCESS,
    payload: articles
  });
  
  export const cancelGetArticles = () => ({
    type: CANCEL_GET_ARTICLES
  });
  
  export const addArticle = (article: any) => ({
    type: ADD_ARTICLE,
    payload: article
  });
  
  export const addArticleSuccess = (article: any) => ({
    type: ADD_ARTICLE_SUCCESS,
    payload: article
  });
  
  export const removeArticle = (id: any) => ({
    type: REMOVE_ARTICLE,
    payload: id
  });
  
  export const removeArticleSuccess = (id: any) => ({
    type: REMOVE_ARTICLE_SUCCESS,
    payload: id
  });
  
  export const editArticle = (id: any, updates: any) => ({
    type: EDIT_ARTICLE,
    payload: {
      id,
      updates
    }
  });
  
  export const editArticleSuccess = (updates: any) => ({
    type: EDIT_ARTICLE_SUCCESS,
    payload: updates
  });
  
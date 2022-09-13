import articlesReducer from './articlesReducer';
import authReducer from './authReducer';
import talesArticlesReducer from './talesArticlesReducer';
import talesCollectionsReducer from './talesCollectionsReducer';


const rootReducer = {
    auth: authReducer,
    articles: articlesReducer,
    talesArticles: talesArticlesReducer,
    talesCollections: talesCollectionsReducer
};

export default rootReducer;
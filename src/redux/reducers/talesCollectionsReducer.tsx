import {
    ADD_TALES_COLLECTION_SUCCESS,
    GET_TALES_COLLECTIONS_SUCCESS,
    EDIT_TALES_COLLECTION_SUCCESS,
    REMOVE_TALES_COLLECTION_SUCCESS
} from 'src/constants/constants';

export default (state = {
    lastRefKey: null,
    total: 0,
    items: [],
}, action) => {
    switch (action.type) {
        case GET_TALES_COLLECTIONS_SUCCESS:
            return {
                ...state,
                lastRefKey: action.payload.lastKey,
                total: action.payload.total,
                items: [...state.items, ...action.payload.talesCollections]
            };
        case ADD_TALES_COLLECTION_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case REMOVE_TALES_COLLECTION_SUCCESS:
            return {
                ...state,
                items: state.items.filter((talesCollection) => talesCollection.id !== action.payload)
            };
        case EDIT_TALES_COLLECTION_SUCCESS:
            return {
                ...state,
                items: state.items.map((talesCollection) => {
                    if (talesCollection.id === action.payload.id) {
                        return {
                            ...talesCollection,
                            ...action.payload.updates
                        };
                    }
                    return talesCollection;
                })
            };
        default:
            return state;
    }
};



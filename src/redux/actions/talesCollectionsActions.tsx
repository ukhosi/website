import {
    GET_TALES_COLLECTIONS,
    GET_TALES_COLLECTIONS_SUCCESS,
    ADD_TALES_COLLECTION,
    ADD_TALES_COLLECTION_SUCCESS,
    REMOVE_TALES_COLLECTION,
    REMOVE_TALES_COLLECTION_SUCCESS,
    EDIT_TALES_COLLECTION,
    EDIT_TALES_COLLECTION_SUCCESS,
    CANCEL_GET_TALES_COLLECTIONS,
} from '../../constants/constants';


export const getTalesCollections = (lastRef: any) => ({
    type: GET_TALES_COLLECTIONS,
    payload: lastRef
});

export const getTalesCollectionsSuccess = (talesCollections: any) => ({
    type: GET_TALES_COLLECTIONS_SUCCESS,
    payload: talesCollections
});

export const cancelGetTalesCollections = () => ({
    type: CANCEL_GET_TALES_COLLECTIONS
});

export const addTalesCollection = (talesCollection: any) => ({
    type: ADD_TALES_COLLECTION,
    payload: talesCollection
});

export const addTalesCollectionSuccess = (talesCollection: any) => ({
    type: ADD_TALES_COLLECTION_SUCCESS,
    payload: talesCollection
});

export const removeTalesCollection = (id: any) => ({
    type: REMOVE_TALES_COLLECTION,
    payload: id
});

export const removeTalesCollectionSuccess = (id: any) => ({
    type: REMOVE_TALES_COLLECTION_SUCCESS,
    payload: id
});

export const editTalesCollection = (id: any, updates: any) => ({
    type: EDIT_TALES_COLLECTION,
    payload: {
        id,
        updates
    }
});

export const editTalesCollectioneSuccess = (updates: any) => ({
    type: EDIT_TALES_COLLECTION_SUCCESS,
    payload: updates
});

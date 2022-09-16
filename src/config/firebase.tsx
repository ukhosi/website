import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

class Firebase {
    [x: string]: any;
    constructor() {
        this.firebase = initializeApp(firebaseConfig)
        this.auth = getAuth();
        this.db = getFirestore();
    }

    //Auth Actions
    signIn = (email: string, password: string) =>
        signInWithEmailAndPassword(this.auth, email, password);

    signInWithGoogle = () =>
        signInWithPopup(this.auth, new GoogleAuthProvider());

    signOut = () => signOut(this.auth);

    getUser = (uid: string) => getDoc(doc(this.db, 'users', uid));

    //Articles Actions

    getSingleArticle = (id: any) => this.db.collection('articles').doc(id).get();

    getArticles = (lastRefKey: any) => {
        let didTimeout = false;

        return new Promise((resolve, reject) => {
            (async () => {
                if (lastRefKey) {
                    try {
                        const query = this.db
                            .collection('articles')
                            .orderBy('createdAt', 'desc')
                            .startAfter(lastRefKey)
                            .limit(6);

                        const snapshot = await query.get();
                        const articles = [];
                        snapshot.forEach((doc: { id: any; data: () => any; }) =>
                            articles.push({ id: doc.id, ...doc.data() })
                        );
                        const lastKey = snapshot.docs[snapshot.docs.length - 1];

                        resolve({ articles, lastKey });
                    } catch (e) {
                        reject(e?.message || ':( Failed to fetch articles.');
                    }
                } else {
                    const timeout = setTimeout(() => {
                        didTimeout = true;
                        reject(new Error('Request timeout, please try again'));
                    }, 15000);

                    try {
                        const totalQuery = await this.db.collection('articles').get();
                        const total = totalQuery.docs.length;
                        const query = this.db
                            .collection('articles')
                            .orderBy('createdAt', 'desc')
                            .limit(6);
                        const snapshot = await query.get();

                        clearTimeout(timeout);
                        if (!didTimeout) {
                            const articles = [];
                            snapshot.forEach((doc: { id: any; data: () => any; }) =>
                                articles.push({ id: doc.id, ...doc.data() })
                            );
                            const lastKey = snapshot.docs[snapshot.docs.length - 1];

                            resolve({ articles, lastKey, total });
                        }
                    } catch (e) {
                        if (didTimeout) return;
                        reject(e?.message || ':( Failed to fetch articles.');
                    }
                }
            })();
        });
    };

    addArticle = (id: any, article: any) =>
        this.db.collection('articles').doc(id).set(article);

    generateKey = () => this.db.collection('articles').doc().id;

    storeImage = async (id: any, folder: any, imageFile: any) => {
        const snapshot = await this.storage.ref(folder).child(id).put(imageFile);
        const downloadURL = await snapshot.ref.getDownloadURL();

        return downloadURL;
    };

    deleteImage = (id: any) => this.storage.ref('articles').child(id).delete();

    editArticle = (id: any, updates: any) =>
        this.db.collection('articles').doc(id).update(updates);

    removeArticle = (id: any) => this.db.collection('articles').doc(id).delete();


    // tales Articles Actions
    getSingleTalesArticle = (id: any) => this.db.collection('talesArticles').doc(id).get();

    getTalesArticles = (lastRefKey: any) => {
        let didTimeout = false;

        return new Promise((resolve, reject) => {
            (async () => {
                if (lastRefKey) {
                    try {
                        const query = this.db
                            .collection('talesArticles')
                            .orderBy('createdAt', 'desc')
                            .startAfter(lastRefKey)
                            .limit(6);

                        const snapshot = await query.get();
                        const talesArticles = [];
                        snapshot.forEach((doc: { id: any; data: () => any; }) =>
                            talesArticles.push({ id: doc.id, ...doc.data() })
                        );
                        const lastKey = snapshot.docs[snapshot.docs.length - 1];

                        resolve({ talesArticles, lastKey });
                    } catch (e) {
                        reject(e?.message || ':( Failed to fetch talesArticles.');
                    }
                } else {
                    const timeout = setTimeout(() => {
                        didTimeout = true;
                        reject(new Error('Request timeout, please try again'));
                    }, 15000);

                    try {
                        const totalQuery = await this.db.collection('talesArticles').get();
                        const total = totalQuery.docs.length;
                        const query = this.db
                            .collection('talesArticles')
                            .orderBy('createdAt', 'desc')
                            .limit(6);
                        const snapshot = await query.get();

                        clearTimeout(timeout);
                        if (!didTimeout) {
                            const talesArticles = [];
                            snapshot.forEach((doc: { id: any; data: () => any; }) =>
                                talesArticles.push({ id: doc.id, ...doc.data() })
                            );
                            const lastKey = snapshot.docs[snapshot.docs.length - 1];

                            resolve({ talesArticles, lastKey, total });
                        }
                    } catch (e) {
                        if (didTimeout) return;
                        reject(e?.message || ':( Failed to fetch talesArticles.');
                    }
                }
            })();
        });
    };

    addTalesArticle = (id: any, talesArticle: any) =>
        this.db.collection('talesArticles').doc(id).set(talesArticle);

    generateTalesKey = () => this.db.collection('talesArticles').doc().id;

    storeTalesImage = async (id: any, folder: any, imageFile: any) => {
        const snapshot = await this.storage.ref(folder).child(id).put(imageFile);
        const downloadURL = await snapshot.ref.getDownloadURL();

        return downloadURL;
    };

    deleteTalesImage = (id: any) => this.storage.ref('talesArticles').child(id).delete();

    editTalesArticle = (id: any, updates: any) =>
        this.db.collection('talesArticles').doc(id).update(updates);

    removeTalesArticle = (id: any) => this.db.collection('talesArticles').doc(id).delete();


    //Tales Collections Actions
    getSingleTalesCollection = (id: any) => this.db.collection('talesCollections').doc(id).get();

    getTalesCollections = (lastRefKey: any) => {
        let didTimeout = false;

        return new Promise((resolve, reject) => {
            (async () => {
                if (lastRefKey) {
                    try {
                        const query = this.db
                            .collection('talesCollections')
                            .orderBy('createdAt', 'desc')
                            .startAfter(lastRefKey)
                            .limit(6);

                        const snapshot = await query.get();
                        const talesCollections = [];
                        snapshot.forEach((doc: { id: any; data: () => any; }) =>
                            talesCollections.push({ id: doc.id, ...doc.data() })
                        );
                        const lastKey = snapshot.docs[snapshot.docs.length - 1];

                        resolve({ talesCollections, lastKey });
                    } catch (e) {
                        reject(e?.message || ':( Failed to fetch talesCollections.');
                    }
                } else {
                    const timeout = setTimeout(() => {
                        didTimeout = true;
                        reject(new Error('Request timeout, please try again'));
                    }, 15000);

                    try {
                        const totalQuery = await this.db.collection('talesCollections').get();
                        const total = totalQuery.docs.length;
                        const query = this.db
                            .collection('talesCollections')
                            .orderBy('createdAt', 'desc')
                            .limit(6);
                        const snapshot = await query.get();

                        clearTimeout(timeout);
                        if (!didTimeout) {
                            const talesCollections = [];
                            snapshot.forEach((doc: { id: any; data: () => any; }) =>
                                talesCollections.push({ id: doc.id, ...doc.data() })
                            );
                            const lastKey = snapshot.docs[snapshot.docs.length - 1];

                            resolve({ talesCollections, lastKey, total });
                        }
                    } catch (e) {
                        if (didTimeout) return;
                        reject(e?.message || ':( Failed to fetch talesCollections.');
                    }
                }
            })();
        });
    };

    addTalesCollection = (id: any, talesCollection: any) =>
        this.db.collection('talesCollections').doc(id).set(talesCollection);

    generateTalesCollectionKey = () => this.db.collection('talesCollections').doc().id;

    storeTalesCollectionImage = async (id: any, folder: any, imageFile: any) => {
        const snapshot = await this.storage.ref(folder).child(id).put(imageFile);
        const downloadURL = await snapshot.ref.getDownloadURL();

        return downloadURL;
    };

    deleteTalesCollectionImage = (id: any) => this.storage.ref('talesCollections').child(id).delete();

    editTalesCollection = (id: any, updates: any) =>
        this.db.collection('talesCollections').doc(id).update(updates);

    removeTalesCollection = (id: any) => this.db.collection('talesCollections').doc(id).delete();

}

const firebaseInstance = new Firebase();

export default firebaseInstance;




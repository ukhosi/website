import {
    ON_AUTHSTATE_FAIL,
    ON_AUTHSTATE_SUCCESS,
    SET_AUTH_PERSISTENCE,
    SIGNIN,
    SIGNIN_WITH_GOOGLE,
    SIGNOUT
} from 'src/constants/constants';
import { call, put } from 'redux-saga/effects';
import { signInSuccess, signOutSuccess } from 'src/redux/actions/authActions';
import { setAuthenticating, setAuthStatus } from '../actions/miscActions';
import firebase from 'src/config/firebase';

function* handleError(e) {
    const obj = { success: false, type: 'auth', isError: true };
    yield put(setAuthenticating(false));

    switch (e.code) {
        case 'auth/network-request-failed':
            yield put(setAuthStatus({ ...obj, message: 'Network error has occured. Please try again.' }));
            break;
        case 'auth/email-already-in-use':
            yield put(setAuthStatus({ ...obj, message: 'Email is already in use. Please use another email' }));
            break;
        case 'auth/wrong-password':
            yield put(setAuthStatus({ ...obj, message: 'Incorrect email or password' }));
            break;
        case 'auth/user-not-found':
            yield put(setAuthStatus({ ...obj, message: 'Incorrect email or password' }));
            break;
        case 'auth/reset-password-error':
            yield put(setAuthStatus({ ...obj, message: 'Failed to send password reset email. Did you type your email correctly?' }));
            break;
        default:
            yield put(setAuthStatus({ ...obj, message: e.message }));
            break;
    }
}

function* initRequest() {
    yield put(setAuthenticating());
    yield put(setAuthStatus({}));
}


function* authSaga({ type, payload }) {
    switch (type) {
        case SIGNIN:
            try {
                yield initRequest();
                yield call(firebase.signIn, payload.email, payload.password);
            } catch (e) {
                yield handleError(e);
            }
            break;
        case SIGNIN_WITH_GOOGLE:
            try {
                yield initRequest();
                yield call(firebase.signInWithGoogle);
            } catch (e) {
                yield handleError(e);
            }
            break;

        case SIGNOUT: {
            try {
                yield initRequest();
                yield call(firebase.signOut);
                yield put(signOutSuccess());
                yield put(setAuthenticating(false));
            } catch (e) {
                console.log(e);
            }
            break;

        }
        case ON_AUTHSTATE_SUCCESS: {
            const snapshot = yield call(firebase.getUser, payload.uid);

            if (snapshot.data()) { // if user exists in database
                const user = snapshot.data();

                yield put(signInSuccess({
                    id: payload.uid,
                    role: user.role,
                    provider: payload.providerData[0].providerId
                }));
            } else if (payload.providerData[0].providerId !== 'password' && !snapshot.data()) {
                // add the user if auth provider is not password
                const user = {
                    fullname: payload.displayName ? payload.displayName : 'User',
                    email: payload.email,
                    address: '',
                    role: 'USER',
                };
                yield call(firebase.addUser, payload.uid, user);
                yield put(signInSuccess({
                    id: payload.uid,
                    role: user.role,
                    provider: payload.providerData[0].providerId
                }));
            }

            yield put(setAuthStatus({
                success: true,
                type: 'auth',
                isError: false,
                message: 'Successfully signed in. Redirecting...'
            }));
            yield put(setAuthenticating(false));
            break;
        }
        case ON_AUTHSTATE_FAIL: {
            yield put(signOutSuccess());
            break;
        }
        case SET_AUTH_PERSISTENCE: {
            try {
                yield call(firebase.setAuthPersistence);
            } catch (e) {
                console.log(e);
            }
            break;
        }
        default: {
            throw new Error('Unexpected Action Type.');
        }
    }
}

export default authSaga;

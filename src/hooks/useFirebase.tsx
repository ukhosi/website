import { useEffect, useState } from "react";
import {
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "src/config/firebaseConfig";


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("inside state change", user);
                setUser(user);
            } else {
                setUser({})
            }
        });
    }, [auth]);

    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
        });
    };

    return {
        user,
        error,
        logout,
        signInUsingGoogle,
    };
};

export default useFirebase;
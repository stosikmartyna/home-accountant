import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userPlants, setUserPlants] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(setUser);
    }, []);

    useEffect(() => {
        user && firebase.database().ref(`users/${user.uid}/plants`)
            .once('value')
            .then(snapshot => {
                const userPlants = snapshot.val() || [];
                setUserPlants(userPlants);
            })
            .catch(err => console.warn(err.message));
    }, [user])

    return (
        <AuthContext.Provider value={{user, userPlants}}>
            { children }
        </AuthContext.Provider>
    )
}
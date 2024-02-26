import { redirect } from "react-router-dom";

export function getTokenDuration() {
    // get token duration from the local storage.
    const storedExpirationDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime(); // +ve value if token is not expired. // -ve value if token is expired.
    return duration;
}

export function getAuthToken() {
    // get token from the local storage.
    const token = localStorage.getItem('token');

    if(!token) {
        return null;
    }
    
    const tokenDuration = getTokenDuration();

    if( tokenDuration < 0 ) {
        return "EXPIRED";
    }

    return token;
}

export function tokenLoader() {
    return getAuthToken();
}

export function checkAuthLoader() {
    const token = getAuthToken();

    if (!token) {
        return redirect('/auth');
    }

    return null;
}
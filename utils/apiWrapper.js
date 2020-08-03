import axios from 'axios'
import { AsyncStorage } from 'react-native';

const BASE_URL = 'http://localhost:8080/';

/* Event manipulation */

export const addEvent = (event) => {
    /*
        Dispatch redux action
    */
    return;
}

export const removeEvent = (event) => {
    /*
        Dispatch redux action
    */
    return;
}

/* Event sync */

export const getEvents = () => {

    const requestString = `${BASE_URL}events`;
    const token = await AsyncStorage.getItem('token');

    return axios
        .get(requestString, {
            headers: {
                'Content-Type': 'application/JSON',
                Authorization: `Bearer ${token}`,
            },
        })
        .catch(error => {
            return {
                type: 'GET_EVENT_DATA_FAIL',
                error,
            };
        });
}

export const syncEvents = (events) => {

    const requestString = `${BASE_URL}events/sync`;
    const token = await AsyncStorage.getItem('token');

    return axios
        .post(
            requestString,
            { events },
            {
                headers: {
                'Content-Type': 'application/JSON',
                Authorization: `Bearer ${token}`,
                },
            },
        )
        .catch(error => {
            return {
                type: 'POST_EVENT_DATA_FAIL',
                error,
            };
        });
}

export const getSuggestion = () => {

    const requestString = `${BASE_URL}events/sync`;
    const token = await AsyncStorage.getItem('token');

    return axios
        .get(
            requestString,
            {
                headers: {
                'Content-Type': 'application/JSON',
                Authorization: `Bearer ${token}`,
                },
            },
        )
        .catch(error => {
            return {
                type: 'GET_EVENT_DATA_FAIL',
                error,
            };
        });
}

/* Authentication */

export const login = (username, password) => {
    const requestString = `${BASE_URL}login`;
    return axios
        .post(
            requestString,
            { username, password },
            {
                headers: {
                'Content-Type': 'application/JSON',
                },
            },
        ).then(response => {
            await AsyncStorage.setItem(
                "token", response.token
            )
        })
        .catch(error => {
            return {
                type: 'POST_LOGIN_DATA_FAIL',
                error,
            };
        });
}

export const logout = () => {
    AsyncStorage.removeItem('token')
}
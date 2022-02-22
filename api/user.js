/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import instance from "./config";

export const signups = (user) => {
    const url = `/signup`;
    return instance.post(url, user);
};
export const signin = (user) => {
    const url = `/signin`;
    return instance.post(url, user);
};
export const getUser = () => {
    const url = `users/`;
    return instance.get(url);
};
export const removeUser = (id) => {
    const url = `/users/${id}`;
    return instance.delete(url);
};

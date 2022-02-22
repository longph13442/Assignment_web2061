/* eslint-disable import/prefer-default-export */
import instance from "./config";

export const getAll = () => {
    const url = `post/`;
    return instance.get(url);
};

export const get = (id) => {
    const url = `/post/${id}`;
    return instance.get(url);
};

export const remove = (id) => {
    const url = `/post/${id}`;
    return instance.delete(url);
};
export const adds = (post) => {
    const url = `post/`;
    return instance.post(url, post);
};

// export const signin = (user) => {
//     const url = `signin/`;
//     return instance.post(url, user);
// };

import * as user from '../api/user.js';

export async function login(userName, password) {
    return user.login(userName, password)
    .then(res => res.json());
}
export const setLoginToken = (token) => ({
    type: 'SET_TOKEN',
    payload: token,
});

export const clearToken = () => ({
    type: 'CLEAR_TOKEN',
});
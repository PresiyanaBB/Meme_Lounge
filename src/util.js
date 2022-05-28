export function setUserData(data){
    sessionStorage.setItem('userData',JSON.stringify(data));
}

export function getUserData(){
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function clearUserData(){
    sessionStorage.removeItem('userData');
}


///////////WILL CHANGE GET FROM TESTS////////////////////
export const endpoints = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
    all: '/data/memes?sortBy=_createdOn%20desc', //getAllPosts in data.js
    create: '/data/memes',
    details: '/data/memes/',
    delete: '/data/memes/',
    edit: '/data/memes/',
    profile:(userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    main: '/memes' //change
};



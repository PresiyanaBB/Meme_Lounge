import { endpoints } from '../util.js';
import * as api from './api.js';

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

export async function getAllPosts(){
    return api.get(endpoints.all);
}

export async function createPost(post){
    return api.post(endpoints.create,post);
}

export function getPostById(id){
    return api.get(endpoints.details + id);
}

export function deletePostById(id){
    return api.del(endpoints.delete + id);
}

export function editPostByIdAndPost(id,post){
    return api.put(endpoints.edit + id,post);
}

export function getMyPostsByUserId(userId){
    return api.get(endpoints.profile(userId));
}
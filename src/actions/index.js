import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";
export const SHOW_POST = "SHOW_POST";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = '?key=ayoubsinchi';

export function fetchPosts(){

  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: "FETCH_POSTS",
    payload: request
  };
}

export function showPost(id){
  return {
    type: SHOW_POST,
    payload: {}
  };
};

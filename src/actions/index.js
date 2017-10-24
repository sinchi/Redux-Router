export function fetchPosts(){
  const post = { title: "Voyage" };
  return {
    type: "FETCH_POSTS",
    payload: posts
  };
}

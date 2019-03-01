export default function getPosts({ url, numberOfPosts }) {
  return fetch(`${url}?limit=${numberOfPosts}`)
    .then(response => response.json())
    .catch(error => error);
}

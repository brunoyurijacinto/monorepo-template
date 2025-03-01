import axios from 'axios'

export async function GetUserById(id: number): Promise<any> {
  return (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
}

export async function GetUsers(): Promise<any> {
  return (await axios.get(`https://jsonplaceholder.typicode.com/users`)).data
}

export async function GetPostsByUserId(id: number): Promise<any> {
  return (await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)).data
}

export async function GetCommentsByPostId(id: number): Promise<any> {
  return (await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)).data
}

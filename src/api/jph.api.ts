import axios from "axios";

import { IPostsItemProps } from "../components/posts-item/interfaces/posts-item.interface";

export class JphApi {
  private readonly API_URL = 'https://jsonplaceholder.typicode.com'

  async getAllPostsPages(postsPerPage: number = 10): Promise<number> {
    const posts = await (await axios.get(`${this.API_URL}/posts`)).data
    return Math.ceil(posts.length / postsPerPage)
  }

  async getPosts(page: number = 1, limit: number = 10): Promise<IPostsItemProps[]> {
    const startEl = page * limit - limit
    return (await axios.get(`${this.API_URL}/posts?_start=${startEl}&_limit=${limit}`)).data
  }

  async getPost(id: string): Promise<IPostsItemProps> {
    return (await axios.get(`${this.API_URL}/posts/${id}`)).data
  }

  async getPostComments(id: string) {
    return (await axios.get(`${this.API_URL}/posts/${id}/comments`)).data
  }

  async getUserPosts(userId: string) {
    return (await axios.get(`${this.API_URL}/posts?userId=${userId}`)).data
  }
}
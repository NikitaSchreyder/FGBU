import { useQuery } from "react-query"
import { JphApi } from "../../../api/jph.api"

import { IPostsItemProps } from "../../../components/posts-item/interfaces/posts-item.interface"

export const useUserPosts = (userId: string) => {
  const jphApi = new JphApi() 
  const userPosts = useQuery<IPostsItemProps[]>(['user-post', userId], () => jphApi.getUserPosts(userId))
  return userPosts
}
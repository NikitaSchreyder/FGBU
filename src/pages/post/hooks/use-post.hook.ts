import { useQuery } from "react-query"
import { JphApi } from "../../../api/jph.api"

export const usePost = (id: string) => {
  const jphApi = new JphApi() 
  const post = useQuery(['post', id], () => jphApi.getPost(id))
  const postComments = useQuery(['post-comments', id], () => jphApi.getPostComments(id))
  return { post, postComments }
}
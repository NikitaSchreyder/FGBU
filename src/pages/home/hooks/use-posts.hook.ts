import { useQuery } from "react-query"

import { JphApi } from "../../../api/jph.api"

export const usePosts = (page: number, limit: number = 10) => {
  const jphApi = new JphApi()

  const posts = useQuery({
    queryKey: ['posts', page],
    queryFn: () => jphApi.getPosts(page, limit),
    getPreviousPageParam: () => jphApi.getPosts(page - 1), 
    getNextPageParam: () => jphApi.getPosts(page + 1)
  })

  const { data: pagesCount } = useQuery('all-posts-pages', () => jphApi.getAllPostsPages())
  return { posts, pagesCount }
}
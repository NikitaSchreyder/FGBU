import { FC } from "react";
import { Link, useParams } from "react-router-dom";

import { usePost } from "./hooks/use-post.hook";
import { TPostPageParams } from "./types/post-page.types";
import styles from './styles/post-page.module.css'

import PostComments from "../../components/post-comments/PostComments";

const PostPage: FC = () => {
  const { id } = useParams<TPostPageParams>()
  const { post, postComments } = usePost(id as string)

  const { data: postData } = post
  const { data: postCommentsData } = postComments

  if(post.isLoading || postComments.isLoading) return (
    <div className={styles.postPage}>
      <p>Загрузка</p>
    </div>
  )

  if(post.isError || postComments.isError || !postData) return (
    <div className={styles.postPage}>
      <p>Ошибка загрузки</p>
    </div>
  )

  return (
    <div className={styles.postPage}>
      <Link to={'/'} className={styles.backBtn}>back to posts</Link>
      <div className={styles.post}>
        <p className={styles.postTitle}>{postData.title}</p>
        <p>Author <Link to={`/user-posts/${postData.userId}`}>{`User${postData.userId}`}</Link></p>
        <p className={styles.postBody}>{postData.body}</p>
      </div>
      <PostComments comments={postCommentsData} />
    </div>
  )
}

export default PostPage
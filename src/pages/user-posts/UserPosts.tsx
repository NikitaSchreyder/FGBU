import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { useUserPosts } from "./hooks/use-user-posts.hook";

import { TUserPostsPageParams } from "./types/user-posts.types";
import styles from './styles/user-posts.module.css'

import Posts from "../../components/posts/Posts";

const UserPosts: FC = () => {
  const { id } = useParams<TUserPostsPageParams>()
  const { data: posts, isError, isLoading } = useUserPosts(id as string)

  if(isLoading) return (
    <div className={styles.userPostsPage}>
      <p>Загрузка</p>
    </div>
  )

  if(isError) return (
    <div className={styles.userPostsPage}>
      <p>Ошибка загрузки</p>
    </div>
  )

  if(!posts) return (
    <div className={styles.userPostsPage}>
      <p>У пользователя нет постов</p>
    </div>
  )

  return (
    <div className={styles.userPostsPage}>
      <Link to={'/'} className={styles.backBtn}>back to all posts</Link>
      <h1>User{id} posts</h1>
      <Posts posts={posts} />
    </div>
  )
}

export default UserPosts
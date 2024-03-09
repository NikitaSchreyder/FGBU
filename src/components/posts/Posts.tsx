import { FC } from "react";

import { IPostsProps } from "./interfaces/posts.interface";
import styles from './styles/posts-list.module.css'

import PostsItem from "../posts-item/PostsItem";

const Posts: FC<IPostsProps> = ({ posts }) => {
  const renderPosts = posts.map(post => <PostsItem key={post.id} {...post} />)

  return (
    <ul className={styles.postsList}>
      {renderPosts}
    </ul>
  )
}

export default Posts
import { FC } from "react";
import { Link } from "react-router-dom";

import { IPostsItemProps } from "./interfaces/posts-item.interface";
import styles from './styles/posts-item.module.css'

const PostsItem: FC<IPostsItemProps> = ({ id, title, body }) => {
  return (
    <li className={styles.postsListItem}> 
      <Link className={styles.postsListItem_title} to={`/post/${id}`}>{title}</Link>
      <p className={styles.postsListItem_body}>{body}</p>
    </li>
  )
}

export default PostsItem
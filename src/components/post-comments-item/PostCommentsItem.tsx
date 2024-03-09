import { FC } from "react";

import { IPostCommentsItemProps } from "./interfaces/post-comments-item.interface";
import styles from './styles/post-comments-item.module.css'

const PostCommentsItem: FC<IPostCommentsItemProps> = ({ name, email, body }) => {
  
  return (
    <li className={styles.postCommentsItem}>
      <p className={styles.postCommentsItemName}>{name}</p>
      <p className={styles.postCommentsItemEmail}>{email}</p>
      <p className={styles.postCommentsItemBody}>{body}</p>
    </li>
  )
}

export default PostCommentsItem
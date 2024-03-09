import { FC } from "react";

import { IPostCommentsProps } from "./interfaces/post-comments.interface";
import styles from './styles/post-comments.module.css'
import PostCommentsItem from "../post-comments-item/PostCommentsItem";

const PostComments: FC<IPostCommentsProps> = ({ comments }) => {
  const renderPostComments = comments.map(comment => <PostCommentsItem key={comment.id} {...comment} />)

  return (
    <div className={styles.postComments}>
      <p className={styles.postCommentsTitle}>Comments</p>
      <ul className={styles.postCommentsList}>
        {renderPostComments}
      </ul>
    </div>
  )
}

export default PostComments
import { FC, useState } from "react";
import { usePosts } from "./hooks/use-posts.hook";

import styles from './styles/home-page.module.css'

import Pagination from "../../components/pagination/Pagination";
import Posts from "../../components/posts/Posts";

const HomePage: FC = () => {
  const [page, setPage] = useState<number>(1)
  const { pagesCount, posts } = usePosts(page)
  const { data: postsData, isError, isLoading } = posts
  
  if(isLoading) return (
    <div className={styles.homePage}>
      <p>Загрузка</p>
    </div>
  )

  if(isError) return (
    <div className={styles.homePage}>
      <p>Ошибка загрузки</p>
    </div>
  )

  if(!postsData?.length) return (
    <div className={styles.homePage}>
      <p>Нет постов</p>
    </div>
  )
  
  return (
    <div className={styles.homePage}>
      <h1>All posts</h1>
      <Posts posts={postsData} />
      <Pagination  
        pagesCount={pagesCount as number}
        onChangePage={setPage}
        currentPage={page}
        start={1}
      />
    </div>
  )
}

export default HomePage
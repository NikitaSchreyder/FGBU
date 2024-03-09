import { FC } from "react";

import { IPaginationProps } from "./interfaces/pagination.interface";
import styles from './styles/pagination.module.css'

const Pagination: FC<IPaginationProps> = ({ currentPage, start, onChangePage, pagesCount }) => {
  const onDecrementPage = () => onChangePage(currentPage - 1)
  const onIncrementPage = () => onChangePage(currentPage + 1)

  return (
    <div className={styles.pagination}>
      <button onClick={onDecrementPage} className={styles.paginationPrevBtn} disabled={currentPage === start}>-</button>
      <button onClick={onIncrementPage} className={styles.paginationNextBtn} disabled={currentPage === pagesCount}>+</button>
    </div>
  )
}

export default Pagination
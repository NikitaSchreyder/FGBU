export interface IPaginationProps {
  pagesCount: number
  currentPage: number
  start: number
  onChangePage: (page: number) => void
}
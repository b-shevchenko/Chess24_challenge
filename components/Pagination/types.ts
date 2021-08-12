export type Props = {
  currentPage: number;
  onPageChange: (page: number, shouldGetNewData: boolean) => void;
  numberOfPages: number;
}

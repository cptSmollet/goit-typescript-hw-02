import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <div>
      <button onClick={onLoadMore} className={css.loadMoreBtn} type="button">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;

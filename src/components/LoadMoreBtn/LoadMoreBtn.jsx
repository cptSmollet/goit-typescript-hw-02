import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div>
      <button onClick={onLoadMore} className={css.loadMoreBtn} type="button">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
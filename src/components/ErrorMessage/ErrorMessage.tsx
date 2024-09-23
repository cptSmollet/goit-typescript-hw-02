import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  errorMessage: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => {
  return (
    <div>
      <p className={css.errorMessage}>
        {errorMessage}. Please, try again later...
      </p>
    </div>
  );
};

export default ErrorMessage;

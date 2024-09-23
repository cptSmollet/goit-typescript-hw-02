import css from "./SearchBar.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeedbackSchema = Yup.object().shape({
  searchTerm: Yup.string()
    .min(2, "Too Short! Min 2 symbols.")
    .max(50, "Too Long! Max 50 symbols.")
    .required("Required! Enter any word..."),
});

interface SearchBarProps {
  onSubmit: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (values: { searchTerm: string }, actions: any) => {
    if (!values.searchTerm.trim()) {
      toast.error("Search term cannot be empty!");
      return;
    }

    onSubmit(values.searchTerm);
    actions.resetForm();
  };

  return (
    <div>
      <header className={css.searchBar}>
        <ToastContainer />
        <Formik
          initialValues={{ searchTerm: "" }}
          onSubmit={handleSubmit}
          validationSchema={FeedbackSchema}
        >
          <Form>
            <label className={css.formLabel}>
              <Field
                className={css.Input}
                type="text"
                name="searchTerm"
                placeholder="Search images and photos"
              />
            </label>
            <button className={css.Btn} type="submit">
              Search
            </button>
            <br />
            <ErrorMessage
              className={css.formErrorMessage}
              name="searchTerm"
              component="span"
            />
          </Form>
        </Formik>
      </header>
    </div>
  );
};

export default SearchBar;

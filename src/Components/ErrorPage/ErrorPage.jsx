import { Link } from "react-router-dom";
import error from "../../assets/404.gif"

const ErrorPage = () => {
  return (
    <section className="flex items-center h-full">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-4">
        <div className="text-center">
          <div className="mb-8 dark:text-gray-600">
            <img src={error} alt="" className="w-3/5 mx-auto"/>
          </div>
          <p className="text-xl font-semibold md:text-3xl">
            Sorry, we could not find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            But do not worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;

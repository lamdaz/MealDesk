import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#E8E8E8] to-[#F5F5F5] px-6">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-extrabold text-gray-400 animate-bounce">
          404
        </h1>
        <h2 className="text-3xl font-bold text-gray-700 mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-[#896C6C] text-white rounded-full font-semibold hover:bg-[#7C5A5A] transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;

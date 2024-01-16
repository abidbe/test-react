import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const { status } = useRouteError();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Error {status}</h1>
        <p className="text-lg text-gray-100 mb-8">Oops! Something went wrong.</p>
        <a href="javascript:history.go(-1);" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Go Back</a>
      </div>
    </>
  );
}
export default ErrorPage;

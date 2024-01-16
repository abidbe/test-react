import {useLoaderData} from "react-router-dom";

function Show() {
const post = useLoaderData();

  return (
    <>
      <h1 className="text-6xl my-6">{post?.title}</h1>
      <div className="container mx-auto flex flex-col text-start">
        <div>{post?.body}</div>
      </div>
    </>
  );
}
export default Show;

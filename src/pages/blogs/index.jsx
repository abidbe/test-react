import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Blogs() {
  const posts = useLoaderData();
  return (
    <>
      <h1 className="text-6xl my-6">External blogs</h1>
      <div className="container mx-auto flex flex-col text-start">
        {posts.map((post, index) => (
          <div key={index}>
            <Link to={`/blogs/${post.id}`}>- {post.title}</Link>
          </div>
        ))}
      </div>
    </>
  );
}
export default Blogs;

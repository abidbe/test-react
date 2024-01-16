import { useState } from "react";
import blogs from "../posts.json";
import Search from "../components/Search";
import Article from "../components/Article";

function HomePage() {
  const [posts, setPosts] = useState(blogs);
  const [totalPosts, setTotalPosts] = useState(blogs.length); 

  const onSearch = (searchTerm) => {
    const filteredPosts = blogs.filter((post) =>
      post.title.includes(searchTerm)||post.description.includes(searchTerm)||post.tags.includes(searchTerm)||post.date.includes(searchTerm)
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };
  

  return (
    <>
      <h1 className="text-6xl my-6">Simple Blog</h1>
      <Search onSearchChange={onSearch} totalPosts={totalPosts} />
      <div className="flex gap-2 flex-wrap p-12">
        {posts.map((props, index) => (
          <Article {...props} key={index} />
        ))}
      </div>
      
      
    </>
  );
}
export default HomePage;

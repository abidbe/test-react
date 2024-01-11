const NewArticle = () => {
  return <span className="text-sm bg-yellow-300 text-slate-700 px-2 py-1 rounded-full m-2">New!</span>;
};
const OldArticle = () => {
  return <span className="text-sm bg-slate-600 px-2 py-1 rounded-full m-2 text-white">Old!</span>;
};
function Article(props) {
  
  return (
    <div className="my-2 max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      <div className="md:flex gap-2">
        <div className="md:flex-shrink-0"></div>
        <div className="p-8">
          <h3 className="text-xl font-semibold text-black">{props.title} {props.isNew ? <NewArticle /> : <OldArticle />}</h3>
          <p className="text-gray-600 mt-2">{props.description}</p>
          <div className="text-sm text-gray-500 mt-2">
            Date: {props.date}, Tags: {props.tags.join(",")}
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 focus:outline-none focus:ring focus:ring-blue-300">Click Me</button>
        </div>
      </div>
    </div>
  );
}
export default Article;

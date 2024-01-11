import { useState } from "react";


function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
    props.onSearchChange(searchTerm);
  };

  return (
    <>
      <div>
        Cari Artikel :{" "}
        <input
          className="text-black bg-slate-100 rounded-md m-2"
          type="text"
          onChange={onSearchChange}
        />
      </div>
      <small>Ditemukan {props.totalPosts} data dengan kata : {search}</small>
    </>
  );
}


export default Search;

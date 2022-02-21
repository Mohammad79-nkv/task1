import "./search.css";
import { GoSearch } from "react-icons/go";

const Search = () => {
  return (
    <section className="serach-container">
      <div className="manager">
        <button>مدیریت</button>
      </div>
      <div>
        <div className="search">
          <div className="serach-input">
            <input placeholder="جستجو کن" />
            <GoSearch />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;

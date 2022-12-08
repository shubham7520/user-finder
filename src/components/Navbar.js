import { useNavigate } from "react-router-dom";

function Navbar({ searchText, setSearchText }) {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className=" nav-content">
        <div className="flex-box search-bar-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
            onKeyUp={(e) => {
              const keyCode = e.code;
              if (keyCode === "Enter") {
                navigate(`/search?q=${searchText}`);
                window.location.reload();
              }
            }}
          />
          <div
            className="search-btn"
            onClick={(e) => {
              navigate(`/search?q=${searchText}`);
              window.location.reload();
            }}
          >
            🔍
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

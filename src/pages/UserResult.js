import { useState, useEffect } from "react";

function UserResult() {
  const queryParams = new URLSearchParams(window.location.search);
  const user = queryParams.get("u");
  const [userResult, setUserResult] = useState(null);
  const [repoResult, setRepoResult] = useState([]);

  useEffect(() => {
    const search = async () => {
      let resp = await fetch(`https://api.github.com/users/${user}`);
      let response = await resp.json();
      // console.log(response);
      if (response) setUserResult(response);

      resp = await fetch(`https://api.github.com/users/${user}/repos`);
      response = await resp.json();
      // console.log(response);
      if (response) setRepoResult(response);
    };
    search();
  }, []);

  return (
    <div className="flex-box black">
      <div className="container  flex-box search-item-container">
        {userResult && (
          <div className="user-container">
            <div className="result-user-img-box">
              <img src={userResult.avatar_url} className="result-user-img" />
              <div className="username">
                <h3>{userResult.name}</h3>
                <div className="login">{userResult.login}</div>
              </div>
            </div>
            <div className="result-repo">
              <div className="repo-count-box">
                Repositories: {repoResult.length}
              </div>
              {repoResult.length !== 0 &&
                repoResult.map((repo) => {
                  return (
                    <div className="repo-item flex-col-box">
                      <div style={{ fontWeight: 700 }}>{repo.full_name}</div>
                      <div style={{ fontSize: "12px" }}>{repo.language}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserResult;

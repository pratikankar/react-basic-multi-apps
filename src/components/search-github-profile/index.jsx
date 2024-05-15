import { useEffect } from "react";
import { useState } from "react";
import User from "./user";
import "./github.css";

export default function SearchGithubProfile() {
  const [user, setUser] = useState("pratikankar");
  const [userData, setUserData] = useState(null);

  async function getUserData() {
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json();

    if (data) {
      setUserData(data);
      setUser("");
    }
  }

  function handleSearch() {
    getUserData();
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="github-container">
      <div className="searchbox">
        <input
          type="text"
          name="search"
          placeholder="Search Github Username"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}

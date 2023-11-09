import { useEffect } from "react";
import { useState } from "react";

export const GithubUser = ({ username }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_URL = `https://api.github.com/users/${username}`


  async function fetchData(username) {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(username);
  }, [username]);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      <h1>{data?.login}</h1>
      <h2>{data?.name}</h2>
      <img src={data?.avatar_url} />
    </>
  );
};
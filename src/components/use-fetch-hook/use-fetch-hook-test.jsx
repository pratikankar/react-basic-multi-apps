import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, loading, error } = useFetch("https://dummyjson.com/users", {});

  console.log(data, loading, error);

  return (
    <div>
      <h1>Custom Use Fetch Hook</h1>
      {loading ? <h3>Data is loading</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.users && data.users.length
        ? data.users.map((user) => <p key={user.key}>{user.firstName}</p>)
        : null}
    </div>
  );
}

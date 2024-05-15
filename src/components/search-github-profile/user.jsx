export default function User({ user }) {
  const { avatar_url, name, bio, public_repos, created_at, login } = user;

  const memberSince = new Date(created_at);

  return (
    <div className="user">
      <div className="user-photo">
        <img src={avatar_url} className="avatar" alt="user-avatar" />
      </div>
      <div className="user-details">
        <a href={`https://github.com/${login}`}>{name || login}</a>

        <h3>Bio</h3>
        <p>{bio}</p>

        <h3>Member Since</h3>
        <p>{`${memberSince.toLocaleString("en-us", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}`}</p>

        <h3>Total Repositories</h3>
        <p>{public_repos}</p>
      </div>
    </div>
  );
}

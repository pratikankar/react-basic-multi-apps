export default function ShowDropdown({ data, onClick }) {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => (
            <li onClick={onClick} key={index}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}

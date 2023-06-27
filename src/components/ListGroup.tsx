function ListGroup() {
  const item = ["Mumbai", "Tokyo", "Dubai", "Frankfurt", "London", "New York"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {item.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
        ;
      </ul>
    </>
  );
}

export default ListGroup;

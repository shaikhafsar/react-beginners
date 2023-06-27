function ListGroup() {
  let items = ["Mumbai", "Tokyo", "Dubai", "Frankfurt", "London", "New York"];

  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((items) => (
          <li className="list-group-item" key={items}>
            {items}
          </li>
        ))}
        ;
      </ul>
    </>
  );
}

export default ListGroup;

import React, { useState } from "react";

function ItemList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newItem.trim() !== "") {
      setItems([...items, newItem.trim()]);
      setNewItem("");
    }
  };

  return (
    <div>
        <h2>new items</h2>
      <ul class = "cld">
        {items.map((item, index) => (<center>
          <li key={index}>{item}</li>
          </center>))}
      </ul>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-item">Add a new item:</label>
        <input
          type="text"
          id="new-item"
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
          required
        />
        <button class = "ab" type="submit">Add</button>
      </form>

    </div>
  );
}


export default ItemList;

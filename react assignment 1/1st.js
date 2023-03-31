import React from 'react';

function ItemList(props) {
  const { items } = props;

  return (
    <ul class = "cld">
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default ItemList;

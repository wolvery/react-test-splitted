import React from 'react';

let DeleteLastItem = (props) => {
  let {deleteLastItem, notItemsFound} = props;
  return (
    <button onClick={deleteLastItem} disabled={notItemsFound()}>
          Delete Last Item
        </button>
)};

export default DeleteLastItem;
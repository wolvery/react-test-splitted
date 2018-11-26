import React from 'react';

let ListItems = (props) => {
  let {items} = props;
  return (
    <div>
     <p className="items">Items</p>
        <ol className="item-list">
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
  	</div>
  )};

export default ListItems;
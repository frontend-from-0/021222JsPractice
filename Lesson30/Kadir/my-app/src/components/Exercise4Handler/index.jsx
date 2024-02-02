// import React, {useState} from 'react';
import React from 'react';
import {ListItem} from '../ListItem';

export const Exercise4Handler = () => {

  // const [alertTitle,setAlertTitle]=useState('');

  const handleItemClick = (title) => {
    // setAlertTitle(title);
    alert(title);
  };

  const data = [
    { id: 1, title: "Click me 1" },
    { id: 2, title: "Click me 2" },
    { id: 3, title: "Click me 3" },
  ];

  return (
    <div>
      <ul>
        {data.map(listItem => (
          <div key={listItem.id} onClick={() => handleItemClick(listItem.title)}>
            <ListItem title={listItem.title} />
          </div>
        ))}
      </ul>
    </div>
  );
};
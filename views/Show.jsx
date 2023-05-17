import React from "react";

const Show = (props) => {
  const fruits = props.fruits;
  return (
    <div>
        <h2>Behold!</h2>
      <h4>{fruits.color} {fruits.name}</h4>
      <p><a href='/'>Go Back</a></p>
    </div>
  );
};

export default Show;

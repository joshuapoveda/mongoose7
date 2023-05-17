import React from "react";

const Index = (props) => {
  const fruits = props.fruits;
  return (
    <div>
      <h1>
        Add new fruit <a href="/new">here</a>
      </h1>
      {fruits.map((fruit) => {
        return (
          <>
            <h3>
              {fruit.color} <a href={`/${fruit.id}`}>{fruit.name}</a>
            </h3>
            <p>{fruit.readyToEat ? "Ready to eat." : "Not ready to eat."}</p>
            <form action={`/${fruit._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE" />
                </form>
                <a href={`/${fruit._id}/edit`}>Edit This Fruit</a>
            <br></br>
          </>
        );
      })}
    </div>
  );
};

export default Index;

import React from 'react'

const Edit = (props) => {
    const fruits = props.fruits
    console.log(fruits)
  return (
    <div>
<form action={`/${fruits.id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={fruits.name}/><br/>
          Color: <input type="text" name="color"  defaultValue={fruits.color}/><br/>
          Is Ready To Eat:
              {fruits.readyToEat? <input type="checkbox" name="readyToEat" defaultChecked />: <input type="checkbox" name="readyToEat"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
    </div>
  )
}

export default Edit
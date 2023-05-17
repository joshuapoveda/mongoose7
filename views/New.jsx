import React from 'react'

const New = () => {
  return (
    <div>
        <h2>Create A New Fruit</h2>
        <form action='/' method='POST'>
            Name: <input type='text' name='name'/>
            <br/>
            Color: <input type='text' name='color'/>
            <br/>
            Is this fruit ready to eat: <input type='checkbox' name='readyToEat'/>
            <br/>
            <input type='submit' name='' value="Create Fruit"/>
        </form>
        <p><a href='/'>Go Back</a></p>
    </div>
  )
}

export default New
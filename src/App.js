import React, { useState, useEffect } from 'react'
import { Route, Link, Switch, } from 'react-router-dom'
import PizzaForm from './PizzaForm'

const App = () => {

  const initialFormValues = {
    name: '',
    size: '',
    cheese: false,
    pepperoni: false,
    sausage: false,
    ham: false,
    instructions: '',
  }



  const [formValues, setFormValues] = useState(initialFormValues)
  
  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: formValues.toppings,
      instructions: formValues.instructions.trim(),
    }
  }

  return (
    <div>
    <nav>
      <div>
        <Link to= '/'>Home</Link>
        <Link to= '/pizza'>Place an order</Link>
      </div>
    </nav>
      <h1>Lambda Eats</h1>

      <Switch>
        <Route exact path= '/pizza'>
          <PizzaForm values= {formValues} change= {inputChange} submit= {formSubmit}/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;

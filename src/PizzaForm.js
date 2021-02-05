import React from 'react'


export default function PizzaForm(props) {

    const {
        values,
        submit,
        change,
      } = props

      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      const onChange = evt => {
        /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
        const { name, value } = evt.target
        change(name, value)
      }

      return (
        <form className='form container' onSubmit={onSubmit}> 
        <button>submit</button>
        <div>
        
        <div>
        <label>Name
          <input
            value={values.name}
            onChange= {onChange}
            name='Name'
            type='text'
          />
        </label>
        </div>

        <div>
        <label>Size
            <select
                        onChange={onChange}
                        value={values.size}
                        name='size'>
                <option value="">Select a size</option>
                <option value="10">10 inch</option>
                <option value="14">14 inch</option>
                <option value="16">16 inch</option>
            </select>
        </label>
        </div>

        <div>
        <h5>Toppings</h5>
        <label type= 'checkbox' value= {values.cheese}>Cheese</label>
        <label type= 'checkbox' value= {values.pepperoni}>Pepperoni</label>
        <label type= 'checkbox' value= {values.sausage}>Sausage</label>
        <label type= 'checkbox' value= {values.ham}>Ham</label>
        </div>

        <div>
        <label>Special instructions
          <input
            value={values.instructions}
            onChange={onChange}
            name='instructions'
            type='text'
          />
        </label>
        </div>


        </div>
        
        
        </form>   
      )
}
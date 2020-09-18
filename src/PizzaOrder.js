import React from "react"
// import axios from "axios"

function PizzaOrder(props) {
    const {
        values,
        submit,
        change,
        errors,
        
    } = props

const onSubmit = ((event)=>{
    event.preventDefault()
    submit()
   
})

const onChange = ((event)=> {
    const { name, value, type, checked } = event.target
    const valueToUse = type === "checkbox"? checked : value
    change(name, valueToUse)
})

return (
    <>
        <div>
            <div>{errors.name}</div>
        </div>
        <form onSubmit={onSubmit}>
                    <input 
                    name="name" 
                    type="text" 
                    value={values.name} 
                    onChange={onChange} 
                    placeholder="enter name"/>
                    <br></br>
                    <select 
                    name="size" 
                    value={values.size} 
                    onChange={onChange} >
                        <option>---select option---</option>
                        <option>small</option>
                        <option>large</option>
                    </select>
                    <br></br>
                    <p>choose toppings:</p>
                    <label>pepperoni
                        <input 
                        type="checkbox"
                        name="pepperoni"
                        checked={values.pepperoni}
                        onChange={onChange}
                        />
                    </label>
                    <br></br>
                    <label>anchovies
                        <input 
                        type="checkbox"
                        name="anchovies"
                        checked={values.anchovies}
                        onChange={onChange}
                        />
                    </label>
                    <br></br>
                    <label>mushrooms
                        <input 
                        type="checkbox"
                        name="mushrooms"
                        checked={values.mushrooms}
                        onChange={onChange}
                        />
                    </label>
                    <br></br>
                    <label>onions
                        <input 
                        type="checkbox"
                        name="onions"
                        checked={values.onions}
                        onChange={onChange}
                        />
                    </label>
                    <br></br>
                    <br></br>
                    <input 
                    name="instructions" 
                    type="text" 
                    value={values.instructions} 
                    onChange={onChange} 
                    placeholder="enter special instructions"/>                
                    <br></br>
                    <button>place order</button>
                </form>
    </>
)
}

export default PizzaOrder
import React, {useState, useEffect} from "react"

const initialFormValues = {
    name: "",
    size: "",
    pepperoni: false,
    mushrooms: false,
    instructions: "",
}

function Form() {
    const [pizza, setPizza] = useState([])
    const [formValues, setFormValues] = useState(initialFormValues)
    
    const onChange = event => {
        const {name, value} = event.target
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = event => {
        const newPizza = {
            name: formValues.name.trim(),
            size: formValues.size,
            pepperoni: formValues.pepperoni,
            mushrooms: formValues.mushrooms,
            instructions: formValues.instructions.trim()
        }
        setPizza([...pizza, newPizza])
        event.preventDefault()
        setFormValues(initialFormValues)
    }

    return (
       <>
            <h1>Order Page</h1>
            <form onSubmit={onSubmit}>
                <input 
                name="name" 
                type="text" 
                value={formValues.name} 
                onChange={onChange} 
                placeholder="enter name"/>
                <br></br>
                <select 
                name="size" 
                value={formValues.size} 
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
                    checked={formValues.pepperoni}
                    onChange={onChange}
                    />
                </label>
                <label>mushrooms
                    <input 
                    type="checkbox"
                    name="mushrooms"
                    checked={formValues.mushrooms}
                    onChange={onChange}
                    />
                </label>
                <br></br>
                <br></br>
                <input 
                name="instructions" 
                type="text" 
                value={formValues.instructions} 
                onChange={onChange} 
                placeholder="enter special instructions"/>                
                <br></br>
                <button>place order</button>
            </form>
       </>
    )
}

export default Form
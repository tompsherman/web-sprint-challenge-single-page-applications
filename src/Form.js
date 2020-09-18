import React, {useState, useEffect} from "react"
import PizzaOrder from "./PizzaOrder"
import * as yup from "yup"
import schema from "./formSchema"

const initialFormValues = {
    name: "",
    size: "",
    pepperoni: false,
    mushrooms: false,
    onions: false,
    anchovies: false,
    instructions: "",
}

const initialFormErrors = {
    name: ""
}

function Form() {
    const [pizza, setPizza] = useState([])
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    

    const validate = (name, value) => {
        yup
        .reach(schema, name)
        .validate(value)
        .then((valid)=>{
            setFormErrors({
                ...formErrors, [name]: "",
            })
        })
        .catch((err)=>{
            setFormErrors({
                ...formErrors, [name]: err.errors[0]
            })
        })
    }

    const inputChange = (name, value) => {
        validate(name,value);
        setFormValues({...formValues, [name]: value})
    }

    const formSubmit = event => {
        const newPizza = {
            name: formValues.name.trim(),
            size: formValues.size,
            toppings: ['pepperoni', 'mushrooms', 'onions', 'anchovies'].filter(top => formValues[top]),
            instructions: formValues.instructions.trim()
        }
        setPizza([...pizza, newPizza])
        setFormValues(initialFormValues)
    }

    return (
       <>
            <h1>Order Page</h1>
            <PizzaOrder 
            values = {formValues}
            change = {inputChange}
            submit = {formSubmit}
            errors = {formErrors}
            />
            {pizza.map(pizza=>{
                return(
                    `${pizza.name} ordered a ${pizza.size} ${pizza.toppings} pizza. we will be sure to ${pizza.instructions}. `
                )
            })}
       </>
    )
}

export default Form
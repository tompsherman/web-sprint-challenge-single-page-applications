import React, {useState, useEffect} from "react"
import PizzaOrder from "./PizzaOrder"
import * as yup from "yup"
import schema from "./formSchema"
import axios from "axios"

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
    const [pizza, setPizza] = useState()
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [post, setPost] = useState(false)

    useEffect(()=>{
        axios
        .get("https://reqres.in/api/pizza")
        .then((response)=> 
        // console.log(response.data.data),
        setPizza(response.data.data), setPost(false),
        console.log("pizza get:", pizza))
        .catch(err=>console.log("ERROR in GET"));

    }, [post])
    console.log("pizza database:", post, pizza)
    

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
        axios
        .post("https://reqres.in/api/pizza", newPizza)
        .then(res=>{
            setPost(true)
            console.log("post:", newPizza)
            debugger
        })
        .catch(err=> console.log("error IN POST"))
        .finally()

        setPizza([...pizza, newPizza])
        setFormValues(initialFormValues)

        console.log("formsubmit:", post, pizza)
    }

    return (
       <>
            <h1>Order Page</h1>
            <PizzaOrder 
            values = {formValues}
            change = {inputChange}
            submit = {formSubmit}
            errors = {formErrors}
            setPost = {setPost}
            
            />
            {/* {pizza.map(pizza=>{
                return(
                    `${pizza.name} ordered a ${pizza.size} ${pizza.toppings} pizza. we will be sure to ${pizza.instructions}. `
                )
            })} */}
            
       </>
       
    )
}

export default Form
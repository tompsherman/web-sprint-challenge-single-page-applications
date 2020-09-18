import * as yup from "yup"

export default yup.object().shape({
    name: yup.string().required("name is required").min(2, "name must be 2 characters long"),
    size: yup.string().notRequired(),
    pepperoni: yup.string().notRequired(),
    mushrooms: yup.string().notRequired(),
    instructions: yup.string().notRequired(),
})
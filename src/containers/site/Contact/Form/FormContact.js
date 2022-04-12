import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";

const FormContact = (props) => {
    return (
    <form>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Nom :</label>
            <input type="text" className="form-control" id="name" aria-describedby="nameHelp" 
                name="name"
                onChange={props.handleChange}
                value={props.values.nom}
                onBlur={props.handleBlur}
            />
            {
                props.touched.name && props.errors.name && <span style={{color:"red"}}>{props.errors.name}</span>
            }
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email :</label>
            <input type="text" className="form-control" id="email" aria-describedby="emailHelp" 
                name="email"
                onChange={props.handleChange}
                value={props.values.email}
                onBlur={props.handleBlur}
            />
            {
                props.touched.email && props.errors.email && <span style={{color:"red"}}>{props.errors.email}</span>
            }
        </div>
        <div className="mb-3">
        <label htmlFor="message" className="form-label">Message :</label>
        <textarea className="form-control" id="message" rows="3"
            name="message"
            onChange={props.handleChange}
            value={props.values.message}
            onBlur={props.handleBlur}
        />
            {
                props.touched.message && props.errors.message && <span style={{color:"red"}}>{props.errors.message}</span>
            }
        </div>
        <button type="submit" className="btn btn-primary" onClick={props.handleSubmit}>Envoyer</button>
    </form>
    )
};

export default withFormik({
    mapPropsToValues : () => ({
        name:"",
        email:"",
        message:""
    }),
    validationSchema : Yup.object().shape({
        name: Yup.string()
            .min(5, "Le nom doit avoir plus de 5 caractères.")
            .required("Le nom est obligatoire."),

        email: Yup.string()
            .email("L'email n'a pas le bon format.")
            .required("L'email est obligatoire."),
        message: Yup.string()
            .min(30, "Le message doit faire plus de 30 caractères.")
            .max(200, "Les message doit faire moins de 200 caractères.")
    }),
    handleSubmit: (values,{props}) => {
        const message = {
            name : values.name,
            email : values.email,
            content : values.message,
        }
        props.sendMail(message);
    }
})(FormContact);
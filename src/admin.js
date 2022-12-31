import React, { useState,useRef } from 'react'
import {Redirect} from 'react-router-dom'
import validation from './validation';

function Inscription(){
    const [redirect, setRedirect] = React.useState(false)
    const usernameInputRef= useRef();
    const emailInputRef= useRef();
    const telInputRef= useRef();
    const passwordInputRef= useRef();
    const passwordBixInputRef= useRef();
    const [errors, setErrors] = useState({})

const handleSubmit=(event)=>{
    event.preventDefault()
    setErrors(validation(passwordInputRef,usernameInputRef,emailInputRef,telInputRef))
    const enteredUsername= usernameInputRef.current.value;
    const enteredEmail= emailInputRef.current.value; 
    const enteredTel= telInputRef.current.value; 
    const enteredPassword= passwordInputRef.current.value;
    console.log(enteredUsername,enteredEmail ,enteredTel, enteredPassword)
    setRedirect(true)
    }

    return (
        <form className='signup' onSubmit={handleSubmit}>
        <div className='head'>SignUp Admin</div><br/>
            <label>Nom et prénom</label><br/>
            <input required placeholder='Entrer votre Nom et votre prénom' id="username" ref={usernameInputRef}/><br/>
            {errors.emailInputRef && <p style={{color:"red", fontSize:"13px" , position:"absolute" , left:"20px"}}>{errors.emailInputRef}</p>}
            <label>Email</label><br/>
            <input required placeholder='Entrer un email' type="email" id="email"  ref={emailInputRef}/><br/>
            {errors.emailInputRef && <p style={{color:"red", fontSize:"13px" , position:"absolute" , left:"20px"}}>{errors.emailInputRef}</p>}
            <label>Téléphone</label><br/>
            <input  required placeholder='Entrer votre numéro de téléphone' id="telephone" type="number" ref={telInputRef}/><br/>
            <label>Mot de passe</label><br/>
            <input  required placeholder='Entrer un mot de passe'  id="password" type="password" ref={passwordInputRef}/><br/>
            <label>Confirmer le mot de passe</label><br/>
            <input required placeholder='Confirmer le mot de passe'  id="passwordBix" type="password" ref={passwordBixInputRef}/><br/>
            <button className='valid'>S'inscrire</button>
            {redirect? <Redirect to="/dashboard" />: null}
           

        </form>

    )
}
export default Inscription
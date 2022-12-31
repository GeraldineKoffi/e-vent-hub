import React, { useState } from 'react'
import {Redirect} from 'react-router-dom'
import Axios from 'axios'


function Inscription(){
    const [redirect,setRedirect]=useState(false)
    const url='http://localhost:4000/user/create'
    const [data, setData]=useState({
       name:'',
       prenom:'',
       email:'',
       Telephone:'',
       Password:'',
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            name:data.name,
            prenom:data.prenom,
            email:data.email,
            Telephone:data.Telephone,
            Password:data.Password
        })
        .then(res=>{
            console.log(res.data)
            setRedirect(true)
        })
    }

function handle(e){
    const newData={...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
   
}

    return (
        <form className='signup' onSubmit={(e)=>submit(e)}>
        <div className='head'>SignUp User</div><br/>
            <label>Nom</label><br/>
            <input required placeholder='Entrer votre Nom ' id="name" onChange={(e)=>handle(e)} value={data.name}/>

            <label>Prénom</label><br/>
            <input required placeholder='Entrer votre prénom' id="prenom" onChange={(e)=>handle(e)} value={data.prenom}/>
           
            <label>Email</label><br/>
            <input required placeholder='Entrer un email' type="email" id='email' value={data.email} onChange={(e)=>handle(e)}/>
            
            <label>Téléphone</label><br/>
            <input  required placeholder='Entrer votre numéro de téléphone' id="Telephone" type="number" onChange={(e)=>handle(e)}/>
            <label>Mot de passe</label><br/>
            <input  required placeholder='Entrer un mot de passe'  id="password" type="Password" onChange={(e)=>handle(e)}/>
            <label>Confirmer le mot de passe</label><br/>
            <input required placeholder='Confirmer le mot de passe'  id="passwordBix" type="password" /><br/>
            <button className='valid'>S'inscrire</button>
            {redirect? <Redirect to="/dashboard" />: null}
           

        </form>

    )
}
export default Inscription















































































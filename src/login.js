import React, { useRef} from 'react'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'

function Login(){
    const [redirect, setRedirect] = React.useState(false)
    const emailInputRef= useRef();
    const passwordInputRef= useRef();

   
   const handleValidation=(event)=>{
    
        event.preventDefault();
        const Email= emailInputRef.current.value; 
        const Password= passwordInputRef.current.value; 
        console.log(Email,Password)
        setRedirect(true)
    }
    const [show2, setShow2] = React.useState(false)
    function link1(){
        setShow2(!show2)
     }
     function submit(event){
        axios.get(`https://localhost:4000/user`)
        .then(reponse =>{
          const person= reponse.data;
          console.log('personne est:', person)
      })
      try{
        axios.post('https://localhost:4000/user/login',{
          Mail:"gerakoffi@gmail.com",
          Pass:"12345678"
        })
        .then(function(response){
          console.log("la response:",response);
    
        })
        .catch(function(error){
          console.log("error",error);
        });
      }catch(error){
        console.log("error try:", error)
      }
    }
    return (
        <form className='login' onSubmit={handleValidation}>

        <div className='head'>Login</div><br/>

        <label>Email</label><br/>
        <input required placeholder='Entrer votre email' name='email' type="email" ref={emailInputRef}/><br/>
        <label>Mot de passe</label><br/>
        <input required placeholder='Entrer votre mot de passe' type="password" name='password'ref={passwordInputRef}/><br/>
        
        <input type="checkbox" className='remember' name="remember" />
        <label className='text'> Se souvenir de moi</label>

         <Link to={'/forgetPass'} className='pass'>Mot de passe oublié?</Link><br />
         
          <button className='valid' onSubmit={submit}>Valider</button><br/>
          {redirect? <Redirect to="/dashboard" />: null}
         <div className='newcompte' onClick={link1}>
            Vous n'avez pas de compte, <span>Créer un compte?</span>
          </div>
        {show2? <div id="compte">
                Créer un compte
               <Link to={'/inscriptionOrg'} className='role2'> Organisateur</Link> ou 
               <Link to={'/inscription'} className='role2'> Utilisateur</Link>
                </div> :null}
                </form>
        
               

    )
}
export default Login
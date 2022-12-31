import React from "react";
import {Link} from 'react-router-dom'
import menu from './menu.png'


function Header(){
    const [show, setShow] = React.useState(false)
    const [show1, setShow1] = React.useState(false)
     
     function Menu(){
        setShow(!show)
     }
     function link(){
        setShow1(!show1)
     }

    return(
             <div className="header">
        <div className="logo"> E-venT Hub</div>
        <div className="menu" onClick={Menu}><img src={menu} alt="menu" width="55px" /></div>
         <div className="menuAll">
            
            <button id="link" onClick={link}>Inscription</button><br/>
            <Link to={'/login'}><button id="link" >Connexion</button></Link><br/>
            <Link to={''}><button id="link">Déconnexion</button></Link><br/>
            <Link to={'./dashboard'}><button id="link">Profil</button></Link><br/>
            <Link to={'./eventList'}><button id="link">Evènements</button></Link> 
        </div>
      {show? <div className="menuAl">
     <button id="link" onClick={link}>Inscription</button><br/>
     <Link to={'/login'}><button id="link" >Connexion</button></Link><br/>
     <Link to={''}><button id="link" >Déconnexion</button></Link><br/>
     <Link to={'./dashboard'}><button id="link">Profil</button></Link><br/>
     <Link to={'./eventList'}><button id="link">Evènements</button></Link> 
 </div>:null}
        
      {show1? <div id="role">
        S'incrire en tant 
       <Link to={'/inscriptionOrg'} className='role1'> Organisateur</Link> ou 
       <Link to={'/inscription'} className='role1'> Utilisateur</Link>
        </div> :null}
        </div>
    )
}
export default Header;
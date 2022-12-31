import React from "react";
import {Link} from 'react-router-dom'
import Profil from './dashboard/profil'
import  './dashboard/style.css'

function dashboardOrg(){
    return(
        <div className="dashboard">
             <Link to={'./inscritEvent'}><button className="event2">Personnes inscrits à votre évènements</button></Link>   
             <Link to={'./eventGest'}><button className="event">Gérer vos evènements</button></Link> 
             <Link to={'./events'}><button className="event1">Créer un nouvel évènement</button></Link> 
           
           <Profil/>
        </div>
    )

}
export default dashboardOrg
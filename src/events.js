import React, {useState, useRef} from 'react'
import './Events/style.css'
function Events(){
    const titreInputRef= useRef();
    const descriptInputRef= useRef();
    const dayInputRef=useRef();
    const statutInputRef=useRef();
    const imgInputRef= useRef();

    const handleValidation=(event)=>{
 
        event.preventDefault();
        const enteredTitre= titreInputRef.current.value; 
        const enteredDescript= descriptInputRef.current.value; 
        const enteredDay = dayInputRef.current.value;
        const enteredStatut= statutInputRef.current.value;
        const enteredImg = imgInputRef.current.value;
        console.log( enteredTitre,enteredDescript,enteredDay,enteredStatut,enteredImg)
        alert("Evènement crée");
    }
    return(

        <form className='events' onSubmit={handleValidation}>
         <h3 className='headEvent'>New Event</h3>
         <label>Titre</label><br/>
         <input placeholder="Entrer le titre de l'évènement" name='titre' required ref={titreInputRef}/><br/>
         <label>Description</label><br/>
         <input placeholder='Décrivez votre évènement' required name='description' ref={descriptInputRef}/><br/>
         <label>Date</label><br/> 
         <input type="date" required name='day' ref={dayInputRef}/><br/>
         <label>Statut</label>
         <select className='statut' name='statut' required ref={statutInputRef}>
            <option>Gratuit</option>
            <option>Payant</option>
         </select><br/>
         <label>Ajouter une image</label><br/>
         <input type="file" className='file' name='img' ref={imgInputRef}/><br/>
          <button className='valid'>Valider</button>
        </form>
    )
}
export default Events
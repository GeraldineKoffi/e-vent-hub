import React, {useState} from 'react'
import utilisateur1 from './utilisateur1.png'

function profil(){
    const [show3, setShow3] = React.useState(false)
 
 function modif(){
    setShow3(!show3)
 }
 const [image, setImage]= useState("");
    return(
      <div className='profil'>
        <h3>Profil Utilisateur</h3>
        <img  
        src={utilisateur1} alt='' className='imgProfil'/>
        
        <input type="file" className='img'
        accept='/image/*'
        onChange={(e)=>{
        const file= e.target.files[0];
        if(file && file.type.substring(0,5)==='image'){
         setImage(file);
        }else{
         setImage(null);
        }
        }} />
        <div className='info'>
        <p>Nom</p>
        <p>Prenom</p>
        <p>Email</p>
        <p>Teléphone</p>
        </div>
        <button className='valid' onClick={modif}>Modifier</button>
       {show3? <div className='modifProfil'>
        <h3 >Modifier vos informations</h3>
        <div className='infoModif'>
         <label>Nom</label><br/>
         <input placeholder='Entrer un nouveau nom'/><br/>
        <label>Numéro</label><br/>
        <input placeholder='Entrer un nouveau numéro'/><br/>
         <label>Email</label><br/>
         <input placeholder='Entrer un nouveau email'/><br/>
         <button className='valid'>Valider</button>
         </div>
      </div>:null}
      </div>
    )
}
export default profil
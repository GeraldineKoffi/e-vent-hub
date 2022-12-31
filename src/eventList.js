import React from 'react'

function EventList(){
    const [show4, setShow4] = React.useState(false)
 
 function achat(){
    setShow4(!show4)
 }
    return(
        <div className='eventList'>
            <div></div>
         <div>Titre</div>
         <div>Description</div>
         <div>Date</div>
         <div>Statut</div>
         <button className='valid' onClick={achat}>Achat de ticket</button>
         {show4? <div className='achat'>
            <h3>Titre</h3>
            <div>Type</div>
            <div>Prix</div>
            <button className='valid'>Achéter</button>
         </div>:null}
        </div>
    )
}
export default EventList
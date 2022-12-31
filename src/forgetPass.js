import React from "react";
function forgetPass(){
    return(
    <form className="login">
        <h3 className="modif">Mot de passe oublié</h3>
        <label>Id:</label>
        <input /><br/>
        <label>Entrer un nouveau mot de passe:</label><br/>
        <input/><br/>
        <button className="valid">Changer</button>
    </form>
    )
}
export default forgetPass
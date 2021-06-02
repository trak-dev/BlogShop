import React from 'react';

const SignInForm = () => {
    return (
     <form action="" id="sign-up-fom">
         <label htmlFor="email">Email</label>
         <br/>
         <input type="text" name="email" id="email"></input>
          <br/>
          <br/>
          <label htmlFor="Password">Mot de passe</label>
         <input type="text" name="Password" id="Mot de passe"></input>
        <br/>
        <br/>
         <input type="submit" value="Se connecter" ></input>
         <br/>
     </form>
    );
};
export default SignInForm ;
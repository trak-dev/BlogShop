import React from 'react';

const SignUpForm = () => {
    return (
        <form action="" id="sign-up-form">
                <label htmlFor="pseudo">Pseudo</label>
                <br/>
            <input type="text" name="pseudo" />
            <div className="pseudo error"></div>
            <br/>
            <label htmlFor="email">Email</label>
                <br/>
            <input type="text" name="email" />
            <div className="email error"></div>
            <br/>
            <label htmlFor="password">Mot de passe</label>
                <br/>
            <input type="text" name="password" />
            <div className="password error"></div>
            <br/>

            <input type="submit" value="Valider inscription"/>
        </form>
    );
};
export default SignUpForm ;
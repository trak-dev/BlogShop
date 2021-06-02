import React , {useState} from 'react';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';

const Form = () => {
    const [signUpModal, setSignUpModal] = useState(true);
    const [signInModal, setSignInModal] = useState(false);
    const handleModals=(e) => {
        if(e.target.id === "register"){
            setSignInModal(false);
            setSignUpModal(true);
        } else if (e.target.id === "login"){
            setSignUpModal(false);
            setSignInModal(true); 
        }
    }
return (
 <div className="connection-from">
     <div className="Form-container">
         <ul>
             <li onClick={handleModals} id="register"
             className={signUpModal ? "active-btn" : null}>
             S'inscrire
             </li>
             <li onClick={handleModals} id="login"
             className={signInModal ? "active-btn" : null}>
                 Se connecter
             </li>
         </ul>
         {signUpModal && <SignUpForm/>}
         {signInModal && <SignInForm/>}
     </div>
 </div>
);
}
export default Form ; 
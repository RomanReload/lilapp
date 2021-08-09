import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {auth} from "../config/firebase";
import CustomForm from "./parts/Form/Form";
import LoginPage from "./parts/LoginPage";
import firebase from "firebase/app";



const RegisterPage: React.FC = (props) => {
    const [registering, setRegistering] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('')
    const [passsword, setPassword] = useState<string>('')
    const [confirm, setConfirm] = useState<string>('')
    const [error, setError] = useState<string>('')

    const history = useHistory();

    const singUpWithEmailAndPassword = () => {
        if (passsword !== 'confirm') {
            setError('Please sure your password match');
        }
        if (error !== '') {
            setError('')
        }
        // SET REGISTER TRUE
        setRegistering(true)
        auth.createUserWithEmailAndPassword(email, passsword).then(result => {


            console.log('result',result);

        }).catch(e => {
            console.log( 'err',e);

        })
    }





    return (
        <>
            <p>register Page </p>
            <form action="#" onSubmit={(e)=>e.preventDefault()}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e)=> setEmail(e.target.value)} type="text" id={'email'}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={(e)=> setPassword(e.target.value)} type="text" id={'password'}/>

                </div>
                <button
                // disabled={registering}
                onClick={()=> singUpWithEmailAndPassword()}
                >Sing Up</button>
            </form>
            <div>
                <LoginPage/>
            </div>
        </>
    )
}

export default RegisterPage;
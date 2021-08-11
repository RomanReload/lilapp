import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {auth} from "../../config/firebase";
import {InputStyled, PasswordStyled} from "./InputStyled/InputStyled";
import SignInButton from "./ButtonStyled/ButtonStyled";
import { FormWrapper, WrapperRegister} from "../RegisterPage";

const LoginPage: React.FC = (props) => {
    const [autent, setAutent] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('')
    const [passsword, setPassword] = useState<string>('')
    const [confirm, setConfirm] = useState<string>('')
    const [error, setError] = useState<string>('')

    const history = useHistory();

    const singInWithEmailAndPassword = () => {
        setAutent(true)

        auth.signInWithEmailAndPassword(email, passsword).then(result => {
            // history.push('/login')
            console.log('result',result);

        }).catch(e => {
            console.log( 'err',e);
        })
    }


    console.log('current User',auth.currentUser?.updateProfile)

    return (
        <>
            <>
                <h3>Register Page </h3>

                <WrapperRegister>
                    <FormWrapper action="#" onSubmit={(e) => e.preventDefault()}>
                        <InputStyled margin={'5px'} onChange={(e: { target: { value: React.SetStateAction<string>; }; })=> setEmail(e.target.value)}/>
                        <PasswordStyled onChange={(e: { target: { value: React.SetStateAction<string>; }; })=> setPassword(e.target.value)}/>

                        <SignInButton primary={'black'}

                                      onClick={()=> singInWithEmailAndPassword()}
                        >Sing Up

                        </SignInButton>

                    </FormWrapper>
                </WrapperRegister>


            </>



            {/*<h1>register Page </h1>*/}
            {/*<form action="#" onSubmit={(e)=>e.preventDefault()}>*/}
            {/*    <div>*/}
            {/*        <label htmlFor="email">Email</label>*/}
            {/*        <input onChange={(e)=> setEmail(e.target.value)} type="text" id={'email'}/>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <label htmlFor="password">Password</label>*/}
            {/*        <input onChange={(e)=> setPassword(e.target.value)} type="text" id={'password'}/>*/}

            {/*    </div>*/}
            {/*    <button*/}
            {/*        // disabled={registering}*/}
            {/*        onClick={()=> singInWithEmailAndPassword()}*/}
            {/*    >Sing In</button>*/}


            {/*</form>*/}
        </>
    )
}

export default LoginPage;
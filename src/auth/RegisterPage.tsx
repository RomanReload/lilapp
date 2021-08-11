import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {auth} from "../config/firebase";
import styled from "styled-components";
import SignInButton from "./parts/ButtonStyled/ButtonStyled";
import {InputStyled, PasswordStyled} from "./parts/InputStyled/InputStyled";
import {LinkAuth} from "./LoginPage";
import SignInWithGoogle from "./parts/MediaSignIn/GoogleSignIn";
import Snipper1 from "../other/spinner1";
import {adminStatus} from "../features/userStatus/userSlice";
import {useAppDispatch} from "../app/hooks";



export const FormWrapper = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`

export const WrapperRegister = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Styledh3 = styled.h3`
  font-family: Roboto;

`

const RegisterPage: React.FC = (props) => {

    const [registering, setRegistering] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const history = useHistory();
    const dispatch = useAppDispatch();


    const singUpWithEmailAndPassword = () => {
        if (password !== 'confirm') {
            setError('Please sure your password match');
        }
        if (error !== '') {
            setError('')
        }
        // SET REGISTER TRUE
        setRegistering(true)


        auth.createUserWithEmailAndPassword(email, password).then(result => {
            console.log('result', result);
            if(result.operationType === 'signIn') {

                if (result.user?.uid) {
                    result.user.uid === 'qpGDtsAF0lheakZQj2rXopqda8S2' ? dispatch(adminStatus(true))
                        :
                        dispatch(adminStatus(false))
                }
                setError('');
                // Cookies.set('isClient' , 'true');
                history.push('/usercab')
            }
        }).catch(e => {
            console.log('err', e);
            setRegistering(false);
            setError(e.message)
            history.push('/')
        })
    }

    const handleSumbmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        singUpWithEmailAndPassword()
        console.log('Done')

    }


    return (
        <>
            {registering ?
                <> <Snipper1/></>
                :
                <>
            <Styledh3>Register Page </Styledh3>
            <WrapperRegister>
                <FormWrapper action="#" onSubmit={handleSumbmit}>
                    <InputStyled margin={'5px'}
                                 type={'text'}
                                 onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
                                  id={'email'}/>
                    <PasswordStyled
                        type={'password'}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
                       id={'password'}/>

                    <SignInButton primary={'black'}
                    >Sign Up
                    </SignInButton>
                    <SignInWithGoogle/>
                </FormWrapper>

                <LinkAuth to={'/login'}>
                    Already have an acc ?
                </LinkAuth>
                {error.length ? <div>{error}</div> : ''}
            </WrapperRegister>
                </>
            }
        </>
    )
}

export default RegisterPage;
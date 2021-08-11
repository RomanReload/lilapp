import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {auth} from "../config/firebase";
import styled from "styled-components";
import {InputStyled, PasswordStyled} from "./parts/InputStyled/InputStyled";
import SignInButton from "./parts/ButtonStyled/ButtonStyled";
import {FormWrapper, WrapperRegister} from "./RegisterPage";
import Cookies from "js-cookie";
import SignInWithGoogle from "./parts/MediaSignIn/GoogleSignIn";
import Snipper1 from "../other/spinner1";
import {useAppDispatch} from "../app/hooks";
import {adminStatus} from '../features/userStatus/userSlice';


const Styledh3 = styled.h3`
  font-family: Roboto;

`
export const LinkAuth = styled(Link).attrs(props => ({
    to: props.to ? props.to : '/'
}))``


const LoginPage: React.FC = (props) => {
    const [autent, setAutent] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('')
    const [passsword, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const dispatch = useAppDispatch();

    const history = useHistory();
    const singInWithEmailAndPassword = () => {
        auth.signOut()
        setAutent(true)
        auth.signInWithEmailAndPassword(email, passsword).then(result => {
            if (result.operationType === 'signIn') {
                if (result.user?.uid) {
                    result.user.uid === 'qpGDtsAF0lheakZQj2rXopqda8S2' ? dispatch(adminStatus(true))
                        :
                        dispatch(adminStatus(false))
                }
                setError('');
                history.push('/usercab')
            }

        }).catch(e => {
            console.log('err', e);
            setAutent(false);
            setError(e.message)
        })
    }

    const handleSumbmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        singInWithEmailAndPassword()
        // console.log('Done')
        // Cookies.set('isClient', 'true');

    }

    return (
        <>
            {autent ?
                <> <Snipper1/></>
                :
                <>
                    <Styledh3>Log In Page </Styledh3>
                    <WrapperRegister>
                        <FormWrapper action="#" onSubmit={handleSumbmit}>
                            <InputStyled margin={'5px'}
                                         onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
                                         type="text" id={'email'}/>
                            <PasswordStyled
                                type={'password'}
                                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
                                id={'password'}/>

                            <SignInButton primary={'black'}
                            >Sign In
                            </SignInButton>
                            <SignInWithGoogle/>
                        </FormWrapper>
                        <LinkAuth>
                            Dont have an acc ?
                        </LinkAuth>
                        {error.length ? <div>{error}</div> : ''}
                    </WrapperRegister>
                </>
            }
        </>
    )
}

export default LoginPage;
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {auth} from "../../config/firebase";
import styled from "styled-components";

//
// const StyledButton = ( ) => {
//     const Button = styled.button`
//       background: black;
//       color: white;
//       border-radius: 7px;
//       padding: 20px;
//       margin: 10px;
//       font-size: 16px;
//       :disabled {
//         opacity: 0.4;
//       }
//       :hover {
//         box-shadow: 0 0 10px yellow;
//       }
//     `;
//
//
//     const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;
//
//     return (
//
//     <Button>
//         Hello
//     </Button>
//
//
//     )
// }




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
                    onClick={()=> singInWithEmailAndPassword()}
                >Sing In</button>


            </form>
        </>
    )
}

export default LoginPage;
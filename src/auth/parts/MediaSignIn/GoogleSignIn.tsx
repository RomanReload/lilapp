import React from "react";
import socialMediaAuth from "../../../config/authWithSocial";
import {googleProvider} from "../../../config/firebase";
import SignInButton from "../ButtonStyled/ButtonStyled";
import {adminStatus} from "../../../features/userStatus/userSlice";
import {useAppDispatch} from "../../../app/hooks";


const SignInWithGoogle:React.FC = () => {
    const dispatch = useAppDispatch();
const handleClick = async (e: { preventDefault: () => void; }) =>{
    e.preventDefault();
   const res:any = await socialMediaAuth(googleProvider);
    if (res.uid) {
        res.uid === 'qpGDtsAF0lheakZQj2rXopqda8S2' ? dispatch(adminStatus(true))
            :
            dispatch(adminStatus(false))
    }
}
    return (
            <SignInButton onClick={handleClick} primary={'black'}
            >Log In with google!
            </SignInButton>

    )
}

export default SignInWithGoogle;
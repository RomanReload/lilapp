import firebase from "firebase/app";

const socialMediaAuth = (provider: firebase.auth.AuthProvider) => {
    return firebase.auth().signInWithPopup(provider).then(res=>{
        return res.user
    }).catch(er =>{
        return console.log(er)
    })
}
export default socialMediaAuth;
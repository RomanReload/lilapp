import React, {useEffect, useState} from 'react';
import './App.css';
import RegisterPage from "./auth/RegisterPage";
import {Redirect, Route, RouteComponentProps, RouteProps, Switch, useHistory} from 'react-router-dom';
import LoginPage from "./auth/LoginPage";
import UserCab from "./pages/UserCab";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {clientStatus} from "../src/features/userStatus/userSlice"
import {auth} from "./config/firebase";
import AdminPostCreator from "./pages/UserCab/AdminPostCreator/AdminPostCreator";
import Snipper1 from "./other/spinner1";
import { IonButton, IonDatetime } from '@ionic/react';
import { IonApp, IonContent, IonRippleEffect } from '@ionic/react';



interface PrivateRouteProps extends RouteProps {
    component:
        | React.ComponentType<RouteComponentProps<any>>
        | React.ComponentType<any>;
    user:boolean;
    redirect:string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({component: Component ,
                                                       user,
                                                       redirect,
                                                                ...rest
                                                            }) => {
    return (
        <Route
            {...rest}
            render={props =>
                user ? ( //put your authenticate logic here
                    <Component {...props} />) :
                    (<Redirect
                        to={{
                            pathname: `${redirect}`
                        }}
                    />)}/>
    );
};












function App() {
    const uStatus = useAppSelector(state => state.clientStatus.isClient);
    const dispatch = useAppDispatch();
    const history = useHistory();
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        if(!uStatus) history.push('/')
        auth.onAuthStateChanged((user) => {
            if (user) {
                // console.log(user)
                dispatch(clientStatus(true))
                setLoading(false);
                // var uid = user.uid;
            } else {
                dispatch(clientStatus(false))
                // console.log('No USER')
                setLoading(false);
            }
        });
    }, [])





    return (
        <div className="App">
            {/*<RippleExample/>*/}
            <Switch>
                { loading ?
                    <Snipper1/>
                    :
                    <>
                    <PrivateRoute exact user={!uStatus} path={'/'}  component={RegisterPage} redirect={'/usercab'}/>
                    <PrivateRoute exact user={!uStatus} path={'/login'}  component={LoginPage} redirect={'/usercab'}/>
                    <PrivateRoute exact user={uStatus} path={'/usercab'}  component={UserCab} redirect={'/'}/>
                    <PrivateRoute user={uStatus} path={'/usercab/postcreator'}  component={AdminPostCreator} redirect={'/'}/>
                    </>
                }
            </Switch>

        </div>
    );
}

export default App;

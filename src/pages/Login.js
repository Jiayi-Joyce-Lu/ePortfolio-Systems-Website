import React from "react";
import { useAuth0} from "@auth0/auth0-react";

export default function Login() {
    const {loginWithRedirect } = useAuth0();
    const {logout } = useAuth0();
    const { user, isAuthenticated }  = useAuth0()
    if (isAuthenticated){
    return (
        <div>
            <button onClick={() => logout()}>Log out</button>
            <button onClick={updateUserProfile(user.sub)}> Update </button>
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.sub}</p>

        </div>
        </div>
    );}else{
        return (
            <div>
                <button onClick={() => loginWithRedirect()}>Log in</button>
            </div>
        );

    }

}

function updateUserProfile(){
    //window.location.assign(`http://localhost:3000/login`);
}
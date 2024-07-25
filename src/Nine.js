//Login and register integration
import Six from "./Six";
import Eight from "./Eight";
import { useState } from "react";
function Nine(){
    const [isLogin, setIsLogin] = useState(true);
    const showLogin = ()=> {setIsLogin(true)}
    const showRegister = ()=> {setIsLogin(false)}
return (
    <div>
        <button onClick={showLogin}>Login</button>
        <button onClick={showRegister}>Register</button>
        {isLogin? <Six/> : <Eight/>}
    </div>

);
}
export default Nine;
import { useState } from "react";

function LoginStatus () {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        
        <div>
            <h2> {isLoggedIn ? "welcome back!" : "please, log in"}</h2>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "log out" : "log in"}
            </button>
        </div>
        
       
    );
};

export default LoginStatus

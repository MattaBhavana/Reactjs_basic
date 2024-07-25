import React, { useRef, useState } from 'react';
//Login and register in same code
function Seven() {
    const [page, setPage] = useState('login');
    const collegeIdRef = useRef(null);
    const passwordRef = useRef(null);

    const Loginpage = () => {
        return (
            <>
                <h5>Login</h5>
                <p>Enter your details to login</p>
                <h6>College ID</h6>
                <input type="text" ref={collegeIdRef} placeholder="College ID" />
                <h6>Password</h6>
                <input type="password" ref={passwordRef} placeholder="Password" />
            </>
        );
    };

    const Registerpage = () => {
        return (
            <>
                <h5>Register</h5>
                <p>Enter your details to register</p>
                <h6>College ID</h6>
                <input type="text" ref={collegeIdRef} placeholder="College ID" />
                <h6>Password</h6>
                <input type="password" ref={passwordRef} placeholder="Password" />
                <h6>confirm Password</h6>
                <input type="password" ref={passwordRef} placeholder="Confirm Password" />
            </>
        );
    };

    return (
        <div className="class">
            <button onClick={() => setPage('login')}>Login</button>
            <button onClick={() => setPage('register')}>Register</button>
            {page === 'login' ? <Loginpage /> : <Registerpage />}
        </div>
    );
}

export default Seven;
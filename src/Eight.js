import React, { useState } from "react";
//Register page
function Eight() {
    const [collegeIdValue, setCollegeId] = useState('');
    const [emailIdValue, setEmailId] = useState('');
    const [branchValue, setBranch] = useState('');
    const [yearValue, setYear] = useState('');
    const [genderValue, setGender] = useState('');

    const getCollegeId = (event) => {
        setCollegeId(event.target.value);
        console.log(event.target.value);
    };

    const getEmailId = (event) => {
        setEmailId(event.target.value);
        console.log(event.target.value);
    };

    const getBranch = (event) => {
        setBranch(event.target.value);
        console.log(event.target.value);
    };

    const getYear = (event) => {
        setYear(event.target.value);
        console.log(event.target.value);
    };

    const getGender = (event) => {
        setGender(event.target.value);
        console.log(event.target.value);
    };
    const submitData = (event)=>{
        event.preventDefault();
        const obj = {
            collegeIdValue,emailIdValue,branchValue,genderValue
        }
        //SetUser(obj);
        //console.log(user);
        console.log(obj);
    }

    return (
        <div className="container" style={{ width: '300px', padding: '20px' }}>
            <form onSubmit
                style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h5>Login</h5>
                <p>Enter your details to login</p>
                <h6>College ID</h6>
                <input type="text" onChange={getCollegeId} placeholder="College ID" />
                <h6>Password</h6>
                <input type="password" placeholder="Password" />
                <h6>Email address</h6>
                <input type="email" onChange={getEmailId} placeholder="Email address" />
                <h6>Branch</h6>
                <select className="form-select" value={branchValue} onChange={getBranch} aria-label="Default select example">
                    <option value="">Select a Branch</option>
                    <option value="AIML">AIML</option>
                    <option value="AIDS">AIDS</option>
                    <option value="CSE">CSE</option>
                </select>
                <h6>Year</h6>
                <select className="form-select" value={yearValue} onChange={getYear} aria-label="Default select example">
                    <option value="">Select a Year</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <h6>Gender</h6>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <input type="radio" checked={genderValue === "Female"}
                        value="Female" onChange={getGender} />Female
                    <input type="radio" checked={genderValue === "Male"}
                        value="Male" onChange={getGender} />Male
                </div>
                <button type="submit" onClick={submitData} className="btn btn-dark">Register</button>
                
            </form>
           
        </div>
    );
}

export default Eight;
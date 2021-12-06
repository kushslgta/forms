import React, { useState } from "react";
const App = () => {
    const [fullName,setFullName] = useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
    });
    const InputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
// const value=event.target.value;
// const name=event.target.name;
const {name,value}=event.target;
setFullName((preValue)=>{
    console.log(preValue);
    return{
        ...preValue,
        [name]:value,
    };

// if(name==='fname'){
//     return{
//         fname:value,
//     lname:preValue.lname,
//     email:preValue.email,
//     phone:preValue.phone,
//     };
// }else if(name==='lname'){
//     return{
//         fname:preValue.fname,
//     lname:value,
//     email:preValue.email,
//     phone:preValue.phone,
//     };
// }else if(name==='email'){
//     return{
//         fname:preValue.fname,
//     lname:preValue.lname,
//     email:value,
//     phone:preValue.phone,
//     };
// }else if(name==='phone'){
//     return{
//         fname:preValue.fname,
//     lname:preValue.lname,
//     email:preValue.email,
//     phone:value,
//     };
// }
});


    };
    const onSubmits = (event) => {
        event.preventDefault();
        alert('form submitted'); 
    }
    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmits}>
                    <div>
                        <h1>Hello {fullName.fname}{fullName.lname}</h1>
                        <p>{fullName.phone}</p>
                        <p>{fullName.email}</p>

                        <input type="text"
                            placeholder="Enter Your Name"
                            name='fname'
                            onChange={InputEvent}
                            value={fullName.fname}
                        />
                        <br />
                        <input type="text"
                            placeholder="Enter Your last Name"
                            name='lname'  
                            onChange={InputEvent}
                            value={fullName.lname}
                        />
                        <input type="email"
                            placeholder="Enter Your email"
                            name="email"
                            onChange={InputEvent}
                            value={fullName.email}
                        />
                        <input type="number"
                            placeholder="Enter Your phone"
                            name='phone'  
                            onChange={InputEvent}
                            value={fullName.phone}
                        />
                        <button type="submit" onClick={onSubmits}>
                            Submit me
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default App;
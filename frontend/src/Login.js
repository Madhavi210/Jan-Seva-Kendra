import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { auth } from "./firebase";


const Login = () => {
	// Inputs
	const [mynumber, setnumber] = useState("");
	const [otp, setotp] = useState('');
	const [show, setshow] = useState(false);
	const [final, setfinal] = useState('');
	const [service, setService] = useState(undefined);
    const [slot, setSlot] = useState(undefined);

	// Sent OTP
	const signin = () => {

		if (mynumber === "" || mynumber.length < 10) return;

		let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
		let myfinalNumber = "+91 " + mynumber;
		console.log(myfinalNumber)
		auth.signInWithPhoneNumber(myfinalNumber, verify).then((result) => {
			setfinal(result);
			// alert("OTP sent on mobile number: +91 "+mynumber)
			setshow(true);
		})
			.catch((err) => {
				alert(err);
				window.location.reload()
			});
	}
	// console.log(service)
	// Validate OTP
	const ValidateOtp = () => {
		if (otp === null || final === null)
			return;
		final.confirm(otp).then((result) => {
			// success
			localStorage.setItem("service",service);
			localStorage.setItem("slot",slot);
		}).catch((err) => {
			alert("Wrong code");
		})


	}
	
	
	console.log(service,slot)	

	return (
		<div style={{ "marginTop": "100px" }}>
			<center>

		<div className='row' style={{marginLeft:"38%",marginBottom:"5%"}}>
		<div className="col-auto md-6">
              <select value={service} onChange={(e) => setService(e.target.value)} class="form-select">

                <option value={undefined} selected disabled>Select Services</option>
                <option value="Aadhar Card ">Aadhar Card</option>
                <option value="Income Certificate">Income Certificate</option>
                <option value="EWS Certificate">EWS Certificate</option>
                <option value="ST/Sc">ST/SC Certificate</option>
                <option value="Non Criminal">Non-Criminal</option>

              </select>

            </div>

			<div className="col-auto md-6">
              <select  class="form-select " value={slot} onChange={(e) => setSlot(e.target.value)} style={{width:"11vw"}}>

                <option value={undefined} selected disabled>Select Slot</option>
                <option value="1">Morning</option>
                <option value="2">Afternoon</option>
                <option value="3">Evening</option>
                
              </select>

            </div>
		</div>


				<div style={{ display: !show ? "block" : "none" }}>
				<Form.Label style={{fontSize:"30px", color:"rgb(88, 143, 190)"}}>Enter Mobile Number</Form.Label><br/><br/>
					<input value={mynumber} onChange={(e) => {
					setnumber(e.target.value) }}
						style={{padding:"10px",width:"35vh"}} placeholder="Enter Mobile Number" />
					<br /><br />
					<div id="recaptcha-container"></div>
					
					<Button onClick={signin} style={{backgroundColor:"rgb(88, 143, 190)", marginTop:"2%"}}>Send OTP</Button>{' '}
				</div>
				<div style={{ display: show ? "block" : "none" }}>
				<Form.Label style={{fontSize:"30px", color:"rgb(88, 143, 190)"}}>Verify OTP</Form.Label><br/><br/>
					<input type="text"style={{padding:"10px",width:"35vh"}} placeholder={"Enter your OTP"}
						onChange={(e) => { setotp(e.target.value) }}></input>
					<br /><br />
					<p>OTP sent on mobile number: +91 {mynumber}</p>
					<br />
					<Button onClick={ValidateOtp} style={{backgroundColor:"rgb(88, 143, 190)", marginTop:"1%"}}>Generate Token</Button>{' '}
				</div>
			</center>
		</div>
	);
}

export default Login;

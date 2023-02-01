import React, { Component, useEffect, useState} from 'react';
import { auth } from './firebase';
import jsPDF from 'jspdf';
import { Button } from 'react-bootstrap';
import axios from 'axios'

const Mainpage = () => {
	
	const [token, setToken] = useState('')
	let key = localStorage.getItem("slot")
	console.log(key)
	useEffect(() => {
		axios
		.get( `http://localhost:5000/gtoken/517/${key}`,{
			"m_number":9104883288
		})
		.then(res => {
			setToken(res.data)
			console.log(res.data,"djhjh")
			}	)

	}, [])
    // useEffect(() => {
	
	// 	console.log(token,"finally added")
       
	// }, [token])


	const pdfGenerate = () => {
		var doc = new jsPDF('landscape', 'px', 'a4', 'false');
		doc.setFont('Helvetica')
		doc.text(60, 100, "Token Details: ")
		doc.text(60, 140, "Service Name :"+localStorage.getItem("service"))
		doc.text(60, 160, "Mobile Number :" + auth.currentUser.phoneNumber)
		doc.text(60, 180, "Token Number :"+token.tokenid)
		doc.text(60, 200, "Estimated Coming Time : "+token.hours+"."+token.minutes)
		doc.text(60, 240, "Documents List That should be brought together : "+token.bring)

		doc.setFontSize(14)
		// doc.text(60, 260, token.bring)
		// doc.text(60, 280, "windo number"+token.windono)
		//doc.text(60, 280, "2.swdefghj ")

		doc.setFontSize(12)
		doc.text(60, 320, "**Note : Time may vary in certain situations such as power failure , server down etc.")

		doc.save('token.pdf')
	}

	const logout = () => {
		auth.signOut();
	}

	return (

		<>
			<div style={{ textAlign: "center" }}>
				<h2 style={{ marginTop: "5%" }}>Token Details : </h2><br></br>
				<p style={{ fontSize: "20px" }}>Service Name : {localStorage.getItem("service")}  <br /> <br />
					Mobile Number : {auth.currentUser.phoneNumber}<br /> <br />
					Token Number : {token.tokenid} <br /> <br />
					Estimated Coming Time : {token.hours+"."+token.minutes} <br /> <br />
					Documents List <br />{token.bring}<br />
				</p>
				<p style={{ fontSize: "12px" }}>**Note : Time may vary in certain situations such as power failure , server down etc.</p>
				<Button onClick={pdfGenerate}>Download PDF</Button>
				<Button style={{ "marginLeft": "20px" }}
					onClick={logout}>Logout</Button>
			</div>


		</>
	);
}


export default Mainpage;
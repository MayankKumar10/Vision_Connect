import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import "../../styles/root.css";
import {
	google,
	github,
} from "../../assets/images";
import { MdVisibility,	MdVisibilityOff} from "react-icons/md"
import { usePSWToggler } from "../../hooks";
import { signupUser } from "../../Redux";

export function Signup() {
	const initialState = {
		firstName:'',
		lastName:'',
		email:'',
		username:'',
		password:'',
	}
	const {togglePSW, PSWToggler} = usePSWToggler(); 
	const [userDetails, setUserDetails] = useState(initialState);
	const {firstName, lastName, email, username, password} = userDetails;
	const dispatch = useDispatch() 
	const {token, user, authStatus, authError} = useSelector((state)=>state.auth);
	const [formErrors, setFormErrors] = useState({
		firstNameError:'',
		lastNameError:'',
		emailError:'',
		usernameError:'',
		passwordError:'',
	})


console.log('TogglePSW',togglePSW?.type);

const validityChecker = () =>{
	if( firstName === '' || !/^[a-zA-Z]+$/.test(firstName)){
		formErrors.firstNameError = 'Invalid first Name';
	}
	if(lastName === '' || !/^[a-zA-Z]+$/.test(lastName)){
		formErrors.lastNameError = 'Invalid last Name';
	}
	if(email === '' || !/^[a-z0-9._%+-]+@[a-z0-9.-]+$/.test(email)){
		formErrors.emailError = 'Invalid email';
	}
	if(username === '' || !/^[w_.]+$/.test(username)){
		formErrors.usernameError = 'Invalid username';
	}
	if(password === '' || !/^(?=.*\d).{8,}$/.test(password)){
		formErrors.passwordError = 'Invalid password';
	}
	if(Object.values(formErrors).some((x)=> x !== '')){
		return false;
	}
	return true;
}

const navigate = useNavigate();
const [formSubmitted, setFormSubmitted] = useState(false);

const signUpHandler = async(e, userDetails) =>{
	e.preventDefault();
	if(!validityChecker){
		setFormErrors(formErrors);
		setFormSubmitted(true);
	} else {
		const res = await dispatch(signupUser(userDetails));

		if(res?.payload.encodedToken){
			navigate('/');
		}
	}
};


	return (
		<>
			<div className="inputDomMainContainer flex-evenly">
				<form
					className="formContainerMain inputDomContainer AlertInfo input-flex inputError box-shadow"
					action="submit"
					autocomplete="on"
					onSubmit={(e)=> signUpHandler(e, userDetails)}
				>
					<div className="formContainer input-flex">
						<h3 className="h3Tag">
							Sign Up
						</h3>
						<p className="discriptionText">
							Please fill the form to create
							an account
						</p>
					</div>

					<div className="formContainer">

						<div className="formName inputDomContainer formInput AlertError inputError flex-evenly box-shadow">
							<i className="material-icons">
								person
							</i>
							<input
								className="login-check formInput AlertError search-container"
								type="text"
								id=""
								placeholder="first Name"
								value={firstName}
								onChange={(e)=>
									setUserDetails((prev)=>({...prev, firstName:e.target.value}))}
								required
							/>
							<span className="validity"></span>
						</div>

						<div className="formName inputDomContainer formInput AlertError inputError flex-evenly box-shadow">
							<i className="material-icons">
								person
							</i>
							<input
								className="login-check formInput AlertError search-container"
								type="text"
								id=""
								placeholder="User Name"
								value={lastName}
								onChange={(e)=>
									setUserDetails((prev)=>({...prev, lastName:e.target.value}))
								}
								required
							/>
							<span className="validity"></span>
						</div>

						<div className="formEmail inputDomContainer formInput AlertWarning inputError flex-evenly box-shadow">
							<i className="material-icons">
								email
							</i>
							<input
								className="login-check formInput AlertWarning search-container"
								type="email"
								id=""
								placeholder="Email"
								value={email}
								onChange={(e)=>
									setUserDetails((prev)=>({...prev, email:e.target.value}))}
								autocomplete="off"
							/>
							<span className="validity"></span>
						</div>

						<div className="formPassword inputDomContainer formInput AlertInfo inputError flex-evenly box-shadow">
							<i className="material-icons">
								lock
							</i>
							<input
								className="login-check formInput AlertInfo search-container"
								type="text"
								id=""
								placeholder="username"
								value={username}
								onChange={(e)=>
									setUserDetails((prev)=>({...prev, username: e.target.value}))}
							/>
							<span className="validity"></span>
						</div>

						<div className="formPassword inputDomContainer formInput AlertSuccess inputError flex-evenly box-shadow">
							<i className="material-icons">
								lock
							</i>
							<input
								className="login-check formInput AlertSuccess search-container"
								type={`${togglePSW?.type}`}
								id=""
								placeholder="Password"
								value={password}
								onChange={(e)=>
									setUserDetails((prev)=>({...prev, password: e.target.value}))}
							/>
							
							<span className="validity" onClick={()=>PSWToggler()}>
							{togglePSW.type ==='password' ? <MdVisibilityOff size='20' /> :<MdVisibility size='20' />}
							</span>
						</div>

						<span className="padding-normal">
							<input
								type="checkbox"
								id=""
							/>
							I accept the
							<code>TermsOfUse</code>
						</span>
					</div>

					<div className="formButtonContainer flex-evenly">
						<div className="AlertDomMainContainer">
							<input
								type="submit"
								className="ButtonDomContainer descriptionOne primary-button flex-evenly buttonHoverShadow"
								value="Signup"
							/>
						</div>

						<div className="AlertDomMainContainer">
							<Link to="/Login">
								<input
									type="button"
									className="ButtonDomContainer descriptionOne primary-button flex-evenly buttonHoverShadow"
									value="Login"
								/>
							</Link>
						</div>
					</div>

					<section className="flex-column-center">
						<div>Or SignUp Using</div>

						<section className="flex-row-center padding-normal">
							<button className="form-signup-icons">
								<img
									className="social-img"
									src={google}
									alt="google"
								/>
							</button>
							<button className="form-signup-icons">
								<img
									className="social-img"
									src={github}
									alt="github"
								/>
							</button>
						</section>
					</section>
				</form>
			</div>
		</>
	);
}

export default Signup;

import Navbar from "../components/Navbar";
import { useState, useEffect} from "react";
import React from 'react'


const UserSignup = () => {

  const signupURL = "http://localhost:5000/api/registerUser";
  const [doctors, setDoctors] = useState();
 

  const getData = async () => {
    try {
      const res = await fetch(signupURL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log("data", data)
      setDoctors(data);
      
    } 
    
    catch (error) {
      console.log(error);
      window.alert("Please try after some time.");
      
    }
  };

  useEffect(() => {
    getData();
  }, []);


  const [user, setUser] = useState({
  username:"", email:"", password:"", contact:"", gender:"", dob:"", emergency_contact: "", primary_concern: "", 
  preferred_therapist: "", treatment_history: ""
  });

  let name, value
  const handleInputs = (e) => {
    name = e.target.name
    value = e.target.value

    setUser({...user,[name]:value });
    //console.log(setUser)
  }

const postData = async (e) => {
    //alert("hi")
    e.preventDefault()

    const signupURL = "http://localhost:5000/api/weeklyJournal"

    const {q1, q2, q3, q4, q5, q6, q7} = qn;

    const response = await fetch(signupURL, {
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        q1, q2, q3, q4, q5, q6, q7
      })
    })

    const data = await response.json()
    if(data.status == 201){
      alert(data.msg)

    }   
    else{
      alert(data.msg)
    }
  }


  return (
    <div className="w-full relative [background:linear-gradient(121.5deg,_#eed8ec_23.42%,_#a8edea)] h-[1063px] overflow-hidden text-center text-5xl text-rosybrown font-inter">
      <Navbar logIn="Log In" />
      <div className="absolute top-[98px] left-[115px] bg-gray-100 w-[1093px] h-[881px] overflow-hidden flex flex-col items-center justify-start py-5 px-2.5 box-border">
        <b className="w-[833px] relative tracking-[0.1em] flex items-center justify-center">
          USER SIGN UP
        </b>
        <div className="w-[956px] h-[742px] overflow-hidden shrink-0 flex flex-row flex-wrap items-center justify-start py-0 px-0.5 box-border gap-[20px_19px] text-left text-base">
          <img
            className="w-[390px] relative h-[247.7px] object-cover"
            alt=""
            src="/signup.png"
          />
          <div className="w-[529px] box-border h-[321px] overflow-hidden shrink-0 flex flex-col items-center justify-start p-2.5 gap-[19px] border-[1px] border-solid border-rosybrown">
            <b className="w-[354px] relative text-xl flex text-center items-center justify-center h-[30px] shrink-0">
              Hello, let us know more about you!
            </b>
            <div className="w-[499px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[84px] relative flex items-center h-[30px] shrink-0">
                Name
              </b>
              <input name="name" value = {user.name} onChange={handleInputs} className="w-[375px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
            <div className="w-[499px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[84px] relative flex items-center h-[30px] shrink-0">
                Email
              </b>
              <input name="email" value = {user.email} onChange={handleInputs} className="w-[375px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
            <div className="w-[499px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[84px] relative flex items-center h-[30px] shrink-0">
                Password
              </b>
              <input name="password" value = {user.password} onChange={handleInputs} className="w-[375px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
            <div className="w-[499px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[84px] relative flex items-center h-[30px] shrink-0">
                Contact
              </b>
              <input name="contact" value = {user.contact} onChange={handleInputs} className="w-[375px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
          </div>
          <div className="w-[458px] box-border h-[330px] overflow-hidden shrink-0 flex flex-col items-center justify-start p-2.5 gap-[19px] border-[1px] border-solid border-rosybrown">
            <b className="w-[354px] relative text-xl flex text-center items-center justify-center h-[30px] shrink-0">
              Personal Information
            </b>
            <div className="w-[400px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[84px] relative flex items-center h-[30px] shrink-0">
                Gender
              </b>
              <input name="gender" value = {user.gender} onChange={handleInputs} className="w-[275px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
            <div className="w-[400px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[84px] relative flex items-center h-[30px] shrink-0">
                Date Of Birth
              </b>
              <input name="dob" value = {user.dob} onChange={handleInputs} type="date" className="w-[275px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
            <div className="w-[400px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-0 px-2.5 box-border gap-[10px]">
              <b className="w-[94px] relative flex items-center h-[30px] shrink-0">
                Emergency Contact
              </b>
              <input name="emergency_contact" value = {user.emergency_contact} onChange={handleInputs} className="w-[275px] relative rounded-11xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
          </div>
          <div className="w-[458px] box-border h-[327px] overflow-hidden shrink-0 flex flex-col items-center justify-start p-2.5 gap-[19px] border-[1px] border-solid border-rosybrown">
            <b className="w-[354px] relative text-xl flex text-center items-center justify-center h-[30px] shrink-0">
              {" "}
              Medical Information
            </b>
            <div className="w-[400px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[84px] relative flex items-center h-[30px] shrink-0">
                Primary Concern
              </b>
              <input name="primary_concern" value = {user.primary_concern} onChange={handleInputs} className="w-[275px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
            <div className="w-[400px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[84px] relative flex items-center h-[30px] shrink-0">
                Preferred Therapist
              </b>
              <select name="preferred_therapist" value = {user.preferred_therapist} onChange={handleInputs} className="w-[275px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" >
             
              {console.log("doctors: ", doctors)}{
                
              (doctors != null && doctors!=undefined) ?
              doctors.doctors.map((doctor) => {
                return(
                  <>
                    <option key={doctor._id} value={doctor._id}>{doctor.name}</option>
                  </>
                )
              })
              :
              <></>
            
            }
              </select>
            </div>
            <div className="w-[400px] bg-gray-200 h-[119px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-0 px-2.5 box-border gap-[10px]">
              <b className="w-[84px] relative flex items-center h-[30px] shrink-0">
                Treatment History
              </b>
              <textarea name="treatment_history" value = {user.treatment_history} onChange={handleInputs} className="w-[275px] py-[10px] relative rounded-11xl bg-white h-27 overflow-auto shrink-0" />
            </div>
          </div>
        </div>
        <button onClick={postData} className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown rounded-21xl overflow-hidden flex flex-row items-center justify-center">
          <b className="relative text-xl font-inter text-plum text-center">
            Sign Me Up
          </b>
        </button>
      </div>
    </div>
  );
};

export default UserSignup;

import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

const DoctorDashboard = () => {

  const [doctor, setDoctor] = useState({
  })
  const URL = "http://localhost:5000/api/showDocProfile"  

  const getData = async () => {
    try{
      const res = await fetch(URL,{
        method: "GET", 
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })

      const data = await res.json()
     
      setDoctor(data.rootUser)
      console.log(data.rootUser.name)
    }
    
    catch(e){
      console.log(e)
      window.alert("Please try after some time.")
      
    }
  }

  useEffect(()=> { getData() }, [])


  return (
    <div className="w-full relative [background:linear-gradient(121.5deg,_#eed8ec_23.42%,_#a8edea)] h-[750px] overflow-hidden text-left text-xl text-rosybrown font-inter">
      <Navbar logIn="Logout" />
      <b className="absolute top-[103px] left-[90px] text-13xl flex items-center w-[785px] h-[30px]">
        Hello Dr. {doctor.name}
      </b>
      <b className="absolute top-[157px] left-[91px] flex items-center w-[770px] h-[30px]">
        Dashboard
      </b>
      <div className="absolute top-[203px] left-[82px] w-[805px] overflow-hidden flex flex-row flex-wrap items-start justify-start p-2.5 box-border gap-[10px] text-center text-plum">
        
        <div onClick ={() => window.location.href = "http://localhost:3000/doctormypatients"}
          className="
            bg-plum h-[171px] overflow-hidden flex flex-col items-center justify-center py-[51px] px-[29px] box-border text-rosybrown
            hover:bg-rosybrown hover:text-plum hover:cursor-pointer">
          <b className="w-[191px] relative flex items-center justify-center h-[74px] shrink-0">
            My Patients 
          </b>
        </div>

        <div className="bg-plum h-[171px] overflow-hidden flex flex-col items-center justify-center py-[51px] px-[29px] box-border text-rosybrown
            hover:bg-rosybrown hover:text-plum hover:cursor-pointer">
          <b className="w-[191px] relative flex items-center justify-center h-[74px] shrink-0">
            Join Room
          </b>
        </div>

      </div>
      <div className="absolute top-[93px] left-[836px] bg-gray-100 w-[482px] h-[587px] overflow-hidden flex flex-col items-center justify-start text-base">
        <b className="w-[400px] relative text-xl flex text-center items-center justify-center h-[58px] shrink-0">
          My Profile
        </b>
        <div className="w-[415px] bg-gray-200 h-[90px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
          <b className="w-[140px] relative flex items-center h-[30px] shrink-0">
            Name 
          </b>
          <div className="w-[375px] relative bg-none h-10 overflow-hidden shrink-0" > {doctor.name}</div>
        </div>
        <div className="w-[415px] bg-gray-200 h-[90px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
          <b className="w-[140px] relative flex items-center h-[30px] shrink-0">
            Email 
          </b>
          <div className="w-[375px] relative bg-none h-10 overflow-hidden shrink-0" >{doctor.email}</div>
        </div>
        <div className="w-[415px] bg-gray-200 h-[90px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
          <b className="w-[140px] relative flex items-center h-[30px] shrink-0">
            Contact 
          </b>
          <div className="w-[375px] relative bg-none h-10 overflow-hidden shrink-0" >{doctor.contact}</div>
        </div>
        <div className="w-[415px] bg-gray-200 h-[90px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
          <b className="w-[140px] relative flex items-center h-[30px] shrink-0">
            License Number 
          </b>
          <div className="w-[375px] relative bg-none h-10 overflow-hidden shrink-0" >{doctor.licenseNumber}</div>
        </div>
        <div className="w-[415px] bg-gray-200 h-[90px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
          <b className="w-[140px] relative flex items-center h-[30px] shrink-0">
            Experience (yrs) 
          </b>
          <div className="w-[375px] relative bg-none h-10 overflow-hidden shrink-0" >{doctor.experience}</div>
        </div>
        <button className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown rounded-21xl overflow-hidden flex flex-row items-center justify-center">
          <b className="relative text-xl font-inter text-plum text-center">
            Edit
          </b>
        </button>
      </div>
    </div>
  );
};

export default DoctorDashboard;

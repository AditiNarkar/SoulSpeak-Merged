import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import axios from 'axios';
import UserDashboard from './UserDashboard';
import {useNavigate} from 'react-router-dom';

const UserIdentity = () => {
  const [randomName, setRandomName] = useState('');
  const [randomProfilePhoto, setRandomProfilePhoto] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/userDashboard");
  
  }

  useEffect(() => {
    const fetchRandomUserData = async () => {
      try {
        // Fetch random user data from the backend
        const response = await axios.get('/userIdentity');
        const { name, profilePhoto } = response.data;

        // Update state with fetched data
        setRandomName(name);
        setRandomProfilePhoto(profilePhoto);
      } catch (error) {
        console.error('Error fetching random user data:', error);
      }
    };

    fetchRandomUserData();
  }, []);

  return (
    <div className="w-full relative [background:linear-gradient(121.5deg,#eed8ec_23.42%,#a8edea)] h-[750px] overflow-hidden text-center text-xl text-rosybrown font-inter">
      <Navbar logIn="Log In" />
      <div className="absolute top-[118px] left-[215px] bg-gray-100 [backdrop-filter:blur(29.8px)] w-[1093px] h-[552px] overflow-hidden flex flex-col items-center justify-start py-5 px-2.5 box-border gap-[10px]">
        <div className="w-[956px] h-[426px] overflow-hidden shrink-0 flex flex-row items-center justify-center gap-[55px]">
          <div className="overflow-hidden flex flex-col items-start justify-center py-8 px-0 gap-[10px]">
            <div
              className="w-[308px] relative rounded-[50%] bg-gainsboro h-[308px]"
              style={{
                backgroundImage: "download.svg",
                backgroundSize: 'cover',
              }}
            />
            <b className="w-[309px] relative flex items-center justify-center h-12 shrink-0">BlueDog</b>
          </div>
          <div className="w-[507px] relative text-left inline-block h-[360px] shrink-0">
            <p className="m-0">Hello BlueDog,</p>
            <p className="m-0">
              Our platform is committed to prioritizing your privacy and
              ensuring a safe space for open expression. With our anonymous
              identity feature, you can engage with confidence, knowing that
              your personal information remains confidential. Whether you're
              sharing your thoughts, seeking support, or connecting with others,
              your identity will remain protected. Embrace the freedom to
              express yourself authentically without fear of judgment or
              exposure. We believe in the power of anonymity to foster genuine
              connections and facilitate meaningful conversations. Your voice
              matters, and we're here to amplify it while safeguarding your
              anonymity every step of the way.
            </p>
            {/* Rest of the content */}
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown rounded-21xl overflow-hidden flex flex-row items-center justify-center">
          <b className="relative text-xl font-inter text-plum text-center" onClick={handleClick}> Alright ! </b>
        </button>
      </div>
    </div>
  );
};

export default UserIdentity;
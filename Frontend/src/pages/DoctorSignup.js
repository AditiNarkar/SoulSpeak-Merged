import Navbar from "../components/Navbar";

const DoctorSignup = () => {
  return (
    <div className="w-full relative [background:linear-gradient(121.5deg,_#eed8ec_23.42%,_#a8edea)] h-[750px] overflow-hidden text-center text-5xl text-rosybrown font-inter">
      <Navbar logIn="Log In" />
      <div className="absolute top-[76px] left-[34px] bg-gray-100 [backdrop-filter:blur(29.8px)] w-[1279px] h-[631px] overflow-hidden flex flex-col items-center justify-start py-5 px-2.5 box-border gap-[16px]">
        <b className="w-[833px] relative tracking-[0.1em] flex items-center justify-center">
          DOCTOR SIGN UP
        </b>
        <div className="w-[1167px] overflow-hidden flex flex-row flex-wrap items-center justify-center py-[18px] px-1 box-border gap-[0px_19px] text-left text-base">
          <img
            className="w-[387px] relative h-[400.4px] object-cover"
            alt=""
            src="/signup-1@2x.png"
          />
          <div className="w-[578px] overflow-hidden shrink-0 flex flex-col items-center justify-start p-2.5 box-border gap-[19px]">
            <b className="w-[407px] relative text-xl flex text-center items-center justify-center h-[30px] shrink-0">
              Hello doc, let us know more about you!
            </b>
            <div className="w-[564px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[140px] relative flex items-center h-[30px] shrink-0">
                Name
              </b>
              <input className=" w-[375px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
            <div className="w-[564px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[140px] relative flex items-center h-[30px] shrink-0">
                Email
              </b>
              <input type="email" className="w-[375px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
            <div className="w-[564px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[140px] relative flex items-center h-[30px] shrink-0">
                Password
              </b>
              <input type="password" className="w-[375px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
            <div className="w-[564px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[140px] relative flex items-center h-[30px] shrink-0">
                Contact
              </b>
              <input className="w-[375px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
            <div className="w-[564px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[140px] relative flex items-center h-[30px] shrink-0">
                License Number
              </b>
              <input className="w-[375px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
            <div className="w-[564px] bg-gray-200 h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
              <b className="w-[140px] relative flex items-center h-[30px] shrink-0">
                Experience (yrs)
              </b>
              <input type="number" min="1" max="70" step="1" className="w-[375px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown rounded-21xl overflow-hidden flex flex-row items-center justify-center">
          <b className="relative text-xl font-inter text-plum text-center">
            Sign Me Up
          </b>
        </button>
      </div>
    </div>
  );
};

export default DoctorSignup;

import Navbar1 from "../components/Navbar1";

const UserDashboard = () => {
  return (
    <div className="w-full relative [background:linear-gradient(121.5deg,_#eed8ec_23.42%,_#a8edea)] h-[750px] overflow-hidden text-left text-13xl text-rosybrown font-inter">
      <Navbar1 />
      <b className="absolute top-[83px] left-[90px] flex items-center w-[785px] h-[30px]">
        Hello Meghana !
      </b>
      <div className="absolute top-[142px] left-[90px] w-[1287px] overflow-hidden flex flex-row flex-wrap items-start justify-start py-2.5 px-0 box-border gap-[65px] text-center text-xl">
        <div className="w-[344px] bg-gray-100 h-[501px] overflow-hidden shrink-0 flex flex-col items-center justify-start text-left text-base">
          <b className="w-[346px] relative text-xl flex text-center items-center justify-center h-[58px] shrink-0">
            My Doctor - DR. SHEETAL
          </b>
          <div className="bg-gray-200 h-[90px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
            <b className="w-[140px] relative flex items-center h-[30px] shrink-0">
              Name
            </b>
            <div className="w-[291px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
          </div>
          <div className="bg-gray-200 h-[90px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
            <b className="w-[140px] relative flex items-center h-[30px] shrink-0">
              Email
            </b>
            <div className="w-[291px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
          </div>
          <div className="bg-gray-200 h-[90px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
            <b className="w-[140px] relative flex items-center h-[30px] shrink-0">
              Contact
            </b>
            <div className="w-[291px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
          </div>
          <div className="bg-gray-200 h-[90px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
            <b className="w-[140px] relative flex items-center h-[30px] shrink-0">
              Experience (yrs)
            </b>
            <div className="w-[291px] relative rounded-31xl bg-white h-10 overflow-hidden shrink-0" />
          </div>
          <button className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown rounded-21xl overflow-hidden flex flex-row items-center justify-center">
            <b className="relative text-xl font-inter text-plum text-center">
              Contact
            </b>
          </button>
        </div>
        <div className="w-[506px] bg-gray-100 h-[501px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
          <b className="w-[346px] relative flex items-center justify-center h-[58px] shrink-0">{`Support Group Expressions `}</b>
          <div className="w-[445px] h-[395px] overflow-auto shrink-0 flex flex-col items-center justify-start py-2.5 px-0 box-border gap-[16px] text-left text-sm">
            <div className="w-[408px] bg-gray-200 overflow-hidden flex flex-col items-start justify-center">
              <div className="w-[30px] relative rounded-[50%] bg-gainsboro h-[30px]" />
              <div className="w-[294px] relative flex items-center">
                bleh bleh
              </div>
            </div>
            <div className="w-[408px] bg-gray-200 overflow-hidden flex flex-col items-start justify-center">
              <div className="w-[30px] relative rounded-[50%] bg-gainsboro h-[30px]" />
              <div className="w-[294px] relative flex items-center">
                bleh bleh
              </div>
            </div>
            <div className="w-[408px] bg-gray-200 overflow-hidden flex flex-col items-start justify-center">
              <div className="w-[30px] relative rounded-[50%] bg-gainsboro h-[30px]" />
              <div className="w-[294px] relative flex items-center">
                bleh bleh
              </div>
            </div>
          </div>
          <div className="w-[447px] h-9 overflow-hidden shrink-0 flex flex-row items-start justify-center gap-[11px]">
            <textarea className="max-w-[330px] relative rounded-11xl bg-white max-h-[30px] overflow-hidden shrink-0" />
            <button className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown w-[93px] rounded-21xl h-[35px] overflow-hidden shrink-0 flex flex-row items-center justify-center box-border">
              <b className="relative text-xl font-inter text-plum text-center">
                Post
              </b>
            </button>
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[10px]">
          <div onClick={()=> window.location.href="http://localhost:3000/userjournal"} className=" hover:bg-rosybrown hover:text-plum hover:cursor-pointer bg-plum h-[123px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[51px] px-[29px] box-border">
            <b className="w-[191px] relative flex items-center justify-center h-[74px] shrink-0">
              My Journals
            </b>
          </div>
          <div className="hover:bg-rosybrown hover:text-plum hover:cursor-pointer bg-plum h-[123px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[51px] px-[29px] box-border">
            <b className="w-[191px] relative flex items-center justify-center h-[74px] shrink-0">
              Join Meet Room
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

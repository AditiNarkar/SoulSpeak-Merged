const Navbar1 = () => {
  const logoutURL = "http://localhost:5000/api/logout"
  const logout = async() => {
   const res = await fetch(logoutURL,{
      method:"GET",
      headers:{
        Accept: "application/json",
        "Content-Type" : "application/json"
      },
      credentials: "include"
    })
    const data = await res.json()

    if(res.status == 200){
      alert(data.msg)
      window.location.href("http://localhost:3000/")
    }
  }

  return (
    <header className="absolute top-[0px] left-[0px] bg-thistle w-[100%] overflow-hidden flex flex-row items-center justify-center py-2.5 px-0 box-border gap-[500px]">
      <img
        className="w-[200px] relative h-[47.7px] object-cover"
        alt=""
        src="/onlytextlogo-1@2x.png"
      />
      <nav className="m-0 bg-gray-200 overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5 gap-[10px] text-left text-xl text-rosybrown font-inter">
        <b className="w-[100px] relative flex items-center h-[30px] shrink-0">
          Home
        </b>
        <b className="w-[100px] relative flex items-center h-[30px] shrink-0">
          About
        </b>
        <b className="w-[100px] relative flex items-center h-[30px] shrink-0">
          Contact
        </b>
        <button className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown w-28 rounded-21xl overflow-hidden shrink-0 flex flex-row items-center justify-center box-border">
          <b className="relative text-xl font-inter text-plum text-center">
            Logout
          </b>
        </button>
        <button className="cursor-pointer [border:none] py-[11px] px-[43px] bg-rosybrown w-28 rounded-21xl overflow-hidden shrink-0 flex flex-row items-center justify-center box-border">
          <b className="relative text-xl font-inter text-plum text-center">
            Profile
          </b>
        </button>
      </nav>
    </header>
  );
};

export default Navbar1;

import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserSignup from "./pages/UserSignup";
import UserIdentity from "./pages/UserIdentity";
import DoctorSignup from "./pages/DoctorSignup";
import DoctorDashboard from "./pages/DoctorDashboard";
import UserDashboard from "./pages/UserDashboard";
import UserJournal from "./pages/UserJournal";
import DoctorMyPatients from "./pages/DoctorMyPatients";
import DoctorViewReport from "./pages/DoctorViewReport";
import DoctorSendMessage from "./pages/DoctorSendMessage";
import DoctorJoinRoom from "./pages/DoctorJoinRoom";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/usersignup":
        title = "";
        metaDescription = "";
        break;
      case "/useridentity":
        title = "";
        metaDescription = "";
        break;
      case "/doctorsignup":
        title = "";
        metaDescription = "";
        break;
      case "/doctordashboard":
        title = "";
        metaDescription = "";
        break;
      case "/userdashboard":
        title = "";
        metaDescription = "";
        break;
      case "/userjournal":
        title = "";
        metaDescription = "";
        break;
      case "/doctormypatients":
        title = "";
        metaDescription = "";
        break;
      case "/doctorviewreport":
        title = "";
        metaDescription = "";
        break;
      case "/doctorsendmessage":
        title = "";
        metaDescription = "";
        break;
      case "/doctorjoinroom":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/usersignup" element={<UserSignup />} />
      <Route path="/useridentity" element={<UserIdentity />} />
      <Route path="/doctorsignup" element={<DoctorSignup />} />
      <Route path="/doctordashboard" element={<DoctorDashboard />} />
      <Route path="/userdashboard" element={<UserDashboard />} />
      <Route path="/userjournal" element={<UserJournal />} />
      <Route path="/doctormypatients" element={<DoctorMyPatients />} />
      <Route path="/doctorviewreport" element={<DoctorViewReport />} />
      <Route path="/doctorsendmessage/*" element={<DoctorSendMessage />} />
      <Route path="/doctorjoinroom" element={<DoctorJoinRoom />} />
    </Routes>
  );
}
export default App;

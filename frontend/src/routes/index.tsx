import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

function RoutesMain() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </>
  );
}

export default RoutesMain;

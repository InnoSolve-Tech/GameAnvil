import react from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}
export default Routers

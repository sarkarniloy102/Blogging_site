import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const admin = JSON.parse(localStorage.getItem('admin'))
    if (admin?.user?.email === "sarkarniloy102@gmail.com") {
        return children;
    }
    else {
        return <Navigate to={'/adminlogin'} />
    }
};

export default PrivateRoute;
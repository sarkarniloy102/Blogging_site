import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user?.user?.email === "sarkarniloy102@gmail.com") {
        return children;
    }
    else {
        return <Navigate to={'/adminlogin'} />
    }
};

export default PrivateRoute;
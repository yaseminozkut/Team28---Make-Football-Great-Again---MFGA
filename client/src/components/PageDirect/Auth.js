
import { Navigate } from 'react-router-dom';

export const Auth = ({ children }) => {
    if(localStorage.getItem("currentUser")=== null){
        return <Navigate to="/login" />;
    }
   return children;
};


export const NoAuth = ({ children }) => {
    if(localStorage.getItem("currentUser")!== null){
        return <Navigate to="/" />;
    }
   return children;
};
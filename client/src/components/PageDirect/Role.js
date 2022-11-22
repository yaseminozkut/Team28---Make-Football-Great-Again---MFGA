import { Navigate } from 'react-router-dom';

export const RoleAdmin = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    console.log(user.role)
    if(user.role !== 1){
        console.log(user.role)
        return <Navigate to="/" />;
    }
   return children;
};

export const RoleUser = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if(user.role !== 0){
        return <Navigate to="/" />;
    }
   return children;
};

export const RoleBoardMember = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if(user.role !== 2){
        return <Navigate to="/" />;
    }
   return children;
};

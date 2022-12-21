
export const DisplayAuth = ({ children }) => {
    if(localStorage.getItem("currentUser")!== null){
        return children;
    }
   return;
};

export const Display = ({ children }) => {
    if(localStorage.getItem("currentUser")=== null){
        return children;
    }
   return;
};

export const UserDisp = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if(user.role === 0){
        return children;
    }
   return;
};
export const AdminDisp = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if(user.role === 1){
        return children;
    }
   return;
};

export const BoardDisp = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if(user.role === 2){
        return children;
    }
   return;
};
export const RefereeDisp = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if(user.role === 3){
        return children;
    }
   return;
};
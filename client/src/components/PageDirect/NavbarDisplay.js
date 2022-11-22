
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
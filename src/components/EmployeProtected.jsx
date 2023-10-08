import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function EmployeProtected({isloggedIn,role,children}) {
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(role)
    useEffect(() => {
        
        const roled=JSON.parse(sessionStorage.getItem("role"))

        if (roled!=="Employe") {
            navigate(-1);
        }
    }, []); 

    return children ;
}

export default EmployeProtected;

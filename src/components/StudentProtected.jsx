import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function StudentProtected({isloggedIn,role,children}) {
    const navigate = useNavigate();
    // console.log(role)
    useEffect(() => {
        
        const roled=JSON.parse(sessionStorage.getItem("role"))

        if (roled!=="Student") {
            navigate(-1);
        }
    }, []); 

    return children ;
}

export default StudentProtected
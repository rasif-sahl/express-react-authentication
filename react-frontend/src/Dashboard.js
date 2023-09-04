import React, {useEffect} from 'react';
import axios from 'axios';

const Dashboard = ({token}) => {

    useEffect(() => {
        console.log(token);

        if(token){
            const fetchData = async () => {
                try {
                    const response = await axios.get(
                        'http://localhost:4000/api/user',
                        {
                            headers: {
                                'Authorization': `Bearer ${token}`,
                                'Content-Type': 'application/json',
                            },
                        }
                    );
                    if (response) {
                        console.log(response);
                    }
                } catch (error) {
                    console.error('Login error:', error);
                }
            };
        
            fetchData();
        
            return () => {
                // Perform any cleanup if needed
            };
        }
    }, [token]); // Specify 'token' as a dependency
    

    return(    
        <>
            Dashboard 
        </>
    );
};

export default Dashboard;

import React, {useEffect} from 'react';
import apiCall from './request/apiCall';

const Dashboard = ({token}) => {

    useEffect(() => {
        if(token){
            const fetchData = async () => {
                try {
                  const data = await apiCall('GET', '/api/user', null, token);
                  console.log(data);
                } catch (error) {
                  console.error('API request error:', error);
                }
            };
            fetchData();
        }
    }, [token]);
    

    return(    
        <>
            Dashboard 
        </>
    );
};

export default Dashboard;

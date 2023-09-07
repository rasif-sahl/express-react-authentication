import React, {useEffect} from 'react';
import ApiCall from '../request/apiCall';

const Dashboard = ({token}) => {

    useEffect(() => {
        if(token){
            const fetchData = async () => {
                try {
                  const data = await ApiCall('GET', '/api/user', null);
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

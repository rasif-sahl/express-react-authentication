import React, {useEffect} from 'react';
import { getUsers } from '../store/request/users'

const Dashboard = () => {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUsers();
                console.log(data)
            } catch (error) {
                console.error('API request error:', error);
            }
        };
        fetchData();
    }, []);
    
    return(    
        <>
            Dashboard 
        </>
    );
};

export default Dashboard;

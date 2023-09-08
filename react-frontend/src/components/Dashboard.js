import React, {useState, useEffect} from 'react';
import { getUsers } from '../store/request/users'
import '../styles/dashboard.css'

const Dashboard = () => {
    const [state, setState] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUsers();
                setState(data)
            } catch (error) {
                console.error('API request error:', error);
            }
        };
        fetchData();
    }, []);
    
    return(    
        <>
            <div class="dashboard">
                <h1>Welcome to the Dashboard</h1>
                <ul class="button-list">
                    <li>{state?.email || 'User'}</li>
                </ul>
            </div> 
        </>
    );
};

export default Dashboard;

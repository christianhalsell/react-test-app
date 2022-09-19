import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Dashboard</h1>
      <div>
        <Link to={'/todo'}>Go to ToDo list</Link>
      </div>
      <div>
        <button onClick={() => navigate('/todo')}>Go to ToDo list</button>
      </div>
    </>
  );
};

export default Dashboard;

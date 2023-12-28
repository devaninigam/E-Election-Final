import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminElectionSelect from './components/admin/Election_Select';
import AdminElectionPartys from './components/admin/Election_Partys';
import AdminElectionConnect from './components/admin/Election_Conect';
import AdminElectionVote from './components/admin/Election_Vote';
import './components/admin/admin-tool/Admin.css';
import Cookies from 'js-cookie';


// User
import UserVoting from './components/User/Voting';
import UserProfile from './components/User/Profile';

// login
import UserLogin from './components/Userlogin';
import AdminLogin from './components/AdminLogin';

function App() {
  const role = Cookies.get("role"); // Set the role here or fetch it from wherever it comes from

  if (!role || role == "") {
    console.log("hello");
    return (
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="*" element={<UserLogin />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    );
  } else if (role === "Admin") {
    return (
      <div className="admin-app">
        <Routes>
          <Route path="/" element={<AdminElectionSelect />} />
          <Route path="/admin/electionpartys" element={<AdminElectionPartys />} />
          <Route path="/admin/partysconnect" element={<AdminElectionConnect />} />
          <Route path="/admin/evote" element={<AdminElectionVote />} />
        </Routes>
      </div>
    );
  } else if (role === "User") {
    return (
      <div className="user-app">
        <Routes>
          <Route path="/" element={<UserVoting />} />
          <Route path="*" element={<UserVoting />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    );
  }
}

export default App;
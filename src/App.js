import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import DetailsPage from "./DetailsPage";
import AnnounceDetail from './AnnounceDetail.js';

const App = () => {
  const [announcements, setAnnouncements] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage announcements={announcements} />} />
        <Route path="/details" element={<DetailsPage setAnnouncements={setAnnouncements} announcements={announcements}/>} />
        <Route path="/details/:id" element={<AnnounceDetail announcements={announcements} />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ItemsToReview from './pages/ItemsToReview';
import Library from './pages/Library';
import PacttoChats from './pages/PacttoChats';
import PacttoWebsite from './pages/PacttoWebsite';
import PersonalInfo from './pages/PersonalInfo';
import ReviewPackages from './pages/ReviewPackages';
import ReviewSettings from './pages/ReviewSettings';
import Subscription from './pages/Subscription';
import WebLinks from './pages/WebLinks';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chats" element={<PacttoChats />} />
          <Route path="/videos-to-review" element={<ItemsToReview />} />
          <Route path="/shared-links" element={<WebLinks />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/packages" element={<ReviewPackages />} />
          <Route path="/profile" element={<PacttoWebsite />} />
          <Route path="/library" element={<Library />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/review-settings" element={<ReviewSettings />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
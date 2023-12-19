import React from "react";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

import Dashboard from "./pages/dashboard/Dashboard";
import Records from "./pages/records/Records";
import Configurations from "./pages/configurations/Configurations";
import Profile from "./pages/profile/Profile";
import Documents from "./pages/documents/Documents";
import PageNotFound from "./Components/Pagenotfound";
import Recording from "./pages/recording/Recording";


// Create a Layout component that includes the Sidebar
const Layout = ({ children }) => {
  
  return (
    <div className="flex">
      {/* Fixed-width sidebar */}
      <Sidebar style={{ width: "200px", flexShrink: 0 ,position:"fixed" }} />

      {/* Main content with vertical scroll */}
      <div style={{ flex: 1, overflowY: "auto" }}>{children}</div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Use the Layout component for routes where you want the sidebar */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/records"
          element={
            <Layout>
              <Records />
            </Layout>
          }
        />
        <Route
          path="/configurations"
          element={
            <Layout>
              <Configurations />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route
          path="/documents"
          element={
            <Layout>
              <Documents />
            </Layout>
          }
        />
        <Route
          path="/recording"
          element={
            <Layout>
              <Recording />
            </Layout>
          }
        />
        {/* No Layout for the login page */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

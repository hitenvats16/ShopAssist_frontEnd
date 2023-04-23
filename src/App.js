import { useEffect, useState } from "react";
import App from "./containers/app";
import { googleAuthInit } from "./scripts/googleApi";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./containers/login";
import { fetchProfile } from "./utils/storage";
import { StorageProvider } from "./hooks/useStorageProvider";

function Application() {
  const profile = fetchProfile();
  useEffect(() => {
    googleAuthInit();
  }, []);

  return (
    <StorageProvider>
      <Routes>
        <Route element={<App profile={profile} />} path="/chat" />
        <Route element={<Login />} path="/login" />
        <Route path="/*" element={<Navigate to={"/chat"} />} />
      </Routes>
    </StorageProvider>
  );
}

export default Application;

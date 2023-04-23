import React from "react";
import { GoogleLogout } from "react-google-login";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { deleteProfile } from "../../utils/storage";
import useStorageProvider from "../../hooks/useStorageProvider";
import { useState } from "react";

function SideBar({ profile }) {
  const navigate = useNavigate();
  const {
    settings: { no_of_recomendations },
    saveSettings,
  } = useStorageProvider();
  const [recommendations, setRecommendations] = useState(no_of_recomendations);

  return (
    <div className="bg-gray-900 w-64 h-screen flex flex-col">
      <div className=" w-full h-12 p-4 mb-4">
        <button className="w-full text-gray-400 border-gray-600 border py-2 px-4 flex text-sm hover:bg-gray-400 hover:bg-opacity-10 transition-all duration-300 ease-in-out">
          + New Chat
        </button>
      </div>
      <div className="flex flex-1 flex-col">
        <Cell message={"Conversation #1"} />
      </div>
      <div className="w-full h-max p-4 border-t border-t-gray-600">
        <div className="w-full flex py-2">
          <img
            alt="profile_picture"
            className="w-8 aspect-square rounded-lg"
            src={profile.imageUrl}
          />
          <h1 className="w-full flex font-semibold text-gray-300 text-opacity-80 justify-start items-center ml-2">
            {profile.name}
          </h1>
        </div>
        <div className="w-full flex mt-2">
          <GoogleLogout
            render={(props) => {
              return (
                <button
                  className="w-full px-4 bg-gray-600 bg-opacity-70 text-gray-200 text-opacity-90 py-2 rounded shadow flex justify-center items-center"
                  disabled={props.disabled}
                  onClick={props.onClick}
                >
                  <IoLogOut className="mr-2" />
                  Logout
                </button>
              );
            }}
            clientId={
              "21350407911-1i5etobpvorllf4quil50nloa07edc0e.apps.googleusercontent.com"
            }
            onLogoutSuccess={() => {
              deleteProfile();
              navigate("/login");
            }}
          />
        </div>
        <div className="w-full flex mt-2">
          <div className="py-2 px-3 flex items-center justify-center text-gray-300 bg-gray-600 bg-opacity-70 w-full rounded">
            <label htmlFor="no_of_recommedations">Recommendations: </label>
            <select
              name="no_of_recommedations"
              className="ml-2 bg-transparent"
              onChange={(e) => {
                setRecommendations(e.currentTarget.value);
                saveSettings({
                  no_of_recomendations: e.currentTarget.value,
                });
              }}
              defaultValue={recommendations}
            >
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell({ message }) {
  return (
    <div className="w-full h-10 flex items-center overflow-hidden text-white text-opacity-60 pl-4 bg-gray-800 relative hover:bg-gray-900 group duration-300 ease-in-out transition-all">
      {message}
      <div className="w-10 aspect-square bg-gradient-to-r from-transparent to-gray-800 absolute right-0 top-0 group-hover:to-gray-900" />
    </div>
  );
}

export default SideBar;

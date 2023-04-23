import classNames from "classnames";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { DiCode } from "react-icons/di";

function MessageCell({ fromSender, message, profile, Component }) {
  return (
    <div
      className={classNames(
        "w-full h-max py-6 flex justify-center text-gray-100 last:mb-36",
        {
          "bg-gray-600": !fromSender,
        }
      )}
    >
      <div className="w-3/5 h-max flex -translate-x-5">
        <div className="w-max mr-4 h-full">
          {fromSender ? (
            <img
              alt="profile_picture"
              className="w-8 aspect-square rounded-lg"
              src={profile.imageUrl}
            />
          ) : (
            <DiCode
              size={30}
              className="bg-gray-300 text-gray-900 w-8 aspect-square rounded-lg"
            />
          )}
        </div>
        <div className="w-full">{!fromSender ? Component : message}</div>
      </div>
    </div>
  );
}

export default MessageCell;

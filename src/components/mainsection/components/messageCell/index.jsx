import classNames from "classnames";
import React from "react";
import {FaUserCircle} from 'react-icons/fa'
import {DiCode} from "react-icons/di"

function MessageCell({ fromSender, message }) {
  return (
    <div
      className={classNames("w-full h-max py-6 flex justify-center text-gray-100 last:mb-36", {
        "bg-gray-600": !fromSender,
      })}
    >
    
      <div className="w-3/5 h-max flex -translate-x-5">
        <div className="w-max mr-4 h-full">
            {
                fromSender? (<FaUserCircle size={30} className="text-gray-300 bg-gray-900 rounded-full"/>):(<DiCode size={30} className="bg-gray-300 text-gray-900 rounded-full"/>)
            }
        </div>
        <div className="w-full">
                {message}
        </div>
      </div>
    </div>
  );
}

export default MessageCell;

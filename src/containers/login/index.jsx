import classNames from "classnames";
import React from "react";
import GoogleLogin from "react-google-login";
import { ImGoogle } from "react-icons/im";
import { Navigate, useNavigate } from "react-router-dom";
import { saveProfile } from "../../utils/storage";

function Login({ profile }) {
  const navigate = useNavigate();

  if (profile) {
    return <Navigate to="/chat" />;
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <GoogleLogin
        clientId="21350407911-1i5etobpvorllf4quil50nloa07edc0e.apps.googleusercontent.com"
        render={({ onClick, disabled }) => (
          <LoginButton onClick={onClick} disabled={disabled} />
        )}
        onSuccess={(data) => {
          saveProfile(data.profileObj);
          setTimeout(() => {
            navigate("/chat");
          }, 300);
        }}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

function LoginButton({ onClick, disabled }) {
  return (
    <button
      className={classNames(
        "px-4 py-2 bg-slate-300 font-bold text-slate-800 rounded-md shadow flex items-center",
        {
          "opacity-60 cursor-not-allowed": disabled,
        }
      )}
      disabled={disabled}
      onClick={onClick}
    >
      <ImGoogle className=" text-inherit mr-2" />
      Continue with Google
    </button>
  );
}

export default Login;

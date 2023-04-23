import { gapi } from "gapi-script";

export const googleAuthInit = () => {
  function start() {
    gapi.client.init({
      clientId: "21350407911-1i5etobpvorllf4quil50nloa07edc0e.apps.googleusercontent.com",
      scope: "",
    });
  }
  gapi.load("client:auth2", start);
};
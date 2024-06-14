import React from "react";

interface SessionButtonProp {
  session: boolean;
}

const SessionButton = ({ session }: SessionButtonProp) => {
  return <button type="button">{session ? "Logout" : "Login"}</button>;
};

export default SessionButton;

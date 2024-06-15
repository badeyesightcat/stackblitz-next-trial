import React from "react";

interface SessionButtonProp {
  session: boolean;
}

const SessionButton = ({ session }: SessionButtonProp) => {
  return (
    <button
      type="button"
      className="px-4 py-6 leading-none hover:text-white"
    >
      {session ? "Logout" : "Login"}
    </button>
  );
};

export default SessionButton;

import React from "react";
import "./Session.css";
import CurrentSessions from "./CurrentSessions";
import AddSession from "./AddSession";

const SessionMenu = () => {
  return (
    <div className='Session'>
      <div className='SessionMenu'>
        <AddSession />
        <CurrentSessions />
      </div>
    </div>
  );
};

export default SessionMenu;

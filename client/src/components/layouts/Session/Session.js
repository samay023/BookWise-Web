import React from "react";
import "./Session.css";
import SessionList from "./SessionList";
import SessionAdd from "./SessionAdd";
import SessionDetails from "./SessionDetail";

const Session = () => {
  return (
    <div className='Session'>
      <div className='SessionMenu'>
        <SessionAdd />
        <SessionList />
      </div>
      <SessionDetails />
    </div>
  );
};

export default Session;

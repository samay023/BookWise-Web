import React from "react";
import "./Session.css";
import SessionList from "./SessionList";
import SessionAdd from "./SessionAdd";
import Moment from 'moment';

import { useQuery } from '@apollo/react-hooks';
import { getSessions } from "../../../resolvers/sessionResolver";

const Session = () => {

  // Sorts the session by months
  const sortByMonths = (sessions) => {
    return sessions.getSessions.sort((a,b) => new Moment(a.sessionDate).format('YYYYMMDD') - new Moment(b.sessionDate).format('YYYYMMDD'));
  };

    const { loading, error, data,refetch } = useQuery(getSessions);

    if (loading) return "Loading";
    if (error) return `Error! ${error}`;
    const getSortedSessions = sortByMonths(data); 
    return (
      <div className='Session'>
          <SessionAdd onAdd={refetch}/>
          {getSortedSessions.length > 0 && <SessionList session={getSortedSessions}/>}
      </div>
    );
};

export default Session;

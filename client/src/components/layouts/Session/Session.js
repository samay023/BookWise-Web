import React, {useContext} from "react";
import "./Session.css";
import SessionList from "./SessionList";
import SessionAdd from "./SessionAdd";
import Moment from 'moment';

import { useQuery } from '@apollo/react-hooks';
import { getSessions } from "../../../resolvers/sessionResolver";
import AuthContext from "../../../context/authContext";

const Session = () => {

  const [authContext, setAuthData] = useContext(AuthContext);

  // Sorts the session by months
  const sortByMonths = (sessions) => {
    return sessions.getSessions.sort((a,b) => new Moment(a.sessionDate).format('YYYYMMDD') - new Moment(b.sessionDate).format('YYYYMMDD'));
  };

    const { loading, error, data,refetch } = useQuery(getSessions);

    if (loading) return "Loading";
    if (error) return `Error! ${error}`;
    const getSortedSessions = sortByMonths(data || {}); 
    return (
      <div className='Session'>
          <SessionAdd ReloadSessions={refetch}/>
          {getSortedSessions.length > 0 && <SessionList session={getSortedSessions} ReloadSessions={refetch}/>}
      </div>
    );
};

export default Session;

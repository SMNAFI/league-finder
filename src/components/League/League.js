import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './League.css';

const League = (props) => {
    const [leagueInfo, setLeagueInfo] = useState([]);
    const leagueId = props.league.idLeague;
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`)
            .then(res => res.json())
            .then(data => setLeagueInfo(data.leagues[0]))
            .catch(err => console.log(err))
    }, [leagueId])

    const { strLeague, strSport, strBadge, idLeague } = leagueInfo;

    return (
        <div className="leagueCard">
            <div className="badge">
                <img src={strBadge} alt="" />
            </div>
            <h2>{strLeague}</h2>
            <p>Sports type: {strSport}</p>
            <Link to={'/league/' + idLeague}>
                <button className="explore">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
            </Link>
        </div>
    );
};

export default League;
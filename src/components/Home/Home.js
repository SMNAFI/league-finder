import React from 'react';
import { useState, useEffect } from 'react';
import League from '../League/League';
import './Home.css';

const Home = () => {
    const [leagues, setLeagues] = useState([])
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => setLeagues(data.leagues.slice(0, 27)))
        .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <div className="header">
                <h1>League Finder</h1>
            </div>
            <div className="leagueContainer">
                {
                    leagues.map(league => <League league={league} key={league.idLeague}/>)
                }
            </div>
        </div>
    );
};

export default Home;
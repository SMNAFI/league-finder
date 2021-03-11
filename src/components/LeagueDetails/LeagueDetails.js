import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetails.css';
import male from '../../images/male.png';
import female from '../../images/female.png';
import flag from '../../images/flag.png';
import football from '../../images/football.png';
import gender from '../../images/male-gender-sign .png';
import found from '../../images/found.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const LeagueDetails = () => {
    const { id } = useParams();
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
            .then(res => res.json())
            .then(data => setInfo(data.leagues[0]))
            .catch(err => console.log(err))
    }, [id])
    const { strLeague, strBadge, strBanner, strCountry, intFormedYear, strDescriptionEN, strGender, strSport, strFacebook, strTwitter, strYoutube } = info;

    let imgSource = '';
    if (strGender === 'Female') {
        imgSource = female;
    }
    else {
        imgSource = male;
    }

    return (
        <div>
            <div className="detailBanner" style={{backgroundImage:`url(${strBanner})`}}>
                <div className="detailBadge">
                    <img src={strBadge} alt="" />
                </div>
            </div>

            <div className="detailContainer">
                <div className='detail'>
                    <div>
                        <h1>{strLeague}</h1>
                        <div className='row'>
                            <img src={found} alt="" />
                            <p>Founded: {intFormedYear}</p>
                        </div>
                        <div className='row'>
                            <img src={flag} alt="" />
                            <p>Country: {strCountry}</p>
                        </div>
                        <div className='row'>
                            <img src={football} alt="" />
                            <p>Sports type: {strSport}</p>
                        </div>
                        <div className='row'>
                            <img src={gender} alt="" />
                            <p>Gender: {strGender}</p>
                        </div>
                    </div>
                    <div className='detailInfo'>
                        <img src={imgSource} alt="" />
                    </div>
                </div>
                <div className='description'>
                    <p>{strDescriptionEN}</p>
                </div>
                <div className='footer'>
                    <div className='footer'>
                        <div>
                            <Link target='_blank' to={'//' + strTwitter}>
                                <FontAwesomeIcon className='logo' icon={faTwitter} />
                            </Link>
                        </div>
                        <div>
                            <Link target='_blank' to={'//' + strFacebook}>
                                <FontAwesomeIcon className='logo' icon={faFacebook} />
                            </Link>
                        </div>
                        <div>
                            <Link target='_blank' to={'//' + strYoutube}>
                                <FontAwesomeIcon className='logo' icon={faYoutube} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeagueDetails;
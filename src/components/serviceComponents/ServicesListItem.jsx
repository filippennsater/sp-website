import React from 'react';
import '../../App.css';
import './ServicesListItem.scss';
import { Link } from "react-router-dom";



function ServicesListItem(props) {
    return (

        <>
            <div className="serv-container">

                <img
                    src={props.image}
                    alt="smallWboi"
                    className="serv-image"
                />

                <div className="serv-left-container">
                    <div className="serv-header">
                        {props.title}
                    </div>
                    {/*<div className="serv-header2">
                        {props.guest}
                    </div>*/}
                </div>

                <div className="serv-right-container">
                    <div className="serv-text">
                        {props.description}
                    </div>
                        <Link className='serv-button-container' to={`/service/${props.id}`}>
                            <div className="serv-button">Mer information&nbsp;&nbsp;<i className="fa-solid fa-play" /></div>
                        </Link>
                </div>

            </div>
        </>
    );
}

export default ServicesListItem
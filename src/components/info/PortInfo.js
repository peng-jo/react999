import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
function PortInfo({id, title, category, link, image}){
    return (
        <div className="port">
            <Link to={link}>
                <div className="pImg">
                    <img src={image} alt={title}/>
                </div>
                <div className="pText">
                    <h3>{title}</h3>
                    <p>{category}</p>
                </div>
            </Link>
        </div>
    )
}

PortInfo.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}


export default PortInfo;
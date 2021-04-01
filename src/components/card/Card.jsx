import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES_BASE_URL } from '../../utils/variables';
import './Card.scss';

const Card = ({ address, houseId, title, price, labelType }) => {
    const splitedLabel = labelType.split(/(?=[A-Z])/).join(' ');
    const labelClass = labelType === 'IndependentLiving' 
        ? 'card-label_independent'
        : 'card-label_support';

    return (
        <div className='card-wrapper'>
                <Link to={`/details/${houseId}`}>
                    <div className='card-preview'>
                        <img src={`${IMAGES_BASE_URL}=${title}`} alt={title} />
                        <span className={labelClass}>{splitedLabel}</span>
                    </div>
                    <div className='card-description'>
                        <h3>{title}</h3>
                        <p className='address'>{address}</p>
                        <p className='price'>New Properties for Sale from <b>£{formatPrice(price)}</b></p>
                        <p className='ownership'>Shared Ownership Available</p>
                    </div>
                </Link>
        </div>
    );
};

function formatPrice(price) {
    let formattedPrice = price.toString().split('').slice();
    formattedPrice.splice(-3, 0, ',');
    
    return formattedPrice.join('');
};

export default Card;
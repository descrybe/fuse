import React from 'react';
import Card from '../card/Card';
import './CardList.scss';

const CardList = ({ houses }) => {
    const housesList = houses.map(house => {
        const { address, id, title, price, type } = house;
        return (
            <Card 
                key={id}
                title={title}
                price={price}
                labelType={type}
                address={address}
                houseId={id}
                />
        )
    });

    return (
        <div className='card-list__wrapper'>
            {housesList}
        </div>
    );
};

export default CardList;
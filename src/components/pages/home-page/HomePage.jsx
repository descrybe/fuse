import React, { useState } from 'react';
import CardList from '../../card-list/CardList';
import './HomePage.scss';

const HomePage = ({ houses }) => {
    const [inputValue, setInputValue] = useState('');
    const handleInput = (event) => {
        const currentInputValue = event.target.value;
        setInputValue(currentInputValue);
    };

    const filteredHouses = filterHousesByInput(houses, inputValue);
    const buttonVisibility = filteredHouses.length > 5 
        ? <button className='expand-button'>See more  &gt;</button> 
        : null

    return (
        <div className='main-page__wrapper'>
            <div className='filter-wrapper'>
                <span>Filter</span>
                <input 
                    value={inputValue} 
                    type='text' 
                    placeholder='Type here to search house...' 
                    onChange={event => handleInput(event)}
                    />
            </div>
            <CardList houses={filteredHouses}/>
            { buttonVisibility }
        </div>
    );
};

function filterHousesByInput(houses, inputValue) {
    const filteredHouses = houses.filter(house => {
        if (inputValue.length < 4) {
            return house;
        } else {
            if (house.title.toLowerCase().includes(inputValue.toLowerCase())) {
                return house;
            }
        }
    });

    return filteredHouses;
};

export default HomePage;
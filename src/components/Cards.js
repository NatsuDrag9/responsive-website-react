import React from 'react';
import CardItem from './CardItem';
import '../css/Cards.css';
import {IMG9} from './Assets';
import {IMG2} from './Assets';
import {IMG3} from './Assets';
import {IMG4} from './Assets';
import {IMG8} from './Assets';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these epic destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem 
                            src={IMG9.img9}
                            text="Explore the hidden waterfall deep inside the Amazon jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem 
                            src={IMG2.img2}
                            text="Travel through the islands of Bali in a private cruise"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__item">
                        <CardItem 
                            src={IMG3.img3}
                            text="Set sail in the Atlantic ocean visiting unchartered waters"
                            label="Mystery"
                            path="/services"
                        />
                        <CardItem 
                            src={IMG4.img4}
                            text="Experience football on top of the Himalayan Mountains"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem 
                            src={IMG8.img8}
                            text="Ride through the Sahara Desert on a guided camel tour"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;

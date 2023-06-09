import React from 'react';
import {ThingCard} from '../thing-card';
import {Wrapper} from './index.styles.js';
import {useThingsContext} from '../../context/things-context/useThingsContext';

export  const ThingsCardList = () => {
    const {things, deleteThing, onCardClick} = useThingsContext();

    return (
        <Wrapper>
            {things.map((props) => (
                <ThingCard 
                    {...props}
                    onCardClick={onCardClick}
                    onDelete={deleteThing}
                    key={props.id}
                />
            ))}
        </Wrapper>
    );
};





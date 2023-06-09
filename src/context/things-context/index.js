import React, {useState,createContext, useCallback} from 'react';


export const thingsContext = createContext();

export const ThingsProvider = ({children}) => {
    const [things, setThings] = useState([]);
    const [chosenCardId, setChosenCardId] = useState('');
  
    const addThing = useCallback((thing) => { // {title: '', desciption: '', coords: [], imgUrl: ''}
        setThings((thingsArr) => [...thingsArr, thing]);
    }, [setThings]);


    const deleteThing = (deleteId) => {
        setThings((prevThings) => 
            prevThings.filter(({id}) => 
                id !== deleteId));
    };

    const memoizedDeleteThing = useCallback(deleteThing, [setThings]);

    const chosenCard = things.find(({id}) => id === chosenCardId);

    const context = {
        things,
        chosenCard,
        addThing,
        onCardClick: setChosenCardId,
        deleteThing: memoizedDeleteThing
    };

    return (
        <thingsContext.Provider value={context}>
            {children}
        </thingsContext.Provider>
    );
};







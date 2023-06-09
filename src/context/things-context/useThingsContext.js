import {useContext} from 'react';
import {thingsContext} from './index.js';


export const useThingsContext = () => {
    const context = useContext(thingsContext);


    return context;
};
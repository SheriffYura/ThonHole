import  React, {useState} from 'react';
import {MenuWrapper} from './index.styles.js';
import {Logo} from '../logo';
import {Button} from '../button';
import {Modal}from '../modal';
import {ThingAddForm} from '../thing-add-form';
import {useThingsContext} from '../../context/things-context/useThingsContext';


export const MainMenu = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {addThing} = useThingsContext();
   

    const onModalOpenClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const onThingAdd = (thing) => {
        closeModal();
        addThing(thing);
    };
   
    return (
        <MenuWrapper>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ThingAddForm onThingAdd={onThingAdd}/>
            </Modal>
            <Logo/>
            <Button view='secondary' onClick={onModalOpenClick}>
                Add lost thing
            </Button>
            <Button view='primary'>
                Login
            </Button>
        </MenuWrapper>
    );
};
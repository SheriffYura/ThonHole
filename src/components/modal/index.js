import React, {useState, useEffect} from 'react';
import {createPortal} from 'react-dom';
import {ModalWrapper, ModalContent, ModalBackdrop, ModalHeader} from './index.styles.js';
import {IoIosClose} from 'react-icons/io';


export const Modal = ({children, isOpen, onClose}) => {
    const [isModalOpen, setIsModalOpen] = useState(isOpen || false);

    useEffect(() => {
        setIsModalOpen(isOpen);
    }, [isOpen]);

    const defaultClose = () => {
        setIsModalOpen(false);
        onClose?.();
    };

    return isModalOpen && createPortal(
        <ModalWrapper>
            <ModalContent>
                <ModalHeader>
                    <IoIosClose size='2em' onClick={defaultClose} />
                </ModalHeader>
                {children}
            </ModalContent>
            <ModalBackdrop onClick={defaultClose}/>
        </ModalWrapper>,
        document.body
    );
};



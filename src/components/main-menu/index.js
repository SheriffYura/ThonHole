import  React from 'react';
import {MenuWrapper} from './index.styles.js';
import {Logo} from '../logo';
import {Button} from '../button';

export const MainMenu = () => {
    return (
        <MenuWrapper>
            <Logo/>
            <Button>
                Login
            </Button>
        </MenuWrapper>
    );
};
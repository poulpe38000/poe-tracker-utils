import {createStyles} from '@material-ui/core';
import React from 'react';

export interface Props {
    classes: any;
    label: string;
    value: React.ComponentType | string;
}

export const styles = createStyles({
    avatar: {
        background: 'transparent',
        color: 'inherit',
    }
});
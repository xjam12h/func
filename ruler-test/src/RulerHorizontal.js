import React, { useState } from 'react';
import './App.css';
import 'rc-ruler/dist/index.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import VolumeUp from '@material-ui/icons/VolumeUp';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';




/*
function ValueLabelComponent(props) {
    const { children, open, value } = props;

    const popperRef = React.useRef(null);
    React.useEffect(() => {
        if (popperRef.current) {
            popperRef.current.update();
        }
    });

    return (
        <Tooltip
            PopperProps={{
                popperRef,
            }}
            open={open}
            enterTouchDelay={0}
            placement="top"
            title={value}
        >
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};
*/
const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
    {
        value: 0,
        height: 80,
        label: 0

    },
    {
        value: 10,
        height: 8,

    },
    {
        value: 20,
        height: 8,

    },
    {
        value: 30,
        height: 8,

    },
    {
        value: 40,
        height: 8,

    },
    {
        value: 50,
        height: 80,
        label: 50
    },
    {
        value: 60,
        height: 8,
    },
    {
        value: 70,
        height: 8,

    }, {
        value: 80,
        height: 8,

    },
    {
        value: 90,
        height: 8,

    },
    {
        value: 100,
        height: 80,
        label: 100

    },
];
const Horizontal = withStyles({
    root: {
        color: '#3880ff',
        height: 2,
        padding: '15px 0',
    },
    thumb: {
        height: 28,
        width: 28,
        backgroundColor: '#fff',
        boxShadow: iOSBoxShadow,
        marginTop: -14,
        marginLeft: -14,
        '&:focus,&:hover,&$active': {
            boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: iOSBoxShadow,
            },
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 11px)',
        top: -22,
        '& *': {
            background: 'transparent',
            color: '#000',
        },
    },
    track: {
        height: 2,
    },
    rail: {
        height: 2,
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
    },
    mark: {
        backgroundColor: '#bfbfbf',
        height: props => props.marks[props.index] ? props.marks[props.index].height : 4,
        width: 1,
        marginTop: -3,
        '＆[data-index="9"]': {
            height: 4,
        },


    },
    markActive: {
        opacity: 1,
        backgroundColor: 'currentColor',
    },
})(Slider);


const marks1 = [
    {
        value: 34
    }
];

function RulerHorizontal() {
    const classes = useStyles();
    console.log(marks);
    return (
        <div className={classes.root}>
            <Horizontal aria-label="ios slider" defaultValue={0} marks={marks} valueLabelDisplay="on"
                track={false}
                max={100} min={0}
            />
        </div>
    );
}




const useStyles = makeStyles(theme => ({
    root: {
        width: 300,
    },

}));
export default RulerHorizontal;
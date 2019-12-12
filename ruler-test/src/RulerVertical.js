import React, { useState } from 'react';
import './App.css';
import SlideRuler from 'slide-ruler';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import HorizontalGauge from 'react-horizontal-gauge';
import Ruler from 'rc-ruler';
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

const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
    {
        value: 0,
    },
    {
        value: 10,
    },
    {
        value: 20,
    },
    {
        value: 30,
    },
    {
        value: 40,
    },
    {
        value: 50,
    },
    {
        value: 60,
    },
    {
        value: 70,
    }, {
        value: 80,
    },
    {
        value: 90,
    },
    {
        value: 100,
    },
];

const Vertical = withStyles({
    root: {
        color: '#3880ff',
        height: 2,
        padding: '15px 0',
    },
    thumb: {

        backgroundColor: '#fff',
        boxShadow: iOSBoxShadow,

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
        left: 15,
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
    },
    mark: {
        backgroundColor: '#bfbfbf',
        height: 1,
        width: 8,
        marginTop: -3,
    },
    markActive: {
        opacity: 1,
        backgroundColor: 'currentColor',
    },

})(Slider);



function RulerVertical() {
    const classes = useStyles();
    /*value で値を固定、反映できる
    value={hoge}
    */
    return (
        <div className={classes.root}>
            <Vertical aria-label="ios slider" defaultValue={0} marks={marks} valueLabelDisplay="on"
                orientation="vertical"

                track={false} />
        </div>
    );
}




/*           */

const useStyles = makeStyles({
    root: {
        height: 400,
    },
});

function ValueText1(value) {
    return 100 - value;
}


/*
function VerticalSlider() {
    const classes = useStyles1();

    return (
        <React.Fragment>

            <div className={classes.root}>
                <Slider
                    orientation="vertical"
                    getAriaValueText={valuetext1}
                    defaultValue={30}
                    aria-labelledby="vertical-slider"
                    track={false}
                />
            </div>
        </React.Fragment>
    );
}
*/

export default RulerVertical;
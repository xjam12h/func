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
import RulerHorizontal from './RulerHorizontal';
import RulerVertical from './RulerVertical';

const WidthEditor = styled.div`
width:250;
height:300;
`;
const Width = styled.div`
    top:0px;
    left:50px;
position:relative;

`;
const Height = styled.div`

`;

class RulerMain extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { children } = this.props;

        console.log(this.props.children);
        console.log(children);
        return (
            <WidthEditor>
                <Width>
                    <RulerHorizontal />
                </Width>
                <RulerVertical />
            </WidthEditor>
        )
    }
}



/* 

const useStyles = makeStyles(theme => ({
    root: {
        width: 300 + theme.spacing(3) * 2,
    },
    margin: {
        height: theme.spacing(3),
    },
}));

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
const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';
/*
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

const IOSSlider = withStyles({
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
        height: 8,
        width: 1,
        marginTop: -3,
    },
    markActive: {
        opacity: 1,
        backgroundColor: 'currentColor',
    },
})(Slider);



function CustomizedSlider() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <IOSSlider aria-label="ios slider" defaultValue={60} marks={marks} valueLabelDisplay="on"
                track={false} />
        </div>
    );
}




const useStyles1 = makeStyles({
    root: {
        height: 400,
    },
});

function valuetext1(value) {
    return `${value}°C`;
}

const marks1 = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 37,
        label: '37°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];

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

                <Slider
                    orientation="vertical"
                    defaultValue={[20, 37]}
                    aria-labelledby="vertical-slider"
                    getAriaValueText={valuetext1}
                    marks={marks1}
                    track={false}
                />
            </div>
        </React.Fragment>
    );
}

*/
export default RulerMain;
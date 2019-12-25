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

const BoxShadow =
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
        label: 'test000000000',
        width: 500
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
        boxShadow: BoxShadow,
        '&:focus,&:hover,&$active': {
            boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
            '@media (hover: none)': {
                boxShadow: BoxShadow,
            },
        },
    },
    active: {},
    valueLabel: {
        fontSize: 12,
        left: 'calc(-30px)',
        top: -10,
        '& *': {
            background: 'transparent',
            color: '#000',
        },
    },
    track: {
        width: 2,
    },
    rail: {
        width: 2,
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
    },
    mark: {
        backgroundColor: '#bfbfbf',
        width: 8,
        height: 1,
        marginLeft: -3,

    },
    markLabel: {
        fontSize: 10,
        marginLeft: -45,
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
    valueLabelFormat で値が逆になっていることを解決
    valueLabelFormat={ValueText1}

    function ValueText1(value) {
    return 100 - value;
}
TODO１
１、editorのdeta-levelを渡してくる
２、editorのdeta-levelを参考にwidth,heightを別のファイルから取得
３、取得したwidthをhorizontalにheightをverticalに渡してルーラーのサイズとする

 TODO ２
 1、Editorにおけるマウスの位置を取得
 2、取得した位置をpropsとしてルーラーに渡す
 ３、マウスの位置情報をvalueをsliderのvalueに渡して再レンダリングさせる

以上が作業としてやらなければならない機能用件である。
 
    */
    return (
        <div className={classes.root}>
            <Vertical aria-label="ios slider" defaultValue={100} marks={marks} valueLabelDisplay="on"
                orientation="vertical"
                valueLabelFormat={ValueText1}
                track={false} />
            <Vertical aria-label="ios slider" defaultValue={100} marks={marks} valueLabelDisplay="off"
                valueLabelFormat={ValueText1}
                track={false} />
        </div>
    );
}

/*thumb
width:0,
height:0,
*/


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




/*

import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import styled from 'styled-components';





const BoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
    {
        value: 0,
        label:'100%'
    }, {
        value: 10,
    }, {
        value: 20,
    }, {
        value: 30,
    }, {
        value: 40,
    }, {
        value: 50,
    }, {
        value: 60,
    }, {
        value: 70,
    }, {
        value: 80,
    }, {
        value: 90,
    }, {
        value: 100,
        label:'0%'
    },
];


function ValueText(value) {
    return 100 - value;
}


const Vertical = withStyles({
    root: {
        color: '#3880ff',
        height: 2,
        padding: '15px 0',
    },
    thumb: {
        backgroundColor: '#fff',
        boxShadow: BoxShadow,
        '&:focus,&:hover,&$active': {
            boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
            '@media (hover: none)': {
        boxShadow: BoxShadow,
            },
        },
    },
    active: {},
    valueLabel: {
        fontSize:12,
        left: 'calc(-30px)',
        top: -10,
        '& *': {
            background: 'transparent',
            color: '#000',
        },
    },
    track: {
        width: 2,
    },
    rail: {
        width: 2,
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
    },
    mark: {
        backgroundColor: '#bfbfbf',
        width: 8,
        height: 1,
        marginLeft: -3,
    },
    markLabel:{
        fontSize:10,
        marginLeft:-45,
    },
    markActive: {
        opacity: 1,
        backgroundColor: 'currentColor',
    },
})(Slider);

const Style = styled.div`
fontSize:10px;
height:${props => props.height}px;
`
export default class VerticalRuler extends React.Component{

    render() {

        return (
            <Style height={this.props.DataSizeHeight}>
                <Vertical
                    valueLabelFormat={ValueText}
                    track={false}
                    orientation="vertical"
                    defaultValue={100} marks={marks}
                    valueLabelDisplay="on"
                    value={this.props.height} />
            </Style>
        );
    }
}


*/
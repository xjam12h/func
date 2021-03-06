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
import Test from './test';
import RulerMain from './RulerMain';
import Screen from './Screen';

const All = styled.div`
position:absolute;
`

const Relative = styled.div`
position:absolute;
top:0px;
left:0px;
`



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    }
    this.handleMouse = this.handleMouse.bind(this);
  }

  handleMouse(e) {
    console.log(e.target.getBoundingClientRect);
  }

  render() {



    console.log("test");
    return (
      <All>
        <Relative>
          <RulerMain />
        </Relative>
        <Screen onClick={this.handleMouse} />

      </All>

    )
  }
}

export default App;

/*

    return (
      <div>
        <Test />
        <div>
          <RulerMain />
        </div>
      </div>
    )
*/
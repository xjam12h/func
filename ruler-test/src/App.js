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
class App extends React.Component {


  render() {




    return (
      <div>
        <Test />
        <div>
          <RulerMain />
        </div>
      </div>
    )
  }
}

export default App;


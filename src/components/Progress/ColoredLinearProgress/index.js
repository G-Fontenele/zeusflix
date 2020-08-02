import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

const defaultSize = 50;

class ColoredLinearProgressComponent extends Component {
  render() {
    const { classes, size } = this.props;
    return <LinearProgress {...this.props} classes={classes} />;
  }
}

class ColoredLinearProgress extends Component {
  render() {
    const WithStylesComponent = withStyles(theme => ({
      colorPrimary: {
        color: this.props.foreColor
      },
      root: {
        position: 'absolute'
      }
    }))(ColoredLinearProgressComponent);
    return <WithStylesComponent {...this.props} />;
  }
}

ColoredLinearProgress.propTypes = {
    classes: PropTypes.object,
    foreColor: PropTypes.string
  };
  ColoredLinearProgress.defaultProps = {
    foreColor: '#2A7AE4',
  };
  
  export default ColoredLinearProgress;
/**
 *
 * BarChartPractice
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import AmCharts from "@amcharts/amcharts3-react";


/* eslint-disable react/prefer-stateless-function */
export class BarChartPractice extends React.Component {
  render() {
    const config = {
      "type" : "serial",
      "valueAxis": {
        "axisAlpha": 0.5,
        "position": "left",
        "axisColor": "#8470ff",
      },  
      "categoryField": "year",
      "categoryAxis": {
         "gridPosition": "start",
         "axisColor": "#8470ff"
       },
      "dataProvider" : [{
       "year":1994,
       "ageGroup":19,
      //  "movies": 23,
       "color": "#F8FF01"
      },
      {
        "year":1995,
        "ageGroup":25,
        // "movies": 35,
        "color": "#B0DE09"
       },
       {
        "year":1996,
        "ageGroup":16,
        // "movies": 50,
        "color": "#04D215"
       },
       {
        "year":1997,
        "ageGroup":34,
        // "movies": 24,
        "color": "#0D8ECF"
       },
       {
        "year":1998,
        "ageGroup":44,
        // "movies": 76,
        "color": "#0D52D1"
       },
       {
        "year":1999,
        "ageGroup":28,
        // "movies": 54,
        "color": "#0D8ECF"
       },
       {
        "year":2000,
        "ageGroup":39,
        // "movies": 17,
        "color": "#04D215"
       }],
       "graphs": [{
        "type": "column",
        "balloonText": "<b>[[category]]: [[value]]</b>",
        "fillColorsField": "color",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "valueField": "ageGroup",
        "fillColorsField": "color",
       }],
      }
      const config1 = {
        "type": "serial",
        "legend": {
          "maxColumns": 1,
          "position": "right",
          "useGraphSettings": true,
          "markerSize": 10
      },
      "dataProvider": [{
        "year": 2003,
        "europe": 2.5,
        "namerica": 2.5,
        "asia": 2.1,
        "lamerica": 0.3,
        "meast": 0.2,
        "africa": 0.1
    }, {
        "year": 2004,
        "europe": 2.6,
        "namerica": 2.7,
        "asia": 2.2,
        "lamerica": 0.3,
        "meast": 0.3,
        "africa": 0.1
    }, {
        "year": 2005,
        "europe": 2.8,
        "namerica": 2.9,
        "asia": 2.4,
        "lamerica": 0.3,
        "meast": 0.3,
        "africa": 0.1
    }],
    "valueAxes": [{
        "stackType": "regular",
        "axisAlpha": 0.5,
        "gridAlpha": 0
    }],
    "graphs": [{
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Europe",
      "type": "column",
      "color": "#000000",
      "valueField": "europe"
  }, {
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "North America",
      "type": "column",
  "color": "#000000",
      "valueField": "namerica"
  }, {
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Asia-Pacific",
      "type": "column",
  "color": "#000000",
      "valueField": "asia"
  }, {
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Latin America",
      "type": "column",
  "color": "#000000",
      "valueField": "lamerica"
  }, {
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Middle-East",
      "type": "column",
  "color": "#000000",
      "valueField": "meast"
  }, {
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Africa",
      "type": "column",
  "color": "#000000",
      "valueField": "africa"
  }],
  "categoryField": "year",
  "categoryAxis": {
      "gridPosition": "start",
      "axisAlpha": 0,
      "gridAlpha": 0,
      "position": "left"
  },
      }
    return (
      <div>
        <div>
         <AmCharts.React id="chartddiv" style={{ width: "100%", height: "500px" }} options={config} />                    
        </div>
        <div>
         <AmCharts.React id="chartddiv" style={{ width: "100%", height: "500px" }} options={config1} />                    
        </div>
      </div>
    );
  }
}

BarChartPractice.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(BarChartPractice);

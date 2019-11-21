/**
 *
 * AmchartsPractice
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import AmCharts from "@amcharts/amcharts3-react";

/* eslint-disable react/prefer-stateless-function */
export class AmchartsPractice extends React.Component {
  render() {
    const config = {
      "type" : "serial",
      "valueAxis": {
        "axisAlpha": 0.5,
        "position": "left"
      },  
      "categoryField": "year",
      "categoryAxis": {
         "gridPosition": "start",
         "axisColor": "#8470ff"
       },
      "dataProvider" : [{
       "year":1994,
       "ageGroup":19,
       "movies": 23
      },
      {
        "year":1995,
        "ageGroup":25,
        "movies": 35
       },
       {
        "year":1996,
        "ageGroup":16,
        "movies": 50
       },
       {
        "year":1997,
        "ageGroup":34,
        "movies": 24
       },
       {
        "year":1998,
        "ageGroup":44,
       "movies": 76
       },
       {
        "year":1999,
        "ageGroup":28,
        "movies": 54
       },
       {
        "year":2000,
        "ageGroup":39,
        "movies": 17
       }],
      "graphs" : [{
      "id": "g1",
      "type": "line",
      "title": "Age",
      "valueField": "ageGroup",
      "lineAlpha": 0.8,
      "balloonText": "[[title]] in [[category]]:<b>[[value]]</b>",
      "bullet": "round",
      "bulletBorderAlpha": 2,
      "bulletColor": "#FF6600",
      "bulletSize": 5,
      "lineColor": "#FF6600",
      "lineThickness":2
    },
  {
      "id": "g2",
      "type": "line",
      "title": "Movies",
      "valueField": "movies",
      "lineAlpha": 0.8,
      "balloonText": "[[title]] in [[category]]:<b>[[value]]</b>",
      "bullet": "round",
      "bulletBorderAlpha": 2,
      "bulletColor": "#fdd400",
      "bulletSize": 5,
      "lineColor": "#fdd400",
      "lineThickness":2 
  }],
    "chartCursor": {
      "valueLineEnabled": true,
      "valueLineBalloonEnabled": true,
      "valueLineAlpha": 0.5,
      "fullWidth": true,
      "cursorAlpha": 0.05
  }  
 };
    return (
      <div>
         <AmCharts.React id="chartdivv" style={{ width: "100%", height: "500px" }} options={config} />
      </div>
    );
  }
}

AmchartsPractice.propTypes = {
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

export default compose(withConnect)(AmchartsPractice);

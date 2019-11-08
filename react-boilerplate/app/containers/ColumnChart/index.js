/**
 *
 * ColumnChart
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import AmCharts from "@amcharts/amcharts3-react"
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class ColumnChart extends React.Component {
  render() {
    const config = {
      "type": "serial",
      "valueAxis": {
        "axisAlpha": 0.5,
        // "position": "left",
        "axisColor": "#8470ff",
      },  
      "categoryField": "year",
      "categoryAxis": {
         "gridPosition": "start",
         "axisColor": "#8470ff"
       },
       "dataProvider": [{
        "country": "USA",
        "visits": 2025
      }, {
        "country": "China",
        "visits": 1882
      }, {
        "country": "Japan",
        "visits": 1809
      }, {
        "country": "Germany",
        "visits": 1322
      }, {
        "country": "UK",
        "visits": 1122
      }, {
        "country": "France",
        "visits": 1114
      }, {
        "country": "India",
        "visits": 984
      }, {
        "country": "Spain",
        "visits": 711
      }, {
        "country": "Netherlands",
        "visits": 665
      }, {
        "country": "Russia",
        "visits": 580
      }, {
        "country": "South Korea",
        "visits": 443
      }, {
        "country": "Canada",
        "visits": 441
      }, {
        "country": "Brazil",
        "visits": 395
      }],
      "graphs": [{
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "visits"
      }]
    }
      return (
      <div>
        <div>
         <AmCharts.React id="chartddiv" style={{ width: "100%", height: "500px" }} options={config} />                    
        </div>
        
      </div>
    );
  }
}

ColumnChart.propTypes = {
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

export default compose(withConnect)(ColumnChart);

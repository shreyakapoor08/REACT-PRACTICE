/**
 *
 * PieChartPractice
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import AmCharts from "@amcharts/amcharts3-react";

/* eslint-disable react/prefer-stateless-function */
export class PieChartPractice extends React.Component {
  render() {
    const config = {
      "type": "pie",
      "theme": "light",
      "dataProvider": [{
        "country": "Lithuania",
        "litres": 501.9
      }, {
        "country": "Czech Republic",
        "litres": 301.9
      }, {
        "country": "Ireland",
        "litres": 201.1
      }, {
        "country": "Germany",
        "litres": 165.8
      }, {
        "country": "Australia",
        "litres": 139.9
      }, {
        "country": "Austria",
        "litres": 128.3
      }, {
        "country": "UK",
        "litres": 99
      }, {
        "country": "Belgium",
        "litres": 60
      }, {
        "country": "The Netherlands",
        "litres": 50
      }],
      "valueField": "litres",
      "titleField": "country",
      "balloon": {
        "fixedPosition": true
      },
      "export": {
        "enabled": true,
        "menu": []
      }
    }
    return (
      <div>
        <AmCharts.React style={{ width: "100%", height: "500px" }} options={config} />       
      </div>
    );
  }
}

PieChartPractice.propTypes = {
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

export default compose(withConnect)(PieChartPractice);

/**
 *
 * ReduxPokemonApp
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import index from './index.css';
import { onClickRequest,getPokemonList } from './actions';
// import {getPokemons} from './selectors'

/* eslint-disable react/prefer-stateless-function */
export class ReduxPokemonApp extends React.Component {
  state={
    name :"",
    type:"",
    pokemonsDetails: []
  }

  componentDidMount(){
    this.props.getPokemonList()
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.pokemonsList && nextProps.pokemonsList !== this.props.pokemonsList) {
      this.setState({
        pokemonsDetails: nextProps.pokemonsList
      });
    }
    
  }


  nameSearch = (event) => {
    this.setState({name: event.target.value})
  }

  typeSearch = (event) => {
    this.setState({type: event.target.value})
  }
 
  render() {
    let newPokemonsList = this.state.pokemonsDetails.filter(val => {
          if(val.Name.toUpperCase().includes(this.state.name.toUpperCase()) && val.Type.toUpperCase().includes(this.state.type.toUpperCase()))
              return val;
        }).map((value,index)=> {
          return(
            <tr key={index}>
                <td>{value.Name}</td>
                <td>{value.Type}</td>
                <td>{value.Stage}</td>
                <td>{value.Species}</td>
                <td><button onClick={()=>this.props.onClickRequest(index)} disabled = {value.Caught}>{value.Caught ? "Caught" : "Click Me"}</button></td>
            </tr>
          );  
       })      
    return (
      <div className="maindiv">
        <Helmet>
          <title>ReduxPokemonApp</title>
          <meta name="description" content="Description of ReduxPokemonApp" />
        </Helmet>
        <div>
          <div className="headingname">
            <h2>Redux Pokemon App</h2>
          </div>
          <div>
            <input type="text" placeholder="Search By Name" value={this.state.name} className="search" onChange={this.nameSearch}></input>
            <input type="text" placeholder="Search By Type" value={this.state.type} className="search" onChange={this.typeSearch}></input>
          </div>
          <div>
            <table className="pokemontable">
              <thead>
                <tr className="tableheading">
                  <td>Name</td>
                  <td>Type</td>
                  <td>Stage</td>
                  <td>Species</td>
                  <td>Caught</td>
                </tr>
              </thead>
              <tbody>
              {newPokemonsList}
              </tbody>
              </table>
          </div>
          <div>
            <h4 className="caughtme">Shreya Kapoor</h4>
            <p className="caughtme">Pokemon Caught: {this.state.count}</p>
          </div>
        </div>
      </div>
    );
  }
}


ReduxPokemonApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // getPokemons:getPokemons()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onClickRequest:(index)=>dispatch(onClickRequest(index)),
    getPokemonList:()=>dispatch(getPokemonList())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'reduxPokemonApp', reducer });
const withSaga = injectSaga({ key: 'reduxPokemonApp', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ReduxPokemonApp);

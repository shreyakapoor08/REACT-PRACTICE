/**
 *
 * PokemonsList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import index from './index.css';
import {onClickRequest,getPokemonList} from './actions';
import makeSelectPokemonsList from './selectors';


/* eslint-disable react/prefer-stateless-function */
export class PokemonsList extends React.Component {
  state={
    name :"",
    type:"",
    pokemonsDetails: []
  }
  componentDidMount(){ //called only once but willmount baar baar call hota hai
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

  // onClickRequest = (index) => {
  //   let count = this.state.count + 1;
  //   let pokemons = this.state.pokemons;
  //   pokemons[index].Caught = true;
  //   this.setState({pokemons,count})
  // }
  
  render() {
    // console.log("list",this.state.pokemonsDetails);
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
      <div>
        <Helmet>
          <title>PokemonsList</title>
          <meta name="description" content="Description of PokemonsList" />
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

PokemonsList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pokemonsList: makeSelectPokemonsList(),
  // buttonClick: makeSelectButtonClick()
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

const withReducer = injectReducer({ key: 'pokemonsList', reducer });
const withSaga = injectSaga({ key: 'pokemonsList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PokemonsList);

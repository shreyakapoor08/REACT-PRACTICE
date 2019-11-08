/**
 *
 * PokemonApp
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
import makeSelectPokemonApp from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import index from './index.css';
// import {onClickRequest} from './actions'

/* eslint-disable react/prefer-stateless-function */
export class PokemonApp extends React.Component {
  state={
    pokemons : [
      { Name: "Bulbasaur", Type: "Grass", Stage: 0, Species: "Seed Pokemon" , Caught : false },
      { Name: "Ivysaur", Type: "Grass", Stage: 3, Species: "Seed Pokemon" , Caught : false },
      { Name: "Venusaur", Type: "Grass", Stage: 5, Species: "Seed Pokemon" , Caught : false },
      { Name: "Charmander", Type: "Fire", Stage: 0, Species: "Lizard Pokemon" , Caught : false },
      { Name: "Charmeleon", Type: "Fire", Stage: 3, Species: "Flame Pokemon" , Caught : false },
      { Name: "Charizard", Type: "Fire", Stage: 5, Species: "Flame Pokemon" , Caught : false },
      { Name: "Squirtle", Type: "Water", Stage: 0, Species: "Tiny Turtle Pokemon" , Caught : false },
      { Name: "Wartortle", Type: "Water", Stage: 3, Species: "Turtle Pokemon" , Caught : false },
      { Name: "Blastoise", Type: "Water", Stage: 5, Species: "Shellfish Pokemon" , Caught : false },
      { Name: "Caterpie", Type: "Bug", Stage: 1, Species: "Worm Pokemon" , Caught : false },
      { Name: "Metapod", Type: "Bug", Stage: 2, Species: "Cocoon Pokemon" , Caught : false },
      { Name: "Butterfree", Type: "Bug", Stage: 4, Species: "Butterfly Pokemon" , Caught : false },
      { Name: "Weedle", Type: "Bug", Stage: 1, Species: "Hairy Bug Pokemon" , Caught : false },
      { Name: "Kakuna", Type: "Bug", Stage: 2, Species: "Cocoon Pokemon" , Caught : false }, 
      { Name: "Beedrill", Type: "Bug", Stage: 4, Species: "Poison Bee Pokemon" , Caught : false },
      { Name: "Pidgeotto", Type: "Flying", Stage: 1, Species: "Bird Pokemon" , Caught : false },
      { Name: "Pidgeot", Type: "Flying", Stage: 3, Species: "Bird Pokemon" , Caught : false },
      { Name: "Pidgey", Type: "Flying", Stage: 5, Species: "Bird Pokemon" , Caught : false },
      { Name: "Rattata", Type: "Normal", Stage: 1, Species: "Mouse Pokemon" , Caught : false },  
      { Name: "Machop", Type: "Fighting", Stage: 1, Species: "Superpower Pokemon" , Caught : false },                                                                                            
      { Name: "Machoke", Type: "Fighting", Stage: 2, Species: "Superpower Pokemon" , Caught : false },                                                                                            
      { Name: "Machamp", Type: "Fighting", Stage: 5, Species: "Superpower Pokemon" , Caught : false },                                                                                            
      { Name: "Bellsprout", Type: "Grass", Stage: 1, Species: "Flower Pokemon" , Caught : false },                                                                                            
      { Name: "Weepinbell", Type: "Grass", Stage: 3, Species: "Flycatcher Pokemon" , Caught : false },                                                                                            
      { Name: "Victreebel", Type: "Grass", Stage: 5, Species: "Flycatcher Pokemon" , Caught : false },                                                                                            
      { Name: "Graveler", Type: "Rock", Stage: 3, Species: "Rock Pokemon" , Caught : false }, 
      { Name: "Tangela	", Type: "Grass", Stage: 4, Species: "Vine Pokemon" , Caught : false },                                                                                          
      { Name: "Jynx", Type: "psychic", Stage: 6, Species: "Human Shape Pokemon" , Caught : false },                                                                                          
      { Name: "Dratini	", Type: "Dratini", Stage: 3, Species: "Dratini Pokemon" , Caught : false },                                                                                          
      { Name: "Dragonair	", Type: "Dragon", Stage: 5, Species: "Dragon Pokemon" , Caught : false },                                                                                          
    ],
    count: 0,
    name: "",
    type: ""
  }

  nameSearch = (event) => {
    this.setState({name: event.target.value})
  }

  typeSearch = (event) => {
    this.setState({type: event.target.value})
  }

  searchByFilter = () => {
    return this.state.pokemons.filter(val => {
      if(val.Name.toUpperCase().includes(this.state.name.toUpperCase()) && val.Type.toUpperCase().includes(this.state.type.toUpperCase()))
          return val;
    }).map((value,index)=> {
      return(
        <tr key={index}>
            <td>{value.Name}</td>
            <td>{value.Type}</td>
            <td>{value.Stage}</td>
            <td>{value.Species}</td>
            <td><button onClick={() => this.buttonCatch(index)} disabled = {value.Caught}>{value.Caught ? "Caught" : "Click Me"}</button></td>
        </tr>
      ); 
        
    })

  }

  buttonCatch = (index) => {
    let count = this.state.count + 1;
    let pokemons = this.state.pokemons;
    pokemons[index].Caught = true;
    this.setState({pokemons,count})
  }

  render() {
    return (
      <div className="maindiv">
        <Helmet>
          <title>PokemonApp</title>
          <meta name="description" content="Description of PokemonApp" />
        </Helmet>
        <div>
          <div className="headingname">
            <h2>Pokemon App</h2>
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
              {this.searchByFilter()}
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

PokemonApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pokemonApp: makeSelectPokemonApp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    // onClickRequest:(index)=>dispatch(onClickRequest(index))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'pokemonApp', reducer });
const withSaga = injectSaga({ key: 'pokemonApp', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PokemonApp);

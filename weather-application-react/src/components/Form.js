import React from 'react';

const data = [
    {
        country: 'India',
        city: ['delhi','mumbai','kolkata']
    },
    {
        country: 'USA',
        city: ['deldd','mumbaidd','kolkddata']
    },
    {
        country: 'Uk',
        city: ['delfdssdfddhi','mumgfddbai','ksssolkata']
    },
    {
        country: 'China',
        city: ['deqweldd','mumbqweaidd','kolkdzsffdsdata']
    }
]

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="country" placeholder="Country"/>
        
        <input type="text" name="city" placeholder="City"/>



        <button>Get Weather</button>
    </form>
);

export default Form;
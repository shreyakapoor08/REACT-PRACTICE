import React from 'react';

import Titles from './components/Titles';
import Form from "./components/Form";
import Weather from "./components/Weather";
// App is an instance of class

const API_KEY = "70711dbdffa620ff91964370d759fc94";

class App extends React.Component{
    state = {
    //    state is a ob and containes key value pair
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    };
    getWeather = async(event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;
    //    preventDefault is used in single page application
    //    arrow function allow to use this keyword independently
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        if(city && country)
        {
            console.log(data);
            this.setState({
                //here is the temperature live
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
        } else {
            this.setState({
                //here is the temperature live
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter the value."
            });
        }

    }
    render() {
        return(
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                    <Titles/>
                                </div>
                                <div className="col-xs-7 form-container">
                                    <Form getWeather={this.getWeather}/>
                                    <Weather
                                        temperature={this.state.temperature}
                                        country={this.state.country}
                                        city={this.state.city}

                                        humidity={this.state.humidity}
                                        description= {this.state.description}
                                        error= {this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
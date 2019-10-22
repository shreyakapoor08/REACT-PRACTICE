import React, {Component} from 'react';

import './App.css';

class App extends Component{
    state = {query: '', hits: []};

    onChange = event => {
        this.setState({query: event.target.value});
    };

    onSearch = event => {
        event.preventDefault();
        if(this.state.query === ''){
            return;
        }
        const cachedHits = localStorage.getItem(this.state.query);

        if (cachedHits) {
            console.log(cachedHits)
            this.setState({ hits: JSON.parse(cachedHits) });
        } else {
            fetch('https://hn.algolia.com/api/v1/search?query=' + this.state.query)
                .then(response => response.json())
                .then(result => this.onSetResult(result, this.state.query));
        }
    };

    onSetResult = (result, key) => {
        localStorage.setItem(key, JSON.stringify(result.hits))

        this.setState({ hits: result.hits });
};

    render() {
        return (
            <div>
                <h1>Search Hacker News with Local Storage</h1>
                {/* Search Input */}
                <form onSubmit={this.onSearch}>
                    <input type="text" onChange={this.onChange} required/>
                    <button type="submit">Search</button>
                </form>
                {/* Result */}
                {this.state.hits.map(item => (
                    <div key={item.objectID}>{item.title}</div>
                ))}
            </div>
        );
    }
    }


    export default App;

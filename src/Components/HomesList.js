import React from 'react';
import { Home } from './Home';
import { homesApi } from '../rest/HomesApi';

export class HomesList extends React.Component {
    state = {
        homes: []
    };

    componentDidMount() {
        this.fetchHomes();
    };

    fetchHomes = async () => {
        const homes = await homesApi.get();
        this.setState({ homes });
    };

    updateHomes = async (updateHomes) => {
        await homesApi.put(updateHomes);
        this.fetchHomes();
    };

render() {
    return (
        <div className="home-list">
            {this.state.homes.map((home) => (
                <Home
                home={home}
                key={home._id}
                updateHome={this.updateHomes}
            />
            ))}
        </div>
    )
}
}
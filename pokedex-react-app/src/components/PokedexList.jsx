import React, { Component } from "react";
import Pokemon from "./Pokemon";

class PokedexList extends Component {
    // Link to pokedex url. First 100 pokemon
    pokedex_uri = "https://pokeapi.co/api/v2/pokemon?limit=100";

    constructor(props) {
        super(props);
        this.state = {
            pokemon_list: []
        }
    }

    // Component mounted so load the data from API
    componentDidMount() {
        this.loadData();
    }

    //fetch pokemon_list
    loadData = async () => {

        try {
            const response = await fetch(this.pokedex_uri);
            const jsonData = await response.json();
            this.setState({ pokemon_list: jsonData.results });
            console.log(`Pokedex API response:\n ${jsonData.results}`);
        } catch (err) {
            console.log(`Fetch failed ${err}`);
        }
    };

    render() {
        return (
            this.state.pokemon_list.map((pokemon) => {
                // FIXME: Should really make a second request to get the image from web service but for now build local filename from number at end of .url property
                let pokemon_url_parts = pokemon.url.split('/');
                let pokemon_id = pokemon_url_parts[6];
                return (
                    <div key={pokemon_id}>
                        <Pokemon pokemon_name={pokemon.name} image={'/img/' + pokemon_id + '.png'} pokedex_id={pokemon_id} pokedex_uri='https://pokeapi.co/api/v2/pokemon/' />
                    </div>
                )
            }
            ));
    }
}

export default PokedexList;
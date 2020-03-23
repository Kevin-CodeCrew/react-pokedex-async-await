import React, {Component} from 'react';

class Pokemon extends Component {

// Renders a Pokemon as a grid element
    render() {
        return (
            <div className="pokemon grid-element">
                <h2 className= 'pokemon_name'>{this.props.pokemon_name}</h2>
                {/*I have all my local images in an /img directory under 'public' which gets mounted as '/' for static content like this*/}
                <a rel="noopener noreferrer" target='_blank' href={`${this.props.pokedex_uri}${this.props.pokedex_id}`}> <img src={this.props.image} alt={this.props.pokemon}/></a>
            </div>
        );
    }
}

export default Pokemon;
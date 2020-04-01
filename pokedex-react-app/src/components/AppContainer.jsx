import React, { Component, Fragment } from "react";
import TopNav from "./TopNav";
import PokedexList from "./PokedexList";
import BottomNav from "./BottomNav";

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        // Build app structure from multiple components
        return (
            <Fragment>
                <TopNav />
                <div className="grid-container">
                    <PokedexList />
                </div>
                <BottomNav />
            </Fragment>
        );
    }
}

export default AppContainer;
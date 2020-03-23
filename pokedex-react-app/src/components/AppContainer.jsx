import React, {Component, Fragment} from "react";
import TopNav from "./TopNav";
import PokedexList from "./PokedexList";
import BottomNav from "./BottomNav";

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
            <TopNav/>
            <PokedexList/>
            <BottomNav/>
            </Fragment>
         );
    }
}
 
export default AppContainer;
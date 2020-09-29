import React, {Component} from "react";
import Row from "../row";
import {StarshipList} from "../sw-components";
import StarshipDetails from "../sw-components/starship-details";

export default class StarshipsPage extends Component {

  state = {
    selectedItem: 10
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;
    return (
        <Row
            left={<StarshipList onItemSelected={this.onItemSelected} />}
            right={<StarshipDetails itemId={selectedItem} />}
        />
    );
  }
}
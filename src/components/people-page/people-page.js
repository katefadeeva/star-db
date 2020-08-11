import React, {Component} from "react";
import ItemList from "../item-list";
import ItemDetails, {Record} from "../item-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import './people-page.css';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 1
  }

  onPersonSelected = (selectedPerson) => {
    this.setState( {
      selectedPerson: selectedPerson
    });
  }

  render() {

    const {getAllPeople, getPerson, getPersonImage} = this.swapiService;

    const itemList = (
        <ErrorBoundry>
          <ItemList
              onItemSelected = {this.onPersonSelected}
              getData = {getAllPeople}>
            {(i) => (`${i.name} (${i.birthYear})`)}
          </ItemList>
        </ErrorBoundry>

    );

    const personDetails = (
        <ErrorBoundry>
          <ItemDetails
            itemId={this.state.selectedPerson}
            getData={getPerson}
            getImageUrl={getPersonImage}>
            <Record field="gender" label="Gender" />
            <Record field="birthYear" label="Birth Year" />
            <Record field="eyeColor" label="Eye Color" />
          </ItemDetails>
        </ErrorBoundry>
    );

    return (
          <Row left={itemList} right={personDetails} />
    );
  };
}
import React from 'react';

export class FetchData extends React.Component {
  displayName = FetchData.name

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };

    fetch('api/Service')
      .then(response => response.json())
      .then(data => {
        this.setState({ forecasts: data, loading: false });
      });
  }

  static renderForecastsTable(forecasts) {
    return (
        <div>
            {forecasts.map(forecast =>
                <div key={forecast.id} className="">
                    <h1>{forecast.question}</h1>
                </div>
            )}
        </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}

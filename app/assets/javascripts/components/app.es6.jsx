class App extends React.Component {
  constructor(){
    super();
    this.state = {
      possibleVenues: [],
      midpoint: [],
      detailsView: {},
      choices: []
    }
  }

  render() {
    return (
      <div className="app-container">
        {/* <MapView /> */}
      </div>
    )
  }
}

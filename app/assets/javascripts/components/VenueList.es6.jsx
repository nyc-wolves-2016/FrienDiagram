class VenueList extends React.Component {
  constructor() {
    super();

    this.passVenueData = this.passVenueData.bind(this);
  }

  passVenueData(venue) {
    // After clicking venue
    // Send information up to App
    // this.props.handleData(response)
    debugger;
    
  }

  render() {
    const { venues } = this.props
    return (
      <div className="venue-list">
        {venues.map((venue, i) =>
          <Venue key={i}
          venue={venue}
          handleClick={this.passVenueData} />
          )
        }
      </div>
    )
  }
}

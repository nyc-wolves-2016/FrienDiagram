class VenueList extends React.Component {
  constructor() {
    super();

    this.passVenueData = this.passVenueData.bind(this);
  }

  passVenueData(venueIndex) {
    // After clicking venue
    // Send information up to App
    // this.props.handleData(response)
    this.props.handleData(venueIndex)
  }

  render() {
    const { venues } = this.props
    return (
      <div className="venue-list">
        {venues.map((venue, i) =>
          <div key={i} className="col-md-6">
            <Venue
            venue={venue}
            handleClick={this.passVenueData} />
          </div>
          )
        }
      </div>
    )
  }
}

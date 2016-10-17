class VenueList extends React.Component {
  constructor() {
    super();
    this.state = {
      // add state to each venue
    }

    this.passVenueData = this.passVenueData.bind(this);
  }

  passVenueData(venueIndex) {
    this.props.handleData(venueIndex)
  }

  render() {
    const { venues } = this.props
    return (
      <div className="venue-list-container">
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
      </div>
    )
  }
}

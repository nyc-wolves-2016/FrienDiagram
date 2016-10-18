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
      <div>
        <div className="row">
          {venues.map((venue, i) =>
            <div className="row col s6" key={i}>
              <Venue
              venue={venue}
              details={this.props.details}
              handleClick={this.passVenueData} />
            </div>
            )
          }
        </div>
      </div>
    )
  }
}

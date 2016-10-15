class VenueList extends React.Component {
  constructor() {
    super();

    this.passVenueData = this.passVenueData.bind(this);
  }

  render() {
    const { venues } = this.props
    return (
      <div className="venue-list">
        {venues.map((venue, i) =>
          <Venue key={i}
          venue={venue}
          handleVenueClick={this.passVenueData} />
          )
        }
      </div>
    )
  }
}

class VenueList extends React.Component {
  
  render() {
    const { venues } = this.props
    return (
      <div className="venue-list">
        {venues.map((venue, i) =>
          <Venue key={i} venue={venue} handleVenueClick={this.passVenue}/>
          )
        }
      </div>
    )
  }
}

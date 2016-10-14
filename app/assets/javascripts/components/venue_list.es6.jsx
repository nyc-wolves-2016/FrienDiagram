class VenueList extends React.Component {
  render() {
    const { possibleVenues } = this.props
    return (
      <div className="venue-list">
        {possibleVenues.map((venue, i) =>
          <Venue key={i} venue={venue} />
          )
        }
      </div>
    )
  }
}

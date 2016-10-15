class VenueList extends React.Component {
  render() {
    const venues = [{name: "freedomTower", rating: 4, expense: 4}]
    return (
      <div className="venue-list">
        {venues.map((venue, i) =>
          <Venue key={i} venue={venue} />
          )
        }
      </div>
    )
  }
}

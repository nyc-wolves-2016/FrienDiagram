class VenueList extends React.Component {
  render() {
    debugger;
    const { venues } = this.props
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

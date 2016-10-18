class VenueChoice extends React.Component {

  render() {
    const { name, price_level, rating, icon } = this.props.venueChoice
    return (
      <div className="card-panel red">
        <span> {name} </span>
        <span> {rating} </span>
        <span> {price_level} </span>
      </div>
    )
  }
}

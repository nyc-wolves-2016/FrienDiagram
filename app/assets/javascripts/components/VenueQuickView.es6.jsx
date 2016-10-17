class VenueQuickView extends React.Component {
  constructor() {
    super();
    this.handleVenueClick = this.handleVenueClick.bind(this);
  }

  handleVenueClick() {
    var venue = this.props.venue
    this.props.handleVenueClick(venue)
  }

    render() {
      const { name, rating, price} = this.props.venue
      return (
        <div onClick={this.handleVenueClick}>
          <span> Name: {name} </span>
          <span> Rating: {rating} </span>
          <span> Price: {price} </span>
        </div>
      )
    }
}

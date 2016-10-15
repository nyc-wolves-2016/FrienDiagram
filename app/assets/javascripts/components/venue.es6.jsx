class Venue extends React.Component {
  constructor() {
    super();
    this.handleVenueClick = this.handleVenueClick.bind(this);
  }

  render () {
    const { venue } = this.props
    const { name, rating, price} = this.props.venue
    return (
      <div className="venue">
        <div onClick={this.handleVenueClick} className="venue-quickview">
          <span> Name: {name} </span>
          <span> Rating: {rating} </span>
          <span> Price: {price} </span>
        </div>
        <form className="venue-choice" action="/users/1/events">
          <button className="venue-choice_button" type="submit"></button>
        </form>
      </div>
    )
  }
}

class Venue extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    // Hey, the user has clicked *this* venue
    var venue = this.props.venue.id - 1
    this.props.handleClick(venue)
  }

  // handleChoiceClick(event){
  //   event.preventDefault();
  // }

  render () {
    const { venue } = this.props
    const { name, rating, price} = this.props.venue
    return (
      <div className="venue">
        <div onClick={this.handleClick} className="venue-quickview">
          <span> Name: {name} </span><br></br>
          <span> Rating: {rating} </span><br></br>
          <span> Price: {price} </span><br></br>
        </div>
        <hr></hr>
      </div>
    )
  }
}

class Venue extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    // Hey, the user has clicked *this* venue
    var venue = this.props.venue
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
        <button type="button" className="btn btn-default" aria-label="Left Align">
        <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
        </button>
        <hr></hr>
      </div>
    )
  }
}

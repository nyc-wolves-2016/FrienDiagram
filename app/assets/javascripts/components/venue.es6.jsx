class Venue extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleBookmark = this.handleBookmark.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    // Hey, the user has clicked *this* venue
    var venue = this.props.venue
    this.props.handleClick(venue)
  }

  handleBookmark(event){
    event.preventDefault();
    var $event = $(event.target)
    let { name, vicinity, rating, price_level, place_id } = this.props.venue
    $.ajax({
      url: "/events/" + $event.attr('id') + "/venue_choices",
      method: 'POST',
      data: {
        venue: { name, vicinity, rating, price_level, place_id }
      }
    }).done(function(){
        this.children('button').removeClass('btn-default')
        this.children('button').addClass('btn-success')
        this.children().children().text(' Bookmarked')
    }.bind($event))
  }

  // handleChoiceClick(event){
  //   event.preventDefault();
  // }

  render () {
    const { venue, details } = this.props
    const { name, rating, price} = this.props.venue
    return (
      <div className="row">
          <form className="col s1" id={details.id} onSubmit={this.handleBookmark} method="post">
            <button type="submit" className="btn-floating waves-effect waves-light btn" aria-label="Left Align">
            <i className="medium material-icons">stars</i>
            </button>
          </form>
          <div onClick={this.handleClick} className="col s8 card-panel teal push-s1">
              <span>{name} </span><br></br>
              <span> Rating: {rating} </span><br></br>
              <span> Price: {price} </span><br></br>
        </div>

      </div>
    )
  }
}

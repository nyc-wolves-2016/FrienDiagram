class EventDetails extends React.Component {
  render() {
    const { title, date, host } = this.props.details
    const { name, venue_address } = this.props.venue
    return(
      <div className="details">
        <h3>Event Details Component:</h3>
        <span> {title} </span><br></br>
        <h2>-------------</h2>
        <span> {name} </span>
        <span> {venue_address} </span>
        <h2>-------------</h2>
        <span> {date} </span>
        <br></br>
        <button type="button" className="btn btn-default" aria-label="Left Align">
          <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
        </button>
        <button type="button" className="btn btn-default" aria-label="Left Align">
          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </button>
      </div>
    );
  }
}

class EventDetails extends React.Component {
  render() {
    const { title, date, host } = this.props.details
    const { name, venue_address } = this.props.venue
    return(
      <div className="col s4 valign-wrapper">
       <div className="card-panel light-blue darken-3">
        <h4 className="THIN">Event Details Component:</h4>
        <span> {title} </span><br></br>
        <span> {name} </span>
        <span> {venue_address} </span>
        <span> {date} </span>
        <br></br>
        </div>
      </div>
    );
  }
}

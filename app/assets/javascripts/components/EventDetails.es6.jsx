class EventDetails extends React.Component {
  render() {
    const { title, date, host } = this.props.details
    const { name, venue_address } = this.props.venue
    return(
      <div>
        <h3>Event Details Component:</h3>
        <span> {title} </span><br></br>
        <h2>-------------</h2>
        <span> {name} </span>
        <span> {venue_address} </span>
        <h2>-------------</h2>
        <span> {date} </span>
        <br></br>
      </div>
    );
  }
}

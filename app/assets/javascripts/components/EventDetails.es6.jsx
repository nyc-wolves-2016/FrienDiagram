class EventDetails extends React.Component {
  render() {
    const { name, address, rating, price } = this.props.details
    return(
      <div className="details">
        <h3>Event Details Component:</h3>
        <span> {name} </span>
        <span> {address} </span>
        <span> {rating} </span>
        <span> {price} </span>
      </div>
    );
  }
}

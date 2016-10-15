class EventDetails extends React.Component {
  render() {
    const { name, address, rating, price } = this.props.details
    return(
      <div className="details">
        <span> {name} </span>
        <span> {address} </span>
        <span> {rating} </span>
        <span> {price} </span>
      </div>
    );
  }
}

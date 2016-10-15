class VenueQuickView extends React.Component {
    render() {
      const { name, rating, price} = this.props.venue
      return (
        <div className="venue-quickview">
          <span> Name: {name} </span>
          <span> Rating: {rating} </span>
          <span> Price: {price} </span>
        </div>
      )
    }
}

class VenueQuickView extends React.Component {
    render() {
      debugger;
      const { name, rating, expense} = this.props.venue
      return (
        <div className="venue-quickview">
          <span> {name} </span>
          <span> {rating} </span>
          <span> {expense} </span>
        </div>
      )
    }
}

class EventDetails extends React.Component {
  constructor() {
    super();

    this.handleRemoveVenueChoice = this.handleRemoveVenueChoice.bind(this);
  }

  handleRemoveVenueChoice(venue) {

    this.props.removeVenueChoice(venue)
  }

  render() {
    const { title, date, host } = this.props.details
    const { venueChoices } = this.props
    return(
      <div className="col s4 valign-wrapper">
       <div>
        <h4>{title}</h4>
        {venueChoices.map((venueChoice, i) =>
          <VenueChoice key={i} venueChoice={venueChoice} onRemove={this.handleRemoveVenueChoice}  />
        )}
        </div>
      </div>
    );
  }
}

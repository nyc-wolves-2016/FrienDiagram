class UpComingEvents extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this)
    let { userEvents } = this.props
    return (
      <div className="row">
        <h3>Upcoming Events</h3>
        { userEvents.map((event, i ) => {
          return (
            <div key={i}>
              <h5><a href={"events/"+event.id}>Event: {event.title}</a></h5>
              <h6>Date: {event.date}</h6>
              <h6>Host: {event.host}</h6>
              <h6>Type: {event.event_type}</h6>
            </div>
          )}
        )}
      </div>

    )
  }
}

class PendingInvites extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { pendingEvents } = this.props
    if (pendingEvents.length > 0) {
      return (
        <div className="collapsible-body">
          <h4>Events awaiting Response from Invitee</h4>
          { pendingEvents.map((event, i ) => {
            return (
              <div key={i}>
                <h5><a href={"events/"+event.id}>Event: {event.title}</a></h5>
                <h6>Date: {event.date}</h6>
                <h6>Host: {event.invitee}</h6>
                <h6>Type: {event.event_type}</h6>
              </div>
            )}
          )}
        </div>

      )
    } else {
      return (
        <h4>Pending Events</h4>
      )
    }

  }
}

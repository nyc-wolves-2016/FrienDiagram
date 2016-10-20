class AcceptInviteForm extends React.Component {
  constructor() {
    super();
    this.state = {
      events: []
    }
  }

  componentWillMount(){
    this.setState({
      events: this.props.events
    })
  }

  render() {
    let { events } = this.state
    let { addresses } = this.props
      return (
        <div className="collapsible-body">
          <h6 className="invite_container">Pending Invitations awaiting your Reply</h6>
          { events.map((event, i) => {

            return <div key={i} className="invite_container">
              <h5 className="event_form">{event.title}</h5>
              <h5 className="event_form">with: {event.host_username}</h5>
              <h5 className="event_form">{event.day} @ {event.hour}</h5>

              <form action={"/events/"+event.id} method="post">
                <input type="hidden" name="_method" value="put" />
                <label htmlFor="title">RSVP:</label><br/>
                <select className="browser-default" type="text" name="invitation[response]" placeholder="Event Type">
                  <option value="Accept">Accept</option>
                  <option value="Decline">Decline</option>
                </select><br/>
                <label htmlFor="title">Addresses:</label><br/>
                <select className="browser-default" name="event[guest_address_id]">
                  { addresses.map((address, i) => {
                    return <option  key={i} value={address.id}>
                      {address.address}, {address.id}
                    </option>
                  }) }
                </select><br/>

                <input className="waves-effect waves-light normal-btn btn" type="submit" value="Respond to Invite" />
              </form>
            </div>
          }) }

        </div>
      )
    }
}

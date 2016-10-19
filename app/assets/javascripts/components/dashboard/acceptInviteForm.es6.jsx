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
    if (this.props.addressStatus === "true" && events.length > 0) {
      return (
        <div>
          <h2>Open Invitations awaiting your Reply</h2>
          { events.map((event, i) => {

            return <div key={i} className="invite_container">
              <h4 className="event_form">{event.title}</h4>
              <h4 className="event_form">{event.host}</h4>
              <h4 className="event_form">{event.date}</h4>

              <form action={"/events/"+event.id} method="post">
                <input type="hidden" name="_method" value="put" />
                <label htmlFor="title">RSVP:</label><br/>
                <select className="event_form" type="text" name="invitation[response]" placeholder="Event Type">
                  <option value="Accept">Accept</option>
                  <option value="Decline">Decline</option>
                </select>

                <p>Homebase:</p>
                <select className="event_form" name="event[guest_address_id]">
                  { addresses.map((address, i) => {
                    return <option  key={i} value={address.id}>
                      {address.address}, {address.id}
                    </option>
                  }) }
                </select>

                <input className="waves-effect waves-light btn" type="submit" value="Respond to Invite" />
              </form>
            </div>
          }) }

        </div>
      )} else if (events.length > 0) {
        return (
          <div>
            <a href="#add-address-form">
              <h2>There are Invitations awaiting your Reply</h2>
              <h4> but you don't have an address. Add one to see your invites.</h4>
            </a>
          </div>
        )
      } else {
        return (
          <h1></h1>
        )
      }
    }
}

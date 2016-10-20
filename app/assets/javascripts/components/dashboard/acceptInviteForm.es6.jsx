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
          <h5 className="invite_container">Pending Invitations awaiting your Reply</h5>
          { events.map((event, i) => {

            return <div key={i} className="invite_container">
              <h5 className="event_form">{event.title}</h5>
              <h5 className="event_form">{event.host}</h5>
              <h5 className="event_form">{event.date}</h5>

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

                <input className="waves-effect waves-light normal-btn btn" type="submit" value="Respond to Invite" />
              </form>
            </div>
          }) }

        </div>
      )
    }
}

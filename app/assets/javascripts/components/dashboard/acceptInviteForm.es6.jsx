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
    if (this.props.addressStatus === "true") {
      return (
        <div>
          <h2>Invitations awaiting your Reply</h2>
          { events.map((event, i) => {
            return <div className="invite_container">
              <h4>{event.title}</h4>
              <h4>{event.host}</h4>
              <h4>{event.date}</h4>

              <form action="/events" method="post">
                <label htmlFor="title">RSVP:</label><br/>
                <select className="event_form" type="text" name="event[event_type]" placeholder="Event Type">
                  <option value="accept">Accept</option>
                  <option value="decline">Decline</option>
                </select>

                <input type="submit" value="Response to Invite" />
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
          <h1>Errors of Errors</h1>
        )
      }
    }
}

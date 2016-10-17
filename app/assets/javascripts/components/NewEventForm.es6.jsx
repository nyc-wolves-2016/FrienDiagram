class NewEventForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { friendData, homeBases } = this.props;
    debugger;
    return (
      <div>
        <h2>This is a form to create a new event</h2>
        <form action="/events" method="post">
          <label htmlFor="title">Event Title:</label><br/>
          <input type="text" name="title" placeholder="Event Title" /><br/>

          <label htmlFor="date">Date:</label><br/>
          <input type="datetime-local" name="eventTime" />

          <p>Friends:</p>
          <select name="guest_address_id">
            {friendData.map((friend, i) => {
              return <option key={i} value={friend.email}>
                {friend.email}
              </option>
            })}
          </select>

          <p>Homebase:</p>
          <select name="host_address_id">
            {homeBases.map((homeBase, i) => {
              return <option key={i} value={homeBase.address}>
                {homeBase.address}
              </option>
            })}
          </select>

          <br/><br/>
          <input type="hidden" name="authenticity_token" value={this.props.token}/>
          <input type="submit" value="Create Event" />
        </form>
      </div>
    )
  }
}

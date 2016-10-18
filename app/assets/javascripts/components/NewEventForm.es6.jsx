class NewEventForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { friendData, homeBaseData } = this.props;
    return (
      <div>
        <h2>This is a form to create a new event</h2>
        <form action="/events" method="post">
          <label htmlFor="title">Event Title:</label><br/>
          <input type="text" name="event[title]" placeholder="Event Title" /><br/>

          <label htmlFor="date">Date:</label><br/>
          <input type="datetime-local" name="event[date]" />

          <p>Friends:</p>
          <select name="invitation[guest_id]">
            { friendData.map((friend, i) => {
              return <option key={i} value={friend.id}>
                {friend.email }
              </option>
            })}
          </select>

          <p>Homebase:</p>
          <select name="event[host_address_id]">
            {homeBaseData.map((homeBase, i) => {
              return <option key={i} value={homeBase.id}>
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

class NewEventForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { friendData, homeBaseData } = this.props;

      // <option key='1' value='1'>rachael@gmail.com</option>
      // <option key='2' value='2'>ryan@gmail.com</option>
      // <option key='3' value='3'>devin@gmail.com</option>
    return (
      <div>
        <h2>This is a form to create a new event</h2>
        <form action="/events" method="post">
          <label htmlFor="title">Event Title:</label><br/>
          <input type="text" name="event[title]" placeholder="Event Title" /><br/>

          <label htmlFor="date">Date:</label><br/>
          <input type="datetime-local" name="event[date]" />

          <p>Friends:</p>
          <select className="event_form" name="invitation[guest_id]">
            { friendData.map((friend, i) => {
              return <option key={i} value={friend.id}>
                {friend.email }
              </option>
            })}
          </select>

          <p>Homebase:</p>
          <select className="event_form">
            { homeBaseData.map((homeBase, i) => {
              return <option key={i} value={homeBase.id}>
                {homeBase.address}
              </option>
            }) }
          </select>

          <br/><br/>
          <input type="hidden" name="authenticity_token" value={this.props.token}/>
          <input type="submit" value="Create Event" />
        </form>
      </div>
    )
  }
}

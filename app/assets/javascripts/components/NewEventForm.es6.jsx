class NewEventForm extends React.Component {
  constructor() {
    super();

  }


  render() {
    var friendData = this.props.friendData;
    var homeBaseData = this.props.homeBases;
    return (
      <div>
        <h2>This is a form to create a new event</h2>
        <form action="/events" method="post">
          <label htmlFor="title">Event Title:</label><br/>
          <input type="text" name="title" placeholder="Event Title" /><br/>

          <label htmlFor="date">Date:</label><br/>
          <input type="datetime-local" name="eventTime" />

          <p>Friends:</p>
          <select name="cars">
            {friendData.map((friend, i) => {
              return <option key={i} value={friend.email}>
                {friend.email}
              </option>
            })}
          </select>

          <p>Homebase:</p>
          <select name="cars">
            {homeBaseData.map((homeBase, i) => {
              return <option key={i} value={homeBase.address}>
                {homeBase.address}
              </option>
            })}
          </select>

          <br/><br/>

          <input type="submit" value="Create Event" />
        </form>
      </div>
    )
  }
}

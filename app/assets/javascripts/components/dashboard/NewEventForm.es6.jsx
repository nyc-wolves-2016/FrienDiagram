class NewEventForm extends React.Component {
  constructor() {
    super();
  }


  render() {
    const { current_user, friends, addresses, id, token  } = this.props;
    // console.log("I'm in the new event form render, here's the amount of friends", friends.length)
    return (
      <div id="add_event" className="section scrollspy">
        <h2>Create a New Event</h2>
        <form action="/events" method="post">
          <label htmlFor="title">Event Title:</label><br/>
          <input type="text" name="event[title]" placeholder="Event Title" /><br/>

         <label htmlFor="title">Type:</label><br/>
         <select className="event_form" type="text" name="event[event_type]" placeholder="Event Type">
           <option value="bar">Bar</option>
           <option value="cafe">Cafe</option>
           <option value="restaurant">Restaurant</option>
           <option value="museum">Museum</option>
           <option value="park">Park</option>
         </select>

          <label htmlFor="date">Date:</label><br/>
          <input type="datetime-local" name="event[date]" />

          <p>Friends:</p>
          <select className="browser-default" name="invitation[guest_id]">
            {friends.map((friend, i) => {
              return <option key={i} value={friend.id}>
                {friend.email}
              </option>
            })}
          </select>


          <p>Homebase:</p>
          <select className="browser-default" name="event[host_address_id]">
            {addresses.map((homeBase, i) => {
              return <option key={i} value={homeBase.id}>
                {homeBase.address}
              </option>
            })}
          </select>

          <br/><br/>
          <input type="hidden" name="event[host_id]" value={id}/>
          <input type="hidden" name="authenticity_token" value={this.props.token}/>
          <input type="submit" value="Create Event" className="waves-effect waves-light btn normal-btn" />
        </form>
      </div>
    )
  }
}

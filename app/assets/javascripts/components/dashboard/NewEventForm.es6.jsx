class NewEventForm extends React.Component {
  constructor() {
    super();
  }

  handleSubmit() {

  }

  render() {
<<<<<<< HEAD
    const { friendData, homeBaseData } = this.props;

      // <option key='1' value='1'>rachael@gmail.com</option>
      // <option key='2' value='2'>ryan@gmail.com</option>
      // <option key='3' value='3'>devin@gmail.com</option>

=======
    const { friends, addresses, id, token,  } = this.props;
>>>>>>> finalize the hash object to be passed in as params in the Dashboard component
    return (
      <div>
        <h2>This is a form to create a new event</h2>
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
          <select className="event_form" name="invitation[guest_id]">
            { friends.map((friend, i) => {
              return <option key={i} value={friend.id}>
                {friend.email }
              </option>
            })}
          </select>

          <p>Homebase:</p>
          <select className="event_form" name="event[host_address_id]">
            { addresses.map((address, i) => {
              return <option  key={i} value={address.id}>
                {address.address}, {address.id}
              </option>
            }) }
          </select>

          <br/><br/>
          <input type="hidden" name="event[host_id]" value={id}/>
          <input type="hidden" name="authenticity_token" value={token}/>
          <input type="submit" value="Create Event" />
        </form>
      </div>
    )
  }
}

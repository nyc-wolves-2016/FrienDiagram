class NewEventForm extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { current_user, friends, addresses, id, token,  } = this.props;
    return (
  <div className="row">
    <form className="col s12" action="/events" method="post">
      <input type="hidden" name="event[host_id]" value={id}/>
      <input type="hidden" name="authenticity_token" value={token}/>

      <div className="row">
        <div className="input-field col s12">
          <input disabled value={current_user.first_name} id="disabled" type="text" className="validate" />
          <label htmlFor="disabled">Host</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input id="title" type="text" className="validate" name="event[title]" />
          <label htmlFor="title">Title</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <select type="text" name="event[event_type]">
            <option value="asdadsa" disabled selected>Choose your option</option>
            <option value="1">Bar</option>
            <option value="2">Cafe</option>
            <option value="3">Museum</option>
            <option value="4">Park</option>
            <option value="5">Restaurant</option>
          </select>
          <label htmlFor="type">What would you like to do?</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <label htmlFor="date">Pick a date</label>
          <input type="date" className="datepicker" />
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <select multiple type="text" name="invitation[guest_id]">
            <option value="" disabled selected>Choose your friend</option>
              { friends.map((friend, i) => {
                return <option key={i} value={friend.id}>
                          {friend.email}
                       </option>
              })}
          </select>
          <label>Select a buddy</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <select type="text" name="event[host_address_id]">
            <option value="asdadsa" disabled selected>Choose your option</option>
              { addresses.map((address, i) => {
                return <option  key={i} value={address.id}>
                  {address.address}, {address.id}
                </option>
              })}
          </select>
        </div>
      </div>

      <button className="btn waves-effect waves-light" type="submit" name="action">Submit
        <i className="material-icons right">send</i>
      </button>

    </form>
  </div>

    )
  }
}

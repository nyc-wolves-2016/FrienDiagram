class NewEventForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>This is a form to create a new event</h2>
        <form>
          <label htmlFor="title">Event Title:</label><br/>
          <input type="text" name="title" placeholder="Event Title" /><br/>

          <label htmlFor="date">Date:</label><br/>
          <input type="datetime-local" name="eventTime" />
          <input type="submit" value="Create" />

          <p>Friends:</p>
          <select name="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>

          <p>Homebase:</p>
          <select name="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>

          <br/><br/>

          <input type="Create Event" />
        </form>
      </div>
    )
  }
}

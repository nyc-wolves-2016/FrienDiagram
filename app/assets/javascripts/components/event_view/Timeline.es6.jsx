class Timeline extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { events } = this.props
    return (
      <section id="events-container">
        <ul>
          {events.map((event, i) =>
            <TimelineEvent
              key={i}
              event={event}
            />
          )}
        </ul>
      </section>
    )
  }

}

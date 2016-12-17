class Timeline extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { timelineData } = this.props
    return (
      <div id="first-container">
        <section id="events-container" className="scrollspy section">
        <h3>Timeline</h3>
          <ul>
            {timelineData.map((event, i) => {
              return ( <TimelineEvent
                key={i}
                event={event}
              />
              )
            }
            )}
          </ul>
        </section>
      </div>
    )
  }

}

class Timeline extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { timelineData } = this.props
    return (
      <div id="first-container">
        <section id="events-container" className="scrollspy section">
          <ul>
            <li><h4>Timeline</h4></li>
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

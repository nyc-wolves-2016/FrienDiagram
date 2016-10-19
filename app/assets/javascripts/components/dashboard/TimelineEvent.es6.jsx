class TimelineEvent extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { title, venue, venue_address, created_at, event_type, date } = this.props.event
    return (
      <div>
        <li>
          <span> <strong>[USER]</strong> is going to a { event_type } called { venue }, at { date }.</span> <hr/>
        </li>
      </div>
    )
  }
}

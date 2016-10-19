class TimelineEvent extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { title, venue, event_type, host } = this.props.event
    return (
      <div>
        <li>
          <span> <strong>{ host.first_name }</strong> is hosting an event called "{ title }" and is going to { venue }.</span>

          <hr/>
        </li>
      </div>
    )
  }
}

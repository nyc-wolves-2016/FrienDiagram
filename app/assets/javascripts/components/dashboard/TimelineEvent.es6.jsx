class TimelineEvent extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { title, venue, event_type, host } = this.props.event
    return (
      <div>
        <li>
          <span className="timeline"> <strong>{ host.first_name }</strong> is hosting an event called <strong>"{ title }"</strong> and is going to <strong>{ venue }</strong>.</span>

          <hr/>
        </li>
      </div>
    )
  }
}

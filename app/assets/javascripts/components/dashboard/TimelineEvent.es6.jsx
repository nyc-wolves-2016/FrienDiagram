class TimelineEvent extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { title, venue, event_type, host } = this.props.event
    console.log(title)
    return (
        <li>
          <span className="timeline"> <strong>{ host.first_name }</strong> is hosting <strong>{ title }</strong> at (<strong>{ venue }</strong>).</span>

          <hr/>
        </li>
    )
  }
}

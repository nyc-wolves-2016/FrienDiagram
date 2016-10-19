class TimelineEvent extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { key, event } = this.props
    return (
      <div>
        <li>
          <h1>Test Event Data</h1>
          <span> { key }.</span>
          <span> { event.title } </span>
          <span> { event.status } </span>
          <span> { event.created_at } </span>
        </li>
      </div>
    )
  }
}

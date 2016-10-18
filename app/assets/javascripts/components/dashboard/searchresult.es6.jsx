class SearchResult extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // Send data up to FriendSearchForm, then up to Dashboard
    event.preventDefault();
    this.props.passUpData(this.props.data)
  }

  render() {
    let { email } = this.props.data
    return(
      <div>
        <div>
          <span>{email}</span>
        </div>
        <form onSubmit={this.handleSubmit} action="/friendships" method="POST" >
          <div>
            <div>
              <input type="hidden" name="email" value={email}/>
              <input type="hidden" name="authenticity_token" value={this.props.token}/>
              <button type="submit">Add as Friend</button>
            </div>
          </div>
          </form>
      </div>
    );
  }
}

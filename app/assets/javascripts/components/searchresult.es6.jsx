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
        <form onSubmit={this.handleSubmit} action="/friendships" method="POST" className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <input type="hidden" name="email" value={email}/>

              <input type="hidden" name="authenticity_token" value={this.props.token}/>
              <button type="submit" className="btn btn-default">Add as Friend</button>
            </div>
          </div>
          </form>
      </div>
    );
  }
}

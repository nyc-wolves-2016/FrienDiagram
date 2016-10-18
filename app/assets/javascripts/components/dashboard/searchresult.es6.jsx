class SearchResult extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // Send data up to FriendSearchForm, then up to Dashboard
    event.preventDefault();
    this.props.passUpData(this.props.data)
    $(event.target).trigger('reset');
    $(event.target).parent().hide();
  }

  render() {
    const { email, first_name, last_name } = this.props.data
    return(
      <div id="search-result"><br></br>
        <div id="search-chip" className="chip">
          <h6>{first_name} {last_name}</h6>
        </div><br></br>
        <form onSubmit={this.handleSubmit} action="/friendships" method="POST" >
          <div>
            <div>
              <input type="hidden" name="email" value={email}/>
              <input type="hidden" name="authenticity_token" value={this.props.token}/>
              <button type="submit" className="waves-effect waves-light btn">Add as Friend</button>
            </div>
          </div>
          </form><br/>
      </div>
    );
  }
}

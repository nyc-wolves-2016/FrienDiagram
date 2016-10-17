class FriendSearchForm extends React.Component {
  constructor(){
    super();
    this.state = {
      username: "",
      email: "",
      results: []
    }
    this.userNameChange = this.userNameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.searchUser = this.searchUser.bind(this);
    this.gatherSearchData = this.gatherSearchData.bind(this);
  }

  userNameChange(event) {
    this.setState( { username: event.target.value } );
    // console.log(this.state);
  };

  emailChange(event) {
    this.setState( { email: event.target.value });
  };

  searchUser(event){
    event.preventDefault();
    data = {
      email: this.state.email
    }
    $.ajax({
      url: '/friendships',
      method: 'get',
      data: data
    })
    .done(function(response){
      this.setState({results: response.response})
    }.bind(this))
  }

  gatherSearchData(friendToAdd) {
    // Send data up to Dashboard using sendFriendData(response)
    this.props.sendFriendData(friendToAdd);
  }

  render() {
    const { username, email } = this.state;

    return(
      <div>
        <form onSubmit={this.searchUser}>

          <div>
            <label htmlFor="inputEmail3">Search By Email</label>
            <div>
              <input type="email" onChange={this.emailChange} value={email} id="inputEmail3" placeholder="Email" />
            </div>
          </div>

          <div>
            <div>
              <button type="submit">Search for Friend</button>
            </div>
          </div>
          </form>

          { this.state.results.map((result, i) => {
            return <SearchResult
            passUpData={this.gatherSearchData}
            data={result}
            key={i}
            token={this.props.token} />
            })
          }
      </div>
    );
  }
}

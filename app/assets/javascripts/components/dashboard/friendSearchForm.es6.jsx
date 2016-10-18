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
      friend = response.response
      this.setState({results: [friend]})
    }.bind(this))
  }

  gatherSearchData(friendToAdd) {
    // Send data up to Dashboard using sendFriendData(response)
    this.props.sendFriendData(friendToAdd);
  }

  render() {
    const { username, email, results } = this.state;
    console.log(results)
    return(
      <div>
        <form id="friend-search-form" onSubmit={this.searchUser}>

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

          { results.map((result, i) => {
            return <SearchResult
                    passUpData={this.gatherSearchData}
                    data={result}
                    key={i}
                    token={this.props.token}
                   />
            })
          }
          <br/>
      </div>
    );
  }
}

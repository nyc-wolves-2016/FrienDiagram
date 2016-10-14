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
  }

  userNameChange(event) {
    this.setState( { username: event.target.value } );
    console.log(this.state);
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
      debugger
    }.bind(this))
  }

  render() {
    const { username, email } = this.state;

    return(
      <div>
        <form onSubmit={this.searchUser} className="form-horizontal">


          <div className="form-group">
            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Search By Email</label>
            <div className="col-sm-10">
              <input type="email" onChange={this.emailChange} value={email} className="form-control" id="inputEmail3" placeholder="Email" />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">Register</button>
            </div>
          </div>
          </form>


          { this.state.results.map((result, i) => {
            return <SearchResult data={result} key={i} />
            })
          }
      </div>
    );
  }
}

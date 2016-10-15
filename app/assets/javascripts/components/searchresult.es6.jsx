class SearchResult extends React.Component {
  // componentDidMount(event){
  //   var token = document.querySelector('meta[name=csrf-token]').content;
  //   debugger
  //   this.setState({token: token})
  // }

  render() {
    let { email } = this.props.data
    return(
      <div>
        <div>
          <span>{email}</span>
        </div>
        <form action="/friendships" method="POST" className="form-horizontal">
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

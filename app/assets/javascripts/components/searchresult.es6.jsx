class SearchResult extends React.Component {


  render() {
    let { username, email } = this.props.data
    return(
      <div>
        <div>
          <span>{username}</span>
          <span>{email}</span>
        </div>
        <form action="/friendships" method="POST" className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <input type="hidden" name="email" value={email}/>
              <button type="submit" className="btn btn-default">Add as Friend</button>
            </div>
          </div>
          </form>
      </div>
    );
  }
}

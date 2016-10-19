class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      friendData : [],
      homeBaseData: [],
    }
    this.gatherFriendData = this.gatherFriendData.bind(this);
    this.gatherAddressData = this.gatherAddressData.bind(this);
    // this.gatherEventData = this.gatherEventData.bind(this);
  }

  componentDidMount() {
    this.setState({
      friendData: this.props.friends,
      homeBaseData: this.props.homeBases
     })
  }

  gatherFriendData(searchResult) {
    var data = searchResult;
    $.ajax({
      url: "/friendships",
      method: "post",
      data: {
        email: data
      }
    }).done(function(response) {
      this.setState((prevState) => {
        return {
          friendData: [response.response[0]].concat(this.state.friendData)
        }
      })
      $('#friend-search-form').trigger('reset')
    }.bind(this))

  }

  gatherAddressData(newAddress) {
    var data = newAddress;
    $.ajax({
      url: '/user_addresses',
      method: 'POST',
      data: {
        address: data
      }
    }).done(function(response) {
      this.setState((prevState) => {
        return {
          homeBaseData: [...prevState.homeBaseData, response.response[0]]
        }
      })
      $('#inputEmail3').val("")
    }.bind(this))
  }

  render() {
    return (
      <div>
        <FriendSearchForm sendFriendData={this.gatherFriendData} />
        <UserAddressForm sendAddressData={this.gatherAddressData} />
        <NewEventForm
        homeBases={this.props.homeBases}
        friendData={this.state.friendData}
        homeBaseData={this.state.homeBaseData}
        sendEventData={this.gatherEventData}
        token={this.props.token}
        current_user_id = {this.props.current_user_id}/>
      </div>
    )
  }
}

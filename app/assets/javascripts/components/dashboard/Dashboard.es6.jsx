class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      friends : [],
      addresses: [],
      addressStatus: ""
    }
    this.gatherFriendData = this.gatherFriendData.bind(this);
    this.gatherAddressData = this.gatherAddressData.bind(this);
    // this.gatherEventData = this.gatherEventData.bind(this);
  }

  componentDidMount() {
    this.setState({
      friends: this.props.userProfile.friends,
      addresses: this.props.userProfile.addresses,
      addressStatus: this.props.userProfile.addressStatus
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
          friends: [response.response[0]].concat(this.state.friends)
        }
      })
      // $('#friend-search-form').trigger('reset')
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
          addresses: [...prevState.addresses, response.response[0]],
        }
      })
      $('#inputEmail3').val("")
      var addStatus = "true"
      this.setState({
        addressStatus: addStatus
      })
    }.bind(this))
  }

  render() {
    return (
      <div>
        <FriendSearchForm sendFriendData={this.gatherFriendData} />
        <UserAddressForm sendAddressData={this.gatherAddressData} />
        <NewEventForm
          homeBases={this.props.homeBases}
          friends={this.state.friends}
          addresses={this.state.addresses}
          sendEventData={this.gatherEventData}
          token={this.props.token}
          id = {this.props.userProfile.id}
        />

        <AcceptInviteForm
          addressStatus={this.state.addressStatus}
          events={this.props.userProfile.open_invites}
          addresses={this.state.addresses}
        />
      </div>
    )
  }
}

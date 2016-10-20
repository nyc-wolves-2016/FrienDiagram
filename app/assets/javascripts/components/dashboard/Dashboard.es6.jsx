class Dashboard extends React.Component {
  constructor() {
    super()
    this.gatherFriendData = this.gatherFriendData.bind(this);
    this.gatherAddressData = this.gatherAddressData.bind(this);
  }

  componentWillMount() {
    this.setState({
      friends: this.props.userProfile.friends,
      addresses: this.props.userProfile.addresses,
      addressStatus: this.props.userProfile.addressStatus,
      upComingEvents: this.props.userProfile.upcoming_events,
      pendingEvents: this.props.userProfile.pending_events,
      timelineData: this.props.timelineData
     })
  }

  gatherFriendData(searchResult) {
    var data = searchResult;
    const { friends } = this.state
    $.ajax({
      url: "/friendships",
      method: "post",
      data: {
        email: data
      }
    }).done((response) => {
      // debugger
      this.setState({
        friends: [...response.response, ...friends]
      })
      // this.setState((prevState) => {
      //   return {
      //     friends: [response.response[0]].concat(this.state.friends)
      //   }
      // })
    })

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
      debugger
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
      <div className="card-panel main-panel">
        <Timeline
          timelineData={this.state.timelineData}
        />
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header">
              <i className="material-icons">whatshot</i>Pending Invites
            </div>
              <PendingInvites pendingEvents={this.state.pendingEvents}/>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">event</i>Pending Events
            </div>
            <AcceptInviteForm
              addressStatus={this.state.addressStatus}
              events={this.props.userProfile.open_invites}
              addresses={this.state.addresses}
            />
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">place</i>Upcoming Events
            </div>
            <UpComingEvents userEvents={this.state.upComingEvents} />
          </li>

        </ul>

          <NewEventForm
            current_user={this.props.current_user}
            homeBases={this.props.homeBases}
            friends={this.state.friends}
            addresses={this.state.addresses}
            sendEventData={this.gatherEventData}
            token={this.props.token}
            id = {this.props.userProfile.id}
          />

        <FriendSearchForm sendFriendData={this.gatherFriendData} />
        <UserAddressForm sendAddressData={this.gatherAddressData} />

      </div>
    )
  }
}

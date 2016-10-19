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

  componentWillReceiveProps(nextProps) {
    debugger;
    this.setState({
      timelineData: nextProps
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
        <Timeline
          timelineData={this.state.timelineData}
        />
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header"><i className="material-icons">filter_drama</i>Pending Events</div>
            <div className="collapsible-body">
                    <AcceptInviteForm
                      addressStatus={this.state.addressStatus}
                      events={this.props.userProfile.open_invites}
                      addresses={this.state.addresses}
                    />
            </div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">place</i>Upcoming Events</div>

              <UpComingEvents userEvents={this.state.upComingEvents} />
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">whatshot</i>Pending Invites</div>
              <PendingInvites pendingEvents={this.state.pendingEvents}/>
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

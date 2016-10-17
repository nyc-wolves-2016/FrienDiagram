class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      friendData : []
    }
    this.gatherFriendData = this.gatherFriendData.bind(this);
    // this.gatherAddressData = this.gatherAddressData.bind(this);
    // this.gatherEventData = this.gatherEventData.bind(this);
  }

  componentDidMount() {
    this.setState({ friendData: this.props.friends })
  }

  gatherFriendData(searchResult) {
    // this.props.friends.push(searchResult)
    console.log(this.state)
    this.setState((prevState) => {
      return {
        friendData: [...prevState.friendData, searchResult]
      }
    })
  }

  render() {
    return (
      <div>
        <FriendSearchForm sendFriendData={this.gatherFriendData} />
        <UserAddressForm sendAddressData={this.gatherAddressData} />

        <NewEventForm
        homeBases={this.props.homeBases}
        friendData={this.state.friendData}
        sendEventData={this.gatherEventData}
        token={this.props.token} />
      </div>
    )
  }
}

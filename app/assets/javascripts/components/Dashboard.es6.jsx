class Dashboard extends React.Component {
  constructor() {
    super();

    // this.state = {
    //
    // }
    // this.gatherFriendData = this.gatherFriendData.bind(this);
    // this.gatherAddressData = this.gatherAddressData.bind(this);
    // this.gatherEventData = this.gatherEventData.bind(this);
  }

  gatherFriendData(searchResult) {
    this.setState((prevState) => {

    })
  }

  render() {
    return (
      <div>
        <FriendSearchForm sendFriendData={this.gatherFriendData} />
        <UserAddressForm sendAddressData={this.gatherAddressData} />
        <NewEventForm homeBases={this.props.homeBases} friendData={this.props.friends} sendEventData={this.gatherEventData} />
      </div>
    )
  }
}

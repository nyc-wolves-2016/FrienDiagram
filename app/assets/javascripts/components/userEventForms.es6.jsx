class UserEventForms extends React.Component {
  constructor(){
    super();
    this.state = {
      addresses: this.props.address,
      formAddress: "",
    }
    this.userAddressChange = this.userAddressChange.bind(this);
    this.addUserAddress = this.addUserAddress.bind(this);
  }

  userAddressChange(event) {
    this.setState( { formAddress: event.target.value } );
    console.log(this.state);
  };


  addUserAddress(event){
    data = {
      formAddress: this.state.address
    }
    $.ajax({
      url: '/user_addresses',
      method: 'post',
      data: data
    })
    .done(function(response){
      debugger
      this.setState({formAddress: ""})
    }.bind(this))
  }

  render() {
    const { formAddress } = this.state;

    return(
      <div>
        <UserAddressForm />
        <CreateEventForm />
      </div>
    );
  }
}

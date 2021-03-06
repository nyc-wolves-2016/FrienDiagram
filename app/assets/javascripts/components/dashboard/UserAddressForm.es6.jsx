class UserAddressForm extends React.Component {
  constructor(){
    super();
    this.state = {
      address: "",
    }
    this.userAddressChange = this.userAddressChange.bind(this);
    this.addUserAddress = this.addUserAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  userAddressChange(event) {
    this.setState( { address: event.target.value } );
  };


  addUserAddress(event){
    data = {
      address: this.state.address
    }
    $.ajax({
      url: '/user_addresses',
      method: 'post',
      data: data
    })
    .done(function(response) {
      this.setState({address: ""})
    }.bind(this))
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.sendAddressData(this.state.address);
    this.setState({ address: "" })
  }

  render() {
    const { address } = this.state;

    return(
      <div id="add_address" className="section scrollspy">
        <form id="add-address-form" onSubmit={this.handleSubmit}>

          <div>
            <label htmlFor="inputEmail3" className="control-label">Add an Address</label>

            <div>
              <input type="text" onChange={this.userAddressChange} value={address} className="form-control" id="inputEmail3" placeholder="Add New Address" />
            </div>
          </div>

          <div className="form-group">
            <div>
              <button type="submit" className="waves-effect waves-light normal-btn btn">Add</button>
            </div>
          </div>
          </form>

      </div>
    );
  }
}

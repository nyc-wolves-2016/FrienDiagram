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
    console.log(this.state);
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
    .done(function(response){
      this.setState({address: ""})
    }.bind(this))
  }

  handleSubmit(event) {
    event.preventDefault();
    debugger;
    this.props.sendAddressData(this.state.address);
  }

  render() {
    const { address } = this.state;

    return(
      <div>
        <form onSubmit={this.handleSubmit} className="form-horizontal">

          <div className="form-group">
            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Add an Address</label>

            <div className="col-sm-10">
              <input type="text" onChange={this.userAddressChange} value={address} className="form-control" id="inputEmail3" placeholder="Email" />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">Add</button>
            </div>
          </div>
          </form>

      </div>
    );
  }
}

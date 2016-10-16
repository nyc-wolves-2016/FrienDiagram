class SignInForm extends React.Component {
  constructor() {
    super();
    this.state = {
      focus: true,
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
    console.log(event.target.value)
  }

  render() {
    return(
      <form id="new_user" className="new_user form-signin" action="/users/sign_in" acceptCharset="UTF-8" method="post">
        <input name="utf8" type="hidden" value="✓" />
        <input type="hidden" name="authenticity_token" value="AOqjzDi8NNsrVV2e1/t1OWGnO5SbsEfazP/N911Xef0VuBBexJ6oSDBu5f1g8P0gCFY4/6ffye9HDuEGuEOheA==" />


        <h2 className="form-signin-heading">Please sign in</h2>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>

        <input type="email" id="inputEmail" className="form-control" value={this.state.value} onChange={this.handleChange} name="user[email]" placeholder="Email address" autoFocus={focus} />

        <label htmlFor="inputPassword" className="sr-only">Password</label>

        <input type="password" id="inputPassword" className="form-control" placeholder="Password"  name ="user[password]" autoComplete="off" required />

        <div className="checkbox">
          <label>
            <input name="user[remember_me]" type="hidden" value="0" />
            <input type="checkbox" value="1" name="user[remember_me]" id="user_remember_me" /> Remember me
          </label>
        </div>

        <button className="btn btn-lg btn-primary btn-block" type="submit" name="commit" value="Sign in" data-disable-with="Sign in">Sign in</button>
      </form>

    );
  }
}

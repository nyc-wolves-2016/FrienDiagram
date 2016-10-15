class Venue extends React.Component {
  render () {
    const { venue } = this.props
    return (
      <div className="venue">
        <VenueQuickView venue={venue}/>
        <VenueChoice />
      </div>
    )
  }
}

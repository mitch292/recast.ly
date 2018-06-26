class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        videos: exampleVideoData,
        video: exampleVideoData[0]
      }
      this.onVideoClick = this.onVideoClick.bind(this)
      this.setState = this.setState.bind(this)
    }


  onVideoClick(video) {
    this.setState({
      video: video,
      videos: this.state.videos
    })
  }

  render() {
    return ( <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search newState={this.setState}/>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={this.state.video}/> 
      </div>
      <div className="col-md-5">
         <VideoList onVideoClick={this.onVideoClick} videos={this.state.videos} />
      </div>
    </div>
  </div>
    )}
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

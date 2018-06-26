class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        videos: window.exampleVideoData,
        video: window.exampleVideoData[0]
      }
      this.onVideoClick = this.onVideoClick.bind(this)
    }


  onVideoClick(video) {
    console.log("video we are passing ", video)
    this.setState({
      videos: window.exampleVideoData,
      video: video
    })
  }

  render() {
    return ( <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
    
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

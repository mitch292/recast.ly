// var Search = () => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div> 
// );

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ''
    }
  }
  render() {
    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        this.setState({
          userInput: ''
        })
        searchYouTube({
          maxResults: '5',
          part: 'snippet',
          q: this.state.userInput,
          type: 'video',
          key: window.YOUTUBE_API_KEY

        }, (data) => {
          this.props.newState({
            video: data.items[0],
            videos: data.items
          })

        })
      }
      } >
      <input
        type="text"
        value={this.state.userInput}
        onChange={(event) => {
          let newSearch = event.target.value
          this.setState({
            userInput: newSearch
          })
        }} 
      />
      <button type="submit">Search</button>
      <pre>{this.state.userInput}</pre>
    </form>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = SearchForm;

// RenderDOM(<SearchForm />, document.getElementByClass('navbar'))

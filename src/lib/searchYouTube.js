var searchYouTube = (options, callback) => {
  console.log('call back in the searchYoutube file', callback)
  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search",
    type: "GET",
    key: window.YOUTUBE_API_KEY,
    data: options,
    success: (data) => callback(data),
    error: (data) => (console.log(data))
    

  })
};

window.searchYouTube = searchYouTube;

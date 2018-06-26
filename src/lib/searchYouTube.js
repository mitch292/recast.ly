var searchYouTube = (options, callback) => {
  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search",
    type: "GET",
    data: JSON.stringify(options),
    success: (data) => callback(data),
    error: (data) => callback(data)
    

  })
};

window.searchYouTube = searchYouTube;

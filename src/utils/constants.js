const GOOGLE_API_KEY = "AIzaSyDAuZS9bjjVeMiVvBWI-Spov_vvKk2ximU";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY + "&offset=" ;

export const SEARCH_VIDEO_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const OFFSET_LIVE_CHAT = 25

export function filterData(searchQuery, videos) {
  console.log("videos1111", videos)
  const filterData = videos.filter((video) =>
    // console.log("vinits",video.snippet.title.toLowerCase().includes(searchQuery?.toLowerCase()))
    video.snippet.title.toLowerCase().includes(searchQuery?.toLowerCase())
  );
  console.log("Hey",filterData);
  return filterData
}
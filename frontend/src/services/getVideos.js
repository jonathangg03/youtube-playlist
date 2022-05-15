const getVideos = async ({ q, maxResults, pageToken = '' }) => {
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?type=video&key=${process.env.YT_API_KEY}&q=${q}&maxResults=${maxResults}&pageToken=${pageToken}&part=snippet`
    )
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}

export default getVideos

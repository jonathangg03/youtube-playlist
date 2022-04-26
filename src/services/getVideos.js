const getVideos = async ({ q, maxResults }) => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?type=video&key=${process.env.YT_API_KEY}&q=${q}&maxResults=${maxResults}`
  )
  const data = await response.json()
  return data.items
}

export default getVideos

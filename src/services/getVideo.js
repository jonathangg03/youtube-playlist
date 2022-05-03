const getVideo = async ({ id }) => {
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?key=${process.env.YT_API_KEY}&id=${id}&part=snippet`
    )
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    return error
  }
}

export default getVideo

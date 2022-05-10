const initialState = {
  findedVideos: [],
  serch: { query: '', maxResults: 1, nextPageToken: '' },
  playlistVideos: []
}

const types = {
  SET_SEARCH_VIDEOS: 'set_search_videos',
  SET_PLAYLIST_VIDEOS: 'set_playlist_videos',
  CHANGE_SEARCH_SETTING: 'change_search_settings'
}

const videosReducer = (state, actions) => {
  switch (actions.type) {
    default:
      return state
  }
}

export { initialState, types }
export default videosReducer

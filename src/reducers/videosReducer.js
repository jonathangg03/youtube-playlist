const initialState = {
  findedVideos: [],
  search: { query: '', maxResults: 1, nextPageToken: '' },
  playlistVideos: []
}

const types = {
  SET_FINDED_VIDEOS: 'set_search_videos',
  SET_PLAYLIST_VIDEOS: 'set_playlist_videos',
  SET_SEARCH_QUERY: 'change_search_query',
  SET_SEARCH_MAX: 'change_search_max'
}

const videosReducer = (state, actions) => {
  switch (actions.type) {
    case types.SET_SEARCH_QUERY:
      return {
        ...state,
        search: { ...state.search, query: actions.payload }
      }
    case types.SET_SEARCH_MAX:
      return {
        ...state,
        search: { ...state.search, maxResults: actions.payload }
      }
    case types.SET_FINDED_VIDEOS:
      return {
        ...state,
        search: {
          ...state.search,
          nextPageToken: actions.payload.nextPageToken
        },
        findedVideos: actions.payload.findedVideos
      }
    default:
      return state
  }
}

export { initialState, types }
export default videosReducer

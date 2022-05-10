const initialState = {
  findedVideos: [],
  search: { query: '', maxResults: 1, nextPageToken: '' },
  playlistVideos: []
}

const types = {
  SET_FINDED_VIDEOS: 'set_search_videos',
  ADD_FINDED_VIDEOS: 'add_finded_videos',
  DELETE_FINDED_VIDEO: 'delete_finded_video',
  ADD_PLAYLIST_VIDEO: 'add_playlist_video',
  SET_PLAYLIST_VIDEOS: 'set_playlist_videos',
  SET_SEARCH_QUERY: 'change_search_query',
  SET_SEARCH_MAX: 'change_search_max',
  SET_SEARCH_NEXT_PAGE: 'change_search_next_page'
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
    case types.SET_SEARCH_NEXT_PAGE:
      return {
        ...state,
        search: { ...state.search, nextPageToken: actions.payload }
      }
    case types.SET_FINDED_VIDEOS:
      return {
        ...state,
        findedVideos: actions.payload
      }
    case types.ADD_FINDED_VIDEOS:
      return {
        ...state,
        findedVideos: [...state.findedVideos, ...actions.payload]
      }
    case types.DELETE_FINDED_VIDEO:
      return {
        ...state,
        findedVideos: actions.payload
      }
    case types.ADD_PLAYLIST_VIDEO:
      return {
        ...state,
        playlistVideos: [...state.playlistVideos, actions.payload]
      }
    case types.SET_PLAYLIST_VIDEOS:
      return {
        ...state,
        playlistVideos: actions.payload
      }
    default:
      return state
  }
}

export { initialState, types }
export default videosReducer

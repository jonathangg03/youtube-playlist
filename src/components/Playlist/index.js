import { useContext, useEffect, useState } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import getVideo from '../../services/getVideo'
import {
  PlayListContainer,
  CardContainer,
  CardContent,
  CardDescription,
  CardImage,
  CardTitle,
  DropTitle
} from './styles'
import searchContext from '../../Context/searchContext'

const PlayList = () => {
  const { playlistVideos } = useContext(searchContext)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    if (playlistVideos.length > 0) {
      const fetchVideo = async () => {
        const result = await getVideo({
          id: playlistVideos[playlistVideos.length - 1]
        })
        setVideos((prev) => prev.concat(result.items[0]))
      }
      fetchVideo()
    }
  }, [playlistVideos.length])

  return (
    <Droppable droppableId='playlist'>
      {(provided) => {
        return (
          <PlayListContainer
            videos={videos.length > 0}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {videos &&
              videos.map((item, index) => {
                return (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => {
                      return (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <CardContainer>
                            <CardImage
                              src={item.snippet.thumbnails.medium.url}
                              id={item.id}
                            ></CardImage>
                            <CardContent>
                              <CardTitle>{item.snippet.title}</CardTitle>
                              <CardDescription>
                                {item.snippet.description}
                              </CardDescription>
                            </CardContent>
                          </CardContainer>
                        </li>
                      )
                    }}
                  </Draggable>
                )
              })}
            {provided.placeholder}
            {!videos.length && (
              <DropTitle>
                Arrastra hasta aquí los videos que quieras ver
              </DropTitle>
            )}
          </PlayListContainer>
        )
      }}
    </Droppable>
  )
}

export default PlayList

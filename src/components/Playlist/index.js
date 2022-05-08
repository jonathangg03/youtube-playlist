import { useContext, useEffect, useState } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import getVideo from '../../services/getVideo'
import {
  PlayListContainer,
  CardContainer,
  CardContent,
  CardDescription,
  DndIcon,
  CardImage,
  CardTitle
} from './styles'
import searchContext from '../../Context/searchContext'
import dnd from '../../../public/dnd.png'

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
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {playlistVideos.map((item, index) => {
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
                            iframe
                            src={`https://www.youtube.com/embed/${item.id}`}
                            title='YouTube video player'
                            frameborder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowfullscreen
                          ></CardImage>
                          <CardContent>
                            <DndIcon src={dnd} />
                          </CardContent>
                        </CardContainer>
                      </li>
                    )
                  }}
                </Draggable>
              )
            })}
            {provided.placeholder}
          </PlayListContainer>
        )
      }}
    </Droppable>
  )
}

export default PlayList

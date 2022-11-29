import './board.css'
import BoxLayout from './Layouts/BoxLayout'

const Board = () => {
  return (
    <div className='board'>
      <BoxLayout
        title="Spotify Playlists"
      />
      <BoxLayout
        title="Uniquely Yours"
      />
      <BoxLayout
        title="Focous"
      />
      <BoxLayout
        title="Mood"
      />
      <BoxLayout
        title="Popular Releases"
      />
    </div>
  )
}

export default Board
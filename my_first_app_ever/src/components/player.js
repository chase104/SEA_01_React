
const Player = (props) => {


let finalName = props.playerName + " is awesome!"

// :'(  JS alrady has a "class" keyword

  return (
    <div className="player">
        <h2>Player {finalName}</h2>
        <h3>Wins: 0</h3>
    </div>
  )
}

export default Player
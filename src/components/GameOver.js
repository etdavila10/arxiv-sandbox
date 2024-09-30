
const GameOver = (props) => {
  return (
    <div className="content">
      <h1 id="incorrect">Game Over!</h1>
      { props.currScore > props.bestScore
        ? <div><div id = "emphasis">New Best!</div> <div id = "scores">Your Score: {props.currScore}</div> </div>
        : <div><div id = "scores" >Best Score: {props.bestScore}</div><div id = "scores">Your Score: {props.currScore}</div></div>}

      <div  className="article-containers">
        <div  className={props.newerArticle === 1 ? "article-entry" : "article-entry old"} onClick={() => {props.openArticle(props.article1.id)}} >
          <h2>Title: {props.article1.title}</h2>
          <h2>Date: {props.article1.published.substring(0,10)}</h2>
        </div>
        <div className={props.newerArticle === 1 ? "article-entry old" : "article-entry"} onClick={() => {props.openArticle(props.article2.id)}}>
          <h2>Title: {props.article2.title}</h2>
          <h2>Date: {props.article2.published.substring(0,10)}</h2>
        </div>
      </div>
      <button onClick={props.beginGame}>Start a new game?</button>
    </div>
  )
};

export default GameOver;
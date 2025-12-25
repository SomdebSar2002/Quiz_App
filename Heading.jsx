import blob1 from "./blob_1.png"
import blob2 from "./blob_2.png"


export default function Heading(prop) {
    return (<header>
        <img className="blob2" src={blob1}/>
        <h1>Quizzical</h1>
        <p>Your own quiz game</p>
        <button id="game-start" onClick={prop.ok}>Start quiz</button>
        <img className="blob1" src={blob2}/>
    </header>)
}

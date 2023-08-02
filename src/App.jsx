import data from "./data.json"

import light from "./assets/754681.jpg"
import dark from "./assets/754648.jpg"

function App() {
  return (
    <div>
      {data.map((character, i) => (
        <div
          key={character.name}
          style={{
            background: `url('${i % 2 === 0 ? dark : light}')`,
            height: "25rem",
            width: "25rem",
            backgroundSize: "cover",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <p style={{ fontSize: "2rem", fontStyle: "bolder" }}>
            {character.name}
          </p>
          <img
            src={`/img/${character.img}`}
            alt={character.name}
            style={{ height: "75%" }}
          />
        </div>
      ))}
    </div>
  )
}

export default App

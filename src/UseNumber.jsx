import { useState } from "react"

const Usenumber = () => {

const [value, setValue] = useState(0)

const reset = () => {
    setValue(0)
}

  return (
    <div>
        <section style={{margin: '4rem 0'}}>
              <h6>Ass 2</h6>
             <h3>Regular Counter</h3>
            <h2>{value}</h2>
            <button className="btn" onClick={() => setValue(value - 1)}>Decrease</button>
            <button className="btn" onClick={reset}>Reset</button>
            <button className="btn" onClick={() => setValue(value + 1)}>Increase</button>
        </section>
    </div>
  )
}

export default Usenumber

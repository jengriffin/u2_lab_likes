import { useState } from 'react'

const Likes = (props) => {
  let [totalLikes, setBalance] = useState(0)

  const handleClick = (event) => {
    event.preventDefault()

    setBalance(totalLikes + 1)
  }
  const withdraw = (event) => {
    event.preventDefault()
    setBalance(totalLikes - 1)
  }

  let balanceClass = 'balance'
  // if (balance <= 0) {
  //   balanceClass += ' zero'
  // }

  return (
    <div className="account">
      <div className={balanceClass}>{totalLikes}</div>
      <br />
      <div>
        <br />
        <br />
        <input className="btn" type="submit" value="+" onClick={handleClick} />
      </div>
      <div>
        <input className="btn" type="submit" value="-" onClick={withdraw} />
      </div>
    </div>
  )
}

export default Likes

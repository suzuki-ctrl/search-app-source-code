import { CardType } from "../types/CardType"
import { FC } from "react"
import "./Card.css"

const Card: FC<CardType> = ({ name , email }) => {
  return (
    <div className="one-card">
        <p>NAME: {name}</p>
        <hr />
        <p className="email">EMAIL: {email}</p>
    </div>
  )
}

export default Card
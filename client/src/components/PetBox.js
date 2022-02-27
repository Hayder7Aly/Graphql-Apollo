import React from 'react'

const dog = "https://i.pinimg.com/originals/cd/00/e2/cd00e28680693cc603bad7472d1bf8b1.jpg"
const cat = "https://i.ytimg.com/vi/KR9kjuuxRO0/maxresdefault.jpg"
const PetBox = ({pet}) => (
  <div className="pet">
    <figure> 
      <img src={pet.type === "DOG" ? dog : cat} alt=""/>
    </figure>
    <div className="pet-name">{pet.name}</div>
    <div className="pet-type">{pet.type}</div>
  </div>
)

export default PetBox

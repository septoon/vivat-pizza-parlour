import React from 'react'

const TeaCard = ({ teaCardPage }) => {
  return (
    <div>
        <h1>Черный чай</h1>
      {teaCardPage.teaCardData.black.map(c => <div key={c.id} >
        <div>
          <h3>{c.title}</h3>
          <span>{c.description}</span>
        </div>
      </div>
      )}
      <h1>Зеленый чай</h1>
      {teaCardPage.teaCardData.green.map(c => <div key={c.id} >
        <div>
          <h3>{c.title}</h3>
          <span>{c.description}</span>
        </div>
      </div>
      )}
    </div>
  )
}

export default TeaCard
import React from 'react'
import classes from './TeaCard.module.css'

const TeaCard = ({ teaCardPage }) => {
  return (
    <div className={classes.teaCard_wrapper}>
        <h1 className={classes.teaCard_title} >Черный чай</h1>
      <div className={classes.card_wrap} >
        {teaCardPage.teaCardData.black
        .map(c => <div key={c.id} className={classes.card_item} >
          <h3>{c.title}</h3>
          <span>{c.description}</span>
        </div>
        )}
      </div>
        <h1 className={classes.teaCard_title} >Зеленый чай</h1>
      <div className={classes.card_wrap} >
        {teaCardPage.teaCardData.green
        .map(c => <div key={c.id} className={classes.card_item} >
          <h3>{c.title}</h3>
          <span>{c.description}</span>
      </div>
      )}
        </div>
    </div>
  )
}

export default TeaCard
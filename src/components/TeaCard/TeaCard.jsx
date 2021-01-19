import React from 'react'
import classes from './TeaCard.module.css'

const TeaCard = ({ teaCardPage }) => {
  const cardData = teaCardPage.teaCardData
  const cardDataKeys = Object.keys(cardData)
  return (
    <div className={classes.teaCard_wrapper}>
      {cardDataKeys.map(c => <div className={classes.card_wrap}>
        {
          cardData[c]
          .map(el => <div className={classes.card_item}>
            <h1 className={classes.teaCard_title}>{el.header}</h1>
            <h3>{el.title}</h3>
            <span>{el.description}</span>
          </div>
          )
        }
      </div> )}
    </div>
  )
}

export default TeaCard

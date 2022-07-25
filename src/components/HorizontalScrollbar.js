import React, { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { Box, Typography } from '@mui/material'
import ExerciseCard from './ExerciseCard'
// import ExerciseCard from "./ExerciseCard";
import BodyPart from './BodyPart'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'

const LeftArrow = () => {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleItemsWithoutSeparators,
    initComplete
  } = React.useContext(VisibilityContext)

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  )
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible)
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators])

  return (
    <Typography
      disabled={disabled}
      onClick={() => scrollPrev()}
      className='right-arrow'
    >
      <img src={LeftArrowIcon} alt='left-arrow' />
    </Typography>
  )
}

const RightArrow = () => {
  const {
    isLastItemVisible,
    scrollNext,
    visibleItemsWithoutSeparators
  } = React.useContext(VisibilityContext)

  // console.log({ isLastItemVisible });
  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  )
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible)
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators])

  return (
    <Typography
      disabled={disabled}
      onClick={() => scrollNext()}
      className='left-arrow'
    >
      <img src={RightArrowIcon} alt='right-arrow' />
    </Typography>
  )
}

const HorizontalScrollbar = ({ data, isBodyParts, setBodyPart, bodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
      {' '}
      {data.map(item => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
		  m='0 40px'
			  
        >
          {isBodyParts?<BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item}/>}
        </Box>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar

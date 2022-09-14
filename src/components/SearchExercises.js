import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({ setExercises, setBodyPart, bodyPart }) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      )
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExerciseData()
  }, [])

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      )
      const searchedExercises = exerciseData.filter(
        exercise =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      )
      // setSearch('')
      setExercises(searchedExercises)
    }
  }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography
        mb='50px'
        textAlign='center'
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' }, zIndex: '200' }}
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          height='76px'
          value={search}
          onChange={e => {
            setSearch(e.target.value.toLowerCase())
            if (search.length === 3) handleSearch()
          }}
          type='text'
          placeholder='Search ...'
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: '60vw',
            borderRadius: '40px',
            backgroundColor: '#fff',
            transform: 'translate(-8vw, 0)'
          }}
        />
        <Button
          className='search-btn'
          onClick={handleSearch}
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: '16vw',
            height: '56px',
            fontSize: '2vw',
            position: 'absolute',
            transform: 'translate(-8vw, 0)'
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises

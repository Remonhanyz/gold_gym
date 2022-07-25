import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Stack, Typography} from '@mui/material'

const ExerciseCard = ({exercise}) => {
  return (
		<Link to={`/exercise/${exercise.id}`} className="exercise-card">
			<img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
			<Stack direction="row">
				<Button
					sx={{
						ml: "21px",
						color: "#fff",
						background: "#ffa9a9",
						fontSize: "14px",
						borderRadius: "20px",
						textTransform: "capitalize"
					}}
					className="exercise-btn-red"
				>
					{exercise.bodyPart}
				</Button>
				<Button
					sx={{
						ml: "21px",
						color: "#fff",
						background: "#fcc757",
						fontSize: "14px",
						borderRadius: "20px",
						textTransform: "capitalize"
					}}
					className="exercise-btn-yellow"
				>
					{exercise.target}
				</Button>
			</Stack>
			<Typography
				ml="21px"
				color="#000"
				fontWeight="bold"
				mt="11px"
				mb="10px"
				textTransform="capitalize"
				sx={{fontSize: {md: "24px", xs: "20px"}}}
			>
				{exercise.name}
			</Typography>
		</Link>
  );
}

export default ExerciseCard
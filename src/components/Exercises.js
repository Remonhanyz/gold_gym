import React, {useEffect, useState} from "react";
import Pagination from "@mui/material/Pagination";
import {Box, Stack, Typography} from "@mui/material/";
import {exerciseOptions, fetchData} from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({setExercises, bodyPart, exercises}) => {
	const [currentPage, setCurrentPage] = useState(1);
	const exercisesPerPage = 9;
	const indexOfLastExercise = currentPage * exercisesPerPage;
	const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
	const currentExercises = exercises.slice(
		indexOfFirstExercise,
		indexOfLastExercise
	);

	const paginate = (e, value) => {
		setCurrentPage(value);
		window.scrollTo({top: 1800, behavior: "smooth"});
	};
	useEffect(() => {
		const fetchExercisesData = async () => {
			let exercisesData = [];

			if (bodyPart === "all") {
				exercisesData = await fetchData(
					"https://exercisedb.p.rapidapi.com/exercises",
					exerciseOptions
				);
			} else {
				exercisesData = await fetchData(
					`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
					exerciseOptions
				);
			}
			setExercises(exercisesData);
		};
		fetchExercisesData();
  }, [ bodyPart ]);
  
	return (
		<Box id="exercises" sx={{mt: {md: "110px"}}} mt="40px" p="20px">
			<Typography
				variant="h4"
				fontWeight="bold"
				sx={{fontSize: {md: "44px", xs: "30px"}}}
				mb="60px"
				align="center"
			>
				Showing Results
			</Typography>
			<Stack
				direction="row"
				sx={{gap: {md: "107px", xs: "50px"}}}
				flexWrap="wrap"
				justifyContent="center"
			>
				{currentExercises.map((exercise, index) => (
					<ExerciseCard key={index} exercise={exercise} />
				))}
			</Stack>
			<Stack sx={{mt: {md: "100px", xs: "70px"}}} alignItems="center">
				{exercises.length > exercisesPerPage && (
					<Pagination
						color="standard"
						shape="rounded"
						defaultPage={1}
						count={Math.ceil(exercises.length / exercisesPerPage)}
						size="large"
						onChange={paginate}
						page={currentPage}
					/>
				)}
			</Stack>
		</Box>
	);
};

export default Exercises;

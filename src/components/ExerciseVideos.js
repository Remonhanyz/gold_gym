import React from 'react'
import {Box, Typography, Grid } from '@mui/material'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import {CardActionArea} from "@mui/material";
import Loader from './Loader'

const ExerciseVideos = ({exerciseVideos, name}) => {
  return (
		<Box sx={{marginTop: {md: "200px", xs: "20px"}}} p="20px">
			<Typography
				sx={{fontSize: {md: "44px", xs: "25px"}}}
				fontWeight={700}
				color="#000"
				mb="33px"
			>
				Watch{" "}
				<span style={{color: "#ff2625", textTransform: "capitalize"}}>
					{name}
				</span>{" "}
				exercise videos
			</Typography>
			<Grid container sx={{gap: '50px'}} justifyContent="space-evenly">
				{exerciseVideos.length ? (
					exerciseVideos.slice(0, 4).map((item, index) => (
						<Grid item xs={11} component={Card} sx={{										background: "#FBEAC6",
										boxShadow:
											"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",     margin: '16',gap: '24px',
    display: "flex",
	maxWidth: {md: '30%', xs: '100%'},
    flexDirection: "column",
    justifyContent: "space-between"
}}>
	<CardActionArea>
							<a
								key={index}
								className="exercise-video"
								href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
								target="_blank"
								rel="noreferrer"
							>
										<CardMedia
											component="img"
											image={item.video.thumbnails[0].url}
											alt={item.video.title}
										/>

										<CardContent>
											<Typography
												sx={{fontSize: {md: "20px", xs: "18px"}}}
												fontWeight={600}
												color="#000"
											>
												{item.video.title}
											</Typography>
											<Typography fontSize="14px" color="#000">
												{item.video.channelName}
											</Typography>
										</CardContent>
							</a>
									</CardActionArea>
						</Grid>
					))
				) : (
					<Loader />
				)}
			</Grid>
		</Box>
  );
}

export default ExerciseVideos
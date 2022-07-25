import React from "react";
import {Box, Typography, Button} from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
	return (
		<Box
			sx={{mt: {md: "212px", xs: "70px"}, ml: {sm: "50px"}}}
			position="relative"
			p="20px"
		>
			<Typography color="#FF2625" fontWeight="600" fontSize="26px" sx={{textAlign: {md:'left', xs:'center'}, transform: {md:'translate(0%,0%)', xs:'translate(-6%, -50%)'}}}>
				Fitness Club
			</Typography>
			<Typography
				mb="23px"
				fontWeight="700"
				sx={{fontSize: {lg: "44px", xs: "40px"}, textAlign: {md:'left', xs:'center'}, transform: {md:'translate(0%,0%)', xs:'translate(-6%, -20%)'}}}
			>
				Sweat, Smile <br /> And Repeate
			</Typography>
			<Typography fontSize="22px" lineheight="35px" mb={4} sx={{textAlign: {md:'left', xs:'center'}, transform: {md:'translate(0%,0%)', xs:'translate(-6%, -20%)'}}}>
				Check out the most effective <br /> exercises
			</Typography>
			<Button
				variant="contained"
				color="error"
				href="#exercises"
				sx={{backgroundColor: "#ff2625", padding: "10px", left: {md:'0', xs:'50%'}, transform: {md:'translate(0%,0%)', xs:'translate(-72%, -50%)'}}}
			>
				Explore Exercises
			</Button>
			<Typography
				fontWeight={600}
				color="#FF2625"
				fontSize="200px"
				sx={{opacity: 0.1, display: {md: "block", xs: "none"}}}
			>
				Exercise
			</Typography>
			<Box sx={{display: {md: "block", xs: "none"}, }}>
				<img
					src={HeroBannerImage}
					alt="banner"
					className="hero-banner-img"
				/>
			</Box>
		</Box>
	);
};

export default HeroBanner;

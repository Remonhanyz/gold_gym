export const exerciseOptions = {
	method: "GET",
	// url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
	headers: {
		"X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
	}
};

export const fetchData = async (url, options) => {
	const response = await fetch(url, options);
	return await response.json();
};

const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=fishermans%20wharf&language=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f9ebacc865msh48fe3f3f3d4cebfp1f7cf8jsna9ae518bde11',
		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
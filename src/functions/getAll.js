import get from "@/functions/get";

const getAll = async () => {
	const tables = ['A', 'B'];
	const resultsPromises = await Promise.all(tables.map(table => get(table)));
	const results = await Promise.all(resultsPromises.map(el => el.json()));
	const allRates = results.reduce((accumulator, element) => [...accumulator, ...element[0].rates] ,[]);
	return allRates;
};

export default getAll;
import getAll from "@/functions/getAll";
import get from "@/functions/get";

describe('[GET ALL]', () => {
	it('Should fetch fetch all tables', async () => {
		const resA = await get('A');
		const resB = await get('B');

		const [dataA] = await resA.json();
		const [dataB] = await resB.json();
		const allRates = [...dataA.rates, ...dataB.rates];

		const resGetAll = await getAll();

		expect(allRates.length).toBe(resGetAll.length);
		expect(allRates.map(({currency}) => currency).every(e => resGetAll.map(({currency}) => currency).includes(e))).toBeTruthy()
	});
})

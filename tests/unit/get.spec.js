import get from "@/functions/get";

describe('[GET]', () => {
	it('Should fetch data without error', async () => {
		const res = await get();
		const result = await res.json();
		expect(result[0].table).toBe('A')
		expect(res.status).toBe(200)
	});

	it('Should fetch table B', async () => {
		const res = await get('B');
		const result = await res.json();
		expect(result[0].table).toBe('B')
		expect(res.status).toBe(200)
	});


	it('Should return courses', async () => {
		const res = await get();
		const result = await res.json();
		expect(result[0].rates.length).toBe(35)
	});
})

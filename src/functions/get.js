import fetch from "node-fetch";

const get = (table = 'A') => fetch(`http://api.nbp.pl/api/exchangerates/tables/${table}/`, {
		headers: {
			'Accept': 'application/json'
		}
	});

export default get
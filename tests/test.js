const test = require('ava');

const { default: a } = require('../dist/index');

test('logout', async (t) => {
	const sessionid = '00baff07-33fa-4766-af39-8d1d864bf262';
	await a(sessionid);
	t.pass();
});

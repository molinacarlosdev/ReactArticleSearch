const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('HOME PAGE');
});
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

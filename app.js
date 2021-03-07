const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;


app.set('views', 'src');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
	res.render('index');
})

app.listen(port, () => {
	console.log(`Server running at port ${port}`);
})
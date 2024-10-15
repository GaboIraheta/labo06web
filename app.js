const express = require('express');
const userRouter = require('./src/routes/user.route');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.urlencoded({ extended: true}));
app.use(userRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
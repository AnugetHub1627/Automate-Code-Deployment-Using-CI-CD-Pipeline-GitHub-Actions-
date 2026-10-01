#testi
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>yessss...! My CI/CD Pipeline is working perfectly... Thank you Elevate labs...!</h1>');
});

const server = app.listen(PORT, () => {
    console.log(`Server is successfully running on port ${PORT}`);
});

module.exports = server; // Exported so our automated test script can access it

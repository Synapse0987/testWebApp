const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('dist'))

// Define a route for the root URL
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

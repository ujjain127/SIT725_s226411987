const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Addition
app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.send("Please provide valid numbers. Example: /add?a=5&b=10");
    }

    const sum = a + b;
    res.send(`The sum of ${a} and ${b} is: ${sum}`);
});

// Subtraction
app.get('/subtract', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.send("Please provide valid numbers. Example: /subtract?a=10&b=5");
    }

    const difference = a - b;
    res.send(`The difference between ${a} and ${b} is: ${difference}`);
});

// Multiplication
app.get('/multiply', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.send("Please provide valid numbers. Example: /multiply?a=5&b=10");
    }

    const product = a * b;
    res.send(`The product of ${a} and ${b} is: ${product}`);
});

// Division
app.get('/divide', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.send("Please provide valid numbers. Example: /divide?a=10&b=2");
    }

    if (b === 0) {
        return res.send("Error: Division by zero is not allowed.");
    }

    const quotient = a / b;
    res.send(`The division of ${a} by ${b} is: ${quotient}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
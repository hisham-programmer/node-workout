import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

let users = [
    { id: 1, name: 'ramesh' },
    { id: 2, name: 'suresh' }
];

app.get('/users', (req, res) => {
    res.json({
        message: 'Users fetched successfully',
        users: users
    });
});
app.post('/users', (req, res) => {

    const newUser = {
        id: Date.now(),
        name: req.body.name
    };

    users.push(newUser);

    res.status(201).json({
        message: 'User added successfully',
        user: newUser
    });
});

app.put('/users/:id', (req, res) => {

    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: 'User not found'
        });
    }

    user.name = req.body.name;

    res.json({
        message: 'User updated successfully',
        user: user
    });
});

app.delete('/users/:id', (req, res) => {

    const id = Number(req.params.id);

    const userExists = users.some(user => user.id === id);

    if (!userExists) {
        return res.status(404).json({
            message: 'User not found'
        });
    }

    users = users.filter(user => user.id !== id);

    res.json({
        message: 'User deleted successfully'
    });
});


app.listen(5000, () => {
    console.log('Server running on port 5000');
});

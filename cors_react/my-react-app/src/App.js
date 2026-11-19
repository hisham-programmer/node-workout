
import React, { useEffect, useState } from 'react';

function App() {

    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');

    const API = 'http://localhost:5000/users';

    
    const getUsers = () => {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                setUsers(data.users);
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getUsers();
    }, []);

    const addUser = () => {

        if (!name.trim()) {
            alert('Please enter a name');
            return;
        }

        fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            setName('');
            getUsers();
        })
        .catch(error => console.log(error));
    };

    const updateUser = (id) => {

        const updatedName = prompt('Enter updated name:');

        if (!updatedName || !updatedName.trim()) {
            return;
        }

        fetch(`${API}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: updatedName })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            getUsers();
        })
        .catch(error => console.log(error));
    };

    const deleteUser = (id) => {

        fetch(`${API}/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            getUsers();
        })
        .catch(error => console.log(error));
    };

    return (
        <div>
            <h1>React + Node.js CRUD Operations</h1>

            <input
                type="text"
                placeholder="Enter user name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={addUser}>Add User</button>

            <h2>User List</h2>

            {users.map(user => (
                <div key={user.id}>
                    <span>{user.name}</span>

                    <button onClick={() => updateUser(user.id)}>
                        Edit
                    </button>

                    <button onClick={() => deleteUser(user.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default App;
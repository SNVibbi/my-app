import React from "react";


function App() {
    const users = [
        {
            name: "John Doe",
            bio: "I am a web developer",
            avatar: "https://images.unsplash.com/photo-1706885093487-7eda37b48a60?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Jane Doe",
            bio: "I am a web designer",
            avatar: "https://images.unsplash.com/photo-1706885093487-7eda37b48a60?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ];

    const usersList = users.map((user) => {
        return (
            <div>
                <img src={user.avatar} alt="Avatar" style={{ width: 100}} />
                <h3>{user.name}</h3>
                <p>{user.bio}</p>
            </div>
        );
    });

    return <section>{usersList}</section>
}

export default App;
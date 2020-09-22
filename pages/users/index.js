
import { useState, useEffect } from 'react';

const users = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [savedUser, setSavedUser] = useState();

    useEffect(() => {
       loadUsers();
       saveUser();
    }, []);

    const loadUsers = async () => {
        const response = await fetch('https://reqres.in/api/users'),
              jsonResp = await response.json();
        
        setIsLoading(false);
        setUsers(jsonResp.data);
    }

    const saveUser = async() => {
        const response = await fetch("https://reqres.in/api/users", { 
            method: "POST", 
            body: JSON.stringify({ 
                email: "novo_usuario@teste.com", 
                first_name: "Novo", 
                last_name: "Usuário adicionado",
                avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" 
            }), 
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            } 
        }),
        jsonResp = await response.json();
        
        setSavedUser(jsonResp);
    }

    return (
        <>
            { isLoading? (<p>Carregando...</p>):''}
            { users.map((user) => {
                return (
                    <div style={{ display: 'inline-block', padding: '30px' }} key={user.email}>
                        <img src={user.avatar}/>
                        <p>{user.email}</p>
                        <p>{user.first_name}</p>
                        <p>{user.last_name}</p>
                    </div> 
                )
            }) }
            {savedUser? (<div style={{ display: 'inline-block', padding: '30px' }}>
                <img src={savedUser.avatar}/>
                <p>{savedUser.email}</p>
                <p>{savedUser.first_name}</p>
                <p>{savedUser.last_name}</p>
            </div>):'' }
        </>
    )
}

export default users;
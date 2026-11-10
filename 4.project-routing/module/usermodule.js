import UserList from '../json/user.json' with {type:"json"}

export const getUsers = () => {
    return UserList
}

export const addUser = (user) => {
    
    UserList.push(user)
    return UserList
}
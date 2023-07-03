export const getSender = (users, loggedUser) => {

    console.log(users[0]._id === loggedUser._id ? users[1] : users[0])
    return users[0]._id === loggedUser._id ? users[1] : users[0]
}

export const getOnline = (items, onlineUsers, loggedUser) => {

    return (
        ( onlineUsers.some(ou => items.users.find(u => ou.userId === (u._id !== loggedUser._id ? u._id : ''))))
        ||
        ( onlineUsers.find((u) => u.userId === getSender(items.users, loggedUser)._id))
    )
}
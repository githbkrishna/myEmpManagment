const admin =[
    {
        "id": 1,
        "email": "a@a.com",
        "password":"123"
    }
]

export const setLocalStorage = () =>{
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () =>{
    const admin = JSON.parse(localStorage.getItem('admin'));
    return{admin}
}
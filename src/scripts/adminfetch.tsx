
/*
    These functions are used to test this
    app connection to a web server(nodejs)
 */
const getUser = async (url: string) => {
    if(url) {
        const response = await fetch(url,{
            method: 'GET',
            mode: 'cors',
        }).
        then((resp) => resp.text()).
        then(text => console.log(text))
    }
    else throw new Error('URL is undefined!')
}

const addUser = async (url: string) => {
    if(url) {
        const response = await fetch(url,{
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({name: "client-side"})
        }).
        then((resp) => console.log(resp.status))
    }
    else throw new Error('URL is undefined!')
}

export {getUser, addUser}
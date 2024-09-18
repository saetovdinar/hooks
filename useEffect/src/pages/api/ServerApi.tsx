import axios from 'axios';

export async function getList() {
    const response = await axios.get('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
    
    return response.data
}

export async function getItem(id: string) {
    const response = await axios.get(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
    
    return  response.data
}

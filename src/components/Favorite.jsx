import { add, remove } from '../store'

export default function({ name }) {
    return <button onClick={() => {
        console.log(`Adding ${name}!`)
        add(name)
    }}>Favorite</button>
}

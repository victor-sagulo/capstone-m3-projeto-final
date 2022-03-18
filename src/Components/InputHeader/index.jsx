import {FaSearch} from "react-icons/fa"
import { FancyForm } from "./style"
import {useContext, useState} from "react"
import { GamesContext } from "../../Providers/Games"

const InputHeader = () => {

    const {searchGame} = useContext(GamesContext)
    const [search,setSearch] = useState("")
    console.log(search)

    return(
        <FancyForm onSubmit={searchGame}>
                <div>
                    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    <button type="submit"><FaSearch className="search-icon"/></button>
                </div>
        </FancyForm>
    )
}

export default InputHeader
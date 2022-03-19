import {FaSearch} from "react-icons/fa"
import { FancyForm } from "./style"
import {useContext, useState} from "react"
import { GamesContext } from "../../Providers/Games"

const InputHeader = () => {

    const {searchGame} = useContext(GamesContext)
    const [search,setSearch] = useState("")

    return(
        <FancyForm onSubmit={(e)=>{e.preventDefault()
        searchGame(search)
        setSearch("")}}>
                <div>
                    <input type="text" value={search} placeholder="Pesquisar por jogos" onChange={(e)=>setSearch(e.target.value)}/>
                    <button type="submit"><FaSearch className="search-icon"/></button>
                </div>
        </FancyForm>
    )
}

export default InputHeader
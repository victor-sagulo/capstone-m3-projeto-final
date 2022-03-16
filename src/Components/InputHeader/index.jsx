import axios from "axios"
import {FaSearch} from "react-icons/fa"
import { FancyForm } from "./style"

const InputHeader = () => {


    return(
        <FancyForm>
                <div>
                    <input type="text" />
                    <button><FaSearch className="search-icon"/></button>
                </div>
        </FancyForm>
    )
}

export default InputHeader
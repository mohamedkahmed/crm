import { FaSearch } from "react-icons/fa";
import "./Searchbar.scss"
const Searchbar = () => {
  return (
    <div className='searchbar'>
                <input type="text" placeholder="البحث..."></input>
                        <FaSearch />
    </div>
  )
}

export default Searchbar
import {NavLink} from 'react-router-dom';
const Navbar=()=>{
return(
    <nav>
        <ul>    
            <li>
            <NavLink to="/new">Latest News 1</NavLink><br/>
            <NavLink to="/new2">Latest News 2</NavLink><br/>
            <NavLink to="/new3">Latest News 3</NavLink>
            </li>
        </ul>
    </nav>
)
}
export default Navbar;
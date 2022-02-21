import SideBar from "../sidebar/Sidebar";
import Search from './../search/Search';
import './body.css'

const Body = () => {
    return ( 
        <div className="body-container">
            <SideBar/>
            <Search/>
        </div>
     );
}
 
export default Body;
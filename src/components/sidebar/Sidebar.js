import './sidebar.css'
import { ReactComponent as SideBarIcon }  from '../../assets/icons/sidebar-icon.svg'
const SideBar = () => {
    return ( 
        <section className="sidebar">
            <div className="sidebar-item">
                <p>چارت سازمانی</p>
                <SideBarIcon/>
            </div>
        </section>
     );
}
 
export default SideBar;
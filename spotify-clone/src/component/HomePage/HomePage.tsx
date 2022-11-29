import Board from "../Board/Board"
import Header from "../Header/Header"
import SideBar from "../SideBar/SideBar"
import './homePage.css'

const HomePage = () => {
  return (
    <div className="mainLayout">
        <div className="sideBarContainer">
            <SideBar/>
        </div>
        <div className="dashboard">
            <Header/>
            <Board/>
        </div>
    </div>
  )
}

export default HomePage
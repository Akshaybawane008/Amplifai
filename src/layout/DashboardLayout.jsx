
import Sidebar from "../layout/Sidebar"
import Navbar from "../layout/Navbar"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">

      <Sidebar />

 
      <div className="flex flex-col flex-1">
        <Navbar />
   
        <main className="flex-1 p-0 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout


import Sidebar from "../layout/Sidebar"
import Navbar from "../layout/Navbar"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        <Navbar />
        
        {/* 👇 This is where child routes render */}
        <main className="flex-1 p-0 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout

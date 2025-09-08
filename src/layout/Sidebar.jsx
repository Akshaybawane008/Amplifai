import { BriefcaseBusiness, Database, LayoutDashboard, Settings, User } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function Sidebar() {
  const baseClasses = "hover:text-blue-400"
  const activeClasses = "text-blue-500"

  return (
    <div className="w-16 h-screen bg-gray-900 text-white flex flex-col items-center justify-between py-6">
      {/* Top Section */}
      <div className="flex flex-col items-center space-y-6">
        {/* ✅ Removed outer <Link> around logo */}
        <NavLink to="/dashboard">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRywKtfz_WFT5YNRetTSJc0D5ogtIS2y1Iro1ZmEUhLpM1KTVSA"
            alt="Auth illustration"
            className="w-10 h-10 object-cover rounded-full shadow-md"
          />
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : ""}`
          }
        >
          <LayoutDashboard size={25} />
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : ""}`
          }
        >
          <BriefcaseBusiness size={25} />
        </NavLink>

        <NavLink
          to="/database"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : ""}`
          }
        >
          <Database size={25} />
        </NavLink>

        <NavLink
          to="/setting"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : ""}`
          }
        >
          <Settings size={25} />
        </NavLink>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : ""}`
          }
        >
          <User size={25} />
        </NavLink>
      </div>
    </div>
  )
}

import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import {
  Home,
  Folder,
  User,
  Wrench,
  Twitter,
  Linkedin,
  Github
} from "lucide-react"

import DynamicRole from "../components/DynamicRole"
import profilePic from "../assets/profile.jpg"

const Sidebar = () => {

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Projects", path: "/projects", icon: Folder },
    { name: "About", path: "/about", icon: User },
    { name: "Tools", path: "/tools", icon: Wrench },
  ]

  return (
    <div
      className="
        w-72
        h-screen
        fixed
        flex flex-col
        bg-[#141414]
        border-r border-[#262626]
        p-6
        z-40
      "
    >

      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-12">

        <img
          src={profilePic}
          alt="Aman"
          className="
            w-12 h-12 rounded-full object-cover
            border border-[#262626]
            hover:scale-105 transition duration-300
          "
        />

        <div>
          <h2 className="font-semibold text-white">Abhigyan Prakash</h2>
          <DynamicRole />
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            to={item.path}
            text={item.name}
            Icon={item.icon}
          />
        ))}
      </nav>

      {/* Connect Section */}
      <div className="mt-16 text-sm text-gray-400">
        <p className="mb-3 text-gray-300 font-medium">Connect</p>

        <SocialItem
          icon={Twitter}
          text="X (Twitter)"
          url="https://twitter.com/yourusername"
        />

        <SocialItem
          icon={Linkedin}
          text="LinkedIn"
          url="https://linkedin.com/in/abhigyan"
        />

        <SocialItem
          icon={Github}
          text="Github"
          url="https://github.com/yourusername"
        />
      </div>

      

    </div>
  )
}

const NavItem = ({ to, text, Icon }) => {
  return (
    <NavLink to={to} className="relative block">
      {({ isActive }) => (
        <>
          {isActive && (
            <motion.div
              layoutId="activeIndicator"
              className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}

          <div
            className={`
              flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200
              ${
                isActive
                  ? "bg-white text-black"
                  : "text-gray-300 hover:bg-[#1f1f1f]"
              }
            `}
          >
            <Icon size={18} />
            {text}
          </div>
        </>
      )}
    </NavLink>
  )
}

const SocialItem = ({ icon: Icon, text, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center gap-3 mb-2
        hover:text-white hover:translate-x-1
        transition-all duration-200
      "
    >
      <Icon size={16} />
      <span>{text}</span>
    </a>
  )
}

export default Sidebar

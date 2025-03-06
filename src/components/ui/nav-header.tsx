
"use client"; 

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  
  const location = useLocation();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-sm"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {navLinks.map((link) => (
        <Tab 
          key={link.path} 
          setPosition={setPosition}
          isActive={location.pathname === link.path}
          to={link.path}
        >
          {link.name}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  isActive,
  to,
}: {
  children: React.ReactNode;
  setPosition: any;
  isActive: boolean;
  to: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white transition-colors md:px-4 md:py-2 md:text-sm ${
        isActive ? 'text-[#ffff33]' : 'hover:text-[#ffff33]'
      }`}
    >
      <Link to={to}>{children}</Link>
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-8 rounded-full bg-white/10 md:h-10"
    />
  );
};

export default NavHeader;


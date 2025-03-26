"use client";

import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SocialIcons } from "@/components/admin/SocialIcons";
import { FiMenu, FiX } from "react-icons/fi"; // تأكد من تثبيت react-icons

const navItems = [
  { title: "Home", href: "#home" },
  { title: "What I Provide", href: "#what-i-provide" },
  { title: "Skills", href: " #skills" },
  { title: "Projects", href: "#projects" },
];

export function NavigationHomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // اكتشاف حجم الشاشة
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (isOpen && isMobile) {
        const menu = document.querySelector(".mobile-menu");
        const toggleButton = document.querySelector(".menu-toggle");
        
        if (menu && !menu.contains(e.target as Node) ) {
          if (!toggleButton?.contains(e.target as Node)) {
            setIsOpen(false);
          }
        }
      }
    };

    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [isOpen, isMobile]);

  return (
    <div className="fixed w-full top-0 left-0 right-0 z-50 border-b  border-dark-input bg-dark-background/50 backdrop-blur-md">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* الجانب الأيسر: اللوغو والاسم */}
        <div className="flex items-center space-x-4">
  <div className="relative flex items-center justify-center w-14 h-14 group">
    {/* الخلفية الأساسية مع تأثير الليزر */}
    <div className="absolute inset-0 bg-gradient-to-tr from-[#000080] via-[#1a237e] to-[#000022] rounded-full shadow-[0_0_25px_-5px_rgba(0,0,128,0.3)] dark:shadow-[0_0_30px_-5px_rgba(218,165,32,0.4)] transition-all duration-500 group-hover:shadow-[0_0_35px_-5px_rgba(218,165,32,0.5)]" />
    
    {/* الطبقة الذهبية المتحركة */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-full opacity-80 mix-blend-overlay animate-glow transition-transform duration-700 group-hover:scale-105" />
    
    {/* الطبقة الزجاجية */}
    <div className="absolute inset-0 backdrop-blur-sm bg-white/5 dark:bg-black/5 rounded-full border border-[#D4AF37]/30 dark:border-[#000080]/50" />
    
    {/* الحرف مع تأثير النقش */}
    <span className="relative text-3xl font-bold bg-gradient-to-b from-[#FFD700] to-[#B8860B] bg-clip-text text-transparent   drop-shadow-[0_2px_4px_rgba(252, 185, 2, 0.5)]">
      A
    </span>
  </div>

  {/* الاسم مع تأثيرات متطابقة */}
  <div className="space-y-1">
    <h1 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#FFD700] bg-clip-text text-transparent">
      Abdalraheem
    </h1>
    <p className="text-sm font-medium  text-[#e9e4d5]/90">
    Front-End Developer 
    </p>
  </div>
</div>
        {/* الجانب الأيمن: القائمة والأيقونات (شاشات كبيرة) */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item ) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href}  legacyBehavior passHref>
                    <NavigationMenuLink 
                      className={navigationMenuTriggerStyle() + 
                        "  hover:bg-yellow-200  bg-yellow-500  text-dark-background  "}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <SocialIcons />
        </div>

        {/* قائمة الموبايل */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            className="menu-toggle p-2  text-dark-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* القائمة المنبثقة للموبايل */}
      {isOpen && isMobile && (
        <div className="mobile-menu absolute w-full  bg-dark-background  border-b  border-yellow-100 md:hidden">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium  text-yellow-100  hover:bg-dark-border/30 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="px-4 py-2">
              <SocialIcons />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
'use client'
import React from "react";

import { Icon } from '@iconify/react';

import { Canvas } from "@react-three/fiber/";
import NavLogo from "./navLogo";

import Link from 'next/link';
import { Flowbite, Navbar } from 'flowbite-react';

import { navLinks } from "../dataNav";

const customTheme = {
  navbar: {
    "root": {
      "base": "navBarTextBG",
      "rounded": {
        "on": "rounded",
        "off": ""
      },
      "bordered": {
        "on": "border",
        "off": ""
      },
      "inner": {
        "base": "mx-auto flex flex-wrap items-center justify-between",
        "fluid": {
          "on": "",
          "off": "container"
        }
      }
    },
    "brand": {
      "base": "flex items-center"
    },
    "collapse": {
      "base": "w-full md:block md:w-auto",
      "list": "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      "hidden": {
        "on": "hidden",
        "off": ""
      }
    },
    "link": {
      "base": "",
      "active": {
        "on": " text-white dark:text-white md:bg-transparent md:text-cyan-700",
        "off": "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
      },
      "disabled": {
        "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        "off": ""
      }
    },
    "toggle": {
      "base": "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
      "icon": "h-6 w-6 shrink-0"
    }
  }
};


function NavBar() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar className="sticky">
        <Navbar.Brand>
          <div className="navCanvas">
            <Canvas shadows >
              <NavLogo />
            </Canvas>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {navLinks.map((link, index) => {
            return (
              <ul key={"ulNav" + index} className="navbar-item">
                <Link href={link.path} className="navbar-link">
                  <Icon icon={link.icon} />{"  "}<span key={index}>{link.name}</span>
                </Link>
              </ul>
            );
          })}

          
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>

  );
}

export default NavBar;


/** 
 * 
      <nav className="sticky">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="navCanvas">
            <Canvas shadows >
              <NavLogo />
            </Canvas>
          </div>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navLinks.map((link, index) => {
                return (
                  <ul key={"ulNav" + index} className="navbar-item">
                    <Link href={link.path} className="navbar-link">
                      <Icon icon={link.icon} />{"  "}<span key={index}>{link.name}</span>
                    </Link>
                  </ul>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
*/
import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa"


const Footer = () => {
  return (
    <div>
      <div>
      <footer className="bg-gray-100 py-10 px-10 flex justify-around">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-2">
          
          <div>
            <h1 className="font-semibold text-xl">Core Courses</h1>
            <ul className="space-y-3 py-5">
              <li>Programming Fundamentals</li>
              <li>Web2 Using NextJS</li>
              <li>Earn as You Learn</li>
            </ul>
          </div>
          
          <div>
            <h1 className="font-semibold text-xl">Advanced Courses</h1>
            <ul className="space-y-3 py-5">
              <li>Web 3 and Metaverse</li>
              <li>Cloud-Native Computing</li>
              <li>Artificial Intelligence (AI) and Deep Learning</li>
              <li>Ambient Computing and IoT</li>
              <li>Genomics and Bioinformatics</li>
              <li>Network Programmability and Automation</li>
            </ul>
          </div>
          
          <div>
            <h1 className="font-semibold text-xl">Social Links</h1>
            <div className="flex space-x-4 py-5">
              <Link href="#" aria-label="Facebook" className="text-blue-700 hover:text-blue-500">
                <FaFacebookF size={20} />
              </Link>
              <Link href="#" aria-label="YouTube" className="text-red-600 hover:text-red-500">
                <FaYoutube size={20} />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-blue-400 hover:text-blue-300">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-pink-600 hover:text-pink-500">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" aria-label="TikTok" className="text-black hover:text-gray-700">
                <FaTiktok size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Footer

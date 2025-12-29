import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-bg">
      <div className="main_section text-text">
        <div className="grid gap-10 py-12 sm:grid-cols-2 md:grid-cols-4 text-center md:text-left">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold">Panto</h2>
            <p className="text-sm opacity-80">
              The advantage of hiring a workspace with us is that gives you
              comfortable service and all-around facilities.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-primary font-semibold">Services</h3>
            <a href="#" className="hover:text-primary">
              Email Marketing
            </a>
            <a href="#" className="hover:text-primary">
              Campaigns
            </a>
            <a href="#" className="hover:text-primary">
              Branding
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-primary font-semibold">Furniture</h3>
            <a href="#" className="hover:text-primary">
              Beds
            </a>
            <a href="#" className="hover:text-primary">
              Chair
            </a>
            <a href="#" className="hover:text-primary">
              All
            </a>
          </div>

          <div className="flex flex-col gap-3 items-center md:items-start">
            <h3 className="text-primary font-semibold">Follow Us</h3>

            <a className="flex items-center gap-2 hover:text-primary" href="#">
              <FaFacebookF /> Facebook
            </a>
            <a className="flex items-center gap-2 hover:text-primary" href="#">
              <LuInstagram /> Instagram
            </a>
            <a className="flex items-center gap-2 hover:text-primary" href="#">
              <FaTwitter /> Twitter
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 pb-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>Copyright © 2025 Panto</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import * as React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const AppFooterBottom: React.FC = () => {
  return (
    <div className="w-full flex flex-wrap gap-2 lg:gap-8 justify-between items-center pb-12 lg:pb-16 text-sm">
      <button className="flex gap-2 self-stretch my-auto rounded w-[111px] items-center hover:text-slate-700 transition-colors">
        <span>English (US)</span>
      </button>

      <div className="flex flex-wrap gap-2 lg:gap-8 self-stretch my-auto max-md:max-w-full">
        <nav className="flex flex-auto gap-6 items-center whitespace-nowrap">
          <a
            href="/terms"
            className="self-stretch my-auto hover:text-slate-700 transition-colors"
          >
            Terms
          </a>
          <a
            href="/privacy"
            className="self-stretch my-auto hover:text-slate-700 transition-colors"
          >
            Privacy
          </a>
          <a
            href="/security"
            className="self-stretch my-auto hover:text-slate-700 transition-colors"
          >
            Security
          </a>

          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full bg-violet-50">
              <FaFacebook className="text-2xl" />
            </a>

            <a href="#" className="p-2 rounded-full bg-violet-50">
              <FaInstagram className="text-2xl" />
            </a>

            <a href="#" className="p-2 rounded-full bg-violet-50">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </nav>
        <p className="flex gap-1 my-auto">
          <span>©</span>
          <span>2025</span>
          <span>Insight Board</span>
        </p>
      </div>
    </div>
  )
}

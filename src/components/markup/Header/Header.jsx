import React from 'react'

export default function Header() {
  return (
    <header>
      {/* Logo */}
      <div>
        <a href="./">Finance Ledger</a>
      </div>
      {/* Havigation */}
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cases</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>

  )
}

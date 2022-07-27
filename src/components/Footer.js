import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://rickypedia.space/">Aneesh</a>.
        </span>
      </div>
    </footer>
  </div>
)

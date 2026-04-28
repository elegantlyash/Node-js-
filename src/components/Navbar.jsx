import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

// Each link gets its own Christmas-light color (light color + dim color for flicker)
const links = [
  { to: '/',            label: 'Home',       lc: '#ffee00', ldc: '#998800' },
  { to: '/Bollywood',   label: 'Bollywood',  lc: '#ff4400', ldc: '#992200' },
  { to: '/Hollywood',   label: 'Hollywood',  lc: '#00ccff', ldc: '#006688' },
  { to: '/Technology',  label: 'Technology', lc: '#00ff44', ldc: '#008822' },
  { to: '/Food',        label: 'Food',       lc: '#ff00cc', ldc: '#880066' },
  { to: '/Fitness',     label: 'Fitness',    lc: '#ff6600', ldc: '#883300' },
]

const Navbar = () => {
  const location = useLocation()
  const navRef = useRef(null)
  const svgRef = useRef(null)

  // Draw the wire connecting all bulbs
  useEffect(() => {
    const drawWire = () => {
      if (!navRef.current || !svgRef.current) return
      const navRect = navRef.current.getBoundingClientRect()
      const bulbs = navRef.current.querySelectorAll('.bulb')
      const pts = []

      bulbs.forEach(b => {
        const r = b.getBoundingClientRect()
        pts.push(r.left - navRect.left + r.width / 2)
      })

      if (pts.length < 2) return

      // Slight sag curve between each bulb
      let d = `M ${pts[0]},3`
      for (let i = 1; i < pts.length; i++) {
        const mx = (pts[i - 1] + pts[i]) / 2
        d += ` Q ${mx},1 ${pts[i]},3`
      }

      svgRef.current.innerHTML = ''
      const ns = 'http://www.w3.org/2000/svg'

      const path = document.createElementNS(ns, 'path')
      path.setAttribute('d', d)
      path.setAttribute('fill', 'none')
      path.setAttribute('stroke', '#2a1a08')
      path.setAttribute('stroke-width', '1.5')
      svgRef.current.appendChild(path)

      pts.forEach(cx => {
        const c = document.createElementNS(ns, 'circle')
        c.setAttribute('cx', cx)
        c.setAttribute('cy', '3')
        c.setAttribute('r', '2')
        c.setAttribute('fill', '#1e1208')
        svgRef.current.appendChild(c)
      })
    }

    drawWire()
    window.addEventListener('resize', drawWire)
    return () => window.removeEventListener('resize', drawWire)
  }, [])

  return (
    <nav ref={navRef}>
      <svg ref={svgRef} className="wire-svg" />

      {links.map(({ to, label, lc, ldc }) => {
        const isActive = location.pathname === to
        return (
          <Link
            key={to}
            to={to}
            className={isActive ? 'active' : ''}
            style={{ '--lc': lc, '--ldc': ldc }}
          >
            <span className="divider" />

            {/* Colored glow wash on wall */}
            <span className="beam" style={{ background: lc }} />

            {/* Subtle background tint */}
            <span className="bg-fill" style={{ background: lc }} />

            {/* The bulb */}
            <span
              className="bulb"
              style={isActive ? {
                background: lc,
                boxShadow: `0 0 10px 5px ${lc}, 0 0 30px 10px ${lc}`
              } : {}}
            />

            <h3>{label}</h3>
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar
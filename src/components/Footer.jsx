import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import './components_css/Footer.css'
import logo from '../assets/tutoci_logo.png'

export default function Footer() {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
  
    if (!fullname.trim() || !email.trim()) {
      return window.Swal.fire({
        icon:  'error',
        title: 'Erreur',
        text:  'Tous les champs sont requis.'
      })
    }
  
    setLoading(true)
    try {
      const res = await axios.post('https://backend-tutoci.onrender.com/registering', { fullname, email })
  
      if (res.data.success) {
        window.Swal.fire({
          icon:  'success',
          title: '🎉 Succès',
          text:  res.data.message
        })
        setFullname('')
        setEmail('')
      } else {
        window.Swal.fire({
          icon:  'error',
          title: 'Erreur',
          text:  res.data.message
        })
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Une erreur est survenue. Veuillez réessayer.'
      window.Swal.fire({
        icon:  'error',
        title: 'Erreur',
        text:  msg
      })
    } finally {
      setLoading(false)
    }
  }
  

  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row">
          {/* Logo & description */}
          <div className="col-md-4 mb-4 mb-md-0">
            <Link to="/" className="footer-brand">
              <img src={logo} alt="Logo TutoCI" id="footer-logo" loading="lazy" />
            </Link>
            <p className="mt-3">
              La plateforme d'apprentissage en ligne leader en Côte d'Ivoire.
              Des milliers de tutoriels vidéo pour développer vos compétences.
            </p>
            <div className="social-icons">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="social-icon">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Catégories */}
          <div className="col-md-2 col-6 mb-4 mb-md-0">
            <h5>Catégories</h5>
            <ul className="list-unstyled">
              <li><Link to="/category/programmation">Programmation</Link></li>
              <li><Link to="/category/design">Design</Link></li>
              <li><Link to="/category/mathematiques">Mathématiques</Link></li>
              <li><Link to="/category/langues">Langues</Link></li>
              <li><Link to="/category/business">Business</Link></li>
            </ul>
          </div>

          {/* À propos */}
          <div className="col-md-2 col-6 mb-4 mb-md-0">
            <h5>tutoCI</h5>
            <ul className="list-unstyled">
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/careers">Carrières</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/help">Aide</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-4">
            <h5>Inscrivez-vous à notre newsletter</h5>
            <p>Recevez nos derniers tutoriels et offres exclusives.</p>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Votre email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Votre nom complet"
                value={fullname}
                onChange={e => setFullname(e.target.value)}
                required
              />
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? 'Envoi...' : "S'inscrire"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bas du Footer */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="mb-md-0">&copy; {new Date().getFullYear()} tutoCi. Tous droits réservés.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <Link to="/" className="me-3">Conditions d'utilisation</Link>
              <Link to="/">Politique de confidentialité</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

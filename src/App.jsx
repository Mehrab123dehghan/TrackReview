import { useEffect, useState } from 'react'
import BusinessCasePage from './pages/BusinessCasePage.jsx'
import MvpPage from './pages/MvpPage.jsx'
import './App.css'

function Navigation({ page }) {
  return (
    <header className="site-header">
      <a className="brand" href="#/mvp" aria-label="ترک‌ریویو، خانه">
        <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span>
        <span>ترک<span className="brand-light">ریویو</span></span>
      </a>
      <nav className="main-nav" aria-label="ناوبری اصلی">
        <a className={page === 'business' ? 'active' : ''} href="#/business">پروندهٔ تحلیلی</a>
        <a className={page === 'mvp' ? 'active' : ''} href="#/mvp">محیط محصول</a>
      </nav>
      <a className="header-cta" href="#/mvp#reviewers">شروع شنیدن <span aria-hidden="true">←</span></a>
    </header>
  )
}

function App() {
  const [page, setPage] = useState(() => window.location.hash.includes('business') ? 'business' : 'mvp')

  useEffect(() => {
    const syncPage = () => setPage(window.location.hash.includes('business') ? 'business' : 'mvp')
    window.addEventListener('hashchange', syncPage)
    return () => window.removeEventListener('hashchange', syncPage)
  }, [])

  return (
    <div className="app-shell" dir="rtl">
      <Navigation page={page} />
      <main>{page === 'business' ? <BusinessCasePage /> : <MvpPage />}</main>
      <footer className="site-footer"><span>ترک‌ریویو <span className="footer-muted">— بازخوردی برای قدم بعدی</span></span><span>نمونهٔ دانشگاهی • عملکردها شبیه‌سازی شده‌اند</span></footer>
    </div>
  )
}

export default App


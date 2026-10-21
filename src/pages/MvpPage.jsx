import { useMemo, useState } from 'react'
import ReviewerCard from '../components/ReviewerCard.jsx'
import RequestForm from '../components/RequestForm.jsx'
import SavedRequests from '../components/SavedRequests.jsx'
import { categories, reviewers } from '../data/reviewers.js'
import { getRequests } from '../utils/storage.js'

export default function MvpPage() {
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [specialtyFilter, setSpecialtyFilter] = useState('all')
  const [selectedReviewerId, setSelectedReviewerId] = useState(null)
  const [view, setView] = useState('browse')
  const [requests, setRequests] = useState(getRequests)
  const [latestRequest, setLatestRequest] = useState(null)
  const selectedReviewer = reviewers.find((reviewer) => reviewer.id === selectedReviewerId) ?? null
  const visibleReviewers = useMemo(() => reviewers.filter((reviewer) =>
    (specialtyFilter === 'all' || reviewer.specialty === specialtyFilter)
    && (categoryFilter === 'all' || reviewer.categories.includes(categoryFilter)),
  ), [categoryFilter, specialtyFilter])

  function handleSaved(request) {
    if (!request) {
      setSelectedReviewerId(null)
      return
    }
    setRequests(getRequests())
    setLatestRequest(request)
    setView('requests')
    window.setTimeout(() => document.getElementById('my-requests')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0)
  }

  return (
    <>
      <section className="product-hero section-wrap">
        <div><div className="eyebrow"><span className="eyebrow-dot" /> محیط محصول • نسخهٔ نمایشی</div><h1>یک گوشِ تازه،<br /><span>یک قدمِ روشن‌تر.</span></h1><p>بازخورد موسیقی را از حد «خوبه» فراتر ببر. برای هنرمندان مستقل و تهیه‌کنندگان موسیقی: متخصص را انتخاب کن، سؤال دقیق بپرس و پیشنهادهایی بگیر که بتوانی در پروژه‌ات امتحان کنی.</p><div className="product-hero-actions"><a className="button button-primary" href="#reviewers">پیدا کردن متخصص <span aria-hidden="true">↓</span></a><span>بدون پرداخت • بدون آپلود</span></div></div>
        <div className="product-hero-note"><span className="note-index">01 / DEMO</span><div className="note-wave"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><strong>بازخوردی که<br />قدم بعدی را نشان می‌دهد.</strong><span>نمونه‌ها ساختگی و صرفاً برای نمایش محصول‌اند.</span></div>
      </section>
      <section className="marketplace-section section-wrap" id="reviewers">
        <div className="section-heading"><div><div className="eyebrow">متخصص‌های نمونه</div><h2>چه چیزی را می‌خواهی بهتر بشنوی؟</h2><p>پروفایل‌ها و قیمت اعتباری زیر دادهٔ ساختگی برای نمایش هستند.</p></div><div className="demo-stamp">دادهٔ نمایشی <span>✳</span></div></div>
        <div className="filter-row"><label>موضوع بازخورد<select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)}><option value="all">همهٔ موضوع‌ها</option>{categories.map((category) => <option key={category.id} value={category.id}>{category.label}</option>)}</select></label><label>تخصص متخصص<select value={specialtyFilter} onChange={(event) => setSpecialtyFilter(event.target.value)}><option value="all">همهٔ تخصص‌ها</option>{categories.map((category) => <option key={category.id} value={category.id}>{category.label}</option>)}</select></label><span className="filter-count">{visibleReviewers.length} متخصص</span></div>
        {visibleReviewers.length ? <div className="reviewer-grid">{visibleReviewers.map((reviewer) => <ReviewerCard key={reviewer.id} reviewer={reviewer} categoryLabel={categories.find((item) => item.id === reviewer.specialty)?.label ?? 'بازخورد موسیقی'} selected={selectedReviewerId === reviewer.id} onSelect={(id) => setSelectedReviewerId((current) => current === id ? null : id)} />)}</div> : <div className="empty-state filter-empty"><span className="empty-icon">⌕</span><h3>متخصصی در این فیلتر نیست</h3><p>فیلترها را تغییر بده تا گزینه‌های بیشتری ببینی.</p><button className="text-button" type="button" onClick={() => { setCategoryFilter('all'); setSpecialtyFilter('all') }}>پاک‌کردن فیلترها</button></div>}
      </section>
      <section className="request-area section-wrap" id="request">
        <div className="request-intro"><div className="step-number">02</div><div><div className="eyebrow">قدم بعدی</div><h2>حالا درخواستت را بساز.</h2><p>بدون حساب کاربری و بدون پرداخت؛ فقط اطلاعات لازم برای یک بازخورد مفید.</p></div></div>
        <RequestForm reviewer={selectedReviewer} onSaved={handleSaved} />
      </section>
      <section className="requests-area section-wrap" id="my-requests">
        <div className="saved-heading"><div><div className="eyebrow">تاریخچهٔ محلی</div><h2>درخواست‌های من <span>{requests.length}</span></h2></div><button type="button" className="text-button" onClick={() => { setRequests(getRequests()); setView((current) => current === 'requests' ? 'browse' : 'requests') }}>{view === 'requests' ? 'تازه‌سازی فهرست' : 'نمایش درخواست‌های ذخیره‌شده'}</button></div>
        {latestRequest && view === 'requests' && <div className="success-banner" role="status"><span className="success-check">✓</span><div><strong>درخواست «{latestRequest.track}» ثبت شد.</strong><p>نسخهٔ نمایشی درخواست در فضای محلی همین مرورگر ذخیره شد.</p></div><button type="button" onClick={() => setLatestRequest(null)} aria-label="بستن پیام تأیید">×</button></div>}
        {view === 'requests' && <SavedRequests requests={requests} />}
        {view === 'browse' && <p className="requests-hint">درخواست ثبت‌شده فقط در همین مرورگر دیده می‌شود. برای دیدنش دکمهٔ «نمایش درخواست‌های ذخیره‌شده» را بزن.</p>}
      </section>
    </>
  )
}


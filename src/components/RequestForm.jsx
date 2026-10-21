import { useState } from 'react'
import { categories } from '../data/reviewers.js'
import { saveRequest } from '../utils/storage.js'

const initialValues = { artist: '', track: '', category: '', details: '' }

function validate(values) {
  const errors = {}
  if (values.artist.trim().length < 2) errors.artist = 'نام هنرمند را با دست‌کم ۲ نویسه وارد کن.'
  if (values.track.trim().length < 2) errors.track = 'نام ترک را با دست‌کم ۲ نویسه وارد کن.'
  if (!values.category) errors.category = 'یک دستهٔ بازخورد انتخاب کن.'
  if (values.details.trim().length < 20) errors.details = 'برای راهنمایی بهتر، توضیحت را دست‌کم ۲۰ نویسه بنویس.'
  return errors
}

export default function RequestForm({ reviewer, onSaved }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [saveError, setSaveError] = useState('')

  function change(field, value) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: '' }))
    setSaveError('')
  }

  function submit(event) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    const request = {
      id: globalThis.crypto?.randomUUID?.() ?? `demo-${Date.now()}`,
      artist: values.artist.trim(),
      track: values.track.trim(),
      category: values.category,
      details: values.details.trim(),
      reviewerId: reviewer?.id ?? null,
      reviewerName: reviewer?.name ?? null,
      credits: reviewer?.credits ?? 0,
      createdAt: new Date().toISOString(),
    }
    if (!saveRequest(request)) {
      setSaveError('ذخیره در این مرورگر ممکن نشد. فضای مرورگر یا تنظیمات ذخیره‌سازی را بررسی کن و دوباره بفرست.')
      return
    }
    setValues(initialValues)
    setErrors({})
    onSaved(request)
  }

  return (
    <form className="request-form" onSubmit={submit} noValidate>
      <div className="form-heading"><div><div className="eyebrow">یک درخواست مشخص</div><h3>دربارهٔ ترکت بگو</h3></div><span className="required-hint">ستاره‌دارها الزامی‌اند</span></div>
      {reviewer ? <div className="chosen-reviewer-note">متخصص انتخاب‌شده: <strong>{reviewer.name}</strong><button type="button" onClick={() => onSaved(null)}>حذف انتخاب</button></div> : <p className="form-note">می‌توانی بدون انتخاب متخصص هم درخواست را ثبت کنی؛ دستهٔ بازخورد الزامی است.</p>}
      <div className="form-grid">
        <label className="field"><span>نام هنرمند <b>*</b></span><input value={values.artist} onChange={(event) => change('artist', event.target.value)} placeholder="مثلاً: نیما" aria-invalid={Boolean(errors.artist)} aria-describedby={errors.artist ? 'artist-error' : undefined} />{errors.artist && <small id="artist-error" className="field-error">{errors.artist}</small>}</label>
        <label className="field"><span>نام ترک <b>*</b></span><input value={values.track} onChange={(event) => change('track', event.target.value)} placeholder="نام نسخهٔ دمو یا ترک" aria-invalid={Boolean(errors.track)} aria-describedby={errors.track ? 'track-error' : undefined} />{errors.track && <small id="track-error" className="field-error">{errors.track}</small>}</label>
        <label className="field"><span>دستهٔ بازخورد <b>*</b></span><select value={values.category} onChange={(event) => change('category', event.target.value)} aria-invalid={Boolean(errors.category)} aria-describedby={errors.category ? 'category-error' : undefined}><option value="">انتخاب کن</option>{categories.map((category) => <option key={category.id} value={category.id}>{category.label}</option>)}</select>{errors.category && <small id="category-error" className="field-error">{errors.category}</small>}</label>
        <label className="field field-wide"><span>دقیقاً دوست داری چه چیزی بررسی شود؟ <b>*</b></span><textarea value={values.details} onChange={(event) => change('details', event.target.value)} rows="4" placeholder="مثلاً: در کورس، رابطهٔ کیک و بیس را بررسی کن و بگو کدام بخش‌های تنظیم باعث شلوغی شده‌اند." aria-invalid={Boolean(errors.details)} aria-describedby={errors.details ? 'details-error' : undefined} />{errors.details && <small id="details-error" className="field-error">{errors.details}</small>}</label>
      </div>
      <div className="form-bottom"><p>اعتبار و تحویل در این نمونه فقط نمایشی است؛ این فرم پرداخت یا بارگذاری فایل ندارد.</p><button className="button button-primary submit-request" type="submit">ثبت درخواست نمایشی <span aria-hidden="true">←</span></button></div>
      {saveError && <p className="storage-error" role="alert">{saveError}</p>}
    </form>
  )
}

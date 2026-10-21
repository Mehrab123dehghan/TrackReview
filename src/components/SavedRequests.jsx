import { categories } from '../data/reviewers.js'

function formatDate(value) {
  try {
    return new Intl.DateTimeFormat('fa-IR', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value))
  } catch {
    return 'زمان ثبت نامشخص'
  }
}

export default function SavedRequests({ requests }) {
  if (!requests.length) return <div className="empty-state"><span className="empty-icon">♫</span><h3>هنوز درخواستی ثبت نشده</h3><p>وقتی فرم را تکمیل کنی، درخواستت اینجا ذخیره و نمایش داده می‌شود.</p></div>
  return <div className="saved-list">{requests.map((request) => {
    const category = categories.find((item) => item.id === request.category)?.label ?? 'دستهٔ نامشخص'
    return <article className="saved-card" key={request.id}>
      <div className="saved-card-heading"><div><span className="saved-badge">ثبت‌شده در این مرورگر</span><h3>{request.track}</h3></div><time>{formatDate(request.createdAt)}</time></div>
      <div className="saved-meta"><span>هنرمند: {request.artist}</span><span>موضوع: {category}</span><span>متخصص: {request.reviewerName ?? 'انتخاب نشده'}</span></div>
      <p className="saved-details">{request.details}</p>
      <div className="saved-credit">هزینهٔ نمایشی: {request.credits ? `${request.credits} اعتبار دمو` : 'بدون اعتبار؛ پرداختی انجام نشده'}</div>
    </article>
  })}</div>
}

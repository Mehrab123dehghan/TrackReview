export default function ReviewerCard({ reviewer, categoryLabel, selected, onSelect }) {
  return (
    <article className={`reviewer-card ${selected ? 'selected' : ''}`}>
      <div className="reviewer-topline">
        <div className={`reviewer-avatar ${reviewer.color}`}>{reviewer.initials}</div>
        <div className="reviewer-identity"><h3>{reviewer.name}</h3><span>{reviewer.role}</span></div>
        <span className={`availability ${reviewer.available ? 'available' : 'busy'}`}><i />{reviewer.available ? 'پذیرش درخواست' : 'فعلاً مشغول'}</span>
      </div>
      <div className="reviewer-facts"><span>{categoryLabel}</span><span>{reviewer.experience}</span></div>
      <div className="sample-feedback"><span className="sample-label">نمونهٔ بازخورد</span><p>«{reviewer.sample}»</p></div>
      <div className="reviewer-bottom"><div><strong>{reviewer.credits}</strong><span> اعتبار نمایشی</span></div><button type="button" disabled={!reviewer.available} className={`select-reviewer ${selected ? 'chosen' : ''}`} onClick={() => onSelect(reviewer.id)}>{selected ? 'انتخاب شده ✓' : reviewer.available ? 'انتخاب متخصص' : 'در دسترس نیست'}</button></div>
    </article>
  )
}


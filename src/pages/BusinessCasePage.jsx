const evaluation = [
  ['۱', 'مسئلهٔ واقعی چیست؟', 'هنرمند گاهی برای تصمیم فنی مشخص دربارهٔ میکس، وکال، تنظیم یا مسترینگ به نظر شنونده‌ای باتجربه نیاز دارد. میزان تکرار و شدت این مسئله هنوز اندازه‌گیری نشده است.', 'فرض نیاز'],
  ['۲', 'چه کسی با این مسئله روبه‌روست؟', 'مخاطب آغازین پیشنهادی، هنرمند مستقل و تهیه‌کننده‌ای است که روی یک ترک در حال کار است و دنبال بازخورد هدفمند می‌گردد. انتخاب این گروه، فرض اولیهٔ بخش‌بندی بازار است.', 'فرض مخاطب'],
  ['۳', 'امروز چطور مسئله را حل می‌کنند؟', 'گزینه‌های قابل‌تصور شامل گرفتن نظر از دوست یا همکار، انتشار پرسش در انجمن‌ها، بازبینی شخصی و سفارش مستقل از متخصص است. سهم و کیفیت استفاده از هر گزینه را بررسی نکرده‌ایم.', 'فرض دربارهٔ جایگزین‌ها'],
  ['۴', 'ارزش پیشنهادی چیست؟', 'درخواست، دستهٔ بازخورد و متخصص در یک جریان ساده کنار هم قرار می‌گیرند تا نظر از کلی‌گویی فاصله بگیرد و به پیشنهاد قابل‌بررسی نزدیک شود. این ارزش در MVP به‌صورت نمونه نشان داده می‌شود و هنوز با کاربر سنجیده نشده است.', 'فرض ارزش'],
  ['۵', 'راه‌حل در عمل چه شکلی دارد؟', 'کاربر متخصص یا موضوع را انتخاب می‌کند، نام ترک و سؤالش را می‌نویسد و درخواست را ثبت می‌کند. در Phase 1 این جریان در مرورگر و با دادهٔ نمایشی کار می‌کند؛ دریافت ترک و تحویل نظر واقعی ساخته نشده است.', 'بخشی از MVP پیاده‌سازی شده'],
  ['۶', 'تأمین‌کننده و عملیات چه کسانی هستند؟', 'در نسخهٔ آینده، میکس‌انجینیر، تهیه‌کننده، نوازنده و متخصص مسترینگ می‌توانند پاسخ‌گو باشند. جذب متخصص، کنترل کیفیت بازخورد، زمان تحویل و حل اختلاف هنوز طراحی عملیاتی نشده‌اند.', 'فرض عملیاتی'],
  ['۷', 'مدل درآمدی و هزینه‌ها چیست؟', 'ایدهٔ آینده می‌تواند از اشتراک یا اعتبار و سهم درآمد برای متخصص استفاده کند. قیمت، تقاضا، هزینهٔ جذب و امکان پایداری مالی هیچ‌کدام اعتبارسنجی نشده‌اند. این نمونه هیچ پولی دریافت یا توزیع نمی‌کند.', 'فرض درآمدی'],
  ['۸', 'بزرگ‌ترین ریسک و آزمون بعدی چیست؟', 'ریسک اصلی این است که کاربر حاضر نباشد برای بازخورد مشخص هزینه یا زمان صرف کند، یا کیفیت متخصص‌ها قابل‌اعتماد نباشد. گام اعتبارسنجی پیشنهادی: گفت‌وگو با هنرمندان و متخصص‌ها و آزمودن یک جریان دستی بازخورد؛ این کار هنوز انجام نشده است.', 'آزمون پیشنهادی، نه انجام‌شده'],
]

function SectionTitle({ eyebrow, title, children }) {
  return <div className="business-section-title"><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{children && <p>{children}</p>}</div>
}

export default function BusinessCasePage() {
  return (
    <div className="business-page">
      <section className="business-hero section-wrap">
        <div className="business-hero-main"><div className="eyebrow"><span className="eyebrow-dot" /> پروندهٔ تحلیلی • Phase 1</div><h1>بازخوردی که<br /><span>به تصمیم تبدیل شود.</span></h1><p>TrackReview یک ایدهٔ بازارگاه برای بازخورد دقیق موسیقی است. این پرونده، مسئله و مدل پیشنهادی را روشن می‌کند و مرز بین دانسته‌ها و فرض‌ها را نشان می‌دهد.</p><a className="button button-primary" href="#/mvp">دیدن نمونهٔ محصول <span aria-hidden="true">←</span></a></div>
        <aside className="evidence-callout"><span className="callout-mark">i</span><div><strong>وضعیت شواهد</strong><p>این پروژه هنوز مصاحبه، نظرسنجی یا پژوهش بازار انجام نداده است. گزاره‌های بازار و کسب‌وکار در ادامه با برچسب «فرض» مشخص شده‌اند.</p></div></aside>
      </section>

      <section className="business-section section-wrap">
        <SectionTitle eyebrow="01 / مسئله" title="ساختن موسیقی یعنی گرفتن تصمیم‌های ریز و زیاد.">این توصیف، منطق مسئلهٔ پروژه است؛ میزان رواج آن هنوز با پژوهش مستقل سنجیده نشده.</SectionTitle>
        <div className="problem-grid"><article className="problem-card problem-main"><span className="card-index">مشاهدهٔ مسئله، به‌عنوان فرض</span><h3>«خوبه» کمک نمی‌کند بفهمم قدم بعدی چیست.</h3><p>هنرمند ممکن است دربارهٔ تعادل کیک و بیس، وضوح وکال، انرژی تنظیم، تصویر استریو یا پویایی مسترینگ سؤال داشته باشد؛ پاسخ کلی به‌تنهایی مسیر اصلاح را روشن نمی‌کند.</p></article><article className="problem-card"><span className="card-index">نقطهٔ شروع</span><h3>سؤال را مشخص کن</h3><p>درخواست از کاربر می‌خواهد توضیح دهد کدام بخش ترک را می‌خواهد بررسی کند.</p></article><article className="problem-card"><span className="card-index">نوع پاسخ مطلوب</span><h3>پیشنهاد قابل‌آزمایش</h3><p>بازخورد نمونه به موقعیت شنیداری اشاره می‌کند؛ نسخهٔ نهایی باید به گوش و هدف هر ترک وابسته بماند.</p></article></div>
      </section>

      <section className="business-section section-wrap alternatives-section">
        <SectionTitle eyebrow="02 / جایگزین‌ها" title="کاربر امروز چه انتخاب‌هایی دارد؟">این‌ها مسیرهای محتمل‌اند، نه نتایج مصاحبه یا بررسی رقبا.</SectionTitle>
        <div className="alternative-grid"><article><span>۰۱</span><h3>دوست یا همکار</h3><p>در دسترس و آشنا با هنرمند؛ شاید تخصص مرتبط یا چارچوب پاسخ‌گویی نداشته باشد.</p><small>ارزیابی: فرض</small></article><article><span>۰۲</span><h3>انجمن و شبکهٔ اجتماعی</h3><p>امکان شنیدن چند نظر؛ پاسخ‌ها ممکن است پراکنده یا ناهمگون باشند.</p><small>ارزیابی: فرض</small></article><article><span>۰۳</span><h3>بازبینی شخصی</h3><p>بدون هزینهٔ مستقیم؛ شنونده ممکن است به تصمیم‌های آشنای خودش خو بگیرد.</p><small>ارزیابی: فرض</small></article><article><span>۰۴</span><h3>استخدام مستقیم متخصص</h3><p>ارتباط تخصصی‌تر؛ پیدا کردن فرد مناسب، محدودهٔ کار و قیمت می‌تواند زمان‌بر باشد.</p><small>ارزیابی: فرض</small></article></div>
      </section>

      <section className="business-section section-wrap audience-section">
        <SectionTitle eyebrow="03 / مخاطب و ارزش" title="برای چه کسی، چه ارزشی می‌سازد؟" />
        <div className="audience-grid"><article><span className="audience-label">کاربر / سفارش‌دهنده</span><h3>هنرمند مستقل</h3><p>ترک در حال تولید دارد و می‌خواهد روی یک بخش مشخص بازخورد بگیرد.</p><h3>تهیه‌کنندهٔ موسیقی</h3><p>برای شنیدن دیدگاه تخصصی دوم دربارهٔ تنظیم، میکس یا آماده‌سازی نهایی.</p></article><article><span className="audience-label">عرضه‌کنندهٔ احتمالی</span><h3>متخصص موسیقی</h3><p>میکس و مسترینگ، تولید و تنظیم، نوازندگی یا ضبط وکال؛ تعریف و پذیرش این نقش‌ها در نمونه صرفاً نمایشی است.</p></article><article className="value-card"><span className="audience-label">ارزش پیشنهادی</span><h3>از شنیدن تا اقدام</h3><p>ترکیب انتخاب موضوع، معرفی تخصص و درخواست توضیح‌دار می‌تواند مسیر دریافت بازخورد را روشن کند؛ این ارزش هنوز با کاربران واقعی آزموده نشده است.</p></article></div>
      </section>

      <section className="business-section section-wrap activity-section">
        <SectionTitle eyebrow="04 / شکل ارائهٔ خدمت" title="فعالیت آنلاین و آفلاین را جدا ببینیم." />
        <div className="activity-grid"><article><span className="activity-symbol">↗</span><h3>آنلاین</h3><ul><li>نمایش پروفایل، تخصص و دسترس‌پذیری متخصص‌ها</li><li>ثبت درخواست و ترجیح موضوع بازخورد</li><li>هماهنگی، تحویل بازخورد و پیگیری در نسخهٔ آینده</li><li>مدیریت اعتبار یا اشتراک در آینده؛ اکنون شبیه‌سازی می‌شود</li></ul><div className="activity-status">در Phase 1: مرور نمونه‌ها و ثبت محلی درخواست کار می‌کند.</div></article><article><span className="activity-symbol offline">♫</span><h3>آفلاین / انسانی</h3><ul><li>گوش‌دادن تخصصی به موسیقی</li><li>نوشتن پیشنهادهای متناسب با ترک</li><li>در صورت نیاز آینده، جلسهٔ شنود یا گفت‌وگوی زنده</li><li>بازبینی کیفیت و رسیدگی به اختلاف‌ها</li></ul><div className="activity-status pending">در Phase 1: هیچ جلسه، شنود یا تحویل واقعی انجام نمی‌شود.</div></article></div>
      </section>

      <section className="classification-band"><div className="section-wrap classification-inner"><div><div className="eyebrow">05 / طبقه‌بندی ایده</div><h2>خدمت دیجیتال با مدل بازارگاه دوطرفه</h2><p>هنرمند درخواست می‌دهد و متخصص بالقوه بازخورد ارائه می‌کند. پرداخت یا سهم درآمد، فقط بخشی از مدل آینده و هنوز فرضی است.</p></div><div className="classification-tags"><span>خدمت آنلاین</span><span>بازارگاه دوطرفه</span><span>B2C پیشنهادی</span><span>اشتراک / اعتبار آینده</span></div></div></section>

      <section className="business-section section-wrap evaluation-section">
        <SectionTitle eyebrow="06 / ارزیابی ایدهٔ پخته" title="هشت پرسش برای سنجش آمادگی ایده.">پاسخ‌ها صریحاً نشان می‌دهند کدام بخش پیشنهاد است و کدام بخش هنوز باید بررسی شود.</SectionTitle>
        <div className="evaluation-grid">{evaluation.map(([number, question, answer, status]) => <article className="evaluation-card" key={number}><div className="evaluation-top"><span className="evaluation-number">{number}</span><span className={`evaluation-status ${status.includes('پیاده‌سازی') ? 'implemented' : ''}`}>{status}</span></div><h3>{question}</h3><p>{answer}</p></article>)}</div>
      </section>

      <section className="evidence-section"><div className="section-wrap evidence-grid"><div><div className="eyebrow">07 / مرز دانسته‌ها</div><h2>فرض‌ها، شواهد و کارِ باقی‌مانده</h2><p>پروژه برای ارائهٔ دانشگاهی طراحی شده، پس باید ایده را از واقعیت تأییدشده جدا نگه داریم.</p></div><div className="evidence-columns"><article><span className="evidence-tag evidence-fact">آنچه در این نمونه قابل‌تأیید است</span><ul><li>پروژه یک رابط React و Vite دارد.</li><li>چهار پروفایل متخصص به‌عنوان دادهٔ ساختگی نمایش داده می‌شود.</li><li>درخواست معتبر در LocalStorage مرورگر ذخیره می‌شود.</li><li>این‌ها قابلیت‌های نمونه‌اند، نه شواهدی از تقاضای بازار.</li></ul></article><article><span className="evidence-tag evidence-assumption">فرض‌های تجاریِ بررسی‌نشده</span><ul><li>هنرمندان برای بازخورد فنی هدفمند وقت یا هزینه می‌گذارند.</li><li>متخصصان حاضر به ارائهٔ این خدمت از طریق بازارگاه هستند.</li><li>کیفیت و سرعت پاسخ برای مشتری رضایت‌بخش خواهد بود.</li><li>اشتراک یا تقسیم درآمد مدل پایداری می‌سازد.</li></ul></article></div></div></section>

      <section className="business-next section-wrap"><div><div className="eyebrow">گام بعدی پس از Phase 1</div><h2>اول با آدم‌ها بررسی‌اش کن.</h2><p>گفت‌وگو با هنرمندان و متخصص‌ها، سپس آزمایش دستی یک نمونهٔ واقعی، می‌تواند فرض‌ها را روشن‌تر کند. این اعتبارسنجی در این پروژه انجام نشده است.</p></div><a className="button button-primary" href="#/mvp">بازگشت به نمونهٔ محصول <span aria-hidden="true">←</span></a></section>
    </div>
  )
}


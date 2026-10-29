export const categories = [
  { id: 'mixing', label: 'میکس و تعادل صدا' },
  { id: 'vocals', label: 'وکال و وضوح' },
  { id: 'arrangement', label: 'تنظیم و ساختار' },
  { id: 'mastering', label: 'مسترینگ و داینامیک' },
]

export const reviewers = [
  {
    id: 'nava', name: 'نوا فرهمند', role: 'میکس و صدابرداری', initials: 'ن‌ف', color: 'lilac',
    specialty: 'mixing', categories: ['mixing', 'mastering'], experience: '۷ سال تجربهٔ میکس موسیقی پاپ و آلترناتیو',
    sample: 'در بخش ورس، کیک و بیس روی هم می‌افتند؛ با کم‌کردن هم‌زمان هر دو مشکل را حل نکن. اول جای هرکدام را در ریتم و طیف پیدا کن.',
    credits: 8, available: true,
  },
  {
    id: 'armin', name: 'آرمین راد', role: 'تولید و تنظیم', initials: 'آر', color: 'blue',
    specialty: 'arrangement', categories: ['arrangement', 'mixing'], experience: '۶ سال تجربهٔ تنظیم هیپ‌هاپ و موسیقی الکترونیک',
    sample: 'ورود هم‌زمان لایه‌های جدید در نیمهٔ دوم، تفاوت انرژی بخش‌ها را کم کرده. یک عنصر را برای لحظهٔ ورود وکال نگه دار تا اوج واضح‌تر شود.',
    credits: 7, available: true,
  },
  {
    id: 'tara', name: 'تارا کیانی', role: 'اجرا و ضبط وکال', initials: 'ت‌ک', color: 'rose',
    specialty: 'vocals', categories: ['vocals', 'arrangement'], experience: '۸ سال تجربهٔ ضبط و ویرایش وکال در سبک‌های پاپ و R&B',
    sample: 'در کلمات پایانی جمله، وکال کمی زیر لایه‌های ساز پنهان می‌شود. به‌جای بلندترکردن کل وکال، اول فضای همراهی را در همان لحظه بررسی کن.',
    credits: 9, available: false,
  },
  {
    id: 'sam', name: 'سام نیک‌پی', role: 'مسترینگ و شنود نهایی', initials: 'س‌ن', color: 'amber',
    specialty: 'mastering', categories: ['mastering', 'mixing'], experience: '۵ سال تجربهٔ آماده‌سازی انتشار برای پلتفرم‌های دیجیتال',
    sample: 'ترنزینت درام‌ها در کورس هنوز زنده است، اما محدودسازی در پایان کورس کمی انرژی را تخت کرده. بلندی را کنار حس پویایی مقایسه کن.',
    credits: 10, available: true,
  },
]


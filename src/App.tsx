import React, { type ReactNode, useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp, FaEnvelope, FaBars, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

const AnimatedLogo: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-30 animate-breathe"></div>
      <img
        src="/logo.png"
        alt="FREESTYLE - Women's Edition"
        className={`relative h-48 w-48 sm:h-56 sm:w-56 lg:h-72 lg:w-72 rounded-full object-cover shadow-2xl ring-4 ring-white/50 animate-breathe ${
          inView ? 'animate-slide-in' : 'opacity-0'
        }`}
      />
    </div>
  );
};

const recommendationImages = [
  'Raprec3 (1).jpeg',
  'Raprec4.jpeg',
  'WhatsApp Image 2026-02-03 at 20.32.45.jpeg',
  'WhatsApp Image 2026-02-03 at 20.32.451.jpeg',
  'WhatsApp Image 2026-02-03 at 20.32.56.jpeg',
  'WhatsApp Image 2026-02-03 at 20.33.58.jpeg',
  'WhatsApp Image 2026-02-03 at 20.47.31.jpeg',
  'WhatsApp Image 2026-02-03 at 20.47.35.jpeg'
];

const Carousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative h-96 overflow-hidden rounded-3xl bg-white/30 backdrop-blur-xl shadow-2xl border border-white/20">
        <img
          src={`/recommendations/${images[currentIndex]}`}
          alt={`Recommendation ${currentIndex + 1}`}
          className="w-full h-full object-contain transition-transform duration-500 ease-in-out"
        />
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-700 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
        aria-label="Previous"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-700 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
        aria-label="Next"
      >
        <FaChevronRight size={24} />
      </button>
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-purple-400' : 'bg-white/50 hover:bg-purple-200'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLHeadElement>(null);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement && headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div id="top" className="bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50 text-gray-800 min-h-screen" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Modern Header with Glassmorphism */}
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20 lg:h-24">
              {/* Mobile Menu Button - Left Side */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-purple-300 transition-colors duration-300"
                aria-label="תפריט"
              >
                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>

              {/* Desktop Navigation - Center/Left */}
              <nav className="hidden lg:flex items-center gap-2">
                <a
                  href="#about"
                  onClick={(e) => smoothScroll(e, 'about')}
                  className="group relative px-5 py-2.5 text-gray-700 hover:text-purple-400 transition-all duration-300 font-medium"
                >
                  <span className="relative z-10">מה בקורס</span>
                  <div className="absolute inset-0 bg-purple-50 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>
                <a
                  href="#why-rap"
                  onClick={(e) => smoothScroll(e, 'why-rap')}
                  className="group relative px-5 py-2.5 text-gray-700 hover:text-purple-400 transition-all duration-300 font-medium"
                >
                  <span className="relative z-10">למה ראפ</span>
                  <div className="absolute inset-0 bg-purple-50 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>
                <a
                  href="#who-for"
                  onClick={(e) => smoothScroll(e, 'who-for')}
                  className="group relative px-5 py-2.5 text-gray-700 hover:text-purple-400 transition-all duration-300 font-medium"
                >
                  <span className="relative z-10">למי זה מתאים</span>
                  <div className="absolute inset-0 bg-purple-50 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>
                <a
                  href="#recommendations"
                  onClick={(e) => smoothScroll(e, 'recommendations')}
                  className="group relative px-5 py-2.5 text-gray-700 hover:text-purple-400 transition-all duration-300 font-medium"
                >
                  <span className="relative z-10">המלצות</span>
                  <div className="absolute inset-0 bg-purple-50 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => smoothScroll(e, 'contact')}
                  className="group relative px-5 py-2.5 text-gray-700 hover:text-purple-400 transition-all duration-300 font-medium"
                >
                  <span className="relative z-10">מי אנחנו</span>
                  <div className="absolute inset-0 bg-purple-50 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>
                <a
                  href="https://wa.me/972547534071?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%9C%D7%92%D7%91%D7%99%20%D7%A7%D7%95%D7%A8%D7%A1%20%D7%A4%D7%A8%D7%99%D7%A1%D7%98%D7%99%D7%99%D7%9C%20%D7%9C%D7%A0%D7%A9%D7%99%D7%9D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 px-6 py-2.5 bg-gradient-to-r from-purple-300 to-pink-300 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  הצטרפי עכשיו
                </a>
              </nav>

              {/* Logo - Right Side */}
              <a
                href="#top"
                onClick={scrollToTop}
                className="flex items-center gap-3 cursor-pointer"
              >
                <h1 className="hidden sm:block text-lg lg:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  FREESTYLE
                </h1>
                <img
                  src="/logo.png"
                  alt="FREESTYLE - Women's Edition"
                  className="h-14 w-14 lg:h-16 lg:w-16 rounded-full object-cover shadow-lg ring-2 ring-purple-200 hover:ring-purple-300 transition-all duration-300 hover:scale-105"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden bg-white/95 backdrop-blur-xl shadow-2xl border-b border-white/20 transition-all duration-500 ease-in-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-3">
            <a
              href="#about"
              onClick={(e) => smoothScroll(e, 'about')}
              className="px-4 py-3 text-gray-700 hover:text-purple-400 hover:bg-purple-50 rounded-xl transition-all duration-300 font-medium text-center"
            >
              מה בקורס
            </a>
            <a
              href="#why-rap"
              onClick={(e) => smoothScroll(e, 'why-rap')}
              className="px-4 py-3 text-gray-700 hover:text-purple-400 hover:bg-purple-50 rounded-xl transition-all duration-300 font-medium text-center"
            >
              למה ראפ
            </a>
            <a
              href="#who-for"
              onClick={(e) => smoothScroll(e, 'who-for')}
              className="px-4 py-3 text-gray-700 hover:text-purple-400 hover:bg-purple-50 rounded-xl transition-all duration-300 font-medium text-center"
            >
              למי זה מתאים
            </a>
            <a
              href="#recommendations"
              onClick={(e) => smoothScroll(e, 'recommendations')}
              className="px-4 py-3 text-gray-700 hover:text-purple-400 hover:bg-purple-50 rounded-xl transition-all duration-300 font-medium text-center"
            >
              המלצות
            </a>
            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, 'contact')}
              className="px-4 py-3 text-gray-700 hover:text-purple-400 hover:bg-purple-50 rounded-xl transition-all duration-300 font-medium text-center"
            >
              מי אנחנו
            </a>
            <a
              href="https://wa.me/972547534071?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%9C%D7%92%D7%91%D7%99%20%D7%A7%D7%95%D7%A8%D7%A1%20%D7%A4%D7%A8%D7%99%D7%A1%D7%98%D7%99%D7%99%D7%9C%20%D7%9C%D7%A0%D7%A9%D7%99%D7%9D"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-gradient-to-r from-purple-300 to-pink-300 text-white rounded-xl font-semibold text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              הצטרפי עכשיו
            </a>
          </nav>
        </div>
      </header>

      {/* Spacer for Fixed Header */}
      <div className="h-20 lg:h-24"></div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Hero Section - Modern Design */}
        <AnimatedSection>
          <section
            id="hero"
            className="relative mb-16 lg:mb-24 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/90 via-pink-300/90 to-violet-400/90"></div>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: 'url(/main.jpeg)' }}
            ></div>

            <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-16 lg:py-24 text-center">
              {/* Title */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                FREESTYLE
                <br />
                <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]" style={{ fontFamily: 'Caveat, cursive' }}>
                  women's edition
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-2xl sm:text-3xl font-extrabold text-white mb-8 animate-pulse drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] bg-gradient-to-r from-pink-400/30 to-violet-400/30 backdrop-blur-sm rounded-2xl py-4 px-6 inline-block border-2 border-white/40">
               צרי איתנו קשר!
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mb-12">
                <a
                  href="https://wa.me/972547534071?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%9C%D7%92%D7%91%D7%99%20%D7%A7%D7%95%D7%A8%D7%A1%20%D7%A4%D7%A8%D7%99%D7%A1%D7%98%D7%99%D7%99%D7%9C%20%D7%9C%D7%A0%D7%A9%D7%99%D7%9D%E2%80%9D"
                  className="group p-4 bg-green-500 hover:bg-green-400 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact via WhatsApp"
                >
                  <FaWhatsapp size={32} className="text-white" />
                </a>
                <a
                  href="mailto:darzszor@gmail.com"
                  className="group p-4 bg-red-500 hover:bg-red-400 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-2xl"
                  aria-label="Contact via Email"
                >
                  <FaEnvelope size={32} className="text-white" />
                </a>
              </div>

              {/* Description */}
              <div className="max-w-4xl mx-auto space-y-6 text-center">
                <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <span className="font-bold">את יודעת שיש לך מה להגיד. יש לך רעיונות, ניסיון, עומק.</span>
                  <br />
                  <br />
                  <span className="font-normal">ובכל זאת, בישיבה, מול קהל, מול אנשים חשובים בעיניך - </span>
                  <span className="font-extrabold">את עוצרת.</span>
                  <br />
                  <span className="font-normal">את שוקלת כל מילה. מחכה “להיות יותר מוכנה”. מוותרת על רעיון כי הוא לא מושלם.</span>
                  <br />
                  <br />
                  <span className="font-extrabold text-2xl sm:text-3xl">ואחר כך יוצאת וחושבת: למה שוב לא אמרתי?</span>
                </p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  את מוזמנת לתהליך עומק בקבוצה נשית ואינטימית שמשלב אימפרוביזציה, פריסטייל ראפ וכלים מבוססי מחקר מעולמות הדרמה תרפיה והאימון העסקי.
                </p>
              </div>

              {/* Event Details */}
              <div className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto border border-white/20">
                <div className="text-white space-y-3 text-base sm:text-lg font-semibold">
                  <p className="flex items-center justify-center gap-2">
                    <span className="text-pink-300">📅</span>
                    12.4 | 19.4 | 26.4 | 3.5
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="text-pink-300">⏰</span>
                    ימי ראשון 19:30-22:00
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="text-pink-300">📍</span>
                    <a
                      href="https://maps.app.goo.gl/2cYeHRN86ofrkbMw9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-pink-300 underline transition-colors duration-300"
                    >
                      מרכז ביכורי העתים, ליאונרדו דה וינצ'י 2 תל אביב
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Section 2: What happens in the course? */}
        <AnimatedSection delay={100}>
          <section id="about" className="mb-16 lg:mb-24 scroll-mt-28">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-16 border border-white/20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center" style={{ fontFamily: 'Amatic SC, cursive' }}>
                אז מה קורה בקורס בעצם?
              </h2>

              <div className="max-w-4xl mx-auto space-y-6 text-right">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  נחקור בצורה חווייתית דפוסים שמעכבים אותך, נתמודד עם הפחד לטעות ולתפוס מקום, ונתרגל ביטוי חופשי, נוכחות וביטחון.
                  הקורס מיועד לנשים מובילות שעובדות עם אנשים ומול אנשים, מרגישות שהפרפקציוניזם, הפחד לטעות והביקורת העצמית גורמים להן לעצור- גם כשהן יודעות שיש להן הרבה מה לתת.
                </p>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 my-8">
                  <p className="text-lg sm:text-xl font-bold text-gray-900 text-center">
זה תהליך עומק, חווייתי ופרקטי - לא סדנת דיבור מול קהל.
                  </p>
                </div>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  דרך אימפרוביזציה ופריסטייל ראפ, בקבוצה אינטימית, בטוחה ובקצב הדרגתי, נחקור דפוסים מעכבים ונתנסה בדרך פעולה אחרת - להעיז גם כשהתוצאה לא מושלמת ולא ידועה מראש.
                </p>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  הקורס נשען על גישות מבוססות מחקר מעולמות הדרמה תרפיה, CBT ומודל שפותח על ידי חוקרים מ־Harvard University, שעוסק בפער בין הרצון לשינוי לבין מה שקורה בפועל - ואיך אפשר להתחיל להזיז אותו דרך התנסות אמיתית.
                </p>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  במהלך הקורס תקבלי משימות בית ותרגולים ליישום בחיים האישיים והמקצועיים, וליווי בקבוצת וואטסאפ עם תרגול שבועי בין המפגשים.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex justify-center gap-4 mt-10">
                <a
                  href="https://wa.me/972547534071?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%9C%D7%92%D7%91%D7%99%20%D7%A7%D7%95%D7%A8%D7%A1%20%D7%A4%D7%A8%D7%99%D7%A1%D7%98%D7%99%D7%99%D7%9C%20%D7%9C%D7%A0%D7%A9%D7%99%D7%9D%E2%80%9D"
                  className="group p-4 bg-green-500 hover:bg-green-400 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact via WhatsApp"
                >
                  <FaWhatsapp size={28} className="text-white" />
                </a>
                <a
                  href="mailto:darzszor@gmail.com"
                  className="group p-4 bg-red-500 hover:bg-red-400 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-2xl"
                  aria-label="Contact via Email"
                >
                  <FaEnvelope size={28} className="text-white" />
                </a>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Logo Divider */}
        <section id="logo-section" className="my-20 lg:my-32 py-12 flex justify-center overflow-x-hidden">
          <AnimatedLogo />
        </section>

        {/* Section 3: Why freestyle rap? */}
        <AnimatedSection delay={100}>
          <section id="why-rap" className="mb-16 lg:mb-24 scroll-mt-28">
            <div className="max-w-4xl mx-auto text-right">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center" style={{ fontFamily: 'Amatic SC, cursive' }}>
                למה פריסטייל ראפ?
              </h2>

              <div className="space-y-6">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center italic">
                  קודם כל כי זה מגניב.
                </p>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  אבל ברצינות, כי זה כלי חדש ומאתגר, דרכו תפגשי את הפחד של "לא להיות מושלמת" - כי איך אפשר מושלם כשהכל מאולתר? ההתנסות באלתור מאפשרת לך:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 my-8">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <p className="text-gray-800 font-semibold">לחזק את שריר הFLOW שנדרש מאיתנו ביומיום</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-100 to-violet-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <p className="text-gray-800 font-semibold">להתמודד עם חוסר וודאות ושינויים</p>
                  </div>
                  <div className="bg-gradient-to-br from-violet-100 to-purple-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <p className="text-gray-800 font-semibold">לקחת מקום ולהיות באור הזרקורים</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <p className="text-gray-800 font-semibold">לחזק את תחושת המסוגלות דרך התמודדות עם דבר חדש</p>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  וכל זה בתהליך הדרגתי, בקבוצה בטוחה, תומכת ומפרגנת, בה את יכולה להעיז ולהתנסות.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Section 4: Why only women? */}
        <AnimatedSection delay={200}>
          <section className="mb-16 lg:mb-24">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-16 border border-white/20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center" style={{ fontFamily: 'Amatic SC, cursive' }}>
                למה רק נשים?
              </h2>

              <div className="max-w-4xl mx-auto space-y-6 text-right">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  אחרי עשרות סדנאות מעורבות, הבנו שקורה משהו מיוחד במרחב נשי.
                  מרחב שמחזק את הידיעה ש"אני לא לבד" ומאפשר שיח פתוח על נושאים שלעיתים מושתקים או מעוררים אי נוחות במרחב הכללי. במרחבים נשיים, נשים מדווחות על ירידה בחרדה, עלייה בביטחון העצמי וחופש גדול יותר לבטא את עצמן.
                </p>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  מחקרים מראים שנשים נוטות לבקר את עצמן יותר, לפקפק ביכולות שלהן, ולהימנע מסיכונים.
                  וזה מבאס, כי אין סיבה! בואו נעבוד על זה ביחד.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Section 5: Who is the course for? */}
        <AnimatedSection delay={100}>
          <section id="who-for" className="mb-16 lg:mb-24 scroll-mt-28">
            <div className="max-w-4xl mx-auto text-right">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center" style={{ fontFamily: 'Amatic SC, cursive' }}>
                למי הקורס מתאים?
              </h2>

              <div className="space-y-6">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  לנשים שעובדות עם ומול א.נשים. מנהלות, יזמיות, מובילות תחום, מנחות קבוצות, מנהלות HR וכל מי שרוצה לחזק ביטוי עצמי, נוכחות ולתקשר את עצמה בביטחון.
                </p>

                <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl p-8 shadow-2xl">
                  <p className="text-lg sm:text-xl text-white leading-relaxed font-bold text-center drop-shadow-lg">
                    אם נמאס לך לעצור את עצמך מלדבר בישיבה, להגיד מה שאת חושבת ולהציע רעיונות כי הם לא "מושלמים" או "מדויקים", הזמן לעבוד על זה הוא עכשיו.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Section 6: Course structure */}
        <AnimatedSection delay={200}>
          <section className="mb-16 lg:mb-24">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-16 border border-white/20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-12 text-center" style={{ fontFamily: 'Amatic SC, cursive' }}>
                מהלך המפגשים
              </h2>

              <div className="max-w-4xl mx-auto space-y-6">
                <div className="relative pr-8 pb-8 border-r-4 border-purple-200">
                  <div className="absolute -right-3 top-0 w-6 h-6 bg-purple-300 rounded-full ring-4 ring-purple-100"></div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="text-purple-400 font-bold text-xl mb-3">מפגש 1</div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-right">
                      היכרות ויצירת בסיס בטוח לעבודה משותפת. התנסות בכלים מעולמות האימפרוביזציה וכניסה למרחב האלתור בקצב - פריסטייל ראפ. בואי לגלות את הראפרית הפנימית שלך!
                    </p>
                  </div>
                </div>

                <div className="relative pr-8 pb-8 border-r-4 border-pink-200">
                  <div className="absolute -right-3 top-0 w-6 h-6 bg-pink-300 rounded-full ring-4 ring-pink-100"></div>
                  <div className="bg-gradient-to-br from-pink-50 to-violet-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="text-pink-400 font-bold text-xl mb-3">מפגש 2</div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-right">
                      העמקה במיומנויות הפריסטייל ראפ ככלי לביטוי חופשי בחיי היומיום. היכרות עם מנגנוני הגנה של חרדה מהצלחה והימנעות - ומה אפשר לעשות עם זה?
                    </p>
                  </div>
                </div>

                <div className="relative pr-8 pb-8 border-r-4 border-violet-200">
                  <div className="absolute -right-3 top-0 w-6 h-6 bg-violet-300 rounded-full ring-4 ring-violet-100"></div>
                  <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="text-violet-400 font-bold text-xl mb-3">מפגש 3</div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-right">
                      עבודת עומק דרך מתודולוגית ™Immunity to Change, מודל שפותח על ידי חוקרים מהרווארד,
                      ועוסק בפער בין השינוי שאנחנו רוצות לבין מה שקורה בפועל, ואיך אפשר להתחיל להזיז אותו דרך תרגול והתנסות אמיתית.
                    </p>
                  </div>
                </div>

                <div className="relative pr-8">
                  <div className="absolute -right-3 top-0 w-6 h-6 bg-purple-300 rounded-full ring-4 ring-purple-100"></div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="text-purple-400 font-bold text-xl mb-3">מפגש 4</div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-right">
                      סיכום התהליך ואיך ליישם את הכלים שתרגלנו בחיים המקצועיים והאישיים.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Section 7: Bio Section */}
        <AnimatedSection delay={100}>
          <section id="contact" className="mb-16 lg:mb-24 scroll-mt-28">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-12 text-center" style={{ fontFamily: 'Amatic SC, cursive' }}>
              מי אנחנו?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Dar Shor Bio */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center">
                  <img
                    src="/dar.JPG"
                    alt="Dar Shor"
                    className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover shadow-xl ring-4 ring-purple-200"
                  />
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">דר שור</h3>
                  <p className="text-base text-gray-700 leading-relaxed text-center">
                    עובדת סוציאלת (B.A) ומטפלת בדרמה תרפיה (M.A). עובדת עם ילדים, נוער ומבוגרים בתחומי בריאות הנפש ואוטיזם. מנחת קבוצות וסדנאות אימפרוביזציה ודינמיקה קבוצתית. משתמשת בפריסטייל ראפ ככלי לביטוי חופשי ושיפור הביטחון והזרימה שלי בחיים מאז 2021.
                  </p>
                </div>
              </div>

              {/* Iris Degani Bio */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-violet-400 rounded-full blur-xl opacity-40"></div>
                    <img
                      src="/iris.jpg"
                      alt="Iris Feinmesser"
                      className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-contain bg-white shadow-xl ring-4 ring-pink-200"
                    />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">איריס פיינמסר</h3>
                  <p className="text-base text-gray-700 leading-relaxed text-center">
                   VP HR ו-Executive Coach, עם רקע בפסיכולוגיה (B.A) וחינוך (M.A). מגיעה מעולמות משאבי האנוש והפיתוח הארגוני, ועובדת עם מנהלות.ים וצוותים בתהליכי צמיחה ושינוי. משלבת בעבודתה כלים חווייתיים ויישומיים לחיזוק נוכחות וביטחון.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Recommendations Section */}
        <AnimatedSection delay={100}>
          <section id="recommendations" className="mb-16 lg:mb-24 scroll-mt-28">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-12 text-center" style={{ fontFamily: 'Amatic SC, cursive' }}>
              המלצות
            </h2>
            <Carousel images={recommendationImages} />
          </section>
        </AnimatedSection>

        {/* YouTube Video Embed */}
        <AnimatedSection delay={200}>
          <section className="mb-16 lg:mb-24">
            <div className="mt-10 flex justify-center">
              <div className="relative w-full max-w-3xl h-0" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-3xl shadow-xl"
                  src="https://www.youtube.com/embed/n4dCdtJkZLg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <section id="pricing" className="mb-16 lg:mb-24 scroll-mt-28">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-16 border border-white/20 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8" style={{ fontFamily: 'Amatic SC, cursive' }}>
                כמה זה עולה?
              </h2>
              <div className="max-w-3xl mx-auto space-y-4 text-gray-700 text-lg sm:text-xl leading-relaxed">
                <p className="font-bold text-2xl sm:text-3xl text-purple-600">התהליך בעלות 1380 ש"ח.</p>
                <p className="italic">*מחיר הרשמה מוקדמת לנרשמות עד 22/4 - 1250 ש"ח.</p>
                <p className="text-base">*מספר המשתתפות מוגבל על מנת להבטיח מקסימום אינטימיות ומקום לכל אחת לבטא את עצמה.</p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Final CTA Section */}
        <AnimatedSection delay={200}>
          <section className="mb-16 lg:mb-24">
            <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-violet-300 rounded-3xl shadow-2xl p-10 sm:p-12 lg:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                מוכנות להתחיל?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                הצטרפי אלינו למסע מרגש של גילוי עצמי, אומץ וביטוי חופשי
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://wa.me/972547534071?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%9C%D7%92%D7%91%D7%99%20%D7%A7%D7%95%D7%A8%D7%A1%20%D7%A4%D7%A8%D7%99%D7%A1%D7%98%D7%99%D7%99%D7%9C%20%D7%9C%D7%A0%D7%A9%D7%99%D7%9D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-purple-400 rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <FaWhatsapp size={24} />
                  <span>שלחי הודעת וואטסאפ</span>
                </a>
                <a
                  href="mailto:darzszor@gmail.com"
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white rounded-2xl font-bold text-lg shadow-lg hover:bg-white hover:text-purple-400 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <FaEnvelope size={24} />
                  <span>שלחי אימייל</span>
                </a>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      {/* Modern Footer */}
      <footer className="bg-white/80 backdrop-blur-xl border-t border-white/20 py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-30"></div>
              <img
                src="/logo.png"
                alt="FREESTYLE - Women's Edition"
                className="relative h-20 w-20 rounded-full object-cover shadow-lg ring-2 ring-purple-200"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                FREESTYLE - Women's Edition
              </h3>
              <p className="text-gray-600 text-sm">© 2026 All rights reserved</p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://wa.me/972547534071?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%9C%D7%92%D7%91%D7%99%20%D7%A7%D7%95%D7%A8%D7%A1%20%D7%A4%D7%A8%D7%99%D7%A1%D7%98%D7%99%D7%99%D7%9C%20%D7%9C%D7%A0%D7%A9%D7%99%D7%9D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-500 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="mailto:darzszor@gmail.com"
                className="text-gray-600 hover:text-red-500 transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
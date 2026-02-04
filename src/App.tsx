import React, { type ReactNode, useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

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

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50 font-sans text-gray-800 min-h-screen">
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
              {/* Logo */}
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="FREESTYLE - Women's Edition"
                  className="h-14 w-14 lg:h-16 lg:w-16 rounded-full object-cover shadow-lg ring-2 ring-purple-200 hover:ring-purple-400 transition-all duration-300 hover:scale-105"
                />
                <h1 className="hidden sm:block text-lg lg:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  FREESTYLE
                </h1>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-2">
                <a
                  href="#about"
                  onClick={(e) => smoothScroll(e, 'about')}
                  className="group relative px-5 py-2.5 text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium"
                >
                  <span className="relative z-10">מה בקורס</span>
                  <div className="absolute inset-0 bg-purple-100 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>
                <a
                  href="#why-rap"
                  onClick={(e) => smoothScroll(e, 'why-rap')}
                  className="group relative px-5 py-2.5 text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium"
                >
                  <span className="relative z-10">למה ראפ</span>
                  <div className="absolute inset-0 bg-purple-100 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>
                <a
                  href="#who-for"
                  onClick={(e) => smoothScroll(e, 'who-for')}
                  className="group relative px-5 py-2.5 text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium"
                >
                  <span className="relative z-10">למי זה מתאים</span>
                  <div className="absolute inset-0 bg-purple-100 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => smoothScroll(e, 'contact')}
                  className="group relative px-5 py-2.5 text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium"
                >
                  <span className="relative z-10">מי אנחנו</span>
                  <div className="absolute inset-0 bg-purple-100 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>
                <a
                  href="https://wa.me/972547534071?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%9C%D7%92%D7%91%D7%99%20%D7%A7%D7%95%D7%A8%D7%A1%20%D7%A4%D7%A8%D7%99%D7%A1%D7%98%D7%99%D7%99%D7%9C%20%D7%9C%D7%A0%D7%A9%D7%99%D7%9D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  הצטרפי עכשיו
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors duration-300"
                aria-label="תפריט"
              >
                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
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
              className="px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300 font-medium text-center"
            >
              מה בקורס
            </a>
            <a
              href="#why-rap"
              onClick={(e) => smoothScroll(e, 'why-rap')}
              className="px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300 font-medium text-center"
            >
              למה ראפ
            </a>
            <a
              href="#who-for"
              onClick={(e) => smoothScroll(e, 'who-for')}
              className="px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300 font-medium text-center"
            >
              למי זה מתאים
            </a>
            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, 'contact')}
              className="px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300 font-medium text-center"
            >
              מי אנחנו
            </a>
            <a
              href="https://wa.me/972547534071?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%9C%D7%92%D7%91%D7%99%20%D7%A7%D7%95%D7%A8%D7%A1%20%D7%A4%D7%A8%D7%99%D7%A1%D7%98%D7%99%D7%99%D7%9C%20%D7%9C%D7%A0%D7%A9%D7%99%D7%9D"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-center shadow-lg hover:shadow-xl transition-all duration-300"
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
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-pink-800/90 to-violet-900/90"></div>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: 'url(/main.jpeg)' }}
            ></div>

            <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
              {/* Title */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
                FREESTYLE
                <br />
                <span className="bg-gradient-to-r from-pink-300 to-violet-300 bg-clip-text text-transparent">
                  women's edition
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl font-bold text-pink-200 mb-8 animate-pulse">
                לחצו והצטרפו אלינו!
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
                <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed">
                  תהליך עומק של 4 מפגשים בקבוצה נשית ואינטימית, בהם תחקרי בצורה חווייתית את הדפוסים שמעכבים אותך בחיים המקצועיים והאישיים, תתמודדי פנים אל פנים עם הפחד "לטעות" ולתפוס מקום - ותקבלי שחרור אמיתי וחופש לבטא יותר בחופשיות את מי שאת בכל מרחבי חייך.
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-white font-semibold bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  מסע אקסטרים לאמיצות, שמשלב אימפרוביזציה, פריסטייל ראפ וכלים מבוססי מחקר מעולמות הדרמה תרפיה והאימון העסקי.
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
                    סטודיו מונטי9, בית שמאי 9 תל אביב
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-8 text-center">
                אז מה קורה בקורס בעצם?
              </h2>

              <div className="max-w-4xl mx-auto space-y-6 text-right">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  הקורס מיועד לנשים מובילות, שעובדות עם אנשים ומול אנשים בתחומים שונים - ומרגישות שהפרפקציוניזם, הפחד לטעות והביקורת העצמית גורמים להן לעצור את עצמן - גם כשהן יודעות טוב מאוד שיש להן המון מה לתת.
                </p>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 my-8">
                  <p className="text-lg sm:text-xl font-bold text-gray-900 text-center">
                    זו לא סדנת דיבור מול קהל!
                  </p>
                </div>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  זה תהליך בו דרך התנסות באימפרוביזציה ופריסטייל ראפ, בקבוצה אינטימית ובטוחה ובקצב הדרגתי, נחקור את הדפוסים שמעכבים אותנו, ונתנסה בדרך פעולה אחרת - להעיז לצאת מאזור הנוחות, גם כשהתוצאה אינה ברורה או מושלמת. אנחנו מזמינות אתכן לעבוד על הפחדים והחסמים שלכן, בתהליך עומק חווייתי ועוצמתי.
                </p>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  העבודה בסדנה נשענת גם על גישות מחקריות מעולם הלמידה הבוגרת (טיפול בדרמה תרפיה, CBT) כולל חשיבה שפותחה ב־Harvard University, שעוסקת בפער בין השינוי שאנחנו רוצות לבין מה שקורה בפועל, ואיך אפשר להתחיל להניע שינויים בחיינו דרך התנסות אמיתית.
                </p>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  במהלך הקורס תקבלי משימות בית שיניעו אותך לשינויים ממשיים בחייך המקצועיים והאישיים. הקורס ילווה ע"י קבוצת וואסטפ בה יישלחו תרגולים שבועיים כדי לתרגל את הכלים מחוץ למרחב הקורס.
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
        <AnimatedSection delay={200}>
          <section id="logo-section" className="my-16 lg:my-24 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-30 animate-breathe"></div>
              <img
                src="/logo.png"
                alt="FREESTYLE - Women's Edition"
                className="relative h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 rounded-full object-cover shadow-2xl ring-4 ring-white/50 animate-breathe"
              />
            </div>
          </section>
        </AnimatedSection>

        {/* Section 3: Why freestyle rap? */}
        <AnimatedSection delay={100}>
          <section id="why-rap" className="mb-16 lg:mb-24 scroll-mt-28">
            <div className="max-w-4xl mx-auto text-right">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text mb-8 text-center">
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
                    <p className="text-gray-800 font-semibold">להתמודד עם חוסר וודאות, שינויים ומצבים שאת לא מוכנה אליהם</p>
                  </div>
                  <div className="bg-gradient-to-br from-violet-100 to-purple-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <p className="text-gray-800 font-semibold">לקחת מקום ולהיות באור הזרקורים</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <p className="text-gray-800 font-semibold">לחזק את תחושת המסוגלות דרך התמודדות עם דבר חדש שמעולם לא ניסית</p>
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-8 text-center">
                למה רק נשים?
              </h2>

              <div className="max-w-4xl mx-auto space-y-6 text-right">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  אחרי עשרות סדנאות מעורבות, החלטנו ליצור מרחב לנשים - כי פשוט קורה משהו מיוחד במרחב נשי בלבד. מרחב כזה שמחזק את הידיעה ש"אני לא לבד" ומאפשר שיח פתוח על נושאים שלעיתים מושתקים או מעוררים אי נוחות במרחב הכללי. במרחבים נשיים, נשים מדווחות על ירידה ברמת החרדה ועלייה בביטחון העצמי ובחופש לבטא את עצמן.
                </p>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  מחקרים מראים שנשים נוטות לבקר את עצמן ולפקפק ביכולות שלהן יותר מגברים, ולהימנע מלקיחת סיכונים וביטוי עצמי חופשי ומשוחרר. וזה מבאס, כי אנחנו מדהימות! בואו נעבוד על זה ביחד.
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="mt-10 flex justify-center">
                <div className="w-full max-w-3xl h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-purple-200 via-pink-200 to-violet-200 rounded-3xl shadow-xl flex items-center justify-center overflow-hidden">
                  <span className="text-gray-500 text-lg font-semibold">תמונה</span>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Section 5: Who is the course for? */}
        <AnimatedSection delay={100}>
          <section id="who-for" className="mb-16 lg:mb-24 scroll-mt-28">
            <div className="max-w-4xl mx-auto text-right">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text mb-8 text-center">
                למי הקורס מתאים?
              </h2>

              <div className="space-y-6">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  נשים שעובדים עם ומול א.נשים. מנהלות, יזמיות, מובילות תחום, מנחות קבוצות, מנהלות משאבי אנוש או כל מי שרוצה לשפר את יכולות הביטוי העצמי, לתפוס יותר מקום במרחב ולתקשר את עצמן בביטחון גבוה.
                </p>

                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl">
                  <p className="text-lg sm:text-xl text-white leading-relaxed font-semibold text-center">
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-12 text-center">
                מהלך המפגשים
              </h2>

              <div className="max-w-4xl mx-auto space-y-6">
                <div className="relative pr-8 pb-8 border-r-4 border-purple-300">
                  <div className="absolute -right-3 top-0 w-6 h-6 bg-purple-500 rounded-full ring-4 ring-purple-200"></div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="text-purple-600 font-bold text-xl mb-3">מפגש 1</div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-right">
                      היכרות ויצירת בסיס בטוח לעבודה משותפת. היכרות עם כלים בסיסיים מעולמות האימפרוביזציה וכניסה למרחב האלתור בקצב - פריסטייל ראפ. בואי לגלות את הראפרית הפנימית שלך!
                    </p>
                  </div>
                </div>

                <div className="relative pr-8 pb-8 border-r-4 border-pink-300">
                  <div className="absolute -right-3 top-0 w-6 h-6 bg-pink-500 rounded-full ring-4 ring-pink-200"></div>
                  <div className="bg-gradient-to-br from-pink-50 to-violet-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="text-pink-600 font-bold text-xl mb-3">מפגש 2</div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-right">
                      העמקה במיומנויות הפריסטייל ראפ ככלי לביטוי חופשי בחיי היומיום. היכרות עם מנגנוני הגנה של חרדה מהצלחה והימנעות - ומה אפשר לעשות עם זה?
                    </p>
                  </div>
                </div>

                <div className="relative pr-8 pb-8 border-r-4 border-violet-300">
                  <div className="absolute -right-3 top-0 w-6 h-6 bg-violet-500 rounded-full ring-4 ring-violet-200"></div>
                  <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="text-violet-600 font-bold text-xl mb-3">מפגש 3</div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-right">
                      עבודת עומק דרך מפות Immunity to change, חשיבה שפותחה ב־Harvard University, שעוסקת בפער בין השינוי שאנחנו רוצות לבין מה שקורה בפועל, ואיך אפשר להתחיל להזיז אותו דרך תרגול והתנסות אמיתית.
                    </p>
                  </div>
                </div>

                <div className="relative pr-8">
                  <div className="absolute -right-3 top-0 w-6 h-6 bg-purple-500 rounded-full ring-4 ring-purple-200"></div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="text-purple-600 font-bold text-xl mb-3">מפגש 4</div>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-12 text-center">
              מי אנחנו?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Dar Shor Bio */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-40"></div>
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center shadow-xl ring-4 ring-white/50">
                      <span className="text-gray-500 font-semibold">Dar's Photo</span>
                    </div>
                  </div>
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
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-br from-pink-200 to-violet-200 rounded-full flex items-center justify-center shadow-xl ring-4 ring-white/50">
                      <span className="text-gray-500 font-semibold">Iris's Photo</span>
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">איריס דגני</h3>
                  <p className="text-base text-gray-700 leading-relaxed text-center">
                    ….
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Final CTA Section */}
        <AnimatedSection delay={200}>
          <section className="mb-16 lg:mb-24">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 rounded-3xl shadow-2xl p-10 sm:p-12 lg:p-16 text-center">
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
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <FaWhatsapp size={24} />
                  <span>שלחי הודעת וואטסאפ</span>
                </a>
                <a
                  href="mailto:darzszor@gmail.com"
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white rounded-2xl font-bold text-lg shadow-lg hover:bg-white hover:text-purple-600 hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
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
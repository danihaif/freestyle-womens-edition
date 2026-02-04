import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};


const App: React.FC = () => {
  return (
    <div className="bg-slate-50 font-sans text-gray-800">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">FREESTYLE - Women’s Edition</h1>
          <p className="text-lg text-gray-500">תהליך עומק, אימפרוביזציה ופריסטייל ראפ לנשים</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 text-center">
        <AnimatedSection>
          {/* Section 1: Hero */}
          <section className="mb-24">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight mb-6">FREESTYLE - women’s edition</h2>
            <a
              href="https://wa.me/972547534071?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%9C%D7%92%D7%91%D7%99%20%D7%A7%D7%95%D7%A8%D7%A1%20%D7%A4%D7%A8%D7%99%D7%A1%D7%98%D7%99%D7%99%D7%9C%20%D7%9C%D7%A0%D7%A9%D7%99%D7%9D%E2%80%9D"
              className="bg-teal-500 text-white font-bold rounded-lg py-3 px-8 hover:bg-teal-600 transition duration-300 inline-block mb-10"
              target="_blank"
              rel="noopener noreferrer"
            >
              לחצו והצטרפו אלינו!
            </a>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
              תהליך עומק של 4 מפגשים בקבוצה נשית ואינטימית, בהם תחקרי בצורה חווייתית את הדפוסים שמעכבים אותך בחיים המקצועיים והאישיים, תתמודדי פנים אל פנים עם הפחד "לטעות" ולתפוס מקום - ותקבלי שחרור אמיתי וחופש לבטא יותר בחופשיות את מי שאת בכל מרחבי חייך.
            </p>
            <p className="text-gray-800 font-semibold text-lg max-w-3xl mx-auto mb-10">
              מסע אקסטרים לאמיצות, שמשלב אימפרוביזציה, פריסטייל ראפ וכלים מבוססי מחקר מעולמות הדרמה תרפיה והאימון העסקי.
            </p>
            <div className="text-gray-500 font-semibold mb-12">
              <p>12.4 | 19.4 | 26.4 | 3.5</p>
              <p>ימי ראשון 19:30-22:00</p>
              <p>סטודיו מונטי9, בית שמאי 9 תל אביב</p>
            </div>
            <div className="flex justify-center">
               <img src="/main.jpeg" alt="Workshop" className="rounded-full object-cover w-80 h-80 mx-auto" />
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          {/* Section 2: What happens in the course? */}
          <section className="bg-white rounded-lg shadow-lg p-10 mb-20">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">אז מה קורה בקורס בעצם?</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-4">
              הקורס מיועד לנשים מובילות, שעובדות עם אנשים ומול אנשים בתחומים שונים - ומרגישות שהפרפקציוניזם, הפחד לטעות והביקורת העצמית גורמים להן לעצור את עצמן - גם כשהן יודעות טוב מאוד שיש להן המון מה לתת.
            </p>
            <p className="text-gray-800 font-bold text-lg max-w-3xl mx-auto mb-4">
              זו לא סדנת דיבור מול קהל!
            </p>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              זה תהליך בו דרך התנסות באימפרוביזציה ופריסטייל ראפ, בקבוצה אינטימית ובטוחה ובקצב הדרגתי, נחקור את הדפוסים שמעכבים אותנו, ונתנסה בדרך פעולה אחרת - להעיז לצאת מאזור הנוחות, גם כשהתוצאה אינה ברורה או מושלמת. אנחנו מזמינות אתכן לעבוד על הפחדים והחסמים שלכן, בתהליך עומק חווייתי ועוצמתי.
              העבודה בסדנה נשענת גם על גישות מחקריות מעולם הלמידה הבוגרת (טיפול בדרמה תרפיה, CBT) כולל חשיבה שפותחה ב־Harvard University, שעוסקת בפער בין השינוי שאנחנו רוצות לבין מה שקורה בפועל, ואיך אפשר להתחיל להניע שינויים בחיינו דרך התנסות אמיתית.
              במהלך הקורס תקבלי משימות בית שיניעו אותך לשינויים ממשיים בחייך המקצועיים והאישיים. הקורס ילווה ע"י קבוצת וואסטפ בה יישלחו תרגולים שבועיים כדי לתרגל את הכלים מחוץ למרחב הקורס.
            </p>
            <a
              href="https://wa.me/972547534071?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%9C%D7%92%D7%91%D7%99%20%D7%A7%D7%95%D7%A8%D7%A1%20%D7%A4%D7%A8%D7%99%D7%A1%D7%98%D7%99%D7%99%D7%9C%20%D7%9C%D7%A0%D7%A9%D7%99%D7%9D%E2%80%9D"
              className="text-teal-600 font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              לחצו והצטרפו אלינו!
            </a>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          {/* Section 3: Why freestyle rap? */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">למה פריסטייל ראפ?</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-4">
              קודם כל כי זה מגניב.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
              אבל ברצינות, כי זה כלי חדש ומאתגר, דרכו תפגשי את הפחד של "לא להיות מושלמת" - כי איך אפשר מושלם כשהכל מאולתר? ההתנסות באלתור מאפשרת לך:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-right mb-6">
              <li>לחזק את שריר הFLOW שנדרש מאיתנו ביומיום</li>
              <li>להתמודד עם חוסר וודאות, שינויים ומצבים שאת לא מוכנה אליהם</li>
              <li>לקחת מקום ולהיות באור הזרקורים</li>
              <li>לחזק את תחושת המסוגלות דרך התמודדות עם דבר חדש שמעולם לא ניסית</li>
            </ul>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              וכל זה בתהליך הדרגתי, בקבוצה בטוחה, תומכת ומפרגנת, בה את יכולה להעיז ולהתנסות.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          {/* Section 4: Why only women? */}
          <section className="bg-white rounded-lg shadow-lg p-10 mb-20">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">למה רק נשים?</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
              אחרי עשרות סדנאות מעורבות, החלטנו ליצור מרחב לנשים - כי פשוט קורה משהו מיוחד במרחב נשי בלבד. מרחב כזה שמחזק את הידיעה ש"אני לא לבד" ומאפשר שיח פתוח על נושאים שלעיתים מושתקים או מעוררים אי נוחות במרחב הכללי. במרחבים נשיים, נשים מדווחות על ירידה ברמת החרדה ועלייה בביטחון העצמי ובחופש לבטא את עצמן.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              מחקרים מראים שנשים נוטות לבקר את עצמן ולפקפק ביכולות שלהן יותר מגברים, ולהימנע מלקיחת סיכונים וביטוי עצמי חופשי ומשוחרר. וזה מבאס, כי אנחנו מדהימות! בואו נעבוד על זה ביחד.
            </p>
            <div className="flex justify-center">
              <div className="w-full max-w-2xl h-80 bg-slate-100 rounded-lg shadow-md flex items-center justify-center">
                <span className="text-gray-400">תמונה</span>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          {/* Section 5: Who is the course for? */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">למי הקורס מתאים?</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-4">
              נשים שעובדים עם ומול א.נשים. מנהלות, יזמיות, מובילות תחום, מנחות קבוצות, מנהלות משאבי אנוש או כל מי שרוצה לשפר את יכולות הביטוי העצמי, לתפוס יותר מקום במרחב ולתקשר את עצמן בביטחון גבוה.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              אם נמאס לך לעצור את עצמך מלדבר בישיבה, להגיד מה שאת חושבת ולהציע רעיונות כי הם לא "מושלמים" או "מדויקים", הזמן לעבוד על זה הוא עכשיו.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          {/* Section 6: Course structure */}
          <section className="bg-white rounded-lg shadow-lg p-10 mb-20">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">מהלך המפגשים:</h2>
            <div className="max-w-3xl mx-auto text-right space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                היכרות ויצירת בסיס בטוח לעבודה משותפת. היכרות עם כלים בסיסיים מעולמות האימפרוביזציה וכניסה למרחב האלתור בקצב - פריסטייל ראפ. בואי לגלות את הראפרית הפנימית שלך!
              </p>
              <p>
                העמקה במיומנויות הפריסטייל ראפ ככלי לביטוי חופשי בחיי היומיום. היכרות עם מנגנוני הגנה של חרדה מהצלחה והימנעות - ומה אפשר לעשות עם זה?
              </p>
              <p>
                עבודת עומק דרך מפות Immunity to change, חשיבה שפותחה ב־Harvard University, שעוסקת בפער בין השינוי שאנחנו רוצות לבין מה שקורה בפועל, ואיך אפשר להתחיל להזיז אותו דרך תרגול והתנסות אמיתית.
              </p>
              <p>
                סיכום התהליך ואיך ליישם את הכלים שתרגלנו בחיים המקצועיים והאישיים.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          {/* Section 7: Bio Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold text-gray-800 mb-10">מי אנחנו?</h2>
            <div className="flex flex-col md:flex-row justify-center items-start gap-12">

              {/* Dar Shor Bio */}
              <div className="md:w-1/3 text-center">
                <div className="w-48 h-48 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Dar's Photo</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">דר שור</h3>
                <p className="text-gray-600 leading-relaxed">
                  עובדת סוציאלת (B.A) ומטפלת בדרמה תרפיה (M.A). עובדת עם ילדים, נוער ומבוגרים בתחומי בריאות הנפש ואוטיזם. מנחת קבוצות וסדנאות אימפרוביזציה ודינמיקה קבוצתית. משתמשת בפריסטייל ראפ ככלי לביטוי חופשי ושיפור הביטחון והזרימה שלי בחיים מאז 2021.
                </p>
              </div>

              {/* Iris Degani Bio */}
              <div className="md:w-1/3 text-center">
                <div className="w-48 h-48 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Iris's Photo</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">איריס דגני</h3>
                <p className="text-gray-600 leading-relaxed">
                  ….
                </p>
              </div>

            </div>
          </section>
        </AnimatedSection>
      </main>

      <footer className="bg-white mt-12 py-6">
          <div className="container mx-auto px-6">
              <p className="text-center text-gray-500">© 2026 FREESTYLE - Women’s Edition. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
};

export default App;
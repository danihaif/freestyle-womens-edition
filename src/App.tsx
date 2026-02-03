import React from 'react';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 text-center">
          <h1 className="text-3xl font-bold text-gray-800">FREESTYLE - Women’s Edition</h1>
          <p className="text-xl text-gray-600">תהליך עומק, אימפרוביזציה ופריסטייל ראפ לנשים</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10 text-center">
        {/* Section 1: Hero */}
        <section className="mb-16">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-4">FREESTYLE - women’s edition</h1>
          <a
            href="#signup"
            className="bg-purple-600 text-white font-bold rounded-full py-4 px-8 hover:bg-purple-700 transition duration-300 inline-block mb-8"
          >
            לחצו והצטרפו אלינו!
          </a>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
            תהליך עומק של 4 מפגשים בקבוצה נשית ואינטימית, בהם תחקרי בצורה חווייתית את הדפוסים שמעכבים אותך בחיים המקצועיים והאישיים, תתמודדי פנים אל פנים עם הפחד "לטעות" ולתפוס מקום - ותקבלי שחרור אמיתי וחופש לבטא יותר בחופשיות את מי שאת בכל מרחבי חייך.
          </p>
          <p className="text-gray-800 font-semibold text-lg max-w-3xl mx-auto mb-8">
            מסע אקסטרים לאמיצות, שמשלב אימפרוביזציה, פריסטייל ראפ וכלים מבוססי מחקר מעולמות הדרמה תרפיה והאימון העסקי.
          </p>
          <div className="text-gray-600 font-bold mb-8">
            <p>12.4 | 19.4 | 26.4 | 3.5</p>
            <p>ימי ראשון 19:30-22:00</p>
            <p>סטודיו מונטי9, בית שמאי 9 תל אביב</p>
          </div>
          <div className="flex justify-center">
             <img src="/main.jpeg" alt="Workshop" className="rounded-full object-cover w-80 h-80 mx-auto" />
          </div>
        </section>

        {/* Section 2: What happens in the course? */}
        <section className="bg-white rounded-lg shadow p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">אז מה קורה בקורס בעצם?</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-4">
            הקורס מיועד לנשים מובילות, שעובדות עם אנשים ומול אנשים בתחומים שונים - ומרגישות שהפרפקציוניזם, הפחד לטעות והביקורת העצמית גורמים להן לעצור את עצמן - גם כשהן יודעות טוב מאוד שיש להן המון מה לתת.
          </p>
          <p className="text-gray-800 font-semibold text-lg max-w-3xl mx-auto mb-4">
            זו לא סדנת דיבור מול קהל!
          </p>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
            זה תהליך בו דרך התנסות באימפרוביזציה ופריסטייל ראפ, בקבוצה אינטימית ובטוחה ובקצב הדרגתי, נחקור את הדפוסים שמעכבים אותנו, ונתנסה בדרך פעולה אחרת - להעיז לצאת מאזור הנוחות, גם כשהתוצאה אינה ברורה או מושלמת. אנחנו מזמינות אתכן לעבוד על הפחדים והחסמים שלכן, בתהליך עומק חווייתי ועוצמתי.
            העבודה בסדנה נשענת גם על גישות מחקריות מעולם הלמידה הבוגרת (טיפול בדרמה תרפיה, CBT) כולל חשיבה שפותחה ב־Harvard University, שעוסקת בפער בין השינוי שאנחנו רוצות לבין מה שקורה בפועל, ואיך אפשר להתחיל להניע שינויים בחיינו דרך התנסות אמיתית.
            במהלך הקורס תקבלי משימות בית שיניעו אותך לשינויים ממשיים בחייך המקצועיים והאישיים. הקורס ילווה ע"י קבוצת וואסטפ בה יישלחו תרגולים שבועיים כדי לתרגל את הכלים מחוץ למרחב הקורס.
          </p>
          <a
            href="#signup"
            className="text-purple-600 font-bold hover:underline"
          >
            לחצו והצטרפו אלינו!
          </a>
        </section>

        {/* Section 3: Why freestyle rap? */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">למה פריסטייל ראפ?</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-4">
            קודם כל כי זה מגניב.
          </p>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
            אבל ברצינות, כי זה כלי חדש ומאתגר, דרכו תפגשי את הפחד של "לא להיות מושלמת" - כי איך אפשר מושלם כשהכל מאולתר? ההתנסות באלתור מאפשרת לך:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-lg max-w-3xl mx-auto text-right mb-6">
            <li>לחזק את שריר הFLOW שנדרש מאיתנו ביומיום</li>
            <li>להתמודד עם חוסר וודאות, שינויים ומצבים שאת לא מוכנה אליהם</li>
            <li>לקחת מקום ולהיות באור הזרקורים</li>
            <li>לחזק את תחושת המסוגלות דרך התמודדות עם דבר חדש שמעולם לא ניסית</li>
          </ul>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            וכל זה בתהליך הדרגתי, בקבוצה בטוחה, תומכת ומפרגנת, בה את יכולה להעיז ולהתנסות.
          </p>
        </section>

        {/* Section 4: Why only women? */}
        <section className="bg-white rounded-lg shadow p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">למה רק נשים?</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
            אחרי עשרות סדנאות מעורבות, החלטנו ליצור מרחב לנשים - כי פשוט קורה משהו מיוחד במרחב נשי בלבד. מרחב כזה שמחזק את הידיעה ש"אני לא לבד" ומאפשר שיח פתוח על נושאים שלעיתים מושתקים או מעוררים אי נוחות במרחב הכללי. במרחבים נשיים, נשים מדווחות על ירידה ברמת החרדה ועלייה בביטחון העצמי ובחופש לבטא את עצמן.
          </p>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            מחקרים מראים שנשים נוטות לבקר את עצמן ולפקפק ביכולות שלהן יותר מגברים, ולהימנע מלקיחת סיכונים וביטוי עצמי חופשי ומשוחרר. וזה מבאס, כי אנחנו מדהימות! בואו נעבוד על זה ביחד.
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl h-80 bg-gray-300 rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-gray-500">תמונה</span>
            </div>
          </div>
        </section>

        {/* Section 5: Who is the course for? */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">למי הקורס מתאים?</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-4">
            נשים שעובדים עם ומול א.נשים. מנהלות, יזמיות, מובילות תחום, מנחות קבוצות, מנהלות משאבי אנוש או כל מי שרוצה לשפר את יכולות הביטוי העצמי, לתפוס יותר מקום במרחב ולתקשר את עצמן בביטחון גבוה.
          </p>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            אם נמאס לך לעצור את עצמך מלדבר בישיבה, להגיד מה שאת חושבת ולהציע רעיונות כי הם לא "מושלמים" או "מדויקים", הזמן לעבוד על זה הוא עכשיו.
          </p>
        </section>

        {/* Section 6: Course structure */}
        <section className="bg-white rounded-lg shadow p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">מהלך המפגשים:</h2>
          <div className="max-w-3xl mx-auto text-right">
            <p className="text-gray-600 text-lg mb-4">
              היכרות ויצירת בסיס בטוח לעבודה משותפת. היכרות עם כלים בסיסיים מעולמות האימפרוביזציה וכניסה למרחב האלתור בקצב - פריסטייל ראפ. בואי לגלות את הראפרית הפנימית שלך!
            </p>
            <p className="text-gray-600 text-lg mb-4">
              העמקה במיומנויות הפריסטייל ראפ ככלי לביטוי חופשי בחיי היומיום. היכרות עם מנגנוני הגנה של חרדה מהצלחה והימנעות - ומה אפשר לעשות עם זה?
            </p>
            <p className="text-gray-600 text-lg mb-4">
              עבודת עומק דרך מפות Immunity to change, חשיבה שפותחה ב־Harvard University, שעוסקת בפער בין השינוי שאנחנו רוצות לבין מה שקורה בפועל, ואיך אפשר להתחיל להזיז אותו דרך תרגול והתנסות אמיתית.
            </p>
            <p className="text-gray-600 text-lg">
              סיכום התהליך ואיך ליישם את הכלים שתרגלנו בחיים המקצועיים והאישיים.
            </p>
          </div>
        </section>

        {/* Section 7: Bio Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">מי אנחנו?</h2>
          <div className="flex flex-col md:flex-row justify-center items-start gap-12">

            {/* Dar Shor Bio */}
            <div className="md:w-1/3 text-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Dar's Photo</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">דר שור</h3>
              <p className="text-gray-600">
                עובדת סוציאלת (B.A) ומטפלת בדרמה תרפיה (M.A). עובדת עם ילדים, נוער ומבוגרים בתחומי בריאות הנפש ואוטיזם. מנחת קבוצות וסדנאות אימפרוביזציה ודינמיקה קבוצתית. משתמשת בפריסטייל ראפ ככלי לביטוי חופשי ושיפור הביטחון והזרימה שלי בחיים מאז 2021.
              </p>
            </div>

            {/* Iris Degani Bio */}
            <div className="md:w-1/3 text-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Iris's Photo</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">איריס דגני</h3>
              <p className="text-gray-600">
                ….
              </p>
            </div>

          </div>
        </section>
      </main>

      <footer className="bg-white mt-12">
          <div className="container mx-auto px-6 py-4">
              <p className="text-center text-gray-600">© 2026 FREESTYLE - Women’s Edition. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
};

export default App;
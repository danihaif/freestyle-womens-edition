import React from 'react';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-6 py-4 text-center">
          <h1 className="text-3xl font-bold text-gray-800">FREESTYLE - Women’s Edition</h1>
          <p className="text-xl text-gray-600">תהליך עומק, אימפרוביזציה ופריסטייל ראפ לנשים</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row-reverse items-center justify-between mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center">
            <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
              שחררי את הקול שלך, תמצאי את הזרימה
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              תהליך עומק של 4 מפגשים בקבוצה נשית ואינטימית. בסדנה זו תחקרי בצורה חווייתית את הדפוסים שמעכבים אותך, תתמודדי עם הפחד "לטעות" ותקבלי שחרור אמיתי וחופש לבטא את מי שאת.
            </p>
            <a
              href="#signup"
              className="bg-purple-600 text-white font-bold rounded-full py-4 px-8 hover:bg-purple-700 transition duration-300"
            >
              לחצו והצטרפו אלינו!
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-80 h-80 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-500">Photo Placeholder</span>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="bg-white rounded-lg shadow p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">מי אני?</h3>
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
               <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center">
                   <span className="text-gray-500">Dar's Photo</span>
               </div>
            </div>
            <div className="md:w-2/3 md:pr-8 text-center">
              <h4 className="text-xl font-bold text-gray-800">דר שור</h4>
              <p className="text-gray-600 mb-4">
                עובדת סוציאלית (B.A) ומטפלת בדרמה תרפיה (M.A).
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>עובדת עם ילדים, נוער והורים בתחומי בריאות הנפש ואוטיזם.</li>
                <li>מנחת קבוצות וסדנאות אימפרוביזציה ודינמיקה קבוצתית.</li>
                <li>משתמשת בפריסטייל ראפ ככלי לביטוי חופשי ושיפור הביטחון והזרימה בחיים מאז 2021.</li>
              </ul>
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
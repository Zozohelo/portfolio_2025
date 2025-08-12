

const Servies = () =>{
  return (
    <section id='szolgaltatasok' className="max-w-6xl mx-auto px-6 py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Szolgáltatások</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Teljes körű szoftver- és IT-szolgáltatások — webfejlesztéstől az otthoni/PC szervizelésig. Kíváncsi vagy a részletekre? Kérj árajánlatot!</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Web Development */}
        <article className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Web Development</h3>
              <p className="mt-1 text-sm text-gray-600">Modern, reszponzív weboldalak és webalkalmazások.</p>
            </div>
            <div className="flex gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">Egyszerű</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">Összetett</span>
            </div>
          </div>

          <ul className="mt-4 space-y-3 text-gray-700 text-sm">
            <li>Landing oldalak, portfóliók, marketing oldalak — gyors, SEO-barát és reszponzív.</li>
            <li>Interaktív webalkalmazások React/Vite + Tailwind / Laravel backend integrációval.</li>
            <li>Teljes fejlesztési folyamat: tervezés, fejlesztés, tesztelés, deploy.</li>
          </ul>

          <div className="mt-6 flex items-center justify-between">
            <a href="#elerhetoseg" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700">Árajánlat kérés</a>
            <span className="text-xs text-gray-500">Egyedi megoldásokra ár</span>
          </div>
        </article>

        {/* PC / Laptop Service */}
        <article className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
          <div className="flex items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Laptop / PC alap szerviz</h3>
              <p className="mt-1 text-sm text-gray-600">Gyors és megbízható hardver- és szoftversegítség otthoni és irodai gépekhez.</p>
            </div>
          </div>

          <ul className="mt-4 space-y-2 text-gray-700 text-sm">
            <li>Összeszerelés és alkatrészcserék (HDD → SSD, RAM bővítés, táp csere)</li>
            <li>Operációs rendszer telepítés, frissítés, driverek és alap szoftverek beállítása</li>
            <li>Adatmentési és visszaállítási segédlet, alap hibakeresés</li>
          </ul>

          <div className="mt-6 flex items-center justify-between">
            <a href="#elerhetoseg" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700">Szerviz igénylése</a>
            <span className="text-xs text-gray-500">Fix csomagok / Óradíj</span>
          </div>
        </article>
      </div>
    </section>
  )
}


export default Servies
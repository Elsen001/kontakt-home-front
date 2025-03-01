"use client"
import React from 'react'

const Location = ({ selectedLocation }: { selectedLocation: string }) => {
  const stores = [
    {
      name: "Vurğun Residence",
      address: "Nəsimi r-nu, S. Vurğun küç. 110 (Bakı Dövlət Sirkiniyanı)",
      workingHours: "10:00-dan 21:00-dək",
    },
    {
      name: "Dəniz Mall",
      address: "Səbail r-nu, Neftçilər pr. 26 A, Dəniz Mall (4-cü mərtəbə)",
      workingHours: "10:00-dan 22:00-dək",
    },
    {
      name: "Gənclik Mall",
      address: "Nərimanov r-nu, F. X. Xoyski pr., Gənclik Mall (-1-ci mərtəbə)",
      workingHours: "10:00-dan 22:00-dək",
    },
    {
      name: "SMART '28 may metrosu'",
      address: "Nəsimi r-nu, Fizuli küç. 47-55",
      workingHours: "10:00-dan 21:00-dək",
    },
    {
      name: "Binə",
      address: "Xəzər r-nu, Binə qəs., Əli İsazadə küç., giriş 92",
      workingHours: "10:00-dan 21:00-dək",
    },
    {
      name: "Masazır",
      address: "Abşeron r-nu, Masazır k., Əliağa Vahid küç. 145 (Tamstore-un yaxınlığı)",
      workingHours: "10:00-dan 21:00-dək",
    },
    {
      name: "Ukrayna dairəsi",
      address: "Xətai r-nu, M. Hadi küç. 2372",
      workingHours: "10:00-dan 21:00-dək",
    },
    {
      name: "3-cü mkr dairəsi",
      address: "Nəsimi r-nu, A. Mustafayev küç. 8",
      workingHours: "10:00-dan 21:00-dək",
    },
    {
      name: "Xalqlar Dostluğu metrosu",
      address: "Nizami r-nu, Q. Qarayev küç. 125B",
      workingHours: "10:00-dan 21:00-dək",
    },
    {
      name: "Bakıxanov stansiyası",
      address: "Sabunçu r-nu, Bakıxanov qəs., Yavər Əliyev küç. (Bakıxanov stansiyasının yanı)",
      workingHours: "10:00-dan 21:00-dək",
    },
    {
      name: "Bakıxanov",
      address: "Sabunçu r-nu, Bakıxanov qəs., D. Bünyadzadə və Gənclik küçələrinin kəsişməsi",
      workingHours: "10:00-dan 21:00-dək",
    },
    {
      name: "Azadlıq metrosu",
      address: "Binəqədi r-nu, Binəqədi şossesi 200E, 3123-cü məhəllə",
      workingHours: "10:00-dan 21:00-dək",
    },
    {
      name: "İnşaatçılar metrosu",
      address: "Yasamal r-nu, A. M. Şərifzadə küç. 174, blok 4",
      workingHours: "10:00-dan 21:00-dək",
    },
    {
      name: "Mərdəkan",
      address: "Xəzər r-nu, Mərdəkan qəs., Yesenin küç. 22 (köhnə Makaron fabrikinin yaxınlığı)",
      workingHours: "10:00-dan 21:00-dək",
    },
    {
      name: "Nərimanov metrosu",
      address: "Nərimanov r-nu, F. Yusifov küç. 87-89 (Metropark AVM-lə üzbəüz)",
      workingHours: "10:00-dan 21:00-dək",
    },
    {
      name: "SMART 'Neftçilər metrosu'",
      address: "Nizami r-nu, Q. Qarayev pr. 61",
      workingHours: "10:00-dan 21:00-dək",
    },
    {
      name: "Sahil metrosu",
      address: "Səbail r-nu, Ü. Hacıbəyov küç. və Bülbül pr. kəsişməsi, 207 saylı məhəllə",
      workingHours: "10:00-dan 21:00-dək",
    },
  ];
  const georgiaStores = [
    {
      name: "Tbilisi Mall",
      address: "Tbilisi şəh., Ağmaşenebeli xiyabanı 16-cı km, Tbilisi Mall (1-ci mərtəbə)",
      workingHours: "10:00-dan 21:00-dək",
    },
    {
      name: "Batumi",
      address: "Batumi şəh., Tbel Abuseridze küç. 13",
      workingHours: "10:00-dan 21:00-dək",
    },
    {
      name: "Central Mall",
      address: "Tbilisi şəh., Stansiya meydanı 2, 1-ci mərtəbə",
      workingHours: "10:00-dan 21:00-dək",
    },
    {
      name: "Gldani Mall",
      address: "Tbilisi şəh., Gldani Mall (Akhmeteli theatre metrosunun çıxışı)",
      workingHours: "10:00-dan 21:00-dək",
    },
  ];
  const regionStores = [
    {
      name: "Sumqayıt 10-cu mkr",
      address: "Sumqayıt şəh., 10-cu mkr., Babək küç. 10 ('Gold Qayalı'-nın yanı)",
      workingHours: "10:00-dan 21:00-dək",
    },
    {
      name: "Xaçmaz",
      address: "Xaçmaz r-nu, N.Nərimanov küç. 6",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "Şamaxı",
      address: "Şamaxı r-nu, M. Rəsulzadə küç. 54",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "Şəmkir",
      address: "Şəmkir r-nu, N. Gəncəvi küç. 131 (Şəmkir RİH-in yaxınlığı)",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "İsmayıllı",
      address: "İsmayıllı r-nu, N. Gəncəvi və S. Şirvani küç. kəsişməsi (Kəpənəyin yanı)",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "Salyan",
      address: "Salyan şəh., X.R. Ulutürk küç. 54 (Seçki dairəsinin yaxınlığı)",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "Sumqayıt Sülh küçəsi",
      address: "Sumqayıt şəh., 2-ci mkr., Sülh küç. 312 (Cavid Mall ilə üzbəüz)",
      workingHours: "10:00-dan 21:00-dək",
    },
    {
      name: "Ağcabədi",
      address: "Ağcabədi şəh., H.Əliyev pr. ('Green' restoranın yanı)",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "Balakən",
      address: "Balakən şəh., N. Nərimanov küç. 93 (Rayon Məhkəməsinin yanı)",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "Tovuz",
      address: "Tovuz şəh., M.Musayev küç. 44 (Avtovağzalın yaxınlığı)",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "Qusar",
      address: "Qusar şəh., Ç. Qurbanov küç. (Mərkəzi avtovağzalın yaxınlığı)",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "Astara",
      address: "Astara şəh., H.Əliyev pr. 83 (1 saylı məktəbin yanı)",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "Sabirabad",
      address: "Sabirabad şəh., Heydər Əliyev pr. 100 (Rayon Məhkəməsi ilə üzbəüz)",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "İmişli",
      address: "İmişli r-nu, N.Savalanov küç. (Mərkəzi İmişli bazarının yanı)",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "Hacıqabul",
      address: "Hacıqabul şəh., Həmid Həmidov küç. (Mərkəzi Hacıqabul bazarının yanı)",
      workingHours: "09:00-dan 22:00-dək",
    },
    {
      name: "Oğuz",
      address: "Oğuz r-nu, H.Əliyev pr. (Oğuz Sarayın yanı)",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "Gəncə Mall",
      address: "Gəncə şəh., Heydər Əliyev pr. 433, Gəncə Mall, -1-ci mərtəbə",
      workingHours: "10:00-dan 22:00-dək",
    },
    {
      name: "Gəncə Bayraq Meydanı",
      address: "Gəncə şəh., Nizami küç. 35 (Bayraq meydanın yaxınlığı)",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "Xırdalan",
      address: "Xırdalan şəh., H. Əliyev pr. 240",
      workingHours: "10:00-dan 21:00-dək",
    },
    {
      name: "Masallı",
      address: "Masallı r-nu, H. Əliyev pr. (DSMF-nın yanı)",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "Qəbələ",
      address: "Qəbələ r-nu, S. Vurğun küç. 1A (Qəbələ Rayon İcra Hakimiyyətinin yanı)",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "Bərdə",
      address: "Bərdə şəh., Koroğlu küç.",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "Göyçay",
      address: "Göyçay r-nu, M. Hüseynzadə küç. 31",
      workingHours: "09:00-dan 21:00-dək",
    },
    {
      name: "Quba",
      address: "Quba r-nu, H. Əliyev pr., 129",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "Lənkəran",
      address: "Lənkəran şəh, İ. Səmədzadə küç. 50",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "Gəncə Grand Qafqaz",
      address: "Gəncə şəh., Ş. İ. Xətai pr. ilə M. Xələfov küç. kəsişməsi, (şərq tərəf)",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "Mingəçevir",
      address: "Mingəçevir şəh., M. Maqomayev küç. (5+ marketin yanı)",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "Zaqatala",
      address: "Zaqatala şəh., F. Əmirov küç., Zaqatala Mall (2 və 3-cü mərtəbə)",
      workingHours: "09:00-dan 20:00-dək",
    },
    {
      name: "Cəlilabad",
      address: "Cəlilabad şəh, Qurtuluş küç.137 ('Rəmzi' market ilə üzbəüz)",
      workingHours: "09:00-dan 20:00-dək",
    },
  ];

  const locations =
    selectedLocation === "Bakı" ? stores : selectedLocation === "Regionlar" ? regionStores : georgiaStores;


  return (
    <div className="location-container">
      {locations.map((location) => (
        <div key={location.name} className="location-items">
          <div className='location-name'>Kontakt {location.name}</div>
          <div className='location-addres'>{location.address}</div>
          <div className='workhours'>
            <span>İş saatları:</span> {location.workingHours}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Location

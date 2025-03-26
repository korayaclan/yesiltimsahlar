import React, { useState, useMemo, useEffect } from 'react';
import { Building2, Phone, MapPin, ExternalLink, ArrowUp } from 'lucide-react';

// Görsel importları
import almira from './images/almira.jpg';
import celik from './images/celik.jpg';
import digiturk from './images/digiturk.jpg';
import tomurcuk from './images/tomurcuk.jpg';
import inallar from './images/inallar.jpg';
import ozluce from './images/ozluce.jpg';
import karacakaya from './images/karacakaya.jpg';
import rihtim from './images/rihtim.jpg';
import yonder from './images/yonder.jpg';
import omur from './images/omur.jpg';
import royal from './images/royal.jpg';
import suba from './images/suba.jpg';
import tilsim from './images/tilsim.jpg';
import erce from './images/erce.jpg';
import doruk from './images/doruk.jpg';
import hakyil from './images/hakyil.jpg';
import dentmodern from './images/dentmodern.jpg';

interface Campaign {
 id: number;
 title: string;
 image: string;
 discount: string;
 description:string;
 company: string;
 address: string;
 phone: string;
 category: string;
}

const campaigns: Campaign[] = [
 {
   id: 1,
   title: "Digitürk",
   image: digiturk,
   discount: "%20 indirim",
   description: "Yeni aboneliklerde geçerli olmak üzere %20 indirim",
   company: "Digitürk Internet",
   address: "Digitürk Başvuru Noktaları",
   phone: "0212 473 7373",
   category: "Internet/Tv"
 },
 {
   id: 2,
   title: "Tomurcuk Otomotiv",
   image: tomurcuk,
   discount: "%20 & %50 indirim",
   description: "Genel kurul yönetim birimine %20, kongre üyelerine %50'lik indirim",
   company: "Tomurcuk Oto Bosch Car Servise",
   address: "Beşevler Küçük San. Sit. 17/A Blok N0 : 1-2-3-4, Nilüfer, Turkey",
   phone: "0224 441 1241",
   category: "Otomotiv"
 },
 {
   id: 3,
   title: "İnallar Filo & Servis",
   image: inallar,
   discount: "%16 indirim",
   description: "İnallar Filo  ve İnallar Bosch Car Service'de her marka araca servis hizmetlerinde %16 indirim",
   company: "İnallar Filo & Bosch Car Service",
   address: "Balat Mah. Mudanya Yolu Sanayi Cad. İnallar Cadde İş Merkezi No:435/A 16140, Bursa, Turkey",
   phone: "0224 366 8000",
   category: "Otomotiv"
 },
 {
   id: 4,
   title: "Almira Hotel",
   image: almira,
   discount: "%16 indirim",
   description: "Tüm hizmetlerde geçerli olmak üzere %16 indirim.",
   company: "Almira Hotel",
   address: "Almira Hotel Santral Garaj Mh. Ulubatlı Hasan Bulvarı No:5 Osmangazi/Bursa, Turkey",
   phone: "0224 250 2020",
   category: "Konaklama"
 },
 {
   id: 5,
   title: "Özlüce Davet",
   image: ozluce,
   discount: "%20 indirim",
   description: "Organizasyonlarda %20 indirim",
   company: "Özlüce Davet",
   address: "Alaaddinbey, Alaaddinbey Kavşağı, 16120 Nilüfer/Bursa.",
   phone: "0543 361 1601",
   category: "Organizasyon"
 },
 {
   id: 6,
   title: "Karacakaya",
   image: karacakaya,
   discount: "%20 indirim",
   description: "Ev aboneliklerinde geçerli olmak üzere %20 indirim",
   company: "Karacakaya",
   address: "Karacakaya Bayii Satış Noktaları",
   phone: "444 16 14",
   category: "Gıda"
 },
 {
   id: 7,
   title: "Rıhtım Pastaneleri",
   image: rihtim,
   discount: "%16 indirim",
   description: "Tüm ürünlerde geçerli olmak üzere %16 indirim",
   company: "Rıhtım Pastaneleri",
   address: "Bulvar ve Alaaddinbey Şubeleri",
   phone: "0224 451 2477",
   category: "Gıda"
 },
 {
   id: 8,
   title: "Yönder Okulları",
   image: yonder,
   discount: "%20 indirim",
   description: "Tüm öğrenci kayıtlarında geçerli olmak üzere %20 indirim",
   company: "Yönder Okulları",
   address: "Demirci Mah. Kavaklidere Cad. No:15, Bursa, Turkey",
   phone: "0224 441 0707",
   category: "Eğitim"
 },
 {
   id: 9,
   title: "Ömür Bayraktar Sigorta",
   image: omur,
   discount: "%15 indirim",
   description: "Kasko, konut ve sağlık poliçelerinde net prim üzerinden %15 indirim",
   company: "Ömür Bayraktar Sigorta",
   address: "Altınova Mh. Hitit Natural Ofis, Kat: 5, No:22, Osmangazi/Bursa",
   phone: "0224 212 0136",
   category: "Sigorta"
 },
 {
   id: 10,
   title: "Royal Capital Hotel Çekirge",
   image: royal,
   discount: "%20 indirim",
   description: "Konaklamalarda geçerli olmak üzere %20 indirim",
   company: "Royal Capital Hotel Çekirge",
   address: "Muradiye Mahallesi Çekirge Caddesi No: 43 Osmangazi/Bursa, Turkey",
   phone: "0224 220 0775",
   category: "Konaklama"
 },
 {
   id: 11,
   title: "Suba Otomotiv A.Ş",
   image: suba,
   discount: "%16 indirim",
   description: "Araç servis ve bakım hizmetlerinde %16 indirim",
   company: "Suba Otomotiv A.Ş",
   address: "Nilüfer Bursa Beşevler, İzmir Yolu Cd No: 210 / B, 16110",
   phone: "0850 888 7822",
   category: "Otomotiv"
 },
 {
   id: 12,
   title: "Tılsım Anadolu Et",
   image: tilsim,
   discount: "%10 indirim",
   description: "Tüm ürünlerde geçerli olmak üzere %10 indirim",
   company: "Tılsım Anadolu Et",
   address: "Downtown Bursa, İstiklal, Fuat Kuşçuoğlu Cd. No:13 D:23, 16200 Osmangazi̇/Bursa",
   phone: "0507 118 1600",
   category: "Restoran"
 },
 {
   id: 13,
   title: "Erce Koleji",
   image: erce,
   discount: "%20 indirim",
   description: "Anaokulu ve İlkokul kayıtlarında geçerli olmak üzere %20 indirim",
   company: "Erce Koleji",
   address: "Demirci Mah. Koşuyolu Cad. No:6 Nilüfer/Bursa",
   phone: "0539 388 0099",
   category: "Eğitim"
 },
 {
   id: 14,
   title: "Doruk Sağlık Grubu",
   image: doruk,
   discount: "%30 & %25 indirim",
   description: "Ayaktan tedavilerde %30, tetkik ve tahlilde %25 indirim",
   company: "Doruk Sağlık Grubu",
   address: "Doruk Nilüfer, Esentepe, Bursa, Yıldrım Hastaneleri",
   phone: "444 0 455",
   category: "Sağlık"
 },
 {
   id: 15,
   title: "Hakyıl Filo Kiralama",
   image: hakyil,
   discount: "%16 indirim",
   description: "Araç kiralama hizmetlerinde %16 indirim",
   company: "Hakyıl Filo Kiralama",
   address: "Beşevler, Yıldırım Cd. No:274/A, 16110 Ni̇lüfer/Bursa",
   phone: "0224 233 0300",
   category: "Otomotiv"
 },
 {
   id: 16,
   title: "Dent Modern",
   image: dentmodern,
   discount: "%16 indirim",
   description: "Diş işlemlerinde %16 indirim",
   company: "Dent Modern",
   address: "Konak, Barış Sk. No:9/4, 16110 Nilüfer/Bursa",
   phone: "0850 303 7347",
   category: "Sağlık"
 },
 {
   id: 17,
   title: "Hotel Çelik Palas",
   image: celik,
   discount: "%16 indirim",
   description: "Tüm hizmetlerde geçerli %16 indirim",
   company: "Hotel Çelik Palas",
   address: "Çekirge Cd. No:79 16070 Bursa - Türkiye",
   phone: "444 0 168",
   category: "Konaklama"
 }
];

function App() {
 const [flippedCards, setFlippedCards] = useState<number[]>([]);
 const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
 const [showScrollTop, setShowScrollTop] = useState(false);

 useEffect(() => {
   const handleScroll = () => {
     setShowScrollTop(window.scrollY > 400);
   };

   window.addEventListener('scroll', handleScroll);
   return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 const scrollToTop = () => {
   window.scrollTo({
     top: 0,
     behavior: 'smooth'
   });
 };

 const toggleCard = (id: number) => {
   setFlippedCards(prev =>
     prev.includes(id)
       ? prev.filter(cardId => cardId !== id)
       : [...prev, id]
   );
 };

 const categories = useMemo(() => {
   const uniqueCategories = Array.from(new Set(campaigns.map(campaign => campaign.category)));
   return ['Tümü', ...uniqueCategories.sort()];
 }, []);

 const filteredAndSortedCampaigns = useMemo(() => {
   return campaigns
     .filter(campaign => selectedCategory === 'Tümü' || campaign.category === selectedCategory)
     .sort((a, b) => a.company.localeCompare(b.company));
 }, [selectedCategory]);

 return (
   <div className="min-h-screen bg-green-50">
     {/* Header */}
     <header className="bg-green-800 text-white py-6 shadow-lg">
       <div className="container mx-auto px-4">
         <div className="flex items-center justify-between">
           <div className="flex items-center gap-4 pl-4 md:pl-8">
             <span className="text-4xl">🐊</span>
             <div>
               <h1 className="text-2xl md:text-3xl font-bold tracking-wide">BURSASPOR</h1>
               <p className="text-sm md:text-base text-green-200 font-light tracking-wide">
                 Genel Kurul Üyelerine Özel İndirimler
               </p>
             </div>
           </div>
           <div className="flex items-center gap-4">
             <a
               href="https://www.bursaspor.org.tr"
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 px-4 py-2 bg-green-700 hover:bg-green-600 rounded-lg transition-colors"
             >
               <ExternalLink className="w-4 h-4" />
               <span className="hidden md:inline">Bursaspor.org.tr</span>
             </a>
           </div>
         </div>
       </div>
     </header>

     {/* Category Filter */}
     <div className="container mx-auto px-4 py-6">
       <div className="flex justify-center flex-wrap gap-1">
         {categories.map((category) => (
           <button
             key={category}
             onClick={() => setSelectedCategory(category)}
             className={`px-3 py-1 rounded-full transition-colors text-xs md:text-sm ${
               selectedCategory === category
                 ? 'bg-green-800 text-white'
                 : 'bg-white text-green-800 hover:bg-green-100'
             } shadow-sm`}
           >
             {category}
           </button>
         ))}
       </div>
     </div>

     {/* Main Content */}
     <main className="container mx-auto px-4 py-6">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {filteredAndSortedCampaigns.map((campaign) => (
           <div
             key={campaign.id}
             className={`relative h-96 rounded-xl cursor-pointer transition-transform duration-700 transform-gpu ${
               flippedCards.includes(campaign.id) ? '[transform-style:preserve-3d] [transform:rotateY(180deg)]' : ''
             }`}
             onClick={() => toggleCard(campaign.id)}
           >
             {/* Front */}
             <div className="absolute inset-0 bg-white rounded-xl shadow-xl overflow-hidden">
               <img
                 src={campaign.image}
                 alt={campaign.title}
                 className="w-full h-full object-cover"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                 <span className="inline-block px-3 py-1 bg-green-800 text-white rounded-full text-sm mb-2">
                   {campaign.category}
                 </span>
                 <h3 className="text-2xl font-bold text-white">{campaign.title}</h3>
               </div>
             </div>

             {/* Back */}
             <div className="absolute inset-0 bg-white rounded-xl shadow-xl p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
               <div className="h-full flex flex-col justify-between">
                 <div>
                   <div className="flex justify-between items-start mb-4">
                     <h3 className="text-2xl font-bold text-green-800">{campaign.title}</h3>
                     <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                       {campaign.category}
                     </span>
                   </div>
                   <p className="text-4xl font-bold text-center py-4 mb-4 bg-green-100 rounded-lg text-green-800">
                     {campaign.discount}
                   </p>
                 </div>

                 {campaign.description && (
                   <div className="mb-6">
                     <p className="text-gray-700 text-sm leading-relaxed">{campaign.description}</p>
                   </div>
                 )}

                 <div className="space-y-4">
                   <div className="flex items-center gap-3 text-gray-600">
                     <MapPin className="w-5 h-5" />
                     <span>{campaign.address}</span>
                   </div>
                   <div className="flex items-center gap-3 text-gray-600">
                     <Phone className="w-5 h-5" />
                     <span>{campaign.phone}</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         ))}
       </div>
     </main>

     {/* Scroll to Top Button */}
     <button
       onClick={scrollToTop}
       className={`fixed bottom-8 right-8 bg-green-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-green-700 ${
         showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
       }`}
       aria-label="Yukarı çık"
     >
       <ArrowUp className="w-6 h-6" />
     </button>

     {/* Footer */}
     <footer className="bg-gray-50 border-t border-gray-200 mt-12 py-8 px-4 text-center text-gray-600 text-xs">
       <div className="max-w-6xl mx-auto">
         <p>© 2025 x/kryaclan — Kampanya ile ilgili tüm duyurular Bursaspor.org.tr ve açık kaynaklardan alınmıştır.</p>
       </div>
     </footer>
   </div>
 );
}

export default App;
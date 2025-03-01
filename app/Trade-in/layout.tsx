import React from "react";

export default function StoreLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            {children}
            <section className="trade-in">
                <div className="trade-title">Trade-in</div>
                <div className="trade-content">
                    <h2><strong><span>Online Trade-in nədir?</span></strong></h2>
                    <p className="onlie-trade">Kontakt Home-un təqdim etdiyi Online Trade-in xidməti ilə köhnə smartfonunuzu təhvil verərək, yeni bir smartfonu endirimlə əldə edə bilərsiniz Bu xidmət, köhnə cihazınızı dəyərləndirib yeni modelə keçməyinizi daha əlçatan edir. Proses, həm vaxtınıza qənaət edir, həm də büdcənizə uyğun seçim etməyinizə imkan yaradır.
                    </p>
                    <span className="progress-event">Bu proses bizdə necə həyata keçirilir?</span>
                    <div className="step-1">
                        <p><strong>Addım 1. Müraciət:</strong></p>
                        <p>Siz bizimlə sayt (Live Chat) və ya sosial şəbəkələr vasitəsilə əlaqə saxlaya bilərsiniz. Müraciət zamanı sizdən aşağıdakı məlumatları təqdim etməyiniz xahiş olunur:
                        </p>
                        <p className="product-images">1. Məhsulun şəkilləri:</p>
                        <ul>
                            <li>Ön hissə
                            </li>
                            <li>Ekranın sönülü və açıq halda şəkilləri (açıq halda ekran mövzusu ağ rəngdə olmalıdır, piksel problemi olub-olmamasını yoxlamaq üçün)
                            </li>
                            <li>Arxa hissə
                            </li>
                            <li>Sağ və sol hissələr
                            </li>
                            <li>Alt və üst hissələr
                            </li>
                            <li>Aksesuar və qutusunun şəkilləri (əgər varsa)
                            </li>
                            <li>2. İMEİ yoxlanışı və onun ScreenShot-u (Telefonunuzun zəng bölməsini açın və *#06# kodunu yığın. İMEİ nömrəsi avtomatik olaraq ekranda görünəcək.)</li>
                            <li>3. Apple məhsulları üçün əlavə tələb olunur:</li>
                            <li>Batareya səviyyəsi (Pil faiz göstəricisi) </li>
                            <li>Rəsmi servisdə təmir olunub-olunmaması barədə məlumatlar.                            </li>
                        </ul>
                    </div><br />
                    <div className="step-2">
                        <p><strong>Addım 2. Qiymətləndirmə:</strong></p>
                        <p>Sizdən daxil olan məlumatlar əsasında əməkdaşlarımız məhsulunuzu qiymətləndirir və təklif olunan məbləği sizə bildirir. Əgər məbləğ sizin üçün uyğundursa, bu məbləğ endirim kimi qeyd olunur və Trade-in Online kampaniyası kimi sənədləşdirilir.</p>
                    </div><br />
                    <div className="step-3">
                        <p><strong>Addım 3. Mağazada təsdiq:</strong></p>
                        <p>Məhsulunuzu mağazaya gətirdikdən sonra texniki ekspertlərimiz cihazı daxili Trade-in qaydalarına uyğun olaraq yoxlayır. Əgər cihazın vəziyyəti ilkin qiymətləndirmə ilə eynidirsə, siz sənədləşməni təsdiqləyirsiniz. Lakin əlavə problemlər aşkar edilərsə, qiymət yenidən hesablanır və sənədləşmə yenilənir.</p>
                    </div><br />
                    <div className="step-4">
                        <p><strong>Qeyd:</strong></p>
                        <ul>
                            <li>Online Trade-in xidməti yalnız mağazaya məhsulunuzu gətirməklə (Pick Up) tamamlanır
                            </li>
                            <li>Bu proses həm rahat, həm də şəffaf şəkildə təşkil olunub, beləliklə siz köhnə cihazınızı yeni və daha müasir bir cihazla əvəz edə bilərsiniz!
                            </li>
                        </ul>
                    </div><br />
                </div>
            </section>
        </>
    );
}

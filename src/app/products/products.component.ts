import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
  
})
export class ProductsComponent {
 products = [
    {id:1, nomi: 'Olcha', batafsil: 'Yer yuzida olchaning 150 ga yaqin turi mavjud boʻlib, Oʻzbekistonda  kamxastak, qizil mevali yoki chiya hamda adir va togʻ yon bagʻirlarida yovvoyi turlari uchraydi. Olcha mevasi yalligʻlanishga qarshi, balgʻam koʻchiruvchi, terini tozalovchi, qonni koʻpaytiruvchi xususiyatlarga ega.Shuningdek, yurak urishini maromiga keltirishda, immunitetni koʻtarishda samarali hisoblanadi. Tarkibida yalligʻlanishga qarshi moddalar borligi sabab, olcha mevasi sharbati hamda bandi va shoxchasidan tayyorlangan damlama artrit, revmatizm, artroz kasalliklari bezovta qilganida boʻgʻimdagi ogʻriqni toʻxtatishda, shishlarni yoʻqotishda yordam beradi. Agar uzoq vaqtdan buyon bel ogʻrigʻi qiynayotgan boʻlsa, olcha daraxtining poʻstloq qismini qaynatib, ichish tavsiya etiladi.', name: 'Olcha foydali vitaminlarga boy mevalardan hisoblanadi', price: '15000', color: 'Oliy navli', available:'Mavjud', image:'./assets/products/olcha.jpg' },
    {id:2, nomi: 'Olma', batafsil: 'Olma ko`pchiligimizning eng sevimli mevalarimizdan biri. Bunga hayron qolmasayam bo`ladi, chunki u nafaqat g`aroyib ta`mga ega shirin meva, balki shifobaxsh xususiyatga ega ne`mat hamdir. Sharq tabobatining buyuk namoyondasi Abu Ali ibn Sino ham har kuni uxlashdan oldin bitta olma yeyishni tavsiya etgan. Olma turli-tuman vitaminlar, mikroelementlar va boshqa foydali moddalarning makoni hisoblanadi.Uning tarkibida C , B1 , B2 , P , E vitaminlari, karotin, kaliy, temir, marganets, kalsiy, pektinlar, qand moddasi, organik kislotalar mavjud .', name: 'Olma turlari sizning bog`ingiz uchun arziydigan eng yaxshi variantlardir.', price: '10000', color: 'Oliy navli', available:'Mavjud emas', image:'./assets/products/olma.jpg' },
    {id:3, nomi: 'O`rik', batafsil: 'Qandli diabetga chalingan bemorlar shifokor bilan maslahatlashib, so’ng esa uni iste’mol qilish kerak. Pankreatit kasalligida 2 tadan ortiq o’riklarni iste’mol qilish tavsiya qilinmaydi. Bundan tashqari o’rik allergiyani ham chaqirishi mumkin, shu sababli, ayniqsa yosh onalar uni ehtiyotkorlik bilan iste’mol qilishlari kerak.', name: 'Shirin va xushbo`y o`riklar O`zbekistondagi eng sevimli mevalardan biri sanaladi.', price: '8000', color: 'Oliy navli', available:'Mavjud', image:'./assets/products/orik.jpg' },
    {id:4, nomi: 'Shaftoli', batafsil: 'Shaftolilar eng shirin va mazali mevalardan biri deb hisoblaymiz. Bugun sizlarga ularning foydali xususiyatlari, tukli va tuksiz shaftolilarning bir-biridan farqi haqida ma’lumotlar berib o’tamiz. Shaftolining foydali xususiyatlari.Bizlar foydali narsa bemaza deb hisoblashga ko’nikib qolganmiz. Ammo meva va sabzavotlar buning noto’g’ri fikr ekanligini isbotlashadi. Masalan, shaftolilar ham juda mazali bo’lib, ularni yoqtirmaydiganlar oramizda kam uchraydi', name: 'Shaftoli danagidan va payvand qilib ko`paytiriladi', price: '50000', color: 'Oliy navli', available:'Mavjud emas', image:'./assets/products/shaftoli.jpg' },
    {id:5, nomi: 'Uzum', batafsil: 'Uzumning shifobaxsh xususiyatlari haqida eshitmagan odamning o‘zi bo‘lmasa kerak. Ammo uning bu xususiyati siz o‘ylagandan ancha kengroq bo‘lib, ular haqida aytib o‘tishni ma’qul ko‘rdik. Shunday qilib. Uzum mevasida radioprotektorli, nurga qarshi, bakteritsid, antioksidant, neyrorag‘batlantiruvchi, tonusni ko‘taruvchi va boshqa funktsional xususiyatlarga ega kamida 300 ta birikma mavjud. Sizga tanish bo‘lgan bioflavanoidlar, monosaxaridlar, pektin moddalari va organik kislotalardan tashqari, uzum tarkibini C, A, B1, B2, B5, B6, B9, E, PP, P vitaminlari, natriy, kalsiy, fosfor, magniy, kaliy, marganets, temir, rux, mis va boshqa ko‘plab moddalardan tashkil topgan haqiqiy “kokteyl” deyish mumkin.', name: 'Meva uzumlari, yoshi 15 yil, boshpanasiz qishga chidamli', price: '45000', color: 'Oliy navli', available:'Mavjud emas', image:'./assets/products/uzum.jpg' },
    {id:6, nomi: 'Qulupnay', batafsil: 'Qulupnay – yozning eng mazali mevasidir. U juda shirin va foydali meva hisoblanadi. Uning pishishini juda ko‘pchilik intizorlik bilan kutadi. Chunki qulupnaylarni yoshu keksa – barcha yaxshi ko‘radi. Shu sabab bo‘lsa kerak, yozda mevaning o‘zi iste`mol qilinsa, qish uchun undan murabbo va sharbatlar tayyorlab qo‘yiladi. Shunday ajoyib zamonda yashayapmizki, bugun yilning istalgan vaqtida qulupnaylarni supermarketlardan xarid qilishimiz mumkin.', name: ' Qulupnay – yozning eng mazali mevasidir. U juda shirin va foydali meva hisoblanadi', price: '7800', color: 'Oliy navli', available:'Mavjud', image:'./assets/products/kulubnay.jpg' },
 ]
constructor(private modal: NgbModal){} 
ngOnInit() {}
// name = "none";
 openModal(batafsil: string, nomi: string): void{
  const modalRef = this.modal.open(ModalComponent, {size: 'lg', backdrop: 'static'});
  modalRef.componentInstance.description = batafsil;
  modalRef.componentInstance.title = nomi;
    } 

}

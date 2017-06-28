import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the TitlesProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
     */
@Injectable()
export class TitlesProvider {

    items;
    data;
    respon;

    constructor(public http: Http) {

        /*this.items = [{
    "id": "4546",
    "catid": "6",
    "title": "هفدهمین نمایشگاه بین المللی لوازم خانگی ایران",
    "salon": "0",
    "fulltext": "انجمن صنایع لوازم خانگی ايران این نمایشگاه را تحت مجوز صادره از سازمان توسعه تجارت ایران و با همکاری شرکت سهامی نمایشگاه&shy;های بین&shy;المللی ج. ا. ایران و با حضور پررنگ صنعتگران داخلی و خارجی برگزار می کند.\r\n این نمایشگاه با توجه به اعتقاد راسخ انجمن در خصوص توان کمی و کیفی صنعت لوازم خانگی کشورماندر تأمین مطلوب نیازهای هموطنان به لوازم خانگی، با پیام\"زندگی شیرین ایرانی، در خانه زیبای ایرانی، با لوازم خوب ایرانی\" برگزار می شود. امیدواریم با همکاری ارزشمند شما صنعتگران سخت کوش، در تمهید ویترین شایسته ای برای معرفی توانمندی های لوازم خانگی ایرانی و نیز ایجاد بستر مناسب برای جذب سرمایه گذار و توسعه صادرات لوازم خانگی توفیق کامل داشته باشیم .\r\nعلاقه مندان می توانند برای اطلاعات بیشتر به سایت www.iexhap.ir مراجعه نمایند.",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1511573400",
    "end_date": "1511900940",
    "reserve_start": "1497273581",
    "reserve_end": "1511900940",
    "meta_tags": "نمایشگاه,هفدهمین-نمایشگاه-بین-المللی-لوازم-خانگی-ایران,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497273581",
    "modify_by": null,
    "modify_date": null,
    "hits": "0",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "انجمن صنایع لوازم خانگی ایران",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497273581_user445.jpg",
    "poster": "upload/events/posters/1497273581432_user445.jpg",
    "lng": "51.43374538421631",
    "lat": "35.73159691237118",
    "loc": "استان تهران، تهران، خیابان مبینی، ایران",
    "post_address": "خیابان دکتر بهشتی - خیابان صابونچی (مهناز سابق) - کوچه مبینی - پلاک 8",
    "phone1": "02188746839",
    "phone2": "",
    "reservdays": [{
        "daydate": "1511573400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1511659800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1511746200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1511832600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "0",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4545",
    "catid": "6",
    "title": "نمایشگاه بین المللی تاسیسات ساختمان و سیستم های سرمایشی و گرمایشی",
    "salon": "0",
    "fulltext": "این نمایشگاه&zwnj;&zwnj; فرصت بسیار ارزشمندی را برای صاحبان صنایع فراهم می&zwnj;آورد تا توانمندی&zwnj;ها، محصولات و دستاوردهای خود را در سطع وسیعی عرضه نمایند.\r\nنمایشگاه بین&zwnj;المللی تأسیسات و سیستم&zwnj;های سرمایشی و گرمایشی تهران IRAN HVAC&amp;R سالانه با حضور جمع کثیری از شرکت&zwnj;های صنعتی داخلی و بین&zwnj;المللی برگزار می&zwnj;گردد. این نمایشگاه طی سیزده سال گذشته به عنوان بزرگترین رویداد تاسیسات در خاورمیانه، همواره با استقبال بی&zwnj;نظیر صاحبان صنایع مواجه بوده و در سال گذشته با حضور 800 شرکت صنعتی از 33 کشور جهان در فضایی به مساحت 33667متر مربع برگزار شده است. شرکت&zwnj;های صنعتی در این نمایشگاه محصولات، قابلیت&zwnj;های فنی و نوآوری&zwnj;های خود را به بازدیدکنندگان عرضه می&zwnj;نمایند و از تعامل با دست&zwnj;اندرکاران صنعت تاسیسات و فرصت&zwnj;های تجاری موجود بهره می&zwnj;گیرند.شانزدهمین دوره نمایشگاه بین&zwnj;المللی تاسیسات و سیستم&zwnj;های سرمایشی و گرمایشی در تاریخ 3 آبان سال 1396در محل دائمی نمایشگاه&zwnj;های بین المللی تهران آغاز بکار می&zwnj;نماید و فعالان و صاحب&zwnj;نظران حوزه تأسیسات را در محیطی تجاری و تخصصی گرد هم می&zwnj;آورد. با امید به اینکه بتوانیم در این رویداد گسترده میزبان شما بوده و فرصت&zwnj;های تجاری ارزشمندی را برای شما خلق نماییم.\r\nعلاقه مندان می توانند برای اطلاعات بیشتر به سایت: www.iranhvac.com مراجعه نمایند.",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1508895000",
    "end_date": "1509222540",
    "reserve_start": "1497255660",
    "reserve_end": "1509209940",
    "meta_tags": "نمایشگاه,شانزدهمین-نمایشگاه-بین-المللی-تاسیسات-ساختمان-و-سیستم-های-گرمایشی-و-سرمایشی,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497271893",
    "modify_by": null,
    "modify_date": "1497272827",
    "hits": "0",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "ستاد برگزاری نمایشگاه",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497272827_user445.jpg",
    "poster": "upload/events/posters/1497272827709_user445.jpg",
    "lng": "51.410351157188416",
    "lat": "35.76238906722509",
    "loc": "استان تهران، تهران، خیابان دامن افشار، ایران",
    "post_address": "خیابان ولیعصر، بالاتر از میدان ونک، خیابان دامن افشار، ساختمان آبشار، پلاک 49، طبقه 5، واحد 24",
    "phone1": "02188203020",
    "phone2": "",
    "reservdays": [{
        "daydate": "1508895000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1508981400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1509067800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1509154200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "0",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4544",
    "catid": "3",
    "title": "مراسم یادبود هنرمند و معلم فقید ایرج انواری",
    "salon": "0",
    "fulltext": "\r\nمراسم یادبود هنرمند و معلم فقید ایرج انواری دوشنبه ۲۲ خرداد در خانه هنرمندان ایران برگزار می&zwnj;شود.\r\nبه گزارش رویداد فرهنگی، ایرج انواری از استادان برجسته طراحی گرافیک بود که از سه ماه پیش به دلیل وخامت بیماری پارکینسون در بیمارستان بستری بود و در نهایت صبح روز دوشنبه ۱۵ خرداد چشم از دنیا فروبست.ایرج انواری از دانش آموختگان دانشکده تزئینی در رشته چاپ و نگارش بود. او پس از آن در مدرسه آردکو پاریس به ادامه تحصیل روی آورد و با گرافیک روز دنیا آشنا شد. سپس در بازگشت به ایران در دانشکده سابق خود به امر آموزش پرداخت و در به روز سازی طرح دروس قدیمی گرافیک همت گمارد.\r\nمراسم یادبود هنرمند و معلم فقید ایرج انواری دوشنبه ۲۲ خرداد ساعت ۲۰ در تالار شهناز خانه هنرمندان ایران برگزار می&zwnj;شود.\r\n",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497227400",
    "end_date": "1497295740",
    "reserve_start": "1497263357",
    "reserve_end": "1497295740",
    "meta_tags": "تجسمی,مراسم-یادبود-معلم-و-هنرمند-فقید-ایرج-انواری,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497263357",
    "modify_by": null,
    "modify_date": null,
    "hits": "3",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "خانه هنرمندان ایران",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497263357_user445.jpg",
    "poster": "upload/events/posters/1497263357917_user445.jpg",
    "lng": "51.421578884124756",
    "lat": "35.70944619233719",
    "loc": "تهران، خیابان برفروشان، ایران",
    "post_address": "خیابان ایرانشهر، ضلع جنوبی پارک هنرمندان",
    "phone1": "",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "0",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4543",
    "catid": "8",
    "title": "نقد کتاب سر سبیل هایت را نجو",
    "salon": "0",
    "fulltext": "\r\nنشست نقد و بررسی مجموعه داستان &laquo;سر سبیل&zwnj;هایت را نجو&raquo; روز یکشنبه ۲۸ خرداد در کتابخانه عمومی پیروزی برگزار می&zwnj;شود.\r\n&laquo;سر سبیل&zwnj;هایت را نجو&raquo; نوشته فرحناز علیزاده توسط نشر مروارید منتشر شده است و&nbsp;&nbsp;روز یکشنبه ۲۸ خرداد از ساعت ۱۸:۳۰ تا ۲۰:۳۰ با حضور احمد شاکری و نویسنده اثر در کتابخانه عمومی پیروزی نقد و بررسی می شود.\r\n",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497745800",
    "end_date": "1497814140",
    "reserve_start": "1497261398",
    "reserve_end": "1497814140",
    "meta_tags": "فرهنگی,نقد-کتاب,سر-سبیل-هایت-را-نجو,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497261398",
    "modify_by": null,
    "modify_date": null,
    "hits": "2",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "کتابخانه عمومی پیروزی",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497261398_user445.jpg",
    "poster": "upload/events/posters/1497261398436_user445.jpg",
    "lng": "51.496471524238586",
    "lat": "35.69778040100789",
    "loc": "Tehran Province, Tehran, Tehran Now, 26th St, ایران",
    "post_address": "خیابان پیروزی، خیابان شهید کلاهدوز، پارک پیروزی",
    "phone1": "",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "18:30",
            "endTime": "20:30",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "0",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4542",
    "catid": "10",
    "title": "تئاتر بوف نه چندان کور",
    "salon": "0",
    "fulltext": "نویسنده:&nbsp;محمد على سجادى (برداشتى آزاد از بوف کور اثر صادق هدایت)\r\nکارگردان:&nbsp;محمد على سجادى\r\nبازیگران:&nbsp;مسعود کرامتى، رحیم نوروزى، نازنین کریمى، الهام نامى\r\nتهیه کننده:&nbsp;حمید عرب\r\nمجری طرح: نازنین کریمی &lrm;برنامه ریز: ایمان توکلی &lrm;مدیر تولید: سید مسعود صمدی &lrm;یار کارگردان و منشی صحنه: باران سیبی موسیقى ساز: احسان آنالویی &lrm;طراح صورتگرى: نیلوفر رهبری &lrm;مشاور رسانه اى و مدیر روابط عمومی، مکث: سارا حدادی &lrm;حامى مجازى: آرین امیرخان، فیلم نیوز گرافیست: بهزاد خورشیدی عکاس و ساخت تیزر: محمد صادق زرجویان یار صحنه: علی اصغر ایزی",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1498005000",
    "end_date": "1500751740",
    "reserve_start": "1497259800",
    "reserve_end": "1500751740",
    "meta_tags": "تئاتر,بوف-نه-چندان-کور,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497259800",
    "modify_by": null,
    "modify_date": null,
    "hits": "0",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "0",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "ایرانشهر - سالن استاد سمندریان",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497259800_user445.jpg",
    "poster": "upload/events/posters/1497259800317_user445.jpg",
    "lng": "51.42089223861694",
    "lat": "35.710282509106946",
    "loc": "استان تهران، تهران، منطقه ۶، کوچه بهشهر، ایران",
    "post_address": "خیابان طالقانی، خیابان شهید موسوی شمالی، ضلع جنوبی باغ هنر، جنب خانه هنرمندان، تماشاخانه ایران‌شهر ",
    "phone1": "02188814116",
    "phone2": "",
    "reservdays": [{
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498264200",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498350600",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498437000",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498523400",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498609800",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498696200",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498782600",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498869000",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498955400",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499041800",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499128200",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499214600",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499301000",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499387400",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499473800",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499560200",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499646600",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499733000",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499819400",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499905800",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499992200",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500078600",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500165000",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500251400",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500337800",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500424200",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500510600",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500597000",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500683400",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:10",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "30000",
    "maxprice": "30000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4541",
    "catid": "8",
    "title": "نمایشگاه منابع کتابی و غیر کتابی گل و گیاه",
    "salon": "0",
    "fulltext": "\r\nکتابخانه عمومی حسینیه ارشاد به منظور بزرگداشت روز گل و گیاه، نمایشگاهی از منابع موجود را از روز پنج شنبه 25 خرداد ماه تا روز چهارشنبه 31 خرداد ماه، در ساعات کار کتابخانه، برپا می&zwnj;کند.\r\nبه گزارش رویداد فرهنگی، ۲۵ خردادماه هشتاد و نهمین روز بهار، روز ملی &laquo;گل&raquo; در كشور نام&zwnj;گذاری شده است. روزگاری نه چندان دور، گل و گلدان&zwnj;ها در حیاط خانه جایی امن برای زیستن داشتند. وجود گل و گیاه، در آپارتمان های امروزی سبب افزایش سلامت و آرامش روح و روان انسان ها می شود.&nbsp;رواج گل و گیاه در کشور به&zwnj;ویژه در طراحی فضای سبز از سه&zwnj;هزار سال پیش اهمیت بسیاری داشته و توسعه&zwnj;ی آن به&zwnj;عنوان یک حرفه، عمر ۸۵ ساله&zwnj;ای دارد که نخستین&zwnj; بار یک هلندی مقیم تهران با وارد کردن بذر گل از هلند، اقدام به پرورش گل در باغ خود و در واقع پرورش گل در کشور نمود.\r\n",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497486600",
    "end_date": "1498073340",
    "reserve_start": "1497249705",
    "reserve_end": "1498073340",
    "meta_tags": "فرهنگی,ویکی,ویکی-ایونت,wiki,wikievent,نمایشگاه-منابع-کتابی-و-غیر-کتابی-گل-و-گیاه",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497249705",
    "modify_by": null,
    "modify_date": null,
    "hits": "4",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "کتابخانه حسینیه ارشاد",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497249705_user445.jpg",
    "poster": "upload/events/posters/1497249705827_user445.jpg",
    "lng": "51.44817566871643",
    "lat": "35.756786630655014",
    "loc": "استان تهران، تهران، خیابان شریعتی، ایران",
    "post_address": "خیابان شریعتی، نرسیده به میرداماد",
    "phone1": "02122894004",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "30000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4540",
    "catid": "8",
    "title": "بازخوانی ادبیات داستانی کلاسیک فارسی \"هزار و یک شب\"",
    "salon": "0",
    "fulltext": "بیست و پنجمین نشست \"هفت شهر قلم\" &nbsp;به بازخوانی کتاب \" هزار و یک شب \" اختصاص دارد که باحضور مصطفی علیزاده داستان نویس و منتقد، نازنین جودت، رضا فکری و آزاده حسینی برگزار می شود.\r\n ادبیات داستانی کهن فارسی، پیچیدگی های لذتبخش و نکات ارزشمند و پنهانی دارد که گشودن آن پیچش&zwnj;ها و &nbsp;کشف و درک آن نکات پنهانی، لذت خواندن متون را چندبرابر می کند.\r\n گستردگی مضمون در هزار ویک شب کم نظیراست ؛ یکی از این مضامین عشق است که رد پایش در سراسر کتاب به چشم می خورد . همچنین تنوع مضامین، کستره کاربرد و شیوه های درج ادبیات در نثر هزار و یک شب اهمیت و جایگاه شعر را در حکایت های این مجموعه آشکار می سازد.\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497400200",
    "end_date": "1497468540",
    "reserve_start": "1497248414",
    "reserve_end": "1497468540",
    "meta_tags": "فرهنگی,بازخوانی-ادبیات-داستانی-کلاسیک-فارسی-هزار-و-یک-شب,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497248414",
    "modify_by": null,
    "modify_date": null,
    "hits": "3",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "فرهنگسرای ارسباران",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497248414_user445.jpg",
    "poster": "upload/events/posters/1497248414644_user445.jpg",
    "lng": "51.443310141563416",
    "lat": "35.74483388290757",
    "loc": "استان تهران، تهران، کوچه دانش، ایران",
    "post_address": "شریعتی، بعد از پل سید خندان، خیابان جلفا",
    "phone1": "02122872818",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "17:30",
            "endTime": "12:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "30000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4539",
    "catid": "3,4,8,9,10,11,25",
    "title": "فراخوان دعوت به همکاری ویکی کافه",
    "salon": "0",
    "fulltext": "ویکی ایونت قصد دارد با راه اندازی پروژه ویکی کافه، در محیط کافه ها اقدام به برگزاری رویدادهای فرهنگی و هنری بکند. هنرمندانی که در زمینه های مختلف مانند:\r\nموسیقی، پرفورمنس آرت، سینما، هنرهای تجسمی، استند آپ، اجرای زنده ی برنامه های رادیویی و پادکست، شعر و نمایشنامه خوانی و ...\r\nفعالیت می کنند در صورت تمایل به همکاری، می توانند طرح و ایده خود را تا دهم تیرماه نود و شش از طریق ایمیل زیر برای ما ارسال کنند:\r\ncafe@wikievent.ir\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497141000",
    "end_date": "1498937340",
    "reserve_start": "1497067140",
    "reserve_end": "1498807740",
    "meta_tags": "ویکی-کافه,کافه,فراخوان,موسیقی,تئاتر,سینما,فرهنگی,پرفورمنس,شعر,نمایشنامه-خوانی,پادکست,ویکی,ویکی-ایونت,wiki,wikievent,wiki-event,wikicafe,wiki-cafe",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497196763",
    "modify_by": null,
    "modify_date": "1497198222",
    "hits": "19",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "1",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "ویکی ایونت",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497198222_user445.jpg",
    "poster": "upload/events/posters/1497198222505_user445.jpg",
    "lng": "51.41985958814621",
    "lat": "35.713028789693794",
    "loc": "استان تهران، تهران، خیابان آذرشهر، ایران",
    "post_address": "ایرانشهر، آذرشهر، پلاک 22 طبقه 4",
    "phone1": "09224959810",
    "phone2": "02188342064",
    "reservdays": [{
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498264200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498350600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498437000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498523400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498609800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498696200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498782600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498869000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "30000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4538",
    "catid": "2,4,9",
    "title": "فراخوان مسابقه تبلیغات سینمای ایران جشنواره فیلم شهر",
    "salon": "0",
    "fulltext": "ششمین جشنواره فیلم شهر در چهار بخش: ملی، بین&zwnj;الملل، محله و جنبی به دبیری سیدعلی احمدی در نیمه اول مردادماه 96 برگزار خواهد شد و علاقمندان می&zwnj;توانند جهت شرکت در بخش مسابقه تبلیغات تا 4 تیرماه از طریق مراجعه به سایت رسمی جشنواره به آدرس www.urbanfilmfest.org، فرم ثبت&zwnj;نام را دریافت کرده و پس از تکمیل، آن را در آدرس اعلام شده، تحویل دهند.\r\nفراخوان مسابقه تبلیغات ششمین جشنواره بین&zwnj;المللی فیلم شهر به این شرح است: &nbsp; &bull; شرایط عمومى ١-&nbsp; متقاضیان می&zwnj;توانند با مراجعه به درگاه اینترنتی جشنواره و بخش فراخوان و ثبت&zwnj;نام مسابقه تبلیغی، فرم شرکت در مسابقه را دریافت و تکمیل کنند. ۲- تمام فیلم&zwnj;های بلند سینمایی ایرانی که از خردادماه ٩4 تا تیر&zwnj;ماه سال جاری در داخل کشور به نمایش عمومی درآمده باشند، می&zwnj;توانند در مسابقه شرکت کنند. ۳- آثاری که منطبق با موضوعات جشنواره باشند در اولویت انتخاب خواهند بود. ٤- محدودیتی در تعداد عناوین آثار ارسالی وجود ندارد. ٥- برنامه&zwnj;ریزی برای نمایش آثار ارائه شده و یا نمایشگاه&zwnj;های جنبی دیگر به عهده دبیرخانه&zwnj; این بخش خواهد بود. ۶- تفسیر مقررات، رفع ابهامات و اخذ تصمیم نهایی در خصوص موضوعات پیش&zwnj;بینی نشده به عهده&zwnj; دبیر جشنواره است. ۷- پس از تحویل تقاضانامه و آثار به دبیرخانه، امکان خارج کردن آنها از جشنواره وجود ندارد. ۸- دبیرخانه مجاز به استفاده از آثار ارسالی در بخش های مختلف جشنواره (کتاب، کاتالوگ، تیزر، فضای مجازی و...) است. &nbsp; &bull; شرایط اختصاصی بخش عکس: ١- آثار آنالوگ ملزم به اسکن تصاویر و ارائه بر روی لوح فشرده در فرمت TIF یا&nbsp; JPG ،&nbsp; با حداقل کیفیت DPI300 و در اندازه حداقل 50 *70 سانتی&zwnj;متر و همچنین ارائه یک نسخه چاپی در قطع ٣٠ *٢٠ سانتی&zwnj;متر (بدون حاشیه) از هر تصویر است. ٢- آثار دیجیتال ملزم به ارائه فایل تصاویر بر روی لوح فشرده در فرمت TIF یا JPG ، با حداقل کیفیت ۶ مگاپیکسل و همچنین ارائه یک نسخه چاپی در قطع ٣٠*٢٠ سانتی&zwnj;متر (بدون حاشیه) از هر تصویر است. ٣- در صورت تعدد آثار، عکس&zwnj;های هر فیلم می&zwnj;بایست به صورت جداگانه در لوح فشرده ذخیره شوند. ۴- تعداد آثار ارسالی از هر عنوان، 5 عکس صحنه و 3 عکس پشت صحنه است. ۵- هرگونه دخل و تصرف در عکس&zwnj;ها به شکلی که اصالت عکس را مخدوش کند، مجاز نیست. &nbsp; &bull; بخش پوستر: ١- ارائه ٢ نسخه چاپی (افست) همراه فایل پوستر بر روی CD یا DVD با فرمت TIF یا JPG، با کیفیت DPI300 و در قطع ٧٠*١٠٠ و همچنین ارائه یک نسخه پرینت از پوستر در قطع A3، همراه سایر مدارک ضروری است. ٢- پوسترهاى ارائه شده باید از میان آثار رسمى و استفاده شده در تبلیغات فیلم باشد. ۳- در بخش فیلم های مستند، کوتاه و نیمه بلند آثار متقاضی شرکت در بخش مسابقه می&zwnj;توانند پوستر فیلم خود را در این بخش شرکت دهند. &nbsp; &bull; بخش عنوان بندی هریک از نسخه&zwnj;های موردنظر می&zwnj;بایست به&zwnj;صورت مجزا، روی یک لوح فشرده و با فرمتMP4&nbsp; به دبیرخانه ارسال شود. &bull; بخش آنونس و تیزر: هریک از نسخه&zwnj;های موردنظر می&zwnj;بایست به&zwnj;صورت مجزا، روی یک لوح فشرده و با فرمت MP4 به دبیرخانه&nbsp; ارسال شود. &nbsp; &bull; جوایز : o&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; تندیس جشنواره، دیپلم افتخار و جایزه نقدی به بهترین عکس\r\no&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; تندیس جشنواره، دیپلم افتخار و جایزه نقدی به بهترین پوستر\r\no&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; دیپلم افتخار و جایزه نقدی به بهترین لوگو\r\no&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; تندیس جشنواره، دیپلم افتخار و جایزه نقدی به بهترین عنوان بندی\r\no&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; تندیس جشنواره، دیپلم افتخار و جایزه نقدی به بهترین آنونس و تیزر\r\no&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; تندیس جشنواره، دیپلم افتخار و جایزه نقدی به بهترین پوستر فیلم های مستند، کوتاه و نیمه بلند\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497054600",
    "end_date": "1498418940",
    "reserve_start": "1497196475",
    "reserve_end": "1498418940",
    "meta_tags": "فراخوان,جشنواره,سینما,مسابقه-تبلیغات-سینمای-ایران-جسنواره-فیلم-شهر,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497196475",
    "modify_by": null,
    "modify_date": null,
    "hits": "4",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "دبیرخانه جشنواره",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497196475_user445.jpg",
    "poster": "upload/events/posters/1497196475605_user445.jpg",
    "lng": "51.41307091712952",
    "lat": "35.799695929179",
    "loc": "استان تهران، تهران، کوچه جامی غربی، ایران",
    "post_address": "خیابان ولی‌عصر (عج)، بالاتر از پارک وی، خیابان مقدس اردبیلی، خیابان کیهان، خیابان جامی غربی، پلاک 21",
    "phone1": "02122403998",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498264200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498350600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "30000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4537",
    "catid": "3",
    "title": "نمایشگاه گروهی صنایع دستی \"آوای نقش\"",
    "salon": "0",
    "fulltext": "در این نمایشگاه بیش از 50 اثر صنایع دستی مشتمل بر رشته های نگارگری، تذهیب، زیور آلات چوبی، فیروزه کوب، معرق منبت، مشبک چوب،نقاشی روی چرم ، ویترای، حکاکی روی تخم شتر مرغ به نمایش وفروش در خواهد آمد.\r\nهمزمان با برگزاری این نمایشگاه کارگاه آموزشی از هنرهای ارائه شده در هر روز از یکی از هنرمندان برگزار خواهد شد.\r\nهنرمندان حاضر در این نمایشگاه را می توان به سهیلا گنج آبادی، مونامتین پارسا ، مرضیه قهرمانی، گلنار قشقایی، محبـوبه زراعتی رکنــی، زهــرا کرمانیهـا ، حافظ صبـوری اشاره کرد.\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497141000",
    "end_date": "1497727740",
    "reserve_start": "1497195881",
    "reserve_end": "1497727740",
    "meta_tags": "تجسمی,نمایشگاه-صنایع-دستی-آوای-نقش,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497195881",
    "modify_by": null,
    "modify_date": null,
    "hits": "3",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "فرهنگ‌ سرای معرفت",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497195881_user445.jpg",
    "poster": "upload/events/posters/1497195881496_user445.jpg",
    "lng": "51.29022574424744",
    "lat": "35.75807300587752",
    "loc": "استان تهران، تهران، جنت آباد مرکزی، بلوار شهران، ایران",
    "post_address": "میدان شهرزیبا، بلوار شهران، بعد از زیرگذر شهید همت",
    "phone1": "02144319304",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "18:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "18:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "18:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "18:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "18:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "18:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "18:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "30000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4536",
    "catid": "3",
    "title": "نمایشگاه خوشنویسی و تذهیب \"ن و القلم\"",
    "salon": "0",
    "fulltext": "این نمایشگاه بصورت گروهی و متشکل از آثار استادان خوشنویس محمدی تبار، حسین نژاد و حجت الاسلام سینایی است.\r\nدر نمایشگاه \"ن و القلم\" بیش از 30 تابلو خوشنویسی و تذهیب با موضوعات احادیث ائمه و معصومین و در ابعاد مختلف به نمایش گذاشته شده است.\r\nاین نمایشگاه نخستین نمایشگاه گروهی هنرمندان مسجد منیره منطقه 17 است.\r\nتذهیب این آثار توسط خانم ها رزاقی، توانا، طاهری، حسین نژاد، ندرلو و عزیزی انجام شده است.\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497054600",
    "end_date": "1498246140",
    "reserve_start": "1497195265",
    "reserve_end": "1498246140",
    "meta_tags": "تجسمی,خوشنویسی,تذهیب,نمایشگاه-ن-و-القلم,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497195265",
    "modify_by": null,
    "modify_date": null,
    "hits": "4",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "فرهنگ سرای بهاران",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497195265_user445.jpg",
    "poster": "upload/events/posters/1497195265769_user445.jpg",
    "lng": "51.35551071166992",
    "lat": "35.64736003767246",
    "loc": "Tehran Province, Tehran, Fard-e-Mohammadi, ایران",
    "post_address": "میدان ابوذر، انتهای سجاد جنوبی، میدان بهاران",
    "phone1": "02166231118",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "30000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4535",
    "catid": "11",
    "title": "کنسرت محسن یگانه",
    "salon": "0",
    "fulltext": "محسن یگانه اولین ترانه خود را در کنار محسن چاوشی با نام نشکن دلمو با ترانه&zwnj;سرایی و آهنگسازی خودش و تنظیمی از محسن چاوشی اجرا کرد.\r\nاز افتخارات او می توان به:\r\nدریافت تندیس بهترین اجرای زندهٔ موسیقی پاپ، بخش کارشناسی از اولین جشنواره سالانه موسیقی&nbsp; در سال۱۳۹۱\r\nو\r\nدریافت تندیس سالن تئاتر نوکیا لس آنجلس (Nokia Theatre L.A. Live) و ثبت نام او به عنوان یکی از مشاهیر این تالار\r\nاشاره کرد.\r\nبهای بلیط کنسرت: از 40000 تا 140000 تومان",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1500597000",
    "end_date": "1500751740",
    "reserve_start": "1497194722",
    "reserve_end": "1500751740",
    "meta_tags": "موسیقی,کنسرت,محسن-یگانه,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497194722",
    "modify_by": null,
    "modify_date": null,
    "hits": "9",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0627\\u06cc\\u0631\\u0627\\u0646 \\u06a9\\u0646\\u0633\\u0631\\u062a\",\"url\":\"https:\\/\\/www.iranconcert.com\\/?ebuy=5086&t=%DA%A9%D9%86%D8%B3%D8%B1%D8%AA%20%D9%85%D8%AD%D8%B3%D9%86%20%DB%8C%DA%AF%D8%A7%D9%86%D9%87\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "مرکز همایش های برج میلاد",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497194722_user445.jpg",
    "poster": "upload/events/posters/1497194722625_user445.jpg",
    "lng": "51.37557363510132",
    "lat": "35.74442461481578",
    "loc": "برج میلاد، تهران، استان تهران، ایران",
    "post_address": "بزرگراه چمران جنوب - خروجی حکیم غرب - خروجی بیمارستان میلاد",
    "phone1": "02184361000",
    "phone2": "",
    "reservdays": [{
        "daydate": "1500597000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "",
            "price": "40000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500683400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "",
            "price": "40000",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "40000",
    "maxprice": "40000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4534",
    "catid": "8",
    "title": "جلسه نقد رمان \"برکت\" ابراهیم اکبری دیزگاه",
    "salon": "0",
    "fulltext": "این نشست ساعت 17 روز سه شنبه 23 خرداد با حضور منتقدانی چون مجید اسطیری و محمدرضا گودرزی برگزار خواهد شد.\r\n رمان &laquo;برکت&raquo; داستان طلبه جوانی&zwnj;ست که در ایام ماه مبارک رمضان، برای تبلیغ به روستایی به نام میان&zwnj;رودان می&zwnj;رود. از رفتار نامناسب مردم روستا و واکنش&zwnj;های یونس برکت نسبت به آنها، موقعیت&zwnj; و خرده موقعیت&zwnj;های متعدد داستانی&zwnj;ای خلق می&zwnj;شود که برای مخاطب جذاب و خواندنی است. جدا از قصه و ماجرای جالب توجه، این اثر به لحاظ فرم و ساختار نیز از ویژگی&zwnj;های منحصر به فردی برخوردار است. \" برکت \" در شانزدهمین دوره جایزه ادبی شهید حبیب غنی&zwnj;پور، به عنوان اثر شایسته تقدیر، بخش آزاد معرفی شد. \" برکت \" در سال 94 در 304 صفحه و به بهای 33 هزار تومان توسط انتشارات کتابستان معرفت منتشر شده است.\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497313800",
    "end_date": "1497382140",
    "reserve_start": "1497186685",
    "reserve_end": "1497382140",
    "meta_tags": "فرهنگی,نشست-نقد-رمان-برکت,ویکی,ویک-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497186685",
    "modify_by": null,
    "modify_date": null,
    "hits": "5",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "کتابخانه فرهنگسرای گلستان",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497186685_user445.jpg",
    "poster": "upload/events/posters/1497186685468_user445.jpg",
    "lng": "51.48347890377045",
    "lat": "35.72878812742865",
    "loc": "استان تهران، تهران، خیابان پارک فدک، ایران",
    "post_address": "نارمک، خیابان گلستان، پایین تر از میدان هلال احمر",
    "phone1": "02177827730",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "40000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4533",
    "catid": "5,8",
    "title": "کارگاه داستان نویسی \"واژه ها\" (بر آستان جانان)",
    "salon": "0",
    "fulltext": "این کارگاه به منظور آشنایی هرچه بیشتر کودکان و نوجوانان با اصول داستان نویسی و هنر نویسندگی در فرهنگسرای خاوران برگزار می شود.\r\n در این کارگاه به اهمیت مقدمات داستان نویسی، زاویه دید، سبک و روش های صحیح و استاندارد داستان نویسی پرداخته و قالب های مختلف داستان در تمامی حوزه ها مانند: داستان کوتاه، نمایش نامه و ... برای مخاطبین تشریح می شود.\r\n در این راستا کارگاه آموزشی داستان نویسی به مناسبت ماه مبارک رمضان با رویکرد دینی و قرانی برگزار می&zwnj; شود. گفتنی است این برنامه روز دوشنبه 22خرداد ماه از ساعت 16 به کارشناسی زهرا عزیزخوانی برگزار می شود.\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497227400",
    "end_date": "1497295740",
    "reserve_start": "1497185064",
    "reserve_end": "1497295740",
    "meta_tags": "کارگاه,فرهنگی,کارگاه-داستان-نویسی-واژه-ها,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497185064",
    "modify_by": null,
    "modify_date": null,
    "hits": "3",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "فرهنگسرای خاوران",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497185064_user445.jpg",
    "poster": "upload/events/posters/1497185064142_user445.jpg",
    "lng": "51.470545291900635",
    "lat": "35.652904785370325",
    "loc": "Tehran Province, Tehran, Dahom-e-Farvardin, ایران",
    "post_address": "میدان خراسان، خیابان خاوران، سه راه هاشم آباد",
    "phone1": "02133015423",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "40000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4532",
    "catid": "8",
    "title": "نشست \"شب ترجمه های نهج البلاغه\"",
    "salon": "0",
    "fulltext": "\r\nبه مناسبت ماه مبارک رمضان مجله بخارا با همکاری مرکز نشر علوم اسلامی و نشر ادبیات شب ترجمه های نهج البلاغه را در ساعت پنج ونیم بعد ازظهر سه شنبه بیست و سوم خرداد ماه برگزار می کند.\r\nبیش از هزار سال (اواخر قرن چهارم هجری که سخنان حضرت علی علیه السلام توسط سید رضی گرد اوری شده)می گذرد. ترجمه های نهج البلاغه توسط ایرانیان به زبان فارسی سابقه چند صد ساله دارد.دراین مراسم استادان سید مصطفی محقق داماد، عبدالمجید معادیخواه، محمدعلی مهدوی راد و احمد پاکتچی سخنرانی خواهند کرد. همچنین از چاپ جدید ترجمه نهج البلاغه که توسط زنده یاد علی اصغر فقیهی انجام شده بود رو نمایی می شود.\r\n",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497313800",
    "end_date": "1497382140",
    "reserve_start": "1497184172",
    "reserve_end": "1497382140",
    "meta_tags": "فرهنگی,شب-ترجمه-های-نهج-البلاغه,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497184172",
    "modify_by": null,
    "modify_date": null,
    "hits": "3",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "کانون زبان پارسی (بنیاد موقوفات دکتر محمود افشار)",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497184172_user445.jpg",
    "poster": "upload/events/posters/1497184172280_user445.jpg",
    "lng": "51.42096599936485",
    "lat": "35.80170819588079",
    "loc": "استان تهران، تهران، خیابان لادن، ایران",
    "post_address": "خیابان ولی عصر، سه راه زعفرانیه، خیابان عارف نسب پلاک 12",
    "phone1": "02122718149",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "17:30",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "40000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4531",
    "catid": "8",
    "title": "نشست بررسی میراٍث مکتوب ایرانیان پس از اسلام در شبه قاره هند",
    "salon": "0",
    "fulltext": "\r\nگروه ایران شناسی و اسلام شناسی اداره کل اطلاع رسانی کتابخانه ملی نشست تخصصی &laquo;بررسی میراث مکتوب ایرانیان پس از اسلام در شبه قاره هند&raquo; را برگزار می کند.نشست تخصصی &laquo;بررسی میراث مکتوب ایرانیان پس از اسلام در شبه قاره هند&raquo; با&nbsp;سخنرانی دکتر حمیدرضا دالوند عضو هیات علمی پژوهشگاه علوم انسانی و مطالعات فرهنگی در&nbsp;ساختمان کتابخانه ملی، تالار ایران شناسی برگزار می&zwnj;شود.\r\n&nbsp;\r\n",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497227400",
    "end_date": "1497295740",
    "reserve_start": "1497183795",
    "reserve_end": "1497295740",
    "meta_tags": "فرهنگی,نشست,بررسی-میراث-مکتوب-ایرانیان-پس-از-اسلام-در-شبه-قاره-هند,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497183795",
    "modify_by": null,
    "modify_date": null,
    "hits": "3",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "ساختمان کتابخانه ملی، تالار ایران شناسی",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497183795_user445.jpg",
    "poster": "upload/events/posters/1497183795181_user445.jpg",
    "lng": "51.43428182601929",
    "lat": "35.752330953683156",
    "loc": "استان تهران، تهران، بلوار کتابخانه ملی، ایران",
    "post_address": "بزرگراه حقانی، سازمان اسناد و کتابخانه ملی، تالار ایران‌شناسی",
    "phone1": "02188644104",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "12:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "40000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4530",
    "catid": "11",
    "title": "کنسرت امید جهان",
    "salon": "0",
    "fulltext": "امید جهان خواننده پاپ ایرانی است. سبک شاد و پر انرژی از ویژگی های بارز موسیقی او می باشد.\r\nبهای بلیط: از 40000 تا 120000",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1502325000",
    "end_date": "1502393340",
    "reserve_start": "1497182211",
    "reserve_end": "1502393340",
    "meta_tags": "موسیقی,کنسرت-امید-جهان,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497182211",
    "modify_by": null,
    "modify_date": null,
    "hits": "4",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0627\\u06cc\\u0631\\u0627\\u0646 \\u06a9\\u0646\\u0633\\u0631\\u062a\",\"url\":\"https:\\/\\/www.iranconcert.com\\/?ebuy=5090&t=%DA%A9%D9%86%D8%B3%D8%B1%D8%AA%20%D8%A7%D9%85%DB%8C%D8%AF%20%D8%AC%D9%87%D8%A7%D9%86\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "سالن میلاد",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497182211_user445.jpg",
    "poster": "upload/events/posters/1497182211168_user445.jpg",
    "lng": "51.403382778167725",
    "lat": "35.79084135017058",
    "loc": "Tehran Province, Tehran, Buu Ali Sina, ایران",
    "post_address": "بزرگراه چمران شمال - خیابان سئول - درب جنوبی نمایشگاه بین‌المللی تهران",
    "phone1": "02121919",
    "phone2": "",
    "reservdays": [{
        "daydate": "1502325000",
        "cycles": [{
            "startTime": "22:00",
            "endTime": "",
            "price": "40000",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "40000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4529",
    "catid": "10",
    "title": "تئاتر بنگاه تئاترال",
    "salon": "0",
    "fulltext": "نویسنده:&nbsp;علی نصیریان\r\nکارگردان:&nbsp;هادی مرزبان\r\n&nbsp;\r\nبازیگران:&nbsp;ایرج راد، سعید امیر سلیمانی، فرزانه کابلی، امین زندگانی، میر طاهر مظلومی، محمود بصیری، داود فتحعلی بیگی، علی فتحعلی، سامان تیرانداز، آیه قبادیان، مجید غفاری، فائقه شلال وند، باقر مرادی، حاتم میرزایی، فواد منیرزاده، محمد کمانی، پریسا ذوالفقاری، شاهین علیپور، نوشین نامی، سجاد احمدنیا، ثمینه حسینی، الهه نورمحمدیان، مسعود مرادیان، علی یارلو، کامران طاهری، سید شهاب حسینی، محمدامین پازوکی، کیمیا نوری، فائزه راد، سایه شیرزاد، الهه اخوان، محمد محمدی&zwnj;نیا، پرستو فوقی، رویا علیزاده، شقایق جلینی، غزاله آبی، نگار مقدسی، نوشین اسدزاده،\r\nخواننده: محمد حشمتی آهنگساز: علی المعی نوازنده تار: مجتبی جعفری نوازنده ترومپت: عباس حیدری دستیاران کارگردان: مهری آسایش، مجید غفاری طراح حرکت: فرزانه کابلی طراح صحنه: رضا مهدیزاده طراح لباس: صدف شجاعی طراح نور: امیر ترحمی طراح گریم: فریبا حسینی طراح پوستر و گرافیک: محمد وفایی عکاس: امیر کورش اعرابی منشی صحنه: اکرم حاج حسینی مدیر صحنه: حسن عسگری دستیاران صحنه: حمیدرضا ژاله، مریم حیدرزاده دستیاران لباس: سحر شجاعی، مریم خسروی، رضا جلالوند دوخت لباس: فتانه باغستانی مدیر روابط عمومی و تبلیغات: محمد وفایی\r\nتماشای این نمایش برای افراد زیر ۱۶ سال توصیه نمی&zwnj;شود.آغاز پیش فروش از دوشنبه ۲۲خرداد خواهد بود.\r\nسبک: کمدی انتقادی",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1498437000",
    "end_date": "1501183740",
    "reserve_start": "1497164280",
    "reserve_end": "1501167540",
    "meta_tags": "تئاتر,بنگاه-تئاترال,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497180518",
    "modify_by": null,
    "modify_date": "1497252703",
    "hits": "9",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u062a\\u06cc\\u0648\\u0627\\u0644\",\"url\":\"https:\\/\\/www.tiwall.com\\/store\\/teatral\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "ماشاخانه سنگلج",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497252703_user445.jpg",
    "poster": "upload/events/posters/1497252703166_user445.jpg",
    "lng": "51.40998101234436",
    "lat": "35.68163366374936",
    "loc": "استان تهران، تهران، خیابان بهشت، ایران",
    "post_address": "پایین تر از میدان حسن آباد، ضلع جنوبی پارک شهر، خیابان بهشت، تماشاخانه سنگلج ",
    "phone1": "02155625444",
    "phone2": "",
    "reservdays": [{
        "daydate": "1498437000",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498523400",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498609800",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498696200",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498782600",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498869000",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498955400",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499041800",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499128200",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499214600",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499301000",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499387400",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499473800",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499560200",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499646600",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499733000",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499819400",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499905800",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499992200",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500078600",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500165000",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500251400",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500337800",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500424200",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500510600",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500597000",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500683400",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500769800",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500856200",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500942600",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501029000",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501115400",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:45",
            "price": "25000",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "40000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4528",
    "catid": "5",
    "title": "کارگاه دو روزه سخنران حرفه ای",
    "salon": "0",
    "fulltext": "&nbsp;بسیاری&nbsp;از مدیران و صاحبان مشاغل و کلیه افرادی که قرار است گزارشی را به مجموعه ای ارائه دهند، بطور واضح، دقیق و اصولی نمی دانند چگونه بایستی یک سخنرانی را طراحی و ارائه نمایند که بیشترین میزان اثربخشی را داشته باشد و در بسیاری از مواقع با اینکه سخنرانی خوبی تدارک دیده شده است اما وجود ترس، اضطراب و خجالت در میان این افراد باعث گردیده تا سخنرانی به نحو بدی ارائه گردد. خیلی از مدیران با وجود دانش مدیریتی فراوان اما دچار بحران سخنرانی در جمع هستند.\r\nدر کارگاه دو روزه پیش رو کارشناسان، مدیران و کلیه صاحبان مشاغل که به نوعی با سخنرانی در ارتباط هستند بر علم سخنرانی و مهارت های کلامی و ارتباطی و صحبت در جلسات فنی و عمومی مسلط خواهند شد و با بهره مندی از تجارب اساتید حرفه ای و نیز استفاده از جدیدترین تکنیک هایی که در این کارگاه خواهند آموخت براحتی و بطور کاملا موثر می توانند در مجامع بزرگ سخنرانی نمایند و از قدرت نفوذ کلامشان لذت ببرند.\r\nدر این کارگاه علاوه بر یادگیری مفاهیم اساسی سخنرانی و فن بیان فرصتی فراهم گردیده تا با سایر مدیران شرکت های معتبر در فضایی بسیار دوستانه و صمیمی و دور از هیاهوی کاری آشنا شوید و فرصت های همکاری جدیدی را خلق نمایید.\r\nافرادی که در این کارگاه شرکت می کنند افرادی هستند که یا مدیر هستند و یا کارافرینانی که در مسیر موفقیت خود و ارتباطات بهتر، به مهارت سخنرانی و مهارت های کلامی و ارتباطی نیاز دارند. این کارگاه 2 روزه به گونه ای طراحی گردیده که در پایان آن شرکت کنندگان بتوانند:\r\nطراحی دقیق و اصولی سخنرانی خود را انجام دهند.ترس و اضطراب در حین سخنرانی را مدیریت نمایند.در هنگام مذاکرات براحتی در قلب مخاطب خود نفوذ کنند.رفتارهای انسانی را با استفاده از زبان بدن تحلیل کنند.با تکنیک های روز فن بیان و صداسازی آشنا شوند.شخصا بتوانند از ابزارهای اسلاید سازی استفاده نمایند.\r\n&nbsp;",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1499301000",
    "end_date": "1499455740",
    "reserve_start": "1497152820",
    "reserve_end": "1499439540",
    "meta_tags": "ویکی,ویکی_ایونت,کارگاه",
    "meta_desc": "طراحی دقیق و اصولی سخنرانی خود را انجام دهند.\r\nترس و اضطراب در حین سخنرانی را مدیریت نمایند.\r\nدر هنگام مذاکرات براحتی در قلب مخاطب خود نفوذ کنند.\r\nرفتارهای انسانی را با استفاده از زبان بدن تحلیل کنند.\r\nبا تکنیک های روز فن بیان و صداسازی آشنا شوند.\r\nشخصا بتوانند از ابزارهای اسلاید سازی استفاده نمایند.",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497169047",
    "modify_by": null,
    "modify_date": "1497177733",
    "hits": "2",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0627\\u06cc\\u0648\\u0646\\u062f\",\"url\":\"https:\\/\\/evand.com\\/events\\/speech\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497177733_user403.jpg",
    "poster": "upload/events/posters/1497177733638_user403.jpg",
    "lng": "51.37532119999992",
    "lat": "35.7448416",
    "loc": "برج میلاد، تهران، استان تهران، ایران",
    "post_address": "بزرگراه شیخ فضل الله نوری، ورودی بزرگراه شهید همت، کنار گذر اختصاصی برج میلاد",
    "phone1": "  02184361000",
    "phone2": "  ",
    "reservdays": [{
        "daydate": "1499301000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:30",
            "price": "490000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499387400",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:30",
            "price": "490000",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "490000",
    "maxprice": "490000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4527",
    "catid": "3,5",
    "title": "کارگاه دوره فشرده نقاشی",
    "salon": "0",
    "fulltext": "دوره آموزش طراحی، آبرنگ و رنگ روغن در کافه هنر دانشکده فنی دانشگاه تهران\r\nاین دوره یک ماهه می باشد و یک روز در هفته برگزار می شود.",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1499041800",
    "end_date": "1501788540",
    "reserve_start": "1497168013",
    "reserve_end": "1501788540",
    "meta_tags": "ویکی,ویکی_ایونت,wiki,wiki_event,کارگاه,تجسمی,نقاشی",
    "meta_desc": "دوره آموزش طراحی، آبرنگ و رنگ روغن در کافه هنر دانشکده فنی دانشگاه تهران\r\n\r\nاین دوره یک ماهه می باشد و یک روز در هفته برگزار می شود.",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497168013",
    "modify_by": null,
    "modify_date": null,
    "hits": "3",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0627\\u06cc\\u0648\\u0646\\u062f\",\"url\":\"https:\\/\\/evand.com\\/events\\/6567\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497168013_user403.jpg",
    "poster": "upload/events/posters/1497168013284_user403.jpg",
    "lng": "51.39372830000002",
    "lat": "35.7042449",
    "loc": "استان تهران، تهران، خیابان ۱۶ آذر، دانشکده فنی - مهندسی شیمی و عمران، ایران",
    "post_address": "امیراباد شمالی، دانشکده فنی دانشگاه تهران",
    "phone1": "02161111",
    "phone2": "",
    "reservdays": [{
        "daydate": "1499041800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499128200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499214600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499301000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499387400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499473800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499560200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499646600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499733000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499819400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499905800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499992200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500078600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500165000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500251400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500337800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500424200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500510600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500597000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500683400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500769800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500856200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500942600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501029000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501115400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501201800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501288200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501374600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501461000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501547400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501633800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501720200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "100000",
    "maxprice": "490000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4526",
    "catid": "5",
    "title": "کارگاه خودآگاهی",
    "salon": "0",
    "fulltext": "فکر می&zwnj;کنید چقدر خودتان را می&zwnj;شناسید؟ حتما می&zwnj;گویید خیلی زیاد، اما منصفانه&zwnj;تر که فکر کنید خواهید دید واقعیت چیز دیگری است. بسیاری از ما با این توهم زندگی می&zwnj;کنیم که خودمان را خوب می&zwnj;شناسیم و از دانستن درباره&zwnj;ی خودآگاهی و سایر موضوعاتی که به شناخت خود کمک می&zwnj;کنند، بی&zwnj;نیاز هستیم. حال آنکه اغلب ما درک واضحی از خودمان و اهداف&zwnj;مان نداریم و دقیقا به همین دلیل در تصمیم&zwnj;گیری&zwnj;ها دچار اشتباه می&zwnj;شویم. در ادامه با ما همراه باشید تا با مفهوم و اهمیت خودآگاهی آشنا شوید و چند تمرین ساده و مؤثر در بهبود خودآگاهی را یاد بگیرید.\r\nخودآگاهی عبارت است از توانایی شناخت و درک نیازها، امیال، نقاط ضعف، عادات و هر جنبه&zwnj;ی دیگری که به&zwnj; طرز رفتار یک فرد شکل می&zwnj;دهند. این توانایی در برخی منابع با عنوان خودشناسی و خودکاوی نیز معرفی شده است.\r\nخودآگاهی بخش اعظمی از مباحث درمانی و نیز فلسفی را به خود اختصاص می&zwnj;دهد. خودآگاهی همچنین مبنای جنبشِ خودسنجی (quantified-self movement) است. به اعتقاد پیروان این جنبش، افراد می&zwnj;توانند با بهره&zwnj;گیری از فناوری به جمع&zwnj;آوری اطلاعات پیرامون متغیرهای مختلفِ زندگی روزمره&zwnj; بپردازند و کیفیت زندگی خود را از طریق ارزیابی اطلاعات جمع&zwnj;آوری&zwnj;شده بهبود ببخشند.\r\nگوردون مارینو (Gordon Marino)، استاد فلسفه&zwnj;ی کالج سِنت اولاف، در مقاله&zwnj;ای در نیویورک تایمز می&zwnj;نویسد:\r\nشعار سقراط این بود که &laquo;خودت را بشناس&raquo;. بر خلاف تصور بسیاری از فلاسفه، خودشناسی فقط به خودآزمایی عقلانی محدود نمی&zwnj;شود، بلکه مستلزم شناخت احساسات خویشتن است. به تجربه دریافتم فلاسفه به&zwnj;طورکلی از لحاظ احساسی افراد سازش&zwnj;پذیری نیستند. بسیاری از این افراد با فراز و نشیب&zwnj;های احساسی به&zwnj;گونه&zwnj;ای مواجه می&zwnj;شوند که گویی این هیجانات چیزی جز موانع عقلانیت نیستند، در حالی که فروید بیش از حکیمان آتن به اهمیت اخلاقی خودپیدایی احساسی توجه دارد. فروید با زبانی که به تراژدی&zwnj;نویسان یونانی می&zwnj;ماند، اما شعرگونه نیست، یادآور می&zwnj;شود همبستگی با طیف وسیع احساسات امری بس دشوار است\r\nخودآگاهی عبارت است از توانایی شناخت و درک نیازها، امیال، نقاط ضعف، عادات و هر جنبه&zwnj;ی دیگری که به&zwnj; طرز رفتار یک فرد شکل می&zwnj;دهند. این توانایی در برخی منابع با عنوان خودشناسی و خودکاوی نیز معرفی شده است.\r\nخودآگاهی بخش اعظمی از مباحث درمانی و نیز فلسفی را به خود اختصاص می&zwnj;دهد. خودآگاهی همچنین مبنای جنبشِ خودسنجی (quantified-self movement) است. به اعتقاد پیروان این جنبش، افراد می&zwnj;توانند با بهره&zwnj;گیری از فناوری به جمع&zwnj;آوری اطلاعات پیرامون متغیرهای مختلفِ زندگی روزمره&zwnj; بپردازند و کیفیت زندگی خود را از طریق ارزیابی اطلاعات جمع&zwnj;آوری&zwnj;شده بهبود ببخشند.\r\n&nbsp;",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1498782600",
    "end_date": "1501615740",
    "reserve_start": "1497167263",
    "reserve_end": "1501615740",
    "meta_tags": "ویکی,ویکی_ایونت,کارگاه,روانشناسی,خودشناسی,wiki,wiki_event",
    "meta_desc": "خودآگاهی عبارت است از توانایی شناخت و درک نیازها، امیال، نقاط ضعف، عادات و هر جنبه‌ی دیگری که به‌ طرز رفتار یک فرد شکل می‌دهند. این توانایی در برخی منابع با عنوان خودشناسی و خودکاوی نیز معرفی شده است.",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497167263",
    "modify_by": null,
    "modify_date": null,
    "hits": "4",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0627\\u06cc\\u0648\\u0646\\u062f\",\"url\":\"https:\\/\\/evand.com\\/events\\/selfawareness\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497167263_user403.jpg",
    "poster": "upload/events/posters/1497167263933_user403.jpg",
    "lng": "51.2085548",
    "lat": "35.6346671",
    "loc": "استان تهران، تهران، Shahrak-e-Shahab Sang, خیابان شهید مطهری، ایران",
    "post_address": "خیابان شهید مطهری، نرسیده به اتوبان مدرس، جنب خیابان کوه نور، موسسه توسعه آموزشی پژوهشی سینا",
    "phone1": "09125042924",
    "phone2": "",
    "reservdays": [{
        "daydate": "1498782600",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498869000",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498955400",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499041800",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499128200",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499214600",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499301000",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499387400",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499473800",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499560200",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499646600",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499733000",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499819400",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499905800",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499992200",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500078600",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500165000",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500251400",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500337800",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500424200",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500510600",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500597000",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500683400",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500769800",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500856200",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500942600",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501029000",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501115400",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501201800",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501288200",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501374600",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501461000",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501547400",
        "cycles": [{
            "startTime": "16:30",
            "endTime": "20:00",
            "price": "200000",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "100000",
    "maxprice": "490000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4525",
    "catid": "3,5",
    "title": "کارگاه خوشنویسی",
    "salon": "0",
    "fulltext": "کارگاه آموزش خوشنویسی با خودکار و قلم",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1499128200",
    "end_date": "1502825340",
    "reserve_start": "1497165861",
    "reserve_end": "1502825340",
    "meta_tags": "کارگاه,تجسمی,خوشنویسی,ویکی,ویکی_ایونت,wiki,wiki_event",
    "meta_desc": "کارگاه آموزش خوشنویسی با خودکار و قلم",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497165861",
    "modify_by": null,
    "modify_date": null,
    "hits": "3",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0627\\u06cc\\u0648\\u0646\\u062f\",\"url\":\"https:\\/\\/evand.com\\/events\\/6565\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497165861_user403.jpg",
    "poster": "upload/events/posters/1497165861192_user403.jpg",
    "lng": "51.39372830000002",
    "lat": "35.7042449",
    "loc": "استان تهران، تهران، خیابان ۱۶ آذر، دانشکده فنی - مهندسی شیمی و عمران، ایران",
    "post_address": "امیراباد شمالی، دانشکده فنی دانشگاه تهران",
    "phone1": "02161111",
    "phone2": "",
    "reservdays": [{
        "daydate": "1499128200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499214600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499301000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499387400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499473800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499560200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499646600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499733000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499819400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499905800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499992200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500078600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500165000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500251400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500337800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500424200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500510600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500597000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500683400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500769800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500856200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500942600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501029000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501115400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501201800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501288200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501374600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501461000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501547400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501633800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501720200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501806600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501893000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501979400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502065800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502152200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502238600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502325000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502411400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502497800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502584200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502670600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502757000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "19:00",
            "price": "100000",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "100000",
    "maxprice": "490000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4524",
    "catid": "12",
    "title": "سمینار و وبینار رایگان آشنایی با شاهنامه فردوسی",
    "salon": "0",
    "fulltext": "سمینار و وبینار رایگان آشنایی با شاهنامه فردوسی، با هدف بررسی این سوال که\r\nشاهنامه برای انسان و جهان امروز چه پیامی دارد؟\r\nدر موسسه یاوران سرزمین آریا برگزار می شود.",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497313800",
    "end_date": "1497382140",
    "reserve_start": "1497165132",
    "reserve_end": "1497382140",
    "meta_tags": "ویکی,فرهنگی,ویکی_ایونت,شاهنامه,ادبیات,سمینار,فردوسی,wiki,wiki_event",
    "meta_desc": "سمینار و وبینار رایگان آشنایی با شاهنامه فردوسی، با هدف بررسی این سوال که\r\n\r\nشاهنامه برای انسان و جهان امروز چه پیامی دارد؟\r\n\r\nدر موسسه یاوران سرزمین آریا برگزار می شود.",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497165132",
    "modify_by": null,
    "modify_date": null,
    "hits": "4",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0627\\u06cc\\u0648\\u0646\\u062f\",\"url\":\"https:\\/\\/evand.com\\/events\\/%D8%B3%D9%85%DB%8C%D9%86%D8%A7%D8%B1-%D9%88-%D9%88%D8%A8%DB%8C%D9%86%D8%A7%D8%B1-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86-%D8%A2%D8%B4%D9%86%D8%A7%DB%8C%DB%8C-%D8%A8%D8%A7-%D8%B4%D8%A7%D9%87%D9%86%D8%A7%D9%85%D9%87-%D9%81%D8%B1%D8%AF%D9%88%D8%B3%DB%8C-%D8%B4%D8%A7%D9%87%D9%86%D8%A7-8503294\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497165132_user403.jpg",
    "poster": "upload/events/posters/1497165132354_user403.jpg",
    "lng": "51.39506857199706",
    "lat": "35.795310970222246",
    "loc": "استان تهران، تهران، نوفرستی، ایران",
    "post_address": " ولنجک، ابتدای خیابان درکه، کوچه نوفرستی، پ 44",
    "phone1": "02122403980",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "17:45",
            "endTime": "19:15",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "490000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4522",
    "catid": "5,7",
    "title": "5 کارگاه مادر و کودک در یک روز",
    "salon": "0",
    "fulltext": "قراره چند تا كارگاه بازي به جاي يكي داشته باشيم کلی بازی و هیجان پشت سر هم واسه مامانا و کوچولوهاشون همراه با موزيك و در فضايي باز\r\nقراره بازی های ریتمیک کنیم،بالا و پایین بپریم،بتروکونیییم و بخنديم كاردستي درست كنيم رنگ كنيم و کنارش هم بازی هامون واسه تعادل و تمرکز و ارتقا مهارت بچه ها مفید باشه\r\nساعت کارگاه ها:١-ماساژ كودك زير يكسال ساعت ۱۰-۱۱\r\n٢-شن بازي و آرد بازي ساعت ۱۱-۱۲\r\n٣-نقاشي و رنگ انگشتي با وسايل مختلف ساعت ۱۲:۳۰-۱۳:۳۰\r\n٤-كاردستي و خلاقيت ساعت ۲-۳:۳۰\r\n۵-جنگ آب و بازي هاي تخليه هيجان ساعت ۴-۵:۳۰\r\nتوجه:تمام بازي ها زير نظر دو روانشناس انجام مي شود.\r\nمحدوده سنی ۲ تا ۶ سال و ماساژ کودک برای زیر یکسال.هزینه هر کارگاه ۳۵ هزار تومان می باشد و شرکت در حداقل ۳ کارگاه با تخفیف ۳۰ هزار تومان&nbsp;لحاظ می گردد.هزینه هر کودک اضافه ۲۰ هزارتومانهزینه همراه بزرگسال رایگان&nbsp;امکان عكاسي آتليه اي &nbsp;با هزينه جداگانهکارگاه ها همراه با پذیرایی می باشد.حتما يك دست لباس اضافي همراه داشته باشيد.",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1498091400",
    "end_date": "1498159740",
    "reserve_start": "1497162935",
    "reserve_end": "1498159740",
    "meta_tags": "ویکی,ویکی_ایونت,کارگاه,کودک,مادر_و_کودک,wiki,wiki_event",
    "meta_desc": "ساعت کارگاه ها:\r\n١-ماساژ كودك زير يكسال ساعت ۱۰-۱۱\r\n\r\n٢-شن بازي و آرد بازي ساعت ۱۱-۱۲\r\n\r\n٣-نقاشي و رنگ انگشتي با وسايل مختلف ساعت ۱۲:۳۰-۱۳:۳۰\r\n\r\n٤-كاردستي و خلاقيت ساعت ۲-۳:۳۰\r\n\r\n۵-جنگ آب و بازي هاي تخليه هيجان ساعت ۴-۵:۳۰\r\n\r\nتوجه:تمام بازي ها زير نظر دو روانشناس انجام مي شود.\r\n\r\nمحدوده سنی ۲ تا ۶ سال و ماساژ کودک برای زیر یکسال.\r\nهزینه هر کارگاه ۳۵ هزار تومان می باشد و شرکت در حداقل ۳ کارگاه با تخفیف ۳۰ هزار تومان لحاظ می گردد.\r\nهزینه هر کودک اضافه ۲۰ هزارتومان\r\nهزینه همراه بزرگسال رایگان \r\nامکان عكاسي آتليه اي  با هزينه جداگانه\r\nکارگاه ها همراه با پذیرایی می باشد.\r\nحتما يك دست لباس اضافي همراه داشته باشيد.",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497162935",
    "modify_by": null,
    "modify_date": null,
    "hits": "3",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u06a9\\u06cc \\u0628\\u0631\\u06cc\\u0645\",\"url\":\"http:\\/\\/keyberim.com\\/5-%DA%A9%D8%A7%D8%B1%DA%AF%D8%A7%D9%87-%D9%85%D8%A7%D8%AF%D8%B1-%D9%88-%DA%A9%D9%88%D8%AF%DA%A9-%D8%AF%D8%B1-%DB%8C%DA%A9-%D8%B1%D9%88%D8%B2-%D8%AF%D8%B1-%D9%85%D9%88%D8%B3%D8%B3%D9%87-%D8%B1%D9%88\\/\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497162935_user403.jpg",
    "poster": "upload/events/posters/1497162935984_user403.jpg",
    "lng": "51.45719276190175",
    "lat": "35.769702700800984",
    "loc": "استان تهران، تهران، گلبهار، ایران",
    "post_address": "پاسداران انتهای نيستان هشتم بعد از تقاطع محسنيان بن بست آرام پلاك دو موسسه روشن مهر",
    "phone1": "09100049364",
    "phone2": "",
    "reservdays": [{
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "17:30",
            "price": "20000",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "490000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4521",
    "catid": "3,5,7,10,11",
    "title": "همایش کارگاه های متمرکز مکتب تهران-دوره راهیابی",
    "salon": "0",
    "fulltext": "در دنیای پیشرفته بخشی از بازه سنی نوجوانی صرف استعداد&zwnj;یابی و راهنمایی نوجوانان برای انتخاب حرفه آینده آن&zwnj;ها می&zwnj;شود.همچنین هر فرد در جوامع مدرن علاوه بر شغل خود به یک تخصص فرهنگی هنری نیز سرگرم است، مانند نوازندگی یک ساز، جمع آوری اقلام کلکسیونی، نقاشی، آواز و ...بنابراین دست کم برای نوجوانان، یک دوره&zwnj;ی منسجم عمومی زیر نظر اساتید مجرب لازم است تا هم خودشان و هم والدین و مربیان در طول چنین دوره&zwnj;ای بتوانند به علاقه، غریزه و قریحه آن&zwnj;ها برای زندگی بهتر و فرهیخته&zwnj;تر در جامعه پی&zwnj; ببرند.مکتب تهران در دوره نهم همایش&zwnj;های خود تصمیم گرفته است به چنین امر مهمی که به آینده فرزندانمان مربوط است به طور جدی و کارشناسانه بپردازد.همایش نهم کارگاه&zwnj;های متمرکز مکتب تهران به مدت ۴۰ روز فرزندان شما را به آزمون و خطا در پنج رشته اصلی فرهنگی هنری سرگرم می&zwnj;کند.\r\nاین رشته ها شامل موسیقی-داستان پردازی- طراحی و تاتر می باشند و تلاش بر این است که کودکان و نوجوانان با سرپرستی کارشناسان به کشف استعدادهای خود بپردازند.\r\nپیش از شروع دوره یک جلسه آشنایی با تاتر برای والدین توسط مدیریت مجموعه برگزار خواهد شد و دو جلسه به عنوان گزارش فعالیت های نوجوانان در میان و پایان دوره توسط کارشناسان برای والدین&nbsp; برقرار خواهد شد.\r\nکارشناسان این دوره:&nbsp; خانوم ها بهاره رهنما، شبنم فرشادجو، عالیه عطایه و آقایان نادر مشایخی، آرش صدق بیگی، محمد ابطحی ،مازیار تهرانی می باشند.\r\nاین دوره در هشت هفته و هر هفته پنج روز برگزار خواهد شد.\r\nاین تجربه&zwnj;ها علاوه بر سرگرم کردن نوجوانان در تابستان، این امکان را برای شما، ما و البته که خود نوجوانان فراهم می&zwnj;کند تا به علاقه آنها نسبت به هر یک از این رشته&zwnj;ها چه به عنوان شغل اصلی و چه به عنوان تخصص جانبی برای آینده خود پی ببریم؛ ضمن اینکه در صورت جدی گرفتن چنین روشی در مواجهه با آینده فرزندان، نسل&zwnj;های بعدی اگر صاحب تخصص ویژه&zwnj;ای در زمینه&zwnj;ی فرهنگ و هنر نشوند، دست&zwnj;کم مخاطبان ورزیده، فرهیخته و صاحب سلیقه&zwnj;ای در این رشته&zwnj;ها خواهند شد.",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1499473800",
    "end_date": "1504121340",
    "reserve_start": "1497128460",
    "reserve_end": "1504088940",
    "meta_tags": "ویکی,ویکی_ایونت,کارگاه,کودک,wiki,wiki_event",
    "meta_desc": "این تجربه‌ها علاوه بر سرگرم کردن نوجوانان در تابستان، این امکان را برای شما، ما و البته که خود نوجوانان فراهم می‌کند تا به علاقه آنها نسبت به هر یک از این رشته‌ها چه به عنوان شغل اصلی و چه به عنوان تخصص جانبی برای آینده خود پی ببریم؛ ضمن اینکه در صورت جدی گرفتن چنین روشی در مواجهه با آینده فرزندان، نسل‌های بعدی اگر صاحب تخصص ویژه‌ای در زمینه‌ی فرهنگ و هنر نشوند، دست‌کم مخاطبان ورزیده، فرهیخته و صاحب سلیقه‌ای در این رشته‌ها خواهند شد.",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497160904",
    "modify_by": null,
    "modify_date": "1497167308",
    "hits": "4",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "1",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497167308_user403.jpg",
    "poster": "upload/events/posters/1497167308509_user403.jpg",
    "lng": "51.41329759947507",
    "lat": "35.70952038492053",
    "loc": "استان تهران، تهران، کوچه کیوان، ایران",
    "post_address": " خیابان آبان جنوبی،خیابان کیوان، شماره هشت - موسسه فرهنگی هنری مکتب تهران ",
    "phone1": "02188891512",
    "phone2": "",
    "reservdays": [{
        "daydate": "1499473800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499560200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499646600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499733000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499819400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499905800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499992200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500078600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500165000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500251400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500337800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500424200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500510600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500597000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500683400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500769800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500856200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500942600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501029000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501115400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501201800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501288200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501374600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501461000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501547400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501633800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501720200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501806600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501893000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501979400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502065800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502152200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502238600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502325000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502411400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502497800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502584200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502670600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502757000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502843400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502929800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503016200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503102600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503189000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503275400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503361800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503448200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503534600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503621000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503707400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503793800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503880200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503966600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504053000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "14:00",
            "price": "3800000",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "3800000",
    "maxprice": "3800000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4520",
    "catid": "5",
    "title": "کارگاه تفکر خلاق و ذهن ایده ساز",
    "salon": "0",
    "fulltext": "کارگاه تفکر خلاق و ذهن ایده ساز همراه با آموزش ثبت اختراع توسط کلیلنیک رشد مرکز خدمات اجتماعی منطقه 6 برگزار می شود.",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497832200",
    "end_date": "1497900540",
    "reserve_start": "1497158712",
    "reserve_end": "1497900540",
    "meta_tags": "ویکی,ویکی_ایونت,کارگاه,تفکر_خلاق,ایده_پردازی,wiki,wiki_event",
    "meta_desc": "کارگاه تفکر خلاق و ذهن ایده ساز همراه با آموزش ثبت اختراع توسط کلیلنیک رشد مرکز خدمات اجتماعی منطقه 6 برگزار می شود.",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497158712",
    "modify_by": null,
    "modify_date": null,
    "hits": "3",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0627\\u06cc\\u0648\\u0646\\u062f\",\"url\":\"https:\\/\\/evand.com\\/events\\/%DA%A9%D8%A7%D8%B1%DA%AF%D8%A7%D9%87-%D8%AA%D9%81%DA%A9%D8%B1-%D8%AE%D9%84%D8%A7%D9%82-%D9%88-%D8%B0%D9%87%D9%86-%D8%A7%DB%8C%D8%AF%D9%87-%D8%B3%D8%A7%D8%B2-8318\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497158712_user403.jpg",
    "poster": "upload/events/posters/1497158712343_user403.jpg",
    "lng": "51.41475100845946",
    "lat": "35.73828154165379",
    "loc": "تهران، خیابان الوند، ایران",
    "post_address": "میدان آرژانتین، خیابان الوند، خیابان 37 ، مرکز خدمات اجتماعی منطقه 6",
    "phone1": "",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "19:00",
            "price": "19900",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "19900",
    "maxprice": "3800000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4519",
    "catid": "5",
    "title": "کارگاه آموزشی «شِرپای ثروت»",
    "salon": "0",
    "fulltext": "چه مباحثی در دوره &laquo;شرپای ثروت&raquo; ارائه داده می&zwnj;شود؟در این دوره شما با یاوری علی درجزینی پاسخ پرسش&zwnj;های زیر را پیدا خواهید کرد:\r\nچگونه بتوانید تعریف دقیق و روشنی از موفقیت برای خودتان داشته باشید؟چگونه بتوانید نگاهی استراتژیک و راهبردی به خودتان، کسب&zwnj;وکارتان و شغلتان داشته باشید؟چگونه بتوانید بزرگترین هدف زندگی خودتان را تشخیص دهید؟چگونه بتوانید با درآمد فعلیتان برای رسیدن به آرزوها و هدف&zwnj;های پرهزینه&zwnj;تان برنامه&zwnj;ریزی کنید؟چگونه بتوانید طوری برنامه ریزی کنید که قابل انجام باشد؟تحقیقات نشان می&zwnj;دهد که ۷۳% تا ۹۰% رفتارهای انسان از ناخودآگاهش سرچشمه می&zwnj;گیرید. و می&zwnj;آموزید چگونه بتوانید ناخودآگاه خود را برای ثروتمند شدن آماده کنید؛\r\n9 دلیل برای شرکت کردن در دوره آموزشی &laquo;شرپای ثروت&raquo;:\r\n۱) در روش&zwnj;های آموزشی موجود، پس از ۲۴ساعت شما ۸۰درصد مطالب را فراموش می&zwnj;کنید. حال آن&zwnj;که با جدیدترین روش آموزشی دنیا که علی درجزینی به کار می&zwnj;گیرد، شما ۸۰درصد همه آن&zwnj;چه در این کارگاه می&zwnj;آموزید را می&zwnj;توانید برای همیشه به خاطر بسپارید.\r\n۲) علی درجزینی چیزهایی را به شما آموزش خواهد داد که در بهترین منابع آموزشی، بزرگ&zwnj;ترین دانشگاه&zwnj;ها و نزد بهترین اساتید ایران و جهان آموخته و&nbsp;معتقد&nbsp;است که:\r\n&laquo;هرجا که چیزی مؤثر بر موفقیت کسب&zwnj;وکارم، برای آموختن وجود داشته باشد، اقدام فوری می&zwnj;کنم و آن&zwnj;را به صورت کاملاً کاربردی به هموطنانم نیز آموزش&nbsp;می&zwnj;دهم&raquo;.\r\n۳) مهم&zwnj;تر آن&zwnj;که او چیزهایی را آموزش می&zwnj;دهد که خودش عمل می&zwnj;کند و زندگی&zwnj;اش را متحول کرده است.\r\nاو همه آموخته&zwnj;هایش را پیش از هر کس به کار می&zwnj;گیرد و در زندگی شخصی و کسب&zwnj;وکارهایی که یاوری می&zwnj;کند پیاده می&zwnj;کند. و حالا این فرصت وجود دارد که بتوانید برای داشتن موفقیت خودتان در این کارگاه آموزشی شرکت کنید و بیش از هر زمانی برای ثروتمند شدن آماده شوید.\r\n۴) در پایان کارگاه کلیه صوت&zwnj;های آموزشی در یک سی&zwnj;دی به شما داده می&zwnj;شود تا در هر مکانی و با استفاده از تلویزیون، موبایل، با استفاده از پخش&nbsp;خودرویتان&nbsp;صوت&zwnj;ها را مرور کنید و آمادگیتان را برای موفقیت و ثروتمند شدن بیش&zwnj;تر و بیش&zwnj;تر شود.\r\n5) همه جزوات و اسلایدهای ارائه به صورت چاپ شده در اختیارتان گذاشته می&zwnj;شود تا بی&zwnj;نیاز از&nbsp;یادداشت&zwnj;برداری&zwnj;های وقت&zwnj;گیر که حواستان را پرت می&zwnj;کند، باشید.\r\n6) و اینکه صوت این فیلم به همراه نقد آن به شما هدیه خواهد شد که می&zwnj;توانید آن را در پخش خودرو یا موبایلتان در هر مکانی گوش کنید و دیگر نگران از دست&nbsp;رفتن وقتتان در ترافیک و زمان&zwnj;هایی که حوصله هیچ کاری را ندارید نباشید و از وقتتان بهترین استفاده را برای یادگیری و رسیدن به موفقیت و ثروت ببرید.\r\n7) همه آن&zwnj;چه نیاز دارید تا بتوانید نقشه شخصی خود برای رسیدن به موفقیت و ثروت را داشته باشید، در قالب یک بسته کامل آموزشی در اختیار شما&nbsp;قرار&nbsp;می&zwnj;گیرد. و نیاز به همراه داشتن هیچ وسیله و ابزار اضافی نخواهید داشت.\r\n8) گواهی شرکت در دوره از دانشگاه تهران را نیز دریافت می&zwnj;کنید.\r\n9) با حضور در این دوره آموزشی در شبکه&zwnj;ای از ارتباط با افراد موفق قرار خواهد گرفت!\r\nتوضیحات تکمیلیاین دوره آموزشی با همکاری معاونت فرهنگی&zwnj;ودانشجویی دانشکده کارآفرینی دانشگاه تهران برگزار خواهد شد؛\r\nروزهای 25و26 خردادماه از ساعت 15 الی 20:30 بصورت مستقیم و کارگاهی آموزش خواهید دید و به مدت 22 روز پشتیبانی خواهید شد؛\r\nبرای شرکت&zwnj;کنندگان مدرک معتبر و قابل استعلام از دانشکده کارآفرینی دانشگاه تهران صادر خواهد شد؛\r\nبرای اثربخشی بیشتر این آموزش فوق&zwnj;العاده پیشنهاد می&zwnj;کنیم با اعضای خانواده یا همکاران&zwnj;تان شرکت کنید.\r\nقیمت 380000 و&nbsp; 680000",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497486600",
    "end_date": "1497641340",
    "reserve_start": "1497158087",
    "reserve_end": "1497641340",
    "meta_tags": "ویکی,ویکی_ایونت,کارگاه,هدف,موفقیت,wiki,wiki_event",
    "meta_desc": "توضیحات تکمیلی\r\nاین دوره آموزشی با همکاری معاونت فرهنگی‌ودانشجویی دانشکده کارآفرینی دانشگاه تهران برگزار خواهد شد؛\r\n\r\nروزهای 25و26 خردادماه از ساعت 15 الی 20:30 بصورت مستقیم و کارگاهی آموزش خواهید دید و به مدت 22 روز پشتیبانی خواهید شد؛\r\n\r\nبرای شرکت‌کنندگان مدرک معتبر و قابل استعلام از دانشکده کارآفرینی دانشگاه تهران صادر خواهد شد؛",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497158087",
    "modify_by": null,
    "modify_date": null,
    "hits": "3",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0627\\u06cc\\u0648\\u0646\\u062f\",\"url\":\"https:\\/\\/evand.com\\/events\\/sherpa\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497158087_user403.jpg",
    "poster": "upload/events/posters/1497158087442_user403.jpg",
    "lng": "51.39663129999997",
    "lat": "35.7531835",
    "loc": "استان تهران، تهران، خیابان شیخ بهایی، ایران",
    "post_address": "ملاصدرا،شیخ بهایی جنوبی،جنب مسجد بقیت‌اله،سالن صدرا",
    "phone1": "02188624439",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "15:00",
            "endTime": "20:30",
            "price": "380000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "15:00",
            "endTime": "20:30",
            "price": "380000",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "19900",
    "maxprice": "3800000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4518",
    "catid": "4,10",
    "title": "فراخوان اجرای تئاتر محیطی در چارسو",
    "salon": "0",
    "fulltext": "گروه فرهنگی هنری پردیس سینمایی چارسو در راستای یاری رسانی به جریان پویا و سازنده تئاتر و ایجاد فرصت برای گروه های حرفه ای و جوان، در نظر دارد تا لابی و فضای باز این مجموعه را در اختیار اجراهای محیطی تئاتر قرار دهد. طرح پیشنهادی امکانی است برای عرض اندام گروه های خلاق جوان و حتی حرفه ای و نیمه حرفه ای. شرایط اجرا:\r\n ۱. اجرا باید منطبق با تعاریف اجرای تئاتر محیطی باشد، نه اجرا در محیط ۲. اجرا نباید دکور چندانی داشته باشد و گروه ملزم به استفاده از مختصات معماری محیط اجرایی است.  ۳. اولویت با نمایش نامه های ایرانی است، اما اجرای نمایش نامه های غیر ایرانی منعی ندارد. ۴. قرار داد اجرا به صورت گیشه ۷۰% به ۳۰% است. ۵. تعیین قیمت بلیت با توافق مجموعه و گروه اجرایی است. ۶. تعداد اجرای هر گروه ۱۵ است. (در صورت استقبال مخاطب و تایید مجموعه به تعداد اجرا افزوده می شود.)  ۷. متقاضیان می توانند متن نمایش نامه، طرح اجرایی و همینطور فیلم اجرا را به روابط عمومی پردیس سینمایی چارسو، واقع در خیابان جمهوری اسلامی، تقاطع خیابان حافظ، بازار چارسو، طبقه ششم، دفتر مدیریت سینما تا ۲۷ خرداد ماه ۹۶ ارسال کنند.\r\n لازم به ذکر است که گروه های اجرایی می بایست متون خود را تایپ شده به صورت فایل PDF در سه نسخه در قالب لوح فشرده به روابط عمومی تحویل داده و فرم اجرایی را ثبت کنند.\r\nتبصره:\r\nالف: گروه متقاضی ملزم به ارائه طرح و شیوه اجرایی است.\r\nب: ارائه مجوز از نمایش نامه نویس الزامی است.",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497054600",
    "end_date": "1497727740",
    "reserve_start": "1497090060",
    "reserve_end": "1497711540",
    "meta_tags": "فراخوان,تئاتر,اجرای-تئاتر-محیطی-در-چارسو,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497106265",
    "modify_by": null,
    "modify_date": "1497192413",
    "hits": "10",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "روابط عمومی پردیس سینمایی چارسو",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497192413_user445.jpg",
    "poster": "upload/events/posters/1497192413888_user445.jpg",
    "lng": "51.41328549385071",
    "lat": "35.70089086476",
    "loc": "استان تهران، تهران، خیابان حافظ، پلاک 351، ایران",
    "post_address": "خیابان جمهوری اسلامی، تقاطع خیابان حافظ، بازار چارسو، طبقه ششم، دفتر مدیریت سینما",
    "phone1": "02161721261",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4517",
    "catid": "4,10,24",
    "title": "فراخوان کمپین \"از خودمان شروع کنیم\"",
    "salon": "0",
    "fulltext": "طی این فراخوان، از هنرمندانی كه مایل هستند در پروژه&zwnj;ی تولید نمایش&zwnj;های خیابانی، میدانی و محیطی با موضوع ترافیك و در راستای اهداف همایش همكاری كنند دعوت می&zwnj;شود تا در وهله&zwnj; اول آمادگی خود را اعلام كنند و طی تماس با شماره&zwnj; تلفن&nbsp; 84172413 نام خود را در فهرست متقاضیان ثبت كنند.\r\nمتقاضیان شركت در این پروژه، بعد حضور در جلسه&zwnj; توجیهی كه با حضور مشاوران سازمان حمل و نقل و ترافیك شهرداری تهران و پلیس راهور ناجا برگزار می&zwnj;شود، یك هفته فرصت خواهند داشت تا طرح&zwnj;های خود را به تایید دفتر تئاتر خیابانی حوزه هنری برسانند و بعد از تولید اثر خود، وارد عقد قرارداد برای اجرای عمومی آن در سطح شهر تهران خواهند شد.  &nbsp; تاكید می&zwnj;شود فقط هنرمندانی امكان ارائه&zwnj; طرح دارند كه در جلسه&zwnj; توجیهی دفتر تئاتر خیابانی حضور به عمل رسانیده باشند. &nbsp;  مدیریت و هدایت است این پروژه بر عهده&zwnj; امیرحسین شفیعی، مسئول دفتر تئاتر خیابانی مركز هنرهای نمایشی حوزه هنری، است. ",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497054600",
    "end_date": "1503430140",
    "reserve_start": "1497105451",
    "reserve_end": "1503430140",
    "meta_tags": "مسئولیت-اجتماعی,فراخوان,تئاتر,از-خودمان-شروع-کنیم,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497105451",
    "modify_by": null,
    "modify_date": null,
    "hits": "6",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "دفتر تئاتر خیابانی حوزه هنری",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497105451_user445.jpg",
    "poster": "upload/events/posters/1497105451699_user445.jpg",
    "lng": "51.41322112083435",
    "lat": "35.70585689989466",
    "loc": "استان تهران، تهران، خیابان حافظ، پلاک 502، ایران",
    "post_address": "خیابان حافظ، تقاطع طالقانی",
    "phone1": "02184172413",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498264200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498350600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498437000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498523400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498609800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498696200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498782600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498869000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498955400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499041800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499128200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499214600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499301000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499387400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499473800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499560200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499646600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499733000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499819400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499905800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499992200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500078600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500165000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500251400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500337800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500424200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500510600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500597000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500683400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500769800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500856200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500942600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501029000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501115400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501201800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501288200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501374600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501461000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501547400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501633800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501720200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501806600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501893000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501979400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502065800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502152200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502238600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502325000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502411400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502497800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502584200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502670600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502757000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502843400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502929800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503016200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503102600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503189000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503275400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503361800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4516",
    "catid": "11",
    "title": "کنسرت حمید عسکری",
    "salon": "0",
    "fulltext": "كيبورد: منصور جنيد گيتار الكتريك: محمدعلى نصرى گيتار نايلون: فرهاد بهبهانى پركاشن: سعيد سارمى ويولون: ميلاد عالمى گيتار باس: مهدى قاسمى كيبورد: اشكان پويانيا درام: مجتبى صناعى كيبورد بك ووكال: پوريا حيدرى\r\n\r\nبهای بلیط : , 50,000 تومان , 60,000 تومان , 80,000 تومان , 90,000 تومان , 110,000 تومان , 130,000 تومان , 140,000 تومان\r\n",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1498955400",
    "end_date": "1499023740",
    "reserve_start": "1497087240",
    "reserve_end": "1499007540",
    "meta_tags": "موسیقی,کنسرت-حمید-عسکری,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497103457",
    "modify_by": null,
    "modify_date": "1497180101",
    "hits": "7",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"tik8\",\"url\":\"http:\\/\\/tik8.com\\/concert\\/%DA%A9%D9%86%D8%B3%D8%B1%D8%AA-%D8%AD%D9%85%DB%8C%D8%AF%D8%B9%D8%B3%DA%A9%D8%B1%DB%8C\\/#\\/\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "برج میلاد - سالن اصلی مرکز همایشها",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497180101_user445.jpg",
    "poster": "upload/events/posters/1497180101521_user445.jpg",
    "lng": "51.375916957855225",
    "lat": "35.74428528902788",
    "loc": "برج میلاد، تهران، استان تهران، ایران",
    "post_address": "بزرگراه شیخ فضل الله نوری، ورودی بزرگراه شهید همت، کنار گذر اختصاصی برج میلاد",
    "phone1": "02184361000",
    "phone2": "",
    "reservdays": [{
        "daydate": "1498955400",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "22:30",
            "price": "50000",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4515",
    "catid": "9",
    "title": "مستندهای محمد احسانی",
    "salon": "0",
    "fulltext": "محمد رحمانی کارگردان فیلم های \"رخش بر نقش\"، \"ایدز ایران 83\" و ... است که آثارش در بیش از 100 جشنواره جهانی به نمایش درآمده و از آن ها تقدیر شده است.",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497054600",
    "end_date": "1500751740",
    "reserve_start": "1497102702",
    "reserve_end": "1500751740",
    "meta_tags": "سینما,هنر-و-تجربه,مستند-های-محمد-احسانی,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497102702",
    "modify_by": null,
    "modify_date": null,
    "hits": "8",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0633\\u06cc\\u0646\\u0645\\u0627 \\u062a\\u06cc\\u06a9\\u062a\",\"url\":\"https:\\/\\/www.cinematicket.org\\/?p=nfilmdetailae&fid=1360&fileid=2472&t=%D9%85%D8%B3%D8%AA%D9%86%D8%AF%20%D9%87%D8%A7%DB%8C%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D8%AD%D8%B3%D8%A7%D9%86%DB%8C\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "0",
    "place_name": "سینماهای هنر و تجربه",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497102702_user445.jpg",
    "poster": "upload/events/posters/1497102702392_user445.jpg",
    "lng": "51.32167196273804",
    "lat": "35.75515196817652",
    "loc": "استان تهران، تهران، حيدری مقدم، ایران",
    "post_address": "",
    "phone1": "",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498264200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498350600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498437000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498523400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498609800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498696200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498782600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498869000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498955400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499041800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499128200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499214600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499301000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499387400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499473800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499560200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499646600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499733000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499819400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499905800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499992200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500078600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500165000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500251400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500337800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500424200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500510600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500597000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500683400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4514",
    "catid": "7,8,24",
    "title": "برنامه طرح \"با من بخوان\"",
    "salon": "0",
    "fulltext": "کارشناسان طرح &laquo;با من بخوان&raquo; در تابستان سال جاری با بسته&zwnj;های کتاب در برخی مناطق محروم کشور با بچه&zwnj;ها همراه می&zwnj;شوند.هم&zwnj;زمان با آغاز فصل تابستان، کارشناسان برنامه &laquo;با من بخوان&raquo; بر آن شده&zwnj;اند با ارسال بسته&zwnj;های تابستانی کتاب برای کودکان برخی مناطق همچون سیستان و بلوچستان، کوهدشت لرستان، حاشیه شهر اصفهان، حاشیه شهر تهران و برخی مناطق دیگر، تابستان کودکانی را که در سراسر سال گذشته زیر پوشش برنامه &laquo;با من بخوان&raquo; بوده&zwnj;اند، با کتاب&zwnj;خوانی همراه کنند.در آخرین سفر کارشناسان &laquo;با من بخوان&raquo; به مناطق گوناگون در اردیبهشت&zwnj;ماه سال جاری، شماری از آموزگاران آمادگی خود را برای باز نگاه داشتن مدرسه&zwnj;های خود، چند روز در هفته و خواندن و به امانت سپردن کتاب به کودکان اعلام کردند. با توجه به این&zwnj;که در این مناطق کودکان هیچ امکان تفریحی را برای گذران اوقات فراغت در تابستان ندارند، موسسه پژوهشی تاریخ ادبیات کودکان در پاسخ به این درخواست و نیاز کودکان، بسته&zwnj;های کتاب برای همه گروه&zwnj;های سنی کودکان آماده و به مناطق ارسال کرده است تا کتابخانه&zwnj;های کوچک تابستانی خود را در هر کجا که می&zwnj;توانند برپا دارند.بنا بر اعلام، در این برنامه انتشارات فنی ایران، نشر هوپا، انتشارات موسسه پژوهشی تاریخ ادبیات کودکان و همچنین صندوق آموزش و توانمندسازی کودکان کار و محروم وابسته به این موسسه در کنار هم قرار گرفتند تا مجموعه&zwnj;ای از کتاب&zwnj;های باکیفیت و گیرا را برای تابستان کودکان این مناطق فراهم کنند.در اجرای طرح کتابخانه&zwnj;های کوچک تابستانی، کودکان و نوجوانانی که در سال گذشته با ادبیات کودکان و شیوه&zwnj;های بلندخوانی آشنا شده&zwnj;اند به یاری مربیان و آموزگاران خود می&zwnj;آیند تا این کتابخانه&zwnj;های کوچک را در طول تابستان در مدرسه، مسجد یا حتی خانه&zwnj;های خود فعال نگاه دارند. در پایان تابستان، تمامی کتاب&zwnj;های کتابخانه&zwnj;های کوچک تابستانی به کتابخانه&zwnj;های کلاسی&zwnj; بازگردانده می&zwnj;شوند تا در سال آینده تحصیلی نیز دوباره مورد استفاده کودکان قرار گیرند.",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1498091400",
    "end_date": "1506112140",
    "reserve_start": "1497101278",
    "reserve_end": "1506112140",
    "meta_tags": "کودک,مسئولیت-اجتماعی,فرهنگی,با-من-بخوان,ویکی,ویکی-ایونت,wiki,wikievent,کتاب",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497101278",
    "modify_by": null,
    "modify_date": null,
    "hits": "5",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "0",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "0",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497101278_user445.jpg",
    "poster": "upload/events/posters/1497101278178_user445.jpg",
    "lng": "51.32167196273804",
    "lat": "35.75515196817652",
    "loc": "استان تهران، تهران، حيدری مقدم، ایران",
    "post_address": "",
    "phone1": "",
    "phone2": "",
    "reservdays": [{
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498264200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498350600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498437000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498523400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498609800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498696200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498782600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498869000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498955400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499041800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499128200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499214600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499301000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499387400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499473800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499560200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499646600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499733000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499819400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499905800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499992200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500078600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500165000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500251400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500337800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500424200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500510600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500597000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500683400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500769800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500856200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500942600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501029000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501115400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501201800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501288200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501374600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501461000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501547400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501633800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501720200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501806600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501893000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501979400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502065800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502152200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502238600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502325000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502411400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502497800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502584200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502670600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502757000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502843400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502929800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503016200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503102600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503189000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503275400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503361800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503448200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503534600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503621000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503707400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503793800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503880200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503966600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504053000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504139400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504225800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504312200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504398600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504485000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504571400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504657800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504744200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504830600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504917000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505003400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505089800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505176200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505262600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505349000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505435400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505521800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505608200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505694600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505781000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505867400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505953800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1506040200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4513",
    "catid": "3,5",
    "title": "کارگاه آموزشی بافت گلیمه های عشایری",
    "salon": "0",
    "fulltext": "کارگاه آموزشی \"بافت گلیمه های عشایری\" محمود روفه گر حق، با محور آموزش:\r\nتکنیک های بافت گلیم و تلفیق تکنیک های (گلیم ساده، زنجیره، گیس بافی، ورنی و اریب بافی)\r\nبرگزار می شود.\r\nعلاقه مندان می توانند برای اطلاعات بیشتر با شماره 66954200 داخلی 1121 تماس حاصل فرمایند.\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497054600",
    "end_date": "1503430140",
    "reserve_start": "1497100352",
    "reserve_end": "1503430140",
    "meta_tags": "کارگاه,تجسمی,کارگاه-آموزشی,بافت-گلیمه-های-عشایری,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497100352",
    "modify_by": null,
    "modify_date": null,
    "hits": "5",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "فرهنگستان هنر",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497100352_user445.jpg",
    "poster": "upload/events/posters/1497100352725_user445.jpg",
    "lng": "51.40619373321533",
    "lat": "35.70631863832021",
    "loc": "استان تهران، تهران، خیابان ولیعصر، ایران",
    "post_address": "خیابان ولیعصر، تقاطع خیابان طالقانی، شماره 1552",
    "phone1": "02166954200",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498264200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498350600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498437000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498523400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498609800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498696200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498782600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498869000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498955400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499041800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499128200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499214600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499301000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499387400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499473800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499560200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499646600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499733000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499819400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499905800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499992200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500078600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500165000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500251400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500337800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500424200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500510600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500597000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500683400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500769800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500856200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500942600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501029000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501115400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501201800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501288200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501374600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501461000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501547400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501633800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501720200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501806600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501893000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501979400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502065800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502152200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502238600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502325000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502411400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502497800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502584200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502670600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502757000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502843400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502929800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503016200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503102600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503189000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503275400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503361800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4512",
    "catid": "8",
    "title": "مراسم رونمایی کتاب \"درآمدی بر نظریه و اندیشه انتقادی در تاریخ هنر\"",
    "salon": "0",
    "fulltext": "این مراسم با حضور حمید سوری، هلیا دارابی و امیر نصری در موسسه ماه مهر برگزار می شود.",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497141000",
    "end_date": "1497209340",
    "reserve_start": "1497099051",
    "reserve_end": "1497209340",
    "meta_tags": "فرهنگی,مراسم-رونمایی-کتاب,درآمدی-بر-نظریه-و-اندیشه-انتقادی-در-تاریخ-هنر,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497099051",
    "modify_by": null,
    "modify_date": null,
    "hits": "5",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "موسسه ماه مهر",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497099051_user445.jpg",
    "poster": "upload/events/posters/1497099051708_user445.jpg",
    "lng": "51.42104244232178",
    "lat": "35.77726386338073",
    "loc": "استان تهران، تهران، خیابان نیلوفر، ایران",
    "post_address": "بلوار آفریقا، خیابان نیلوفر، پلاک 7",
    "phone1": "02122013179",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:30",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4511",
    "catid": "9",
    "title": "اکران و نقد فیلم برادرم خسرو",
    "salon": "0",
    "fulltext": "این فیلم داستان خسرو، پسر جوانی است که به بیماری اختلال دو قطبی مبتلا است و مدتی مجبور به اقامت در خانه برادر بزرگ خود شده است و .... ناصر هاشمی و احسان بیگلری میهمانان چهارصد و سی و سومین نشست باشگاه فیلم تهران هستند .",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497141000",
    "end_date": "1497209340",
    "reserve_start": "1497081840",
    "reserve_end": "1497193140",
    "meta_tags": "سینما,اکران-نقد-برادرم-خسرو,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497098055",
    "modify_by": null,
    "modify_date": "1497264890",
    "hits": "5",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "0",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "فرهنگسرای ارسباران",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497264890_user445.jpg",
    "poster": "upload/events/posters/1497264890102_user445.jpg",
    "lng": "51.443315505981445",
    "lat": "35.744886129746554",
    "loc": "استان تهران، تهران، کوچه دانش، ایران",
    "post_address": "خیابان شریعتی، بالاتراز سیدخندان، خیابان جلفا",
    "phone1": "02122872812",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "",
            "price": "5000",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4510",
    "catid": "8",
    "title": "شب شعر رمضان در ققنوس",
    "salon": "0",
    "fulltext": "بیست و سومین محفل ادبی \"ققنوس\" همزمان با ماه مبارک رمضان و ویژه برنامه های برآستان جانان، با اجرای مینا آقازاده شاعر، نویسنده و منتقد ادبی و شعرخوانی شاعران نام آشنا و حضور علاقمندان به شعر و ادب فارسی، روز دوشنبه 22 خرداد ماه ساعت 17 در مجتمع فرهنگی هنری نور برگزار می شود.\r\n&nbsp;\r\nاجرای این شب شعر بر عهده دکتر مینا آقازاده است و شاعران مطرحی چون: حمیدرضا شکارسری، کریم رجب زاده و علیرضا آذر به عنوان میهمانان ویژه&zwnj;ی این محفل ادبی، در وصف ماه مبارک رمضان و فضیلت این ماه الهی شعرخوانی خواهند کرد.\r\n&nbsp;\r\nمعرفی کتاب های شعر پرمخاطب از دیگر بخش های این شب شعر است که توسط مجری برنامه به مخاطبان معرفی می شود. اسامی و نویسندگان کتاب ها عبارتند از:\r\nـ گاهی فقط سکوت به فریاد می رسد، اثر محسن محمدی\r\nـ هر عید محبوبه منی، عاشقانه های نزار قبانی ترجمه اصغر علی کرمی\r\nـ طهران پایِ تخت، اثر امیرحسین رجب زاده\r\n&nbsp;\r\nبخش پایانی شب شعر رمضان در ققنوس، اجرای زنده دعای قبل از اذان با عنوان \"این دهان بستی\" توسط محمود جاهد از هنرمندان مطرح کشور در حوزه موسیقی است که مقارن با وقت ملکوتی اذان و افطار، حال و هوای معنوی به این مراسم خواهد بخشید.\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497227400",
    "end_date": "1497295740",
    "reserve_start": "1497096530",
    "reserve_end": "1497295740",
    "meta_tags": "فرهنگی,شب-شعر-رمضان-در-ققنوس,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497096530",
    "modify_by": null,
    "modify_date": null,
    "hits": "4",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "مجتمع فرهنگی هنری نور",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497096530_user445.jpg",
    "poster": "upload/events/posters/1497096530988_user445.jpg",
    "lng": "51.30733287334442",
    "lat": "35.771462262130015",
    "loc": "استان تهران، تهران، جنت آباد شمالی، بلوار انصارالمهدی، ایران",
    "post_address": "بلوار آیت الله کاشانی، بعد از تقاطع شهید ستاری، جنب شهر کتاب",
    "phone1": "02144088707",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4509",
    "catid": "11",
    "title": "کنسرت گروه رخساره (ویژه بانوان)",
    "salon": "0",
    "fulltext": "سرپرست و خواننده گروه: بهاره منصوری\r\nدر این کنسرت گلچینی از آثار همایون خرم و انوشیروان روحانی و همچنین بازخوانی&nbsp; مجموعه&zwnj;ای از آثار ماندگار موسیقی انجام می شود.",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1500078600",
    "end_date": "1500233340",
    "reserve_start": "1497079380",
    "reserve_end": "1500217140",
    "meta_tags": "موسیقی,کنسرت-گروه-رخساره,ویژه-بانوان,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497095629",
    "modify_by": null,
    "modify_date": "1497174161",
    "hits": "11",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0627\\u06cc\\u0631\\u0627\\u0646 \\u06a9\\u0646\\u0633\\u0631\\u062a\",\"url\":\"https:\\/\\/www.iranconcert.com\\/?ebuy=5022&amp;t=%DA%A9%D9%86%D8%B3%D8%B1%D8%AA%20%DA%AF%D8%B1%D9%88%D9%87%20%D8%B1%D8%AE%D8%B3%D8%A7%D8%B1%D9%87%20(%D9%88%DB%8C%DA%98%D9%87%20%D8%A8%D8%A7%D9%86%D9%88%D8%A7%D9%86)\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "فرهنگسرای نیاوران",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497174161_user445.jpg",
    "poster": "upload/events/posters/1497174161568_user445.jpg",
    "lng": "51.46916127204895",
    "lat": "35.80811447848673",
    "loc": "استان تهران، تهران، خان سفید، ایران",
    "post_address": "انتهای خیابان پاسداران، مقابل پارک نیاوران",
    "phone1": "02122287081",
    "phone2": "",
    "reservdays": [{
        "daydate": "1500078600",
        "cycles": [{
            "startTime": "21:00",
            "endTime": "",
            "price": "90000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500165000",
        "cycles": [{
            "startTime": "21:00",
            "endTime": "",
            "price": "90000",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4508",
    "catid": "11",
    "title": "کنسرت زانیار خسروی",
    "salon": "0",
    "fulltext": "زانیار خسروی متولد ۱۳۶۴ در تهران است. وی خواننده ، ترانه&zwnj;سرا، آهنگساز، تنظیم کننده و بازیگر ایرانی است. او برادر کوچکتر سیروان خسروی است. او علاوه بر کار خوانندگی و تنظیم آهنگ بازیگری هم می کند ، او در فیلم برف روی کاج ها اثر پیمان معادی ایفای نقش کرده است. پس از مدت&zwnj;ها انتظار، &laquo;زانیار خسروی&raquo; خواننده، آهنگساز، ترانه&zwnj;سرا و تنظیم&zwnj;کننده موسیقی پاپ، مجوز فعالیت رسمی دریافت کرد. او با انتشار آثارش در فضای مجازی به محبوبیت بالایی نزد مخاطبان دست یافته و مدت&zwnj;هاست که هواداران پرشمارش منتظر انتشار آلبوم رسمی و برگزاری کنسرت او هستند.\r\nبهای بلیط: از 45000 تا 140000 تومان",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1499473800",
    "end_date": "1499542140",
    "reserve_start": "1497062760",
    "reserve_end": "1499509740",
    "meta_tags": "موسیقی,کنسرت-زانیار-خسروی,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497095170",
    "modify_by": null,
    "modify_date": "1497174102",
    "hits": "19",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0627\\u06cc\\u0631\\u0627\\u0646 \\u06a9\\u0646\\u0633\\u0631\\u062a\",\"url\":\"https:\\/\\/www.iranconcert.com\\/?ebuy=5088&amp;amp;t=%DA%A9%D9%86%D8%B3%D8%B1%D8%AA%20%D8%B2%D8%A7%D9%86%DB%8C%D8%A7%D8%B1%20%D8%AE%D8%B3%D8%B1%D9%88%DB%8C\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "سالن میلاد",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497174102_user445.jpg",
    "poster": "upload/events/posters/1497174102461_user445.jpg",
    "lng": "51.40316820144653",
    "lat": "35.791050216468115",
    "loc": "استان تهران، تهران، بهشتی، ایران",
    "post_address": "بزرگراه چمران شمال، خیابان سئول، درب جنوبی نمایشگاه بین‌المللی تهران",
    "phone1": "02121919",
    "phone2": "",
    "reservdays": [{
        "daydate": "1499473800",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "21:00",
            "price": "45000",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4507",
    "catid": "10,25",
    "title": "مرد گیلاسی",
    "salon": "41",
    "fulltext": "\"مرد گیلاسی\"\r\nبه نویسندگی و کارگردانی \"مسعود فرجی\"\r\nو با اجرای:\r\n\"ماکان خدا رحمی، سیامک فارسی و شقایق حمزه لو\"\r\nدر \"کافه ژانر\" اجرا می شود.\r\n&nbsp;\r\n\"نمایش مرد گیلاسی بر اساس یک اتفاق واقعی است که سال گذشته در محل کافه ژانر اتفاق افتاده است و اکنون تماشاگران باید آن را به قضاوت بنشینند. تماشاگر در این نمایش صرفاً یک بیننده نیست و تعیین&zwnj;کننده&zwnj;ی سرنوشت شخصیت&zwnj;های نمایشی است.\"",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497141000",
    "end_date": "1497295740",
    "reserve_start": "1496873040",
    "reserve_end": "1497338940",
    "meta_tags": "تئاتر,پرفورمنس,مرد-گیلاسی,ویکی,ویکی-ایونت,wiki,wikievent,ویکی-کافه,کافه-ژانر",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497089063",
    "modify_by": null,
    "modify_date": "1497210157",
    "hits": "93",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "1",
    "status": "1",
    "salable": "1",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "کافه ژانر",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497210157_user445.jpg",
    "poster": "upload/events/posters/1497210157435_user445.jpg",
    "lng": "51.41083127260208",
    "lat": "35.70850314753695",
    "loc": "استان تهران، تهران، منطقه ۶، خیابان به آفرین، ایران",
    "post_address": "میدان ولیعصر، خیابان کریم خان، خیابان به آفرین، نبش رودسر",
    "phone1": "09224959810",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "19:30",
            "endTime": "20:10",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "19:30",
            "endTime": "20:10",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4506",
    "catid": "3",
    "title": "نمایشگاه گروهی عکس دانشجویان دانشگاه علمی کاربردی",
    "salon": "0",
    "fulltext": "در این نمایشگاه که از روز پنج شنبه هجدهم خرداد برپا شده است، 45 تابلواثر در ابعاد 50 در 70 سانتی متر درمعرض بازدید عموم علاقه مندان قرار دارد.\r\nپیوند ابوطالبی زنونزی، مهدی اعلمی، پویا احمدی، محمدرضا امینی، آزاده پیش بین، دریا پاکروان، آروین تشویق، محمد جاجرمی، فاطمه حسین آقایی، امیرحسین حجازی کیا، بهروز خانی، مهدی خاکباز، امیرهادی دربندی، مصطفی راسخ، مسعود روزافزون، علی رشیدی مهرآبادی، نفیسه زمانی، حسین عادل خانی، فتانه علیوند، سحر فرح آبادی، فرزانه قربانی نژاد، سجاد قهرمانی، مجید کریم زاده، مینا مرادی حقیقت، حدیثه محمدی، سعید نایب آقا، ریحانه نوری مجد، پریسا یونسی و استاد محمد جعفر حاج صادقی عکاسان حاضر در این نمایشگاه هستند.\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496881800",
    "end_date": "1498073340",
    "reserve_start": "1497088240",
    "reserve_end": "1498073340",
    "meta_tags": "تجسمی,نمایشگاه-گروهی-عکس-دانشجویان-دانشگاه-علمی-کاربردی,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497088240",
    "modify_by": null,
    "modify_date": null,
    "hits": "7",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "فرهنگسرای بهمن",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497088240_user445.jpg",
    "poster": "upload/events/posters/1497088240481_user445.jpg",
    "lng": "51.398640632629395",
    "lat": "35.64681949136561",
    "loc": "استان تهران، تهران، نازی آباد، شهید علیرضا وفایی، ایران",
    "post_address": "میدان راه آهن، میدان بهمن، خیابان شهید وفایی",
    "phone1": "02155312180",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496881800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4505",
    "catid": "3",
    "title": "نمایشگاه صنایع دستی \"دستان هنرمند\"",
    "salon": "0",
    "fulltext": "مجتمع فرهنگی هنری حکیمیه همزمان با فرا رسیدن هفته صنایع دستی نمایشگاه صنایع دستی با عنوان \"دستان هنرمند \" را برگزار می کند.\r\nاین نمایشگاه با هدف تکریم و پاسداشت گویش ها ، آداب و رسوم ، سنت ها از روز 20 خرداد ماه در معرض دید عموم قرار می گیرد.\r\nگفتنی است همزمان با برپایی نمایشگاه کارگاه آموزشی برای علاقه مندان به هنر های صنایع دستی برگزار می شود.\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497054600",
    "end_date": "1498073340",
    "reserve_start": "1497086529",
    "reserve_end": "1498073340",
    "meta_tags": "تجسمی,نمایشگاه-صنایع-دستی-دستان-هنرمند,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497086529",
    "modify_by": null,
    "modify_date": null,
    "hits": "6",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "مجتمع فرهنگی هنری حکیمیه",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497086529_user445.jpg",
    "poster": "upload/events/posters/1497086529467_user445.jpg",
    "lng": "51.58656692504883",
    "lat": "35.73125725061979",
    "loc": "Tehran Province, Tehran, Negarestan 5, ایران",
    "post_address": "شهرک حکیمیه ، بلوار نور ، بوستان نور",
    "phone1": "02177007710",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4504",
    "catid": "10",
    "title": "تئاتر جنگ یخ",
    "salon": "0",
    "fulltext": "کارگردان:&nbsp;تیام بیژنی\r\nبازیگران:&nbsp;محسن عزیز، تیام بیژنی، زینب عباسی، جلال تبریزی\r\nتهیه کننده:&nbsp;تیام بیژنی\r\nنویسندگان: تیام بیژنی، سعیده رودبارکی، محسن عزیز موسیقی و طراحی پوستر: محسن عزیز",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1498609800",
    "end_date": "1500060540",
    "reserve_start": "1497084459",
    "reserve_end": "1500060540",
    "meta_tags": "تئاتر,جنگ-یخ,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497084459",
    "modify_by": null,
    "modify_date": null,
    "hits": "11",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u062a\\u06cc\\u0648\\u0627\\u0644\",\"url\":\"https:\\/\\/www.tiwall.com\\/store\\/jange-yakh\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "موسسه فرهنگی هنری گندم (تیاتر گندم)- تماشاخانه پرو",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497084459_user445.jpg",
    "poster": "upload/events/posters/1497084459599_user445.jpg",
    "lng": "51.41567265987396",
    "lat": "35.702454763578004",
    "loc": "استان تهران، تهران، مراغه، ایران",
    "post_address": "خیابان انقلاب، ابتدای خیابان نجات الهی (ویلا)، کوچه مراغه، پلاک ۲، طبقه ۳",
    "phone1": "02188808017",
    "phone2": "",
    "reservdays": [{
        "daydate": "1498609800",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:00",
            "price": "20000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498696200",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:00",
            "price": "20000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498782600",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:00",
            "price": "20000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498869000",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:00",
            "price": "20000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498955400",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:00",
            "price": "20000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499041800",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:00",
            "price": "20000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499128200",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:00",
            "price": "20000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499214600",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:00",
            "price": "20000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499301000",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:00",
            "price": "20000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499387400",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:00",
            "price": "20000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499473800",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:00",
            "price": "20000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499560200",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:00",
            "price": "20000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499646600",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:00",
            "price": "20000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499733000",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:00",
            "price": "20000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499819400",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:00",
            "price": "20000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499905800",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:00",
            "price": "20000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499992200",
        "cycles": [{
            "startTime": "20:00",
            "endTime": "21:00",
            "price": "20000",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4503",
    "catid": "9",
    "title": "نشست نقد و بررسی فیلم \"فروشنده\"",
    "salon": "0",
    "fulltext": "این فیلم به زندگی زن و شوهری می&zwnj;پردازد که در حال بازی در نمایش &laquo;مرگ فروشنده&raquo; نوشته آرتور میلر هستند و شهاب حسینی، ترانه علیدوستی، بابک کریمی، مینا ساداتی، احترام برومند و ... در این فیلم به ایفای می پردازند.\r\n&laquo;فروشنده&raquo; برنده جوایز مختلفی از جمله بهترین فیلمنامه و بهترین بازیگر مرد از فستیوال کن، بهترین فیلم از نگاه تماشاگران فستیوال آمستردام، اولان&zwnj;باتور و بمبئی، بهترین فیلم فستیوال مونیخ و جایزه هوگوی نقره&zwnj;ای فستیوال فیلم شیکاگو شده است و در&nbsp; اسکار سال ۲۰۱۷ جایزه بهترین فیلم غیر انگلیسی زبان را کسب کرد.\r\nنشست نمایش و بررسی فیلم سینمایی&laquo;فروشنده&raquo; با حضور حنیف شمیم و محمد ناصری(منتقدان) با همکاری کانون فیلم قاب نو برگزار می شود.\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497141000",
    "end_date": "1497209340",
    "reserve_start": "1497079451",
    "reserve_end": "1497209340",
    "meta_tags": "سینما,نشست-نقد-بررسی-فیلم-فروشنده,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497079451",
    "modify_by": null,
    "modify_date": null,
    "hits": "7",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "0",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "فرهنگسرای شفق",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497079451_user445.jpg",
    "poster": "upload/events/posters/1497079451784_user445.jpg",
    "lng": "51.408360958099365",
    "lat": "35.72963730541574",
    "loc": "استان تهران، تهران، منطقه ۶، خیابان شفق، ایران",
    "post_address": "خیابان سیدجمال‌الدین اسدآبادی، خیابان21 بوستان شفق",
    "phone1": "02188554015",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4502",
    "catid": "3",
    "title": "نمایشگاه نقاشی \"زیبای جاودانه\"",
    "salon": "0",
    "fulltext": "نمایشگاه نقاشی \"زیبای جاودانه\"، مریم دورعلی و نیلوفر سعیدلو\r\nنگارخانه ابن سینا نمایشگاه نقاشی با عنوان زیبای جاودانه آثار مریم دورعلی و نیلوفر سعید لو با سبک رئال با الهام از طبیعت با متریال رنگ و روغن در ابعاد متفاوت از روز پنج شنبه 18 لغایت 24 خرداد در معرض دید عموم قرار می دهد .\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496881800",
    "end_date": "1497468540",
    "reserve_start": "1497079016",
    "reserve_end": "1497468540",
    "meta_tags": "تجسمی,نمایشگاه-نقاشی-زیبای-جاودانه,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497079016",
    "modify_by": null,
    "modify_date": null,
    "hits": "7",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "فرهنگسرای ابن سینا",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497079016_user445.jpg",
    "poster": "upload/events/posters/1497079016534_user445.jpg",
    "lng": "51.380417704582214",
    "lat": "35.76674842149039",
    "loc": "استان تهران، تهران، بلوار ایران زمین، ایران",
    "post_address": "شهرک قدس، خیابان ایران زمین شمالی",
    "phone1": "02188366366",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496881800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4501",
    "catid": "3",
    "title": "نمایشگاه نقاشی خط \"رنگ مهربانی\"",
    "salon": "0",
    "fulltext": "نمایشگاه نقاشی خط \"رنگ مهربانی\"، ماهان حاصلی\r\nروزهای جمعه تعطیل می باشد.\r\n&nbsp;\r\nدر افتتاحیه این نمایشگاه 40 اثر از اثار ماهان حاصلی با موضوع ماه مبارک رمضان در قالب ویژه برنامه بر آستان جانان به نمایش گذاشته شده است.\r\nگفتنی است این هنرمند برای خلق آثار هنری از تکنیک هایی چون رنگ روغن و اکرولیک استفاده کرده است. این نمایشگاه تا روز چهارشنبه 31 خرداد ماه از ساعت 8-18 میزبان بازدیدکنندگان است.\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497054600",
    "end_date": "1498073340",
    "reserve_start": "1497078653",
    "reserve_end": "1498073340",
    "meta_tags": "تجسمی,نمایشگاه-نقاشی-خط-رنگ-مهربانی,اکرولیک,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497078653",
    "modify_by": null,
    "modify_date": null,
    "hits": "6",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "فرهنگسرای خاوران",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497078653_user445.jpg",
    "poster": "upload/events/posters/1497078653446_user445.jpg",
    "lng": "51.47040581703186",
    "lat": "35.652835042506396",
    "loc": "Tehran Province, Tehran, Dahom-e-Farvardin, ایران",
    "post_address": "میدان خراسان، خیابان خاوران، سه راه هاشم آباد",
    "phone1": "02133015423",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "18:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "18:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "18:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "18:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "18:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "18:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "18:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "18:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "18:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "18:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "18:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "18:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": null,
    "maxdiscount": null
},
{
    "id": "4499",
    "catid": "13",
    "title": "فوتبال حبابی کله پا",
    "salon": "0",
    "fulltext": "زمین بازی مجهز به رینگ در کنار زمین(گوشه ها)\r\n&nbsp;دارای چمن مصنوعی\r\n&nbsp;آموزش و نظارت توسط مربی دوره دیده\r\nفوتبال حبابی کله پا دارای محوطه سرپوشیده\r\n&nbsp;هر سانس بازی نیم ساعت\r\n&nbsp;تیم های حداقل 4 نفر و حداکثر 6 نفر\r\nبدون محدودیت سنی",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1495672200",
    "end_date": "1501097340",
    "reserve_start": "1497002696",
    "reserve_end": "1501097340",
    "meta_tags": "ویکی,ویکی_ایونت,تفریحی,wiki,wiki_event",
    "meta_desc": "مین بازی مجهز به رینگ در کنار زمین(گوشه ها)\r\n\r\n دارای چمن مصنوعی\r\n\r\n آموزش و نظارت توسط مربی دوره دیده\r\n\r\nفوتبال حبابی کله پا دارای محوطه سرپوشیده\r\n\r\n هر سانس بازی نیم ساعت\r\n\r\n تیم های حداقل 4 نفر و حداکثر 6 نفر\r\n\r\nبدون محدودیت سنی",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497002696",
    "modify_by": null,
    "modify_date": null,
    "hits": "9",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0646\\u062a \\u0628\\u0631\\u06af\",\"url\":\"http:\\/\\/netbarg.com\\/tehran\\/d\\/c:entertainment\\/73819\\/%D9%81%D9%88%D8%AA%D8%A8%D8%A7%D9%84-%D8%AD%D8%A8%D8%A7%D8%A8%DB%8C-%DA%A9%D9%84%D9%87-%D9%BE%D8%A7-4\\/\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497002696_user403.jpg",
    "poster": "upload/events/posters/1497002696562_user403.jpg",
    "lng": "51.328508602130114",
    "lat": "35.73363049565924",
    "loc": "استان تهران، تهران، خیابان گلدشت، ایران",
    "post_address": "فلکه دوم صادقیه، خیابان آیت اله کاشانی، بلوار اباذر، پارک میعاد، زمین ورزشی پارک",
    "phone1": "09352127700 ",
    "phone2": "",
    "reservdays": [{
        "daydate": "1495672200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495758600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495845000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495931400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496017800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496104200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496190600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496277000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496363400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496449800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496536200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496622600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496709000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496795400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496881800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498264200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498350600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498437000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498523400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498609800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498696200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498782600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498869000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498955400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499041800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499128200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499214600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499301000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499387400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499473800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499560200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499646600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499733000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499819400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499905800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499992200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500078600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500165000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500251400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500337800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500424200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500510600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500597000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500683400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500769800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500856200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500942600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501029000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "01:00",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "50",
    "maxdiscount": "50"
},
{
    "id": "4498",
    "catid": "13",
    "title": "گیم کلاب وایویران",
    "salon": "0",
    "fulltext": "خرین نسل تکنولوژی واقعیت مجازی در نقش شخصیت قهرمان رویای خود ایفای نقش میکند\r\nقابلیت راه رفتن، پریدن و نشستن در دنیای مجازی\r\n&nbsp;با بیش از 70 بازی متنوع متناسب برای هر سلیقه\r\n&nbsp;پریدن از ارتفاع\r\nدرگیری با زامبی ها\r\n&nbsp;جنگ گلادیاتور ها\r\n&nbsp;اسکی\r\n&nbsp;نقاشی سه بعدی\r\n&nbsp;مدت زمان استفاده 15 دقیقه\r\nقابلیت همزمان بازی دونفر با هم در یک محیط بازی به صورت مولتی پلیر\r\nساعت کاری: شنبه الی چهارشنبه 18 الی 24 و پنجشنبه و جمعه 10 الی 24",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1495499400",
    "end_date": "1500924540",
    "reserve_start": "1497002000",
    "reserve_end": "1500924540",
    "meta_tags": "ویکی,ویکی_ایونت,بازی,تفریحی,سرگرمی,wiki,wiki_event",
    "meta_desc": "خرین نسل تکنولوژی واقعیت مجازی در نقش شخصیت قهرمان رویای خود ایفای نقش میکند\r\n\r\nقابلیت راه رفتن، پریدن و نشستن در دنیای مجازی\r\n\r\n با بیش از 70 بازی متنوع متناسب برای هر سلیقه",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497002000",
    "modify_by": null,
    "modify_date": null,
    "hits": "10",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0646\\u062a \\u0628\\u0631\\u06af\",\"url\":\"http:\\/\\/netbarg.com\\/tehran\\/d\\/c:entertainment\\/73475\\/%D9%88%D8%A7%D9%82%D8%B9%DB%8C%D8%AA-%D9%85%D8%AC%D8%A7%D8%B2%DB%8C-%D8%AF%D8%B1-%DA%AF%DB%8C%D9%85-%DA%A9%D9%84%D8%A7%D8%A8-%D9%88%D8%A7%DB%8C%D9%88%DB%8C%D8%B1%D8%A7%D9%86\\/\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497002000_user403.jpg",
    "poster": "upload/events/posters/1497002000763_user403.jpg",
    "lng": "51.35442337462155",
    "lat": "35.735476195254854",
    "loc": "استان تهران، تهران، نارون، ایران",
    "post_address": "بلوار مرزداران، خیابان نارون، نبش سپهر، پلاک B/6",
    "phone1": "09129312617",
    "phone2": "",
    "reservdays": [{
        "daydate": "1495499400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495585800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495672200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495758600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495845000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495931400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496017800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496104200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496190600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496277000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496363400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496449800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496536200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496622600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496709000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496795400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496881800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498264200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498350600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498437000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498523400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498609800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498696200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498782600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498869000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498955400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499041800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499128200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499214600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499301000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499387400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499473800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499560200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499646600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499733000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499819400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499905800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499992200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500078600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500165000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500251400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500337800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500424200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500510600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500597000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500683400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500769800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500856200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "00:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "50"
},
{
    "id": "4497",
    "catid": "7",
    "title": "استراحت مامانا در پلی هوس",
    "salon": "0",
    "fulltext": "تا حاله مامانا خوب نباشه نمیتونن یک مادر خوب باشن.\r\nمادرا به خودتون احترام بگذارید تا بتوانید مادر بهتری برای فرزندان دلبندتان باشید.\r\nدر محیطی تخصصی و متفاوت، لحظات متفاوت و خاصی را تجربه کنید.\r\nپذیرایی اختصاصی شامل انواع نوشیدنی های سرد و گرم، کیک و شیرینی، انواع فینگر فود و یا هر نوع پذیرایی اختصاصیداشتن فضایی آرام&zwnj; جهت مطالعه و استفاده از کتاب خانه مجموعه و انجام پروژه های درسی و شخصی استفاده از موسیقی انتخابی مجموعه و یا به صورت شخصی ماساژ پا کتاب خوانی و تبادل نظراینترنت رایگان قرارهای دوستانه همزمان با بازی کودک در زمین بازی امکان مشاهده در لحظه کودکخانه بازی:امکان استفاده از سن۶ ماه الی ۴ سال می باشد سازه امن با طراحی متفاوت برای رشد شناختی، حرکتی و حل مساله اختصاص دیوار تخته سیاه با گچ&zwnj;اای حفاظ دار، جهت کمک به رشد خلاقیت و مهارت های دستی اسباب بازی های شبیه ساز مناسب با رشد اجتماعی کودک",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497227400",
    "end_date": "1497295740",
    "reserve_start": "1497000113",
    "reserve_end": "1497295740",
    "meta_tags": "ویکی,ویکی_ایونت,کودک,wiki,wiki_event",
    "meta_desc": "تا حاله مامانا خوب نباشه نمیتونن یک مادر خوب باشن.\r\n\r\nمادرا به خودتون احترام بگذارید تا بتوانید مادر بهتری برای فرزندان دلبندتان باشید.\r\n\r\nدر محیطی تخصصی و متفاوت، لحظات متفاوت و خاصی را تجربه کنید.",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1497000113",
    "modify_by": null,
    "modify_date": null,
    "hits": "4",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u06a9\\u06cc \\u0628\\u0631\\u06cc\\u0645\",\"url\":\"http:\\/\\/keyberim.com\\/%D9%BE%D9%84%DB%8C-%D9%87%D9%88%D8%B3-%D8%B9%D8%B7%D8%B1-%DB%8C%D8%A7%D8%B3\\/\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497000113_user403.jpg",
    "poster": "upload/events/posters/1497000113582_user403.jpg",
    "lng": "51.40583128067328",
    "lat": "35.80733705949033",
    "loc": "استان تهران، تهران، سیزدهم، ایران",
    "post_address": "زعفرانیه، خیابان ثارالله، نبش خیابان ۱۳، رو به رو مجتمع گالریا، پلاک ۶ طبقه دوم",
    "phone1": "09128156170",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "14:00",
            "price": "60000",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "50"
},
{
    "id": "4496",
    "catid": "7",
    "title": "استخر مادر و کودک",
    "salon": "0",
    "fulltext": "آب استخر ایسلیه بدون کلر بوده و برای کودکان هیچ حساسیتی ایجاد نمی کند اولین استخر تصفیه با uv شامل دو استخر مجزا یکی به عمق نیم متر و یکی به عمق ۱.۱متر مخصوص مادر و کودک  این بلیت به ارزش۵۰ هزار تومان می باشد باتخفیف برای این هفته ۴۰ هزار تومان استخر ویژه مادر و كودك (۶ماه به بالا) پسر ها تا۵سال بازي در آب به همراه مادر  همراه با مربیان آموزش دیده و مجرب هزينه مادر و کودک ۴۰ هزارتومان همراه اضافه ۲۰ تومان\r\n&nbsp;",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497313800",
    "end_date": "1497382140",
    "reserve_start": "1496999565",
    "reserve_end": "1497382140",
    "meta_tags": "ویکی,ویکی_ایونت,wiki,wiki_event,کودک",
    "meta_desc": "پسر ها تا۵سال\r\nبازي در آب به همراه مادر\r\nهمراه با مربیان آموزش دیده و مجرب\r\nهزينه مادر و کودک ۴۰ هزارتومان\r\nهمراه اضافه ۲۰ تومان",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496999565",
    "modify_by": null,
    "modify_date": null,
    "hits": "7",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u06a9\\u06cc \\u0628\\u0631\\u06cc\\u0645\",\"url\":\"http:\\/\\/keyberim.com\\/\\u0627\\u0633\\u062a\\u062e\\u0631-\\u0645\\u0627\\u062f\\u0631-\\u0648-\\u06a9\\u0648\\u062f\\u06a9-\\u0627\\u06cc\\u0633\\u06cc\\u0644\\u0647\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496999565_user403.jpg",
    "poster": "upload/events/posters/1496999565928_user403.jpg",
    "lng": "51.32685790000005",
    "lat": "35.7756801",
    "loc": "استان تهران، تهران، خیابان زیتون، ایران",
    "post_address": "انتهای اتوبان ستاری شمال، بعد از پل نیایش، محله زیتون، خیابان زیتون، روبروی اتش نشانی، مجتمع شقایق ۵",
    "phone1": "09128156170",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "13:00",
            "endTime": "14:15",
            "price": "40000",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "50"
},
{
    "id": "4495",
    "catid": "3",
    "title": "نمایشگاه نور زمین و آسمان‌ها-عکس",
    "salon": "0",
    "fulltext": "نور زمین و آسمان&zwnj;ها\r\n18 تا 21 (افتتاحیه)\r\nمدیا: عکس\r\nهنرمندان داریوش محمدخانی\r\nآیین گشایش نمایشگاه انفرادی آثار عکاسی داریوش محمدخانی با عنوان &laquo;نور زمین و آسمان ها&raquo; جمعه 19 خرداد ماه ساعت 18 در گالری شماره 1 فرهنگسرای نیاوران برگزار خواهد شد.به گزارش روابط عمومی بنیاد آفرینش های هنری نياوران در اين نمايشگاه 90 اثر از 15 مجموعه عکس از آثار عکاسی داریوش محمدخاني در معرض ديد عموم قرار مي گيرد . محمدخانی در این مجموعه با توجه به آیات درخشان قرآن کریم و به ویژه آیه 35 سوره مبارکه نور به ثبت لحظه های نابی از های لایت ها و ریم لایت ها در طبیعت پرداخته است. این سبک از مجموعه سبک های نوین در عکاسی است که محمدخانی در این نمایشگاه به معرفی آن می پردازد. گفتنی است داریوش محمدخانی عضو شورای سیاست گذاری و شورای عکس خانه عکاسان ایران و عضو تدوین دروس هنر و عکاسی جهاد دانشگاهی و خانه عکاسان ايران است. وی تاکنون در بیش از 120 نمایشگاه گروهی عکس شرکت داشته است. وي همچنین 19بار به صورت انفرادی نمایشگاه برگزار کرده است.نمایشگاه &laquo;نور زمین و آسمان ها&raquo; از 19 خرداد تا 4 تیر در گالری شماره 1 فرهنگسرای نیاوران برقرار است و علاقمندان جهت دیدار از آن می توانند در روز های عادی از ساعت 10 الی 21 و در روز های تعطیل از ساعت 14 الی 21 به گالری شماره 1 فرهنگسرای نیاوران مراجعه کنند.",
    "videos": "null",
    "create_by": "408",
    "organ": "32",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496968200",
    "end_date": "1498418940",
    "reserve_start": "1496897520",
    "reserve_end": "1498386540",
    "meta_tags": "نور زمین و آسمان‌ها,ویکی,ویکی_ایونت,wikiw,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496930436",
    "modify_by": null,
    "modify_date": "1497071754",
    "hits": "7",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "گالري فرهنگسراي نياوران",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497071754_user408.jpg",
    "poster": "upload/events/posters/1497071754824_user408.jpg",
    "lng": "51.46915960000001",
    "lat": "35.8081133",
    "loc": "استان تهران، تهران، خان سفید، ایران",
    "post_address": "خيابان پاسداران، مقابل پارک نياوران، فرهنگسراي نياوران ",
    "phone1": "02122287081",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498264200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498350600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "50"
},
{
    "id": "4494",
    "catid": "3",
    "title": "نمایشگاه هزارتوی-نقاشی",
    "salon": "0",
    "fulltext": "هزارتوی\r\n16 تا 20 (افتتاحیه)\r\nروزهای تعطیل: ندارد\r\nمدیا: نقاشی\r\nهنرمندان نسرین نجفی\r\n&nbsp;",
    "videos": "null",
    "create_by": "408",
    "organ": "32",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496968200",
    "end_date": "1497900540",
    "reserve_start": "1496880960",
    "reserve_end": "1497851940",
    "meta_tags": "هزارتوی,ویکی,ویکی_ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496929916",
    "modify_by": null,
    "modify_date": "1497071763",
    "hits": "8",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "نگارخانه آریا",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497071763_user408.jpg",
    "poster": "upload/events/posters/1497071763135_user408.jpg",
    "lng": "51.41449209999996",
    "lat": "35.727915",
    "loc": "استان تهران، تهران، زرین، ایران",
    "post_address": "خيابان وليعصر، بالاتر از سه راه عباس آباد، کوی زرين، پلاک 10 ",
    "phone1": "02188727083",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "50"
},
{
    "id": "4493",
    "catid": "3",
    "title": "نمایشگاه نقاشی سوگند طباطبایی",
    "salon": "0",
    "fulltext": "نمایشگاه نقاشی سوگند طباطبایی\r\n16 تا 20 (افتتاحیه)\r\nروزهای تعطیل: ندارد\r\nمدیا: نقاشی\r\nهنرمندان سوگند طباطبایی",
    "videos": "null",
    "create_by": "408",
    "organ": "32",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496968200",
    "end_date": "1497468540",
    "reserve_start": "1496896740",
    "reserve_end": "1497436140",
    "meta_tags": "نمایشگاه نقاشی سوگند طباطبایی,ویکی,ویکی_ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496929472",
    "modify_by": null,
    "modify_date": "1496930119",
    "hits": "13",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "گالری 7 ثمر",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496930119_user408.jpg",
    "poster": "upload/events/posters/1496930119713_user408.jpg",
    "lng": "51.42246670999998",
    "lat": "35.7260732",
    "loc": "استان تهران، تهران، خیابان پنجم، ایران",
    "post_address": " خيابان مطهری، خيابان کوه نور، کوچه پنجم، شماره 8 ",
    "phone1": "02188731403",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "50"
},
{
    "id": "4491",
    "catid": "3",
    "title": "نمایشگاه تامل-نقاشی- مجسمه- عکس",
    "salon": "0",
    "fulltext": "تامل\r\nمدیا: نقاشی- مجسمه- عکس\r\nروزهای تعطیل: پنجشنبه ها\r\n17 تا 20 (افتتاحیه)\r\nهنرمندان\r\nشقایق احمدیانعلی قطرهیگانه خسروی&zwnj;منشسارا حقیقینرجس ایروانیمهدی شریفیمحمد لهراسبیعلیرضا آقاحسینیافسانه رمضانیهما صدرعطیه قلندریسارا رحمان&zwnj;زادهنازنین نبویمهدیه کاردرسمیه بیاتحدیثه رسول&zwnj;زادهالهام فرزان&zwnj;مهرآرزو چنگشیدا مختارزادهسوگند وطن&zwnj;خواهنسترن میرمحمدصادقنرگس بخشندههدا کدخدامریم کیانی\r\n&nbsp;\r\n&nbsp;",
    "videos": "null",
    "create_by": "408",
    "organ": "32",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496968200",
    "end_date": "1497382140",
    "reserve_start": "1496879220",
    "reserve_end": "1497333540",
    "meta_tags": "تامل,ویکی,ویکی_ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496929067",
    "modify_by": null,
    "modify_date": "1497071776",
    "hits": "12",
    "params": null,
    "advanced_scheduling_mode": "1",
    "exclude_mode": "1",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "گالری ژينوس",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497071776_user408.jpg",
    "poster": "upload/events/posters/1497071776864_user408.jpg",
    "lng": "51.40796658715817",
    "lat": "35.72115202130024",
    "loc": "استان تهران، تهران، خیابان بوعلی سينا شرقی، ایران",
    "post_address": "خيابان دکتر‌حسين‌فاطمی ،ابتدای خيابان‌وليعصر ،پلاک‌21 ، طبقه اول ",
    "phone1": "02188975574",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "10:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "50"
},
{
    "id": "4490",
    "catid": "13",
    "title": "سراسر نما (پانوراما) در باغ موزه دفاع مقدس",
    "salon": "0",
    "fulltext": "سراسر نما (پانوراما) در باغ موزه دفاع مقدس\r\n&nbsp;مساحت 4500 متر زیر بنا\r\n&nbsp;استفاده از دهها دستگاه ویدئو پروژکتور در بخش زیرین سراسرنما\r\n&nbsp;امکان پخش فیلم به صورت 360 درجه\r\n&nbsp;پخش عکس و فیلم (تلفیقی از انیمیشن و مستند) راس هر ساعت\r\nمدت زمان اکران 13 دقیقه\r\n&nbsp;بازدید از کارهای حجمی (نقش برجسته)\r\n&nbsp;بازسازی بازارچه خرمشهر\r\nبازدید گالری نقاشی\r\n&nbsp;معماری مجموعه شامل تالار اصلی، گالری و فضاهای جانبی\r\n&nbsp;دو طبقه مجزا\r\nبازدید از پل آزادی\r\nخیابان آرامش قبل از طوفان\r\nتجربه ای شبیه جنگ واقعی در زیر گنبد\r\n&nbsp;بخش اطلاعات چند رسانه ای\r\n&nbsp;ماکت دیجیتال سه وجهی\r\nفروشگاه محصولات فرهنگی\r\nقدم زدن در محوطه ی زیبای باغ موزه",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496968200",
    "end_date": "1497036540",
    "reserve_start": "1496927799",
    "reserve_end": "1497036540",
    "meta_tags": "ویکی,ویکی_ایونت,wiki,wiki_event,تفریح",
    "meta_desc": "مساحت 4500 متر زیر بنا\r\n\r\n استفاده از دهها دستگاه ویدئو پروژکتور در بخش زیرین سراسرنما\r\n\r\n امکان پخش فیلم به صورت 360 درجه\r\n\r\n پخش عکس و فیلم (تلفیقی از انیمیشن و مستند) راس هر ساعت\r\n\r\nمدت زمان اکران 13 دقیقه\r\n\r\n بازدید از کارهای حجمی (نقش برجسته)",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496927799",
    "modify_by": null,
    "modify_date": null,
    "hits": "5",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0646\\u062a \\u0628\\u0631\\u06af\",\"url\":\"http:\\/\\/netbarg.com\\/tehran\\/d\\/c:art\\/73691\\/\\u0633\\u0631\\u0627\\u0633\\u0631-\\u0646\\u0645\\u0627-(\\u067e\\u0627\\u0646\\u0648\\u0631\\u0627\\u0645\\u0627)-\\u062f\\u0631-\\u0628\\u0627\\u063a-\\u0645\\u0648\\u0632\\u0647-\\u062f\\u0641\\u0627\\u0639-\\u0645\\u0642\\u062f\\u0633-2\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496927799_user403.jpg",
    "poster": "upload/events/posters/1496927799858_user403.jpg",
    "lng": "51.42552139999998",
    "lat": "35.75330389999999",
    "loc": "استان تهران، تهران، منطقه ۳، پل طبیعت، ایران",
    "post_address": "اتوبان شهید حقانی، خیابان سرو، روبروی پارک طالقانی، باغ موزه دفاع مقدس",
    "phone1": "02188657026",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "16:00",
            "price": "4000",
            "discount": "60",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "60",
    "maxdiscount": "60"
},
{
    "id": "4489",
    "catid": "3",
    "title": "نمایشگاه پوست انداختن-نقاشی- چاپ دستی",
    "salon": "0",
    "fulltext": "پوست انداختن\r\n17 تا 20 (افتتاحیه)\r\nروزهای تعطیل: شنبه ها\r\nمدیا: نقاشی- چاپ دستی\r\nهنرمندان سپیده صیاد دریابخش\r\nما مي ميريم، هر روز و هر ساعت و هر دقيقه مي ميريم و ادم ديگري مي شويم، اين مرگ و زايش هر دقيقه اي نه چيزي استعاري است نه پنهان است اما ما نمي بينيمش. درست مثل وقتي كه روشن خاموش شدن هاي يك لامپ را حس نمي كنيم و نوري پيوسته از ان مي بينيم. درست مثل وقتي كه تغيير ساحل را بر اثر موج ها نمي فهميم. ما براي خودمان و براي ديگران كليتي هستيم پيوسته و بي تغيير با خرده سايش هاى در چهره از گذر ساليان، تكه اي سخت از جهان كه سرجايش نشسته تا بميرد و نيست شود. تا مرگ تكليف اين خيال پيوسته از ما را روشن كند اما واقعيت اين طور نیست. ما تغيير مي كنيم، زير اين پوست كه مثل كيسه اي پوشانده مان تغيير مي كنيم. اين تغيير فقط چاق و لاغر شدن، سفيد مو شدن، پيرشدن بافت ها و مچاله شدن اندام ها نيست، تاثير جاذبه بر سلول ها كه همه چيزي را پايين مي كشد و بعد از متوقف شدن ترشح هورمون هاي رشد حتا قدمان را كوتاه مي كند. ما تغيير مي كنيم، ادم هاي ديگري مي شويم، با اعتقادات و نيازها و خواست هاي ديگري و ان قدر اين تغيير بديهي و بي علامت است كه خودمان هم باورش نمي كنيم. ما باور نمي كنيم در طول يك زندگي كه در مقياس عمر جهان يك لحظه هم نيست، ادم ديگري مي شويم، ما كه فراموش مي كنيم در هجده سالگي در سي و هشت سالگي يا در شصت و هست سالگي چه ادمي بوديم و امروز چه جور آدمي هستيم.\r\nمحمد طلوعی\r\n&nbsp;",
    "videos": "null",
    "create_by": "408",
    "organ": "32",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496968200",
    "end_date": "1497554940",
    "reserve_start": "1496895000",
    "reserve_end": "1497522540",
    "meta_tags": "پوست انداختن,ویکی,ویکی_ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496927790",
    "modify_by": null,
    "modify_date": "1497071788",
    "hits": "10",
    "params": null,
    "advanced_scheduling_mode": "1",
    "exclude_mode": "1",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": " گالری دارگون",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497071788_user408.jpg",
    "poster": "upload/events/posters/1497071788617_user408.jpg",
    "lng": "51.44776430000002",
    "lat": "35.7551381",
    "loc": "استان تهران، تهران، بشردوست، ایران",
    "post_address": " شریعتی، پایین تر از حسینی ارشاد، خیابان کوشا، خیابان بدیعی، بن بست بشر دوست، پلاک 14، زنگ2 ",
    "phone1": "02122903649",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4488",
    "catid": "3",
    "title": "نمایشگاه این گل‌های زنانه-نقاشی",
    "salon": "0",
    "fulltext": "این گل&zwnj;های زنانه\r\n16 تا 21 (افتتاحیه)\r\nروزهای تعطیل: شنبه ها\r\nمدیا: نقاشی\r\nهنرمندان فرشته نظریان\r\nاز خط&zwnj;هاي بريده بريده شروع شد!از مشق&zwnj;هاي اولِ دبستان، خط، نقطه. خط، نقطه. نقطه به نقطه، موبه مو، چهره به چهره رو به رو .از تپه&zwnj;هاي شن، سرشته با گل وخاكِ كوير آميخته با شب، بلوغي شكل مي&zwnj;گيرد...مي&zwnj;نشيند برغباري در بايگاني ذهن.......و اينك ريخته شده&zwnj;اند روي بوم و منِ حل شده&zwnj;اي بينِ خطوطِ ممتد...مرا در كبودي رنگ&zwnj;هايم جستجو كنيد!زني درخت اخته ته كوچه را تكاند!\r\nفرشته نظریان &ndash; بهار 1396",
    "videos": "null",
    "create_by": "408",
    "organ": "32",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496968200",
    "end_date": "1497382140",
    "reserve_start": "1496894100",
    "reserve_end": "1497349740",
    "meta_tags": "این گل‌های زنانه,wiki,wikievent,ویکی,ویکی_ایونت",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496927189",
    "modify_by": null,
    "modify_date": "1496927397",
    "hits": "12",
    "params": null,
    "advanced_scheduling_mode": "1",
    "exclude_mode": "1",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": " نگارخانه نگر",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496927397_user408.jpg",
    "poster": "upload/events/posters/1496927397830_user408.jpg",
    "lng": "51.45178710000005",
    "lat": "35.79235675",
    "loc": "استان تهران، تهران، روشنایی، ایران",
    "post_address": "قیطریه، ضلع جنوبی پارک، خیابان روشنایی، کوچه دلارارم، پلاک 33، زنگ سوم ",
    "phone1": "02122677459",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4487",
    "catid": "3,5",
    "title": "کارگاه چاپ دستی مونو پرینت و چاپ پارچه",
    "salon": "0",
    "fulltext": "به گزارش روابط عمومی مراکز فرهنگی هنری منطقه شش ، فرهنگ سرای سرو؛ ورکشاپ یک روزه \"چاپ دستی مونو پرینت و چاپ پارچه\" با هنرمندی 17 دانشجوی دانشگاه معماری و هنر پارس برگزار می شود. در این ورکشاپ ابتدا تمام تکنیک های چاپ دستی بر روی کلیشه های سنگی ، فلزی ، چوبی و پارچه ای انجام می گیرد و به کمک ابزارهای مختلف حک می شود. سپس با مرکب زدن سطح کلیشه ، قرار دادن کاغذ مناسب روی آن و وارد کردن فشار کافی بر آن ، تصویر بر روی کاغذ منتقل یا چاپ می شود. با تکرار این روند هر بار یک اثر اورجینال چاپ دستی تولید و تکثیر می شود.",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497054600",
    "end_date": "1497122940",
    "reserve_start": "1496927115",
    "reserve_end": "1497122940",
    "meta_tags": "کارگاه,تجسمی,چاپ-دستی-مونو-پرینت-و-چاپ-پارچه,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496927115",
    "modify_by": null,
    "modify_date": null,
    "hits": "6",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "فرهنگ سرای سرو",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496927115_user445.jpg",
    "poster": "upload/events/posters/1496927115989_user445.jpg",
    "lng": "51.410120487213135",
    "lat": "35.73860755574364",
    "loc": "استان تهران، تهران، بن بست لاله، ایران",
    "post_address": "خیابان ولی عصر(عج)، بعد از پارک ساعی، ساعی یکم",
    "phone1": "02188881879",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "18:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4486",
    "catid": "12",
    "title": "سمینار فن بیان و سخنرانی-مجتمع فنی تهران",
    "salon": "0",
    "fulltext": "مجتمع فنی تهران نمایندگی ونک (برترین نمایندگی تهران در سالهای 93 و 94)\r\nدر این سمینار به طور اجمالی آنچه در دوره های آموزش فن بیان و سخنرانی تدریس می شود توضیح داده خواهد شد.\r\nآموزش فن بیان و سخنرانی\r\n-تمرین&zwnj;ها و مهارت&zwnj;های فن بیان، حس و بداهه گویی در اجرا -مهارت&zwnj;های ارتباطی با رویکرد روانشناسانه -افزایش توانایی افراد در سطوح مختلف برای خوانش بهتر متون ادبی، گفتار روان&zwnj;تر و دقیق&zwnj;تر، سخنرانی در جمع، اجرای رادیویی و تلویزیونی، تقویت حس در نمایش رادیویی و &hellip;\r\nسر فصل: &bull; تمرین و آماده&zwnj;سازی ابزارهای گفتاری (گرم کردن فک، زبان و اندامهای گفتاری با نرمش و تمرین حروف وکلمات) &bull; خوانش متون مختلف (خوانش متون مختلف از جمله شعر کلاسیک، شعر معاصر، داستان، متن صنعتی و &hellip;) &bull; تمرین صداسازی و آواشناسی (تمرین آواهای کششی و آواز برای تقویت دیافراگم و افزایش قدرت صدای خروجی از گوینده) &bull; تمرین حس و نمایشنامه&zwnj;خوانی (تمرین یک نمایشنامه از ابتدا تا انتها و اجرای آن در سالن آمفی تئاتر به صورت نمایشنامه خوانی در پایان دوره)\r\nنام استاد: دکترعلی مهنام فر",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1498091400",
    "end_date": "1498159740",
    "reserve_start": "1496926772",
    "reserve_end": "1498159740",
    "meta_tags": "ویکی,ویکی-ایونت,wiki,wiki_event",
    "meta_desc": "-تمرین‌ها و مهارت‌های فن بیان، حس و بداهه گویی در اجرا\r\n-مهارت‌های ارتباطی با رویکرد روانشناسانه\r\n-افزایش توانایی افراد در سطوح مختلف برای خوانش بهتر متون ادبی، گفتار روان‌تر و دقیق‌تر، سخنرانی در جمع، اجرای رادیویی و تلویزیونی، تقویت حس در نمایش رادیویی و …",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496926772",
    "modify_by": null,
    "modify_date": null,
    "hits": "7",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0627\\u06cc\\u0648\\u0646\\u062f\",\"url\":\"https:\\/\\/evand.com\\/events\\/%D8%B3%D9%85%DB%8C%D9%86%D8%A7%D8%B1-%D9%81%D9%86-%D8%A8%DB%8C%D8%A7%D9%86-%D9%88-%D8%B3%D8%AE%D9%86%D8%B1%D8%A7%D9%86%DB%8C-%D9%85%D8%AC%D8%AA%D9%85%D8%B9-%D9%81%D9%86%DB%8C-%D8%AA%D9%87%D8%B1%D8%A7%D9%86-4987\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496926772_user403.jpg",
    "poster": "upload/events/posters/1496926772285_user403.jpg",
    "lng": "51.41240620000008",
    "lat": "35.7522517",
    "loc": "استان تهران، تهران، خیابان گاندی، ایران",
    "post_address": "خیابان ولیعصر، پایین تر از میدان ونک، خیابان 16 گاندی، پلاک 16",
    "phone1": "02188889796",
    "phone2": "",
    "reservdays": [{
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "15:00",
            "endTime": "16:30",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4485",
    "catid": "3",
    "title": "نمایشگاه نقاشی یاسمین خورسندی",
    "salon": "0",
    "fulltext": "نمایشگاه نقاشی یاسمین خورسندی\r\nمدیا: نقاشی\r\n16 تا 21 (افتتاحیه)\r\nروزهای تعطیل: يکشنبه&zwnj;ها\r\nهنرمندان یاسمین خورسندی\r\n&nbsp;\r\nI avoid being garrulous. I write as simply as I live. I want to record the sound of images; voices are more sorrowful than faces. We are cursed with routine, repetition, with being similar to each other. From commotion we abscond to our scullery in order to concoct ourselves. Fretting is taking refuge from the good and the evil&hellip;\r\nNevertheless, life is constituted of two parts: black and white! Whereas grey is the only reality of life and in time. Overstating does not always signify overdoing. Now and then disregarding decay covers us with grey routine.\r\nThe black and white of this bitter age is readily seen in the eyes of the image, and the weak pulse of life throbs, forever and ever, in the figures of my paintings.\r\n&nbsp;",
    "videos": "null",
    "create_by": "408",
    "organ": "32",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496968200",
    "end_date": "1497986940",
    "reserve_start": "1496893560",
    "reserve_end": "1497954540",
    "meta_tags": "نمایشگاه نقاشی یاسمین خورسندی,ویکی,ویکی_ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496926404",
    "modify_by": null,
    "modify_date": "1496929330",
    "hits": "10",
    "params": null,
    "advanced_scheduling_mode": "1",
    "exclude_mode": "1",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "نگارخانه ماه",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496929330_user408.jpg",
    "poster": "upload/events/posters/1496929330789_user408.jpg",
    "lng": "51.42149889999996",
    "lat": "35.7832019",
    "loc": "استان تهران، تهران، خیابان گلستان، ایران",
    "post_address": " خيابان افريقا، كوچه گلستان، شماره 26 ",
    "phone1": "02122045879",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "15:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "15:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "15:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "15:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "15:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "15:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "15:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "15:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "15:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "15:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4484",
    "catid": "5",
    "title": "کارگاه «روشی برای طراحی زندگی آینده»",
    "salon": "0",
    "fulltext": "اگر تابحال ساخت خلاقانه&zwnj;ی آینده را تجربه نکرده&zwnj;اید و دوست دارید آینده&zwnj;های محتمل زندگیتان را تجسم کنید، این روش را امتحان کنید.کارگاه &laquo;روشی برای طراحی زندگی آینده&raquo;&nbsp;سعی دارد با اصول نگاه، تفکر و اقدام در دیزاین، روشی را برای حرکت به سمت آینده پیشنهاد دهد و طی سه ساعت، فرصت تمرین این نگاه را برای شرکت کنندگان فراهم نماید.واقعیت این است که، بسیاری از ما روش طراحی و ساختن مطلوبیت&zwnj;هایمان را یاد نگرفته&zwnj;ایم و فقط در مقابل واقعیت&zwnj;هایی که محیط بیرون برای ما ایجاد می&zwnj;کند، واکنش نشان می&zwnj;دهیم. داستان زندگی&zwnj;های شاخص، داستان کنش&zwnj;هایی است که طراحی و سپس شجاعانه پیگیری شده&zwnj;اند. شما را هم دعوت می&zwnj;کنیم به تجربه&zwnj;ی ساخت آینده، آینده&zwnj;ای که خودتان می&zwnj;توانید بسازید.\r\nمربی این کارگاه صالح برادران امینی است. صالح طی پنج سال گذشته به عنوان طراح خدمات به شرکت&zwnj;های بسیاری از جمله گروه صنعتی انتخاب، سازمان فناوری اطلاعات، ایران&zwnj;تلنت و شتاب&zwnj;دهنده&zwnj;ی بردیا کمک کرده&zwnj; تا نیازهای واقعی انسانی را بفهمند و خدماتی طراحی کنند که به این نیازهای واقعی، پاسخ دهد. صالح، علاوه بر دوره&zwnj;های آزاد، طراحی خدمات را در محیط&zwnj;های مختلفی از جمله دانشگاه هنر و مرکز کارآفرینی دانشگاه صنعتی شریف نیز درس داده است.\r\nصالح این بار تلاش می&zwnj;کند به مخاطبان بیست&zwnj; کمک کند با اصول نگاه، تفکر و اقدام در دیزاین، به&nbsp;طراحی زندگی آینده خود بیندیشند.",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497918600",
    "end_date": "1497986940",
    "reserve_start": "1496910000",
    "reserve_end": "1497970740",
    "meta_tags": "ویکی,ویکی_ایونت,مشاوره,کارگاه,wiki,wiki_event",
    "meta_desc": "کارگاه «روشی برای طراحی زندگی آینده» سعی دارد با اصول نگاه، تفکر و اقدام در دیزاین، روشی را برای حرکت به سمت آینده پیشنهاد دهد و طی سه ساعت، فرصت تمرین این نگاه را برای شرکت کنندگان فراهم نماید.\r\nواقعیت این است که، بسیاری از ما روش طراحی و ساختن مطلوبیت‌هایمان را یاد نگرفته‌ایم و فقط در مقابل واقعیت‌هایی که محیط بیرون برای ما ایجاد می‌کند، واکنش نشان می‌دهیم. داستان زندگی‌های شاخص، داستان کنش‌هایی است که طراحی و سپس شجاعانه پیگیری شده‌اند. شما را هم دعوت می‌کنیم به تجربه‌ی ساخت آینده، آینده‌ای که خودتان می‌توانید بسازید.",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496926210",
    "modify_by": null,
    "modify_date": "1496926249",
    "hits": "6",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0627\\u06cc\\u0648\\u0646\\u062f\",\"url\":\"https:\\/\\/evand.com\\/events\\/dt01-119\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496926249_user403.jpg",
    "poster": "upload/events/posters/1496926249484_user403.jpg",
    "lng": "51.431976363476565",
    "lat": "35.71987997156987",
    "loc": "استان تهران، تهران، خیابان ملایری پور، ایران",
    "post_address": "سهروردی جنوبی، ملایری پور غربی، شماره 37، ساختمان آریانا، طبقه سوم، کلاس شماره 5",
    "phone1": "",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "17:30",
            "endTime": "20:30",
            "price": "33000",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4483",
    "catid": "3",
    "title": "نمایشگاه جا ماندن در زمان-نقاشی",
    "salon": "0",
    "fulltext": "جا ماندن در زمان\r\nمدیا: نقاشی\r\n16 تا 20 (افتتاحیه)\r\nروزهای تعطیل: شنبه ها\r\nهنرمندان سارا قاضی اسداللهی\r\n&nbsp;",
    "videos": "null",
    "create_by": "408",
    "organ": "32",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496968200",
    "end_date": "1497900540",
    "reserve_start": "1496909220",
    "reserve_end": "1497884340",
    "meta_tags": "جا ماندن در زمان,ویکی,ویکی_ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496925961",
    "modify_by": null,
    "modify_date": "1496925984",
    "hits": "8",
    "params": null,
    "advanced_scheduling_mode": "1",
    "exclude_mode": "1",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "گالری ويستا",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496925984_user408.jpg",
    "poster": "upload/events/posters/1496925984296_user408.jpg",
    "lng": "51.42652450000003",
    "lat": "35.7285018",
    "loc": "استان تهران، تهران، کوچه دوازدهم، ایران",
    "post_address": "خيابان مطهری ، خيابان ميرعماد ، کوچه دوازدهم ،پلاک11 ",
    "phone1": "02188513933",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4482",
    "catid": "3",
    "title": "نمایشگاه پوسته-عکس- ویدئو",
    "salon": "0",
    "fulltext": "پوسته16 تا 20 (افتتاحیه)\r\nروزهای تعطیل: يکشنبه ها تا پنجشنبه ها\r\nگالري تنها روزهاي جمعه و شنبه باز مي باشد.\r\nمدیا: عکس- ویدئو\r\nگرد&zwnj;آوری توسط: علیرضا لبشکا\r\nهنرمندان مسیح مستأجران\r\nنیکلاس گلدباخ\r\nاشتفانی کلاس\r\nپوسته\r\nنمایش آثار عکاسی و ویدئوآرتنیکلاس گلدباخ، اشتفانی کلاس و مسیح مستاجران\r\nکیوریتور: علیرضا لبشکاطراحی فضا: مبشر نيکویی\r\nنیکلاس گلدباخ هنرمند آلمانی است که در برلین زندگی و کار می&zwnj;کند. او دوره ی کارشناسی خود را در دانشگاه بلفیلد در رشته جامعه&zwnj; شناسی و همچنین در رشته عکاسی و ویدئو در همان دانشگاه در دانشکده علوم کاربردی گذرانده، و سپس مدرک کارشناسی ارشد خود را از دانشگاه هنر برلین دریافت کرده است. در سال ۲۰۰۵ او موفق به کسب جایزه فولبرات نیویورک گردیده و کارشناسی ارشد هنرهای زیبا را در کالج هانتر شهر نیویورک به اتمام رسانده است. او موفق به دریافت جوایز و بورس&zwnj;های تحصیلی بسیاری شده و نمایشگاه&zwnj;های انفرادی و گروهی بسیاری را تجربه کرده است. در سال ۲۰۱۴ او جایزه پولا مودرسون-بکر را برده و امسال هنرمند رزیدنت &laquo;ویلای آیورورا&raquo; در لس آنجلس بوده است. تنش و تقابل بین میل فرد برای یگانگی و کشش جامعه مدرن به تحمیل همگونی پایه کارهای اوست: تقابل بین استاندارد سازی و تکینه و بی مانند بودن، محدود سازی و آزادی فردی، خودنمایی و درک دیگری، تنها بعضی از مسائل چالش برانگیز اند که گونه ای تقابل اجتماعی &ndash; روان شناختی را در کارهای او خلق می کنند. تعامل بین موقعیت&zwnj;های روان شناختی و شهری و همچنین محیط طبیعی که شرایط زیستی جهان معاصر ما و ذهنیت ما از جهان را می&zwnj;سازد نیز در کارهای او مورد بحث قرار می گیرند.\r\nاشتفانی کلاس هنرمند و عکاس آلمانی است که آثارش بر آرمانشهرهای تاریخی اجتماعی و معماری تمرکز دارد. او ابتدا در دانشگاه صنعتی برلین معماری خوانده است و پس از آن عکاسی و نیو مدیا را در خدمت دو استاد شهیر توماس اشتروس و کاندیدا هوفر در HfG Karlsruhe &zwnj;فرا گرفته است. آثار او با تصور آنچه درعکس دیده نمی&zwnj;شود، یا به عبارت دیگر بر روی داستانی که از ورای به تصویر کشیده شدن عکس منتقل می&zwnj;شود سرو کار دارد. این جستجوی است برای تصوری بریده بریده از اکنونی که خیلی وقت است گذشته، از یک گذشته ی آرمانی. مرزهای فیزیکی و تمثیلی بین فضاها، و به همان اندازه بین واقعیت و آرمانشهر، بین تاریخ و اکنون،&zwnj; فرد و جمع، مقیاس و مدل در تصاویر او مورد بحث قرار می&zwnj;گیرد. اشتفانی کلاس هنرمند گالری &laquo;گروه لورا مارس برلین&raquo; است.\r\nمسیح مستاجران فارغ التحصیل رشته ی معماری دانشگاه علم وصنعت تهران است. مدیوم اصلی کارهای او عکاسی و ویدئو آرت می باشند. مستاجران علاوه بر عکاسی برای پروژه های هنر معاصرش، اداره ی استودیو \"دید\" را که خود یکی از موسسین آن بوده است بر عهده دارد. تمرکز این استودیو بر روی عکاسی معماری ست و مستاجران با معماران برجسته ی ایران نظیر رضا دانشمیر، علیرضا تغابنی و محمد مجیدی همکاری داشته است. علاوه بر برگزاری نمایش های انفرادی و گروهی در گالری هایی نظیر رف، محسن، موسسه ی کاف، مرکز هنر و مطالعات شهری برلین، کارهای مستاجران در فستیوال ها و رخدادهای مطرحی نظیر کنفرانس \"هک کردن مبلمان شهری\" در برلین و \"تغییر جهت به سوی شرق\" در اویازدوسکی کاسل در ورشو نیز به نمایش در آمده است. او هنرمند پروژه های شهری/اکتیویستی مانند \"هژمونی شهری\" و \"مونوکسید تهران\" بوده و با کیوریتورهای نظیر نگار فرجیانی، علیرضا لبشکا و لیزه رسک کار کرده است.",
    "videos": "null",
    "create_by": "408",
    "organ": "32",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496968200",
    "end_date": "1498850940",
    "reserve_start": "1496876100",
    "reserve_end": "1498802340",
    "meta_tags": "پوسته,ویکی,ویکی_ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496925334",
    "modify_by": null,
    "modify_date": "1496925443",
    "hits": "7",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "بنیاد کاف",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496925443_user408.jpg",
    "poster": "upload/events/posters/1496925443412_user408.jpg",
    "lng": "51.39014810234676",
    "lat": "35.798653810897335",
    "loc": "استان تهران، تهران، خیابان درکه، ایران",
    "post_address": " ولنجک، ميدان دانشگاه شهيد بهشتی، ابتدای جاده درکه، سيزده چنار، پلاک 34و36 ",
    "phone1": "02122416464",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498264200",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498350600",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498437000",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498523400",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498609800",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498696200",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498782600",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4481",
    "catid": "3",
    "title": "نمایشگاه نقاشی شیشه های رنگی",
    "salon": "0",
    "fulltext": "نمایشگاه نقاشی روی شیشه \"شیشه های رنگی\"، نغمه افشاری\r\nافتتاحیه: شنبه 20 خرداد ساعت 16\r\nنمایشگاه روزهای جمعه تعطیل می باشد\r\n&nbsp;\r\nنمایشگاه \" شیشه های رنگی \" &nbsp;آثار هنرمند جوان &laquo;نغمه افشاری&raquo; همزمان با روز جهانی صنایع دستی به مدت 10 روز در نگارخانه آفرینش نور مجتمع فرهنگی هنری نور برپا می شود.\r\nنمایشگاه نقاشی روی شیشه با عنوان \"شیشه های رنگی\" به مناسبت روز جهانی صنایع دستی و با هدف آشنایی هر چه بیشتر شهروندان با هنرهای دستی و همچنین فرهنگ سازی و سوق دوستداران هنر به بازدید از آثار نمایشگاهی هنرمندان در جهت حمایت و تشویق این قشر، شنبه 20 خردادماه ساعت 16 گشایش می&zwnj;یابد.\r\n&nbsp;\r\nنغمه افشاری متولد سال 57 و فارغ التحصیل رشته ادبیات فارسی از دانشگاه رودهن است؛ وی به دلیل علاقمندی به هنر نقاشی، تکنیک ویترای (نقاشی روی شیشه و سفال) را انتخاب کرد و این هنر را زیر نظر اساتید هنری فرهنگسرای فردوس فرا گرفت و مدت دو سال است که به صورت حرفه&zwnj;ای در این زمینه فعالیت می&zwnj;کند.\r\n&nbsp;\r\n&nbsp;گفتنی است؛ نقاشی روی شیشه، تزئین ظروف شیشه&zwnj;ای با رنگ و نقاشی هنری است كه قرن&zwnj;ها در میان ملل مختلف محبوبیت داشته است و آثار متعدد و متنوعی از این هنر را می&zwnj;توان در موزه&zwnj;های نقاط مختلف جهان یافت. گذشته از ظروف شیشه&zwnj;ای شكیل با نقاشی&zwnj;های حرفه&zwnj;ای و یا كنده كاری&zwnj;های پیچیده و ظریف كه از گذشته&zwnj;های دور تا حال توسط هنرمندان چیره دست در این رشته آفریده شده گاه ایجاد طرح&zwnj;ها و حتی خطوط ساده رنگی نیز می&zwnj;توانند ظروف شیشه&zwnj;ای بسیار ساده را به ظروفی زیبا و چشمگیر تبدیل كنند.\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497141000",
    "end_date": "1498073340",
    "reserve_start": "1496925268",
    "reserve_end": "1498073340",
    "meta_tags": "تجسمی,نمایشگاه-نقاشی-روی-شیشه,شیشه-های-رنگی,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496925268",
    "modify_by": null,
    "modify_date": null,
    "hits": "6",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "نگارخانه آفرینش نور",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496925268_user445.jpg",
    "poster": "upload/events/posters/1496925268837_user445.jpg",
    "lng": "51.309205055236816",
    "lat": "35.7348715257183",
    "loc": "استان تهران، تهران، یکم غربی، ایران",
    "post_address": "فلکه دوم صادقیه، بلوار آیت اله کاشانی، بعد از پل شهید ستاری، جنب شهر کتاب",
    "phone1": "02144088708",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4480",
    "catid": "12",
    "title": "همایش ثروت آفرینی با دستان خالی",
    "salon": "0",
    "fulltext": "اگر تا الان تونستید تغییراتی ایجاد کنید که لزوماً&zwnj;نیازی نیست به این سمینار تشریف بیارید اما اگر موفق نشدید از تحلیل رفتار افراد توانمند در خودتون، زندگیتون و کسب و کارتون تغییری ایجاد بکنید پس حتما مشکلی دارید و یه جای کارتون عیب داره بنابر این از نان شب بر شما حضور در این سمینار واجب تره.\r\nاین سمینار برای شما عزیزی هست که فکر می کنیید وقت تغییره، وقت باوره و قت اون هست که با هر آنچه در وجودت هست به تولید ثروت بپردازی. خداوند هیچ بشری را برای بدبختی و نکبت خلق نکرده.\r\nاین سمینار باری شما عزیزی هست که میخواهی از جمله افراد موفق در 5 درصد بهترین های کسب و کارتون باشید. در غیر اینصورت لطفا در خانه مشغول فکر کردن، تماشای جم تی وی و ماه عسل بمانید.\r\nراستی برای نیومدنت به این سمینار بهانه های زیادی خواهی داشت چنانکه بیل گیتس و جک ما زمان ندارند تو هم وقت نخواهی داشت یا اینکه سمینار در زمان و مکان مناسبی نیست یا اینکه هوا گرمه یا اینکه روزه ای یا اینکه بچه ات رو گازه و ...&nbsp;\r\nعزیزم اگر واقعا و قلبا میخواهی تو زندگیت اتفاقی بیوفته باور داشته باش که باید بیاموزی، چه در این سمینار چه در سمینار های دیگه، چه از طریق مطالعه کتاب و چه از طریق دوره های آموزشی. مهم اینه که باید باشی، ببینی، تجربه کنی و به کار ببندی.",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1498005000",
    "end_date": "1498073340",
    "reserve_start": "1496924899",
    "reserve_end": "1498073340",
    "meta_tags": "ثروت_آفرینی,ایوند",
    "meta_desc": "عزیزم اگر واقعا و قلبا میخواهی تو زندگیت اتفاقی بیوفته باور داشته باش که باید بیاموزی، چه در این سمینار چه در سمینار های دیگه، چه از طریق مطالعه کتاب و چه از طریق دوره های آموزشی. مهم اینه که باید باشی، ببینی، تجربه کنی و به کار ببندی.",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496924899",
    "modify_by": null,
    "modify_date": null,
    "hits": "7",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0627\\u06cc\\u0648\\u0646\\u062f\",\"url\":\"https:\\/\\/evand.com\\/events\\/moneymaking\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496924899_user403.jpg",
    "poster": "upload/events/posters/1496924899723_user403.jpg",
    "lng": "51.36953390000008",
    "lat": "35.734227",
    "loc": "استان تهران، تهران، بلوار مرزداران، ایران",
    "post_address": "شهرک آزمایش بزرگراه جلال آل احمد، بعد از پل آزمایش(به سمت خیابان اشرفی اصفهانی)، جنب خیابان اطاعتی جنوبی، نبش بلوار جانبازان،سرای محله شهرک آزمایش",
    "phone1": "02166865469",
    "phone2": "",
    "reservdays": [{
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "17:00",
            "endTime": "19:00",
            "price": "16000",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4479",
    "catid": "3",
    "title": "نمایشگاه مجموعه‌ای از آثار ترانه مصدق-نقاشی",
    "salon": "0",
    "fulltext": "مجموعه&zwnj;ای از آثار ترانه مصدق\r\nمدیا: نقاشی\r\n16 تا 20 (افتتاحیه)\r\nروزهای تعطیل: پنج&zwnj;شنبه\r\nهنرمندان ترانه مصدق\r\nگالری هپتا جمعه ۱۹ خرداد ماه ۱۳۹۵ مجموعه&zwnj;ای از آثار ترانه مصدق را به نمایش می&zwnj;گذارد. ترانه مصدق در این نمایشگاه 39 اثر از کارهای سال&zwnj;های اخیر خود را ، تحت یک استیتمنت در برابر دید هنردوستان قرار داده است. گذر از فرم&zwnj;های فیگوراتیو به فرم&zwnj;های انتزاعی، مسیری است که ترانه مصدق در سال&zwnj;های اخیر در آن گام برداشته است. این نمایشگاه تجربه&zwnj;های سال&zwnj;های اخیر اوست که دوره&zwnj;های مختلف زمانی اقامت او در ایران، رزیدنسی&zwnj;های او در کشورهای دیگر و اقامت او در آمریکا را شامل می&zwnj;شود. مصدق درباره آثار این نمایشگاه می&zwnj;گوید:&laquo;من به الگوهاى تكرار شونده&zwnj;اى كه در طبیعت وجود دارد، علاقمندم و به آن&zwnj;ها توجه می&zwnj;كنم. جستجو در امكان تصویر كردن این ریتم، بافت و فضا، امكان تجربه را براى من باز می&zwnj;كند. در نظر داشته ام كه به طور مثال ببینم چطور می&zwnj;توانم زمان را به تصویر ترجمه كنم. این تجربه مجموعه&zwnj;اى از كارهاى انتزاعى من را شكل داده است&raquo;ترانه مصدق دانش&zwnj;آموخته نقاشی از دانشگاه هنر تهران و دوره دیزاین از مدرسه دیزاین ردآیلند آمریکا است. او پیش از این در آمریکا، هند، کانادا و انگلیس نمایشگاه انفرادی داشته است. این نمایشگاه اولین نمایشگاه انفرادی او در ایران است که در گالری هپتا برگزار می&zwnj;گردد. در استیتمنت این نمایشگاه آمده است:&laquo;این مجموعه با تمرکز بر روی بافت، رنگ و الگوهای تکرار شونده، قصد دارد نوعی نگاه بیرونی و درونی به زمان را بیان کند. در پس&zwnj;زمینه آثار فیگوراتیو مجموعه، که قدیمی&zwnj;ترین کارهای مجموعه&zwnj; اند، فرم&zwnj;های انتزاعی به وضوح دیده می&zwnj;شوند (گو این&zwnj;که در نظر اول وجه فیگوراتیو است که به چشم می&zwnj;آید)؛ چنانچه در کارهای انتزاعی نیز فیگور یکسره کنار گذاشته نشده است. این مجموعه سفر رفت و بازگشتِ مداوم بین فیگور و انتزاع است&raquo;",
    "videos": "null",
    "create_by": "408",
    "organ": "32",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496968200",
    "end_date": "1498073340",
    "reserve_start": "1496908200",
    "reserve_end": "1498057140",
    "meta_tags": "مجموعه‌ای از آثار ترانه مصدق,ویکی,ویکی_ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496924696",
    "modify_by": null,
    "modify_date": "1496924722",
    "hits": "6",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "گالری هپتا",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496924722_user408.jpg",
    "poster": "upload/events/posters/1496924722791_user408.jpg",
    "lng": "51.419408960000055",
    "lat": "35.70966536",
    "loc": "استان تهران، تهران، خیابان ایرانشهر، پلاک 151، ایران",
    "post_address": " تهران، خیابان کریمخان زند، خیابان ایرانشهر، ضلع غربی پارک هنرمندان، بن‌بست نیکو‌شهر،شماره 3، طبقه همکف ",
    "phone1": "02188309940",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4478",
    "catid": "3",
    "title": "نمایشگاه سایه‌ها جلد 7-نقاشی",
    "salon": "0",
    "fulltext": "سایه&zwnj;ها جلد 7\r\n17 تا 22 (افتتاحیه)\r\nروزهای تعطیل: پنجشنبه ها\r\nمدیا: نقاشی\r\nنمایشگاه سایه ها جلد 7، مروری بر آثار به نمایش گذاشته شده درگالری سایه در سال گذشته می باشد.\r\nجواد وطن دوست علمداریزهرا بیاتسودابه ذوالفقاریسها عابددوستسیامک خاکسارسمیرا البرزکوهطلیعه مجدآبادیکتایون وطنیکتایون افروزنگار مقیمی دهکردیمریم کی احمدییاسمین شیرنگیالاهه فرجادرزیتا صرافیسنا عسکری\r\n&nbsp;",
    "videos": "null",
    "create_by": "408",
    "organ": "32",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496968200",
    "end_date": "1498073340",
    "reserve_start": "1496863800",
    "reserve_end": "1498073340",
    "meta_tags": "سایه‌ها جلد 7,wiki,wikievent,ویکی,ویکی_ایونت",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496924403",
    "modify_by": null,
    "modify_date": null,
    "hits": "6",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "گالری سایه",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496924403_user408.jpg",
    "poster": "upload/events/posters/1496924403121_user408.jpg",
    "lng": "51.32167196273804",
    "lat": "35.75515196817652",
    "loc": "استان تهران، تهران، حيدری مقدم، ایران",
    "post_address": "نياوران،خيابان جمشيديه (فيضيه) ،خيابان اميدوار ،کوچه آقاخانی، پلاک3 ",
    "phone1": "02122810015",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "21:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "21:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "21:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "21:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "21:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "21:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "21:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "21:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "21:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "21:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "21:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "21:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "21:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4477",
    "catid": "9",
    "title": "نمایش و نقد فیلم \"ماتریکس\"",
    "salon": "0",
    "fulltext": "پنجمین نشست حلقه ی فیلم پژوهی انجمن رزوان به نمایش و نقد فیلم \"ماتریکس\" اختصاص دارد.\r\nسخنرانان:\r\nمحمدرضا فهمیزی، محسن خیمه دوز، نیما قاسمی و ...\r\n\"حضور برای همان آزاد است.\"\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496968200",
    "end_date": "1497036540",
    "reserve_start": "1496924133",
    "reserve_end": "1497036540",
    "meta_tags": "سینما,نمایش-و-نقد-فیلم-ماتریکس,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496924133",
    "modify_by": null,
    "modify_date": null,
    "hits": "6",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "سالن اندیشه کتابخانه ملی ایران",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496924133_user445.jpg",
    "poster": "upload/events/posters/1496924133872_user445.jpg",
    "lng": "51.434410572052",
    "lat": "35.75219164173436",
    "loc": "استان تهران، تهران، بلوار کتابخانه ملی، ایران",
    "post_address": "بزرگراه شهید حقانی، بعد از ایستگاه مترو",
    "phone1": "09372320765",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4476",
    "catid": "3",
    "title": "نمایشگاه هؤروک-نقاشی‌خط",
    "salon": "0",
    "fulltext": "هؤروک\r\nمدیا: نقاشی&zwnj;خط\r\nروزهای تعطیل: یکشنبه ها\r\n17 تا 22 (افتتاحیه)\r\nهنرمندان بهزاد جماعتی ثمرین\r\n&nbsp;",
    "videos": "null",
    "create_by": "408",
    "organ": "32",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496968200",
    "end_date": "1497986940",
    "reserve_start": "1496890860",
    "reserve_end": "1497954540",
    "meta_tags": "هؤروک,ویکی,ویکی_ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496923709",
    "modify_by": null,
    "modify_date": "1497071796",
    "hits": "8",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "نگارخانه سهراب",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497071796_user408.jpg",
    "poster": "upload/events/posters/1497071796972_user408.jpg",
    "lng": "51.43396759999996",
    "lat": "35.7366285",
    "loc": "استان تهران، تهران، خیابان سوم، ایران",
    "post_address": " خیابان سمیه، قبل از رامسر،شماره ۱۴۲ ",
    "phone1": "02188302893",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4475",
    "catid": "3",
    "title": "نمایشگاه بی‌مرزی-نقاشی",
    "salon": "0",
    "fulltext": "بی&zwnj;مرزی\r\nمدیا: نقاشی\r\nروزهای تعطیل: شنبه ها\r\n17 تا 21 (افتتاحیه)\r\nهنرمندان محمد&zwnj;ابراهيم جعفري\r\nفریده لاشایی\r\nپری&zwnj;یوش گنجی\r\nيعقوب امداديان\r\nهایده زرین&zwnj;بال\r\nعبدالحمید پازوکی\r\nمريم سالور\r\nژيلا کامياب\r\nحسین ماهر\r\nمصطفي دشتي\r\nمصطفی دره&zwnj;باغی\r\nساسان نصیری\r\nغلامحسين نامي\r\nبـی مـرزی\r\nهنر انتزاع ورای مرزهای حقیقت عینی شکل می گیرد، نقشی دگرگونه از ربط های بی ربط زندگی از صافی نگاه هنرمند. چون تـماشای ابرهایی که چون رویایی بی شکل، می توان اشکال آشنایی را در آن جست، فارغ از اینکه این ابرها در پس خود بارانی را نهان دارند. هنر انتزاع گویشی است درونی و نگاهی شخصی که تنها درقالب فضا و رنگ و فرم نقش می شود، جدا از بایدها و نبایدها، رهـا از حدود و رسالت های بیانی و بصری. هنرمند در حیطه انتزاع با تـمسک به تعلقات حسی، خاطرات و نیاز های عاطفی، به بازگو کردن خود می نشیند، به دور از دغدغه کشف و شهود مخاطب، از درون خویش هویتی تازه می بخشد به جهان بـرون. و در این میان مخاطب، با این ترجمان درونی هنرمند از منظر خویش همسو می شود، چون درک شعری به زبان بیگانه که فهم آن نه تنها با درک معنی کلمات که با حس و لـمس آوای بیان آن شعر نیز میسر است. کمتر از شش دهه است که هنر معاصر ایران حضور انتزاع را تـجربه می کند و آنرا در قالبی بومی با رنگها و فرمهایی آشنا، به یکی از معرف های هنری خود بدل ساخته است. در &rdquo;بی مـرزی&rdquo; به تـماشای بازتابی نقش شده از گویش درون چندی از هنرمندان نام آشنا در حیطه انتزاع خواهیم نشست. | پـرهام دیده ور\r\nگشایش: جمعه ۱۹ خرداد ماه ۱۳۹۶ / ساعت ۱۷ تا ۲۱نمایشگاه تا جمعه ۲ تیر ماه ۱۳۹۶ ادامه دارد. / ساعت بازدید: ۱۶ تا ۲۰گالری روزهای شنبه تعطیل است.خواهشمندیم از آوردن اطفال زیر ۱۰ سال خودداری فرمایید.\r\n&nbsp;\r\nBorderlessness\r\nAbstract art forms itself in frontiers beyond the borders of the objective truth, a pattern unlike irrelevant relevance of life, through the filters of the eyes of the artist. Something like watching clouds, as an amorphous dream, where shapes of familiarity are observed, neglecting the fact that the clouds bear rain within. Abstract art is an inner dialect, a personal view, that appears only in the form of space, color and shape; away from dos and don&rsquo;ts, free from barriers and verbal and visual prophecies. In the abstract domain, the artist defines himself by resorting to his needs, memories and emotional attachments, free from the intuition requirements of the audience, creating a new external realm from the inner self. Here the viewer extends himself, in the direction of the artist&rsquo;s interpretation; just like comprehending a poem in a foreign language, and that understanding is not only possible by words but by feeling and sensing the sounds of the words. Abstract art has been part of Iranian art for some sixty years and using native colors and familiar forms, it has turned into an exclusive patent. &ldquo;Borderlessness&rdquo; invites you to see the reflecting visual inner dialect of several well-known Iranian abstract artists. | Parham Didehvar\r\n&nbsp;",
    "videos": "null",
    "create_by": "408",
    "organ": "32",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496968200",
    "end_date": "1498246140",
    "reserve_start": "1496906340",
    "reserve_end": "1498229940",
    "meta_tags": "بی‌مرزی,ویکی,ویکی_ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496923293",
    "modify_by": null,
    "modify_date": "1497071811",
    "hits": "8",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "گالری ایوان",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497071811_user408.jpg",
    "poster": "upload/events/posters/1497071811709_user408.jpg",
    "lng": "51.43038524999997",
    "lat": "35.78018392",
    "loc": "استان تهران، تهران، خیابان لسانی، ایران",
    "post_address": "تهران، الهیه، خیابان مهدیه، خیابان جبهه، کوچه لسانی، بن‌بست حمید، شماره ۱ ",
    "phone1": "02122612142",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "20:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4474",
    "catid": "5",
    "title": "کارگاه نفوذ کلام",
    "salon": "0",
    "fulltext": "&nbsp;کارگاه مهارت های ارتباطی بواسطه تاثیر گذاری کلام&nbsp;\r\nتا چه زمانی فرصت ها ، روابط و امتیازات خود را به دلیل عدم مهارت در حرف زدن قرار است از دست بدهید ... ؟\r\nمديريت استرس در صحبت كردن، جلسات\r\nشيوه هاي ارائه پايان نامه\r\n&nbsp;تكنيكهاي سخنراني\r\n&nbsp;روش هاي برگزاري جلسات ويژه مديران\r\nراه هاي مقابله با خجالت در جمع\r\n&nbsp;تكنيكهاي ايجاد صداي جذاب در صحبت كردنها\r\nاصول اثر گذاري در ديگران به واسطه كلام",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497313800",
    "end_date": "1497382140",
    "reserve_start": "1496890800",
    "reserve_end": "1497349740",
    "meta_tags": "ویکی,ویک_ایونت,کارگاه,فن_بیان,wiki,wiki_event",
    "meta_desc": " کارگاه مهارت های ارتباطی بواسطه تاثیر گذاری کلام \r\n\r\n---> تا چه زمانی فرصت ها ، روابط و امتیازات خود را به دلیل عدم مهارت در حرف زدن قرار است از دست بدهید ... ؟",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496923247",
    "modify_by": null,
    "modify_date": "1496923627",
    "hits": "6",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0627\\u06cc\\u0648\\u0646\\u062f\",\"url\":\"https:\\/\\/evand.com\\/events\\/%D9%86%D9%81%D9%88%D8%B0%DA%A9%D9%84%D8%A7%D9%85\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496923627_user403.jpg",
    "poster": "upload/events/posters/1496923627664_user403.jpg",
    "lng": "51.4672726",
    "lat": "35.7811175",
    "loc": "استان تهران، تهران، خیابان دولت، پلاک 14، ایران",
    "post_address": "چهارراه پاسداران ، ابتدای دولت ، پلاک 12 ، طبقه دوم ، مجتمع آموزشی بن ژیوار",
    "phone1": "02122791454",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "18:00",
            "price": "68000",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4473",
    "catid": "3",
    "title": "نمایشگاه نادیده‌های مهدی سحابی-نقاشی",
    "salon": "0",
    "fulltext": "نادیده&zwnj;های مهدی سحابی\r\nمدیا: نقاشی\r\n16 تا 20 (افتتاحیه)\r\nهنرمندان مهدی سحابي\r\n&laquo;نادیده های مهدی سحابی&raquo; عنوان نمایشگاه نقاشی استاد مهد ی سحابی می باشد .که در روز جمعه 19 خرداد ماه از ساعت 4 الی 8 درگالری سیحون واقع در خیابان وزرا، کوچه چهارم پلاک 11 از ساعت 4 الی 8 عصر افتتاح خواهد شد .\r\nدرباره هنرمند\r\nمهدی سحابی ۱۳۲۳ در قزوین - ۱۸آبان ۱۳۸۸در پاریس نقاش، مجسمه&zwnj;ساز، نویسنده، عکاس و مترجمایرانی بود او بیشتر به خاطر ترجمه مجموعه در جستجوی زمان از دست رفته نوشته مارسل پروست شناخته شده&zwnj;است.در تاریخ هنر جهان تک شمار هنرمندی می&zwnj;توان نام برد که در رشته های گوناگون هنری تبحرکامل داشته باشد. مهدی سحابی یکی از این تک شماران است، نقاش، مترجم، نویسنده، مجسمه ساز، عکاس، روزنامه نگار و گرافیست.گوناگونی و حجم آثاری که او در تمام این زمینه ها در دورانی کمتر از چهل سال بجا گذاشته نمایانگرکار خستگی ناپذیر و با وجدان کاري اوست. کنجکاوی دائمی و جویندگی، همچنین توقع بالا برای عرضه آثاری با کیفیت هنری شایسته به دور از نشانی از دست به سر و سنبل کردن از مشخصات بارز كارهاي اوست.\r\nنادیده&zwnj;های مهدی سحابی\r\nاز ویژگی بدون تردید در آثار تجسمی (نقاشی، مجسمه سازی و عکاسی ) مهدی سحابی، تنوع و نوآوری است. گوناگونی موضوع های (سوژه) بکار برده شده در تمامی آثار او نیز با پیوند و تاثیرپذیری از روندهای اجتماعی و تاریخی معاصر است. در تمام آثار او حتی آثار انتزاعی(آبستره) دید واقع گرایانه (رئالیستی) او از طبیعت و واقعیت و روابط اجتماعي، فرهنگی، ملی و جهانی مشاهده می&zwnj;شود. تاثیری که از نقش&zwnj;های گلیم و فرش ایرانی گرفته در آثار آبستره او دیده می&zwnj;شود دلیلی بر این مدعا است.در تمامی آثار او تاکید بر زیبايی شناسی(استتیک) با استفاده از تکنیک و مواد گوناگون متعارف و غیرمتعارف محدوده هنرهای آکادمیک، رنگ(روغنی، آبرنگ، آکریلیک، گواش ) آهن پاره، چوب های زمخت و نتراشیده، مقوا، کاغذ، گچ و ... مشاهده مي&zwnj;شود.پر بارترین و گزیده ترین دوره نقاشی های او از ديدگاه محتوا و شكل بياني آن دوره \"ماشین های قراضه \" است. بدیع آنکه ماشین قراضه و له شده بعنوان یک پدیده زیبايی شناسانه ابراز میشود. خود او این دوره را شروع دوره حرفه ای شدن کار نقاشی اش مي داند.",
    "videos": "null",
    "create_by": "408",
    "organ": "32",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496968200",
    "end_date": "1498073340",
    "reserve_start": "1496871840",
    "reserve_end": "1498024740",
    "meta_tags": "نادیده‌های مهدی سحابی,ویکی,ویکی_ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496922486",
    "modify_by": null,
    "modify_date": "1497071867",
    "hits": "7",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "گالری سيحون",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1497071867_user408.jpg",
    "poster": "upload/events/posters/1497071867182_user408.jpg",
    "lng": "51.32167196273804",
    "lat": "35.73001871",
    "loc": "استان تهران، تهران، هشتم، ایران",
    "post_address": " خيابان وزراء، كوچه چهارم، شماره 11 ",
    "phone1": "02188711305",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "11:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4471",
    "catid": "8",
    "title": "خواندن در موزه، بلند خوانی کتاب های خاموش",
    "salon": "0",
    "fulltext": "\r\nصدای رسای کتاب از یک&zwnj;شنبه ۲۱ خرداد ۱۳۹۶ خورشیدی از میان آثار تاریخی در کتابخانه و موزه ملی ملک شنیده خواهد شد.\r\n\r\nدوستداران کتاب، قصه و روایت می&zwnj;توانند با حضور در کتابخانه و موزه ملی ملک، میهمان یک برنامه متفاوت با نام &laquo;خواندن در موزه؛ بلندخوانی کتاب&zwnj;های خاموش&raquo; شوند. این برنامه از ۲۱ خرداد تا پایان تیر ۱۳۹۶ خورشیدی هر هفته یک&zwnj;شنبه&zwnj;ها در نخستین موزه وقفی- خصوصی ایران برگزار می&zwnj;شود.\r\nیک راوی در این برنامه در یکی از سالن&zwnj;های موزه&zwnj;ای کتابخانه و موزه ملی ملک، در کنار آثار تاریخی، کتابی را به شیوه بلندخوانی روایت خواهد کرد. کتاب&zwnj;هایی در این برنامه به کارمی&zwnj;آیند که با رویکرد قصه و روایت نگاشته شده&zwnj;اند.\r\n\r\n",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497141000",
    "end_date": "1500751740",
    "reserve_start": "1496905140",
    "reserve_end": "1500735540",
    "meta_tags": "فرهنگی,خواندن-در-موزه-بلند-خوانی-کتاب-های-خاموش,ویکی,ویکی-ایونت,wiki,wikievent,wiki-event",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496921366",
    "modify_by": null,
    "modify_date": "1496921530",
    "hits": "8",
    "params": null,
    "advanced_scheduling_mode": "1",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "کتابخانه و موزه ملی ملک",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496921530_user445.jpg",
    "poster": "upload/events/posters/1496921530872_user445.jpg",
    "lng": "51.416353940963745",
    "lat": "35.68694946431451",
    "loc": "استان تهران، تهران، خیابان یارجانی، ایران",
    "post_address": "میدان امام خمینی، سردر باغ ملی، خیابان ملل متحد، محوطه تاریخی باغ ملی تهران",
    "phone1": "02166726618",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497180339",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497785139",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498389939",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498994739",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499599539",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500204339",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4470",
    "catid": "3",
    "title": "نمایشگاه عکس \"ملودی طبیعت\"",
    "salon": "0",
    "fulltext": "\r\nنمایشگاه عکس &laquo;ملودی طبیعت&raquo; با عکس های پیام احمدی کاشانی از طبیعت بکر ایران در نگارخانه مهر برپا می&zwnj;شود.\r\nبه گزارش رویداد فرهنگی، در این نمایشگاه 25 عکس از مناظر طبیعی کشورمان از شمال تا جنوب در معرض دید علاقمندان به هنر عکاسی قرار می گیرد. تصاویری بدیع و زیبا ازگوشه و کنار کشور و تنوع چهار فصل آن را می توان در &laquo;ملودی طبیعت&raquo; مشاهده کرد.\r\n",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496881800",
    "end_date": "1497986940",
    "reserve_start": "1496921118",
    "reserve_end": "1497986940",
    "meta_tags": "تجسمی,نمایشگاه-عکس-ملودی-طبیعت,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496921118",
    "modify_by": null,
    "modify_date": null,
    "hits": "8",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "نگارخانه مهر فرهنگسرای انقلاب اسلامی",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496921118_user445.jpg",
    "poster": "upload/events/posters/1496921118483_user445.jpg",
    "lng": "51.38121700286865",
    "lat": "35.681790528509694",
    "loc": "استان تهران، تهران، خیابان کمیل، ایران",
    "post_address": "بزرگراه شهید نواب صفوی، تقاطع پل کمیل، ابتدای کمیل شرقی",
    "phone1": "02155419057",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496881800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4469",
    "catid": "5",
    "title": "وبینار رایگان مطالعه علمی بدون فراموشی",
    "salon": "0",
    "fulltext": "روش مطالعه و یادگیری بدون فراموشی چیست و چگونه انجام می شود.چگونه خلاصه نویسی علمی مطالب مورد نیاز را انجام بدهید که خلاصه های شما با حجم بیست درصد ولی صد درصد مطالب خوانده شده را شامل بشود و حداقل پنج بار بتوانید مرور کنید.(حتی با چهار _پنج ساعت مطالعه یا 20صفحه در روز)\r\nکارگاه به صورت آن لاین برگزار می شود.",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497486600",
    "end_date": "1497554940",
    "reserve_start": "1496920778",
    "reserve_end": "1497554940",
    "meta_tags": "ویکی,ویکی_ایونت,مطالعه,کارگاه,wiki,wiki_event",
    "meta_desc": "روش مطالعه و یادگیری بدون فراموشی چیست و چگونه انجام می شود.\r\nچگونه خلاصه نویسی علمی مطالب مورد نیاز را انجام بدهید که خلاصه های شما با حجم بیست درصد ولی صد درصد مطالب خوانده شده را شامل بشود و حداقل پنج بار بتوانید مرور کنید.(حتی با چهار _پنج ساعت مطالعه یا 20صفحه در روز)",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496920778",
    "modify_by": null,
    "modify_date": null,
    "hits": "7",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0627\\u06cc\\u0648\\u0646\\u062f\",\"url\":\"https:\\/\\/evand.com\\/events\\/yadgiri\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "0",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496920778_user403.jpg",
    "poster": "upload/events/posters/1496920778682_user403.jpg",
    "lng": "51.32167196273804",
    "lat": "35.75515196817652",
    "loc": "استان تهران، تهران، حيدری مقدم، ایران",
    "post_address": "",
    "phone1": "",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "21:00",
            "endTime": "22:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4468",
    "catid": "9",
    "title": "یک ایستگاه جلوتر",
    "salon": "0",
    "fulltext": "\"سینمای هنر و تجربه\"\r\nکارگردان: سامان استرکی\r\nتهیه کنندگان: علیرضا شجاع نوری",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496709000",
    "end_date": "1500751740",
    "reserve_start": "1496920109",
    "reserve_end": "1500751740",
    "meta_tags": "سینما,هنر-و-تجربه,یک-ایستگاه-جلوتر,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496920109",
    "modify_by": null,
    "modify_date": null,
    "hits": "14",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0633\\u06cc\\u0646\\u0645\\u0627 \\u062a\\u06cc\\u06a9\\u062a\",\"url\":\"https:\\/\\/www.cinematicket.org\\/?p=nfilmdetailae&fid=1355&fileid=2467&t=%DB%8C%DA%A9%20%D8%A7%DB%8C%D8%B3%D8%AA%DA%AF%D8%A7%D9%87%20%D8%AC%D9%84%D9%88%D8%AA%D8%B1\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "0",
    "place_name": "سینماهای هنر و تجربه",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496920109_user445.jpg",
    "poster": "upload/events/posters/1496920109104_user445.jpg",
    "lng": "51.32167196273804",
    "lat": "35.75515196817652",
    "loc": "استان تهران، تهران، حيدری مقدم، ایران",
    "post_address": "",
    "phone1": "",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496709000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496795400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496881800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498264200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498350600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498437000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498523400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498609800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498696200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498782600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498869000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498955400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499041800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499128200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499214600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499301000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499387400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499473800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499560200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499646600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499733000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499819400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499905800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499992200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500078600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500165000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500251400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500337800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500424200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500510600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500597000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500683400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "7000",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4467",
    "catid": "5,8",
    "title": "کارگاه عملی مطالعه موفق",
    "salon": "0",
    "fulltext": "کارگاه عملی مطالعه موفق به صورت کاملا عملی و رول پلی\r\n&nbsp;بصورت چهار ساعته و کاملا کاربردی همراه با آموزش تکنیک های :\r\nکلی خوانیتندخوانیرمزگردانی و انتقال اطلاعاتبازخوانی و یادآوری سریعشیوه خواندن و به یاد آوری دروس مختلفتقویت حافظه و &hellip;&nbsp;+به همراه جلسه رایگان معرفی و ارائه تنها آزمون استاندارد و بومی هدایت شغلی &ndash; تحصیلی در کشور دارای مجوز از سازمان نظام روانشناسی و مشاوره\r\n&nbsp;با اعطای مدرک معتبر بازآموزی و شرکت از سازمان نظام روانشناسی و مشاوره کشور\r\n&nbsp;تخفیف ۱۰ درصدی آزمون هدایت شغلی- تحصیلی، منابع آموزشی و محصولات انتشارات موسسه هدایت فرهیختگان جوان ویژه افراد شرکت کننده.\r\nجهت کسب آخرین اطلاعات و خدمات مرکز مشاوره فرهیختگان جوان به ادرس تلگرام farhikhteganejavan@ و یا تارنمای www.hfj.ir&nbsp; مراجعه نمایید.",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497573000",
    "end_date": "1497641340",
    "reserve_start": "1496919957",
    "reserve_end": "1497641340",
    "meta_tags": "ویکی,ویکی_ایونت,کارگاه,مطالعه,wiki,wiki_event",
    "meta_desc": "لی خوانی\r\nتندخوانی\r\nرمزگردانی و انتقال اطلاعات\r\nبازخوانی و یادآوری سریع\r\nشیوه خواندن و به یاد آوری دروس مختلف\r\nتقویت حافظه و …\r\n +به همراه جلسه رایگان معرفی و ارائه تنها آزمون استاندارد و بومی هدایت شغلی – تحصیلی در کشور دارای مجوز از سازمان نظام روانشناسی و مشاوره",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496919957",
    "modify_by": null,
    "modify_date": null,
    "hits": "6",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0627\\u06cc\\u0648\\u0646\\u062f\",\"url\":\"https:\\/\\/evand.com\\/events\\/%DA%A9%D8%A7%D8%B1%DA%AF%D8%A7%D9%87-%D8%B9%D9%85%D9%84%DB%8C-%D9%85%D8%B7%D8%A7%D9%84%D8%B9%D9%87-%D9%85%D9%88%D9%81%D9%82-%D8%A8%D9%87-%D8%B5%D9%88%D8%B1%D8%AA-%DA%A9%D8%A7%D9%85%D9%84%D8%A7-%D8%B9%D9%85%D9%84%DB%8C-%D9%88-%D8%B1%D9%88%D9%84-%D9%BE%D9%84%DB%8C-975943\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496919957_user403.jpg",
    "poster": "upload/events/posters/1496919957330_user403.jpg",
    "lng": "51.406984700000066",
    "lat": "35.6900797",
    "loc": "استان تهران، تهران، منطقه ۱۱، خیابان جامی، ایران",
    "post_address": "خیابان حافظ، خیابان جامی، کوچه محمد بیک، پلاک ۱۴ طبقه اول، مرکز مشاوره فرهیختگان جوان",
    "phone1": "02161978088",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "13:00",
            "price": "87200",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4466",
    "catid": "9",
    "title": "خماری",
    "salon": "0",
    "fulltext": "\"سینمای هنر و تجربه\"\r\nکارگردان:داریوش غذبانی\r\nتهیه کنندگان:منیژه حکمت\r\nنویسنده: فرهاد توحیدی\r\n&nbsp;\r\nبازیگران:\r\nمهرداد صدیقیان، سوگل خلیق، لی لی فرهاد&zwnj;پور و کاظم سیاحی\r\n&nbsp;\r\nاین فیلم یک ملودرام اجتماعی است که زندگی یک جوان علاقه&zwnj;مند به موسیقی را به تصویر می&zwnj;کشد که همزمان با یک امتحان مهم درگیر اتفاقات عجیب و غریب می&zwnj;شود و...\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1495413000",
    "end_date": "1500233340",
    "reserve_start": "1496912744",
    "reserve_end": "1500233340",
    "meta_tags": "سینما,خماری,هنر-و-تجربه,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496912744",
    "modify_by": null,
    "modify_date": null,
    "hits": "12",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0633\\u06cc\\u0646\\u0645\\u0627 \\u062a\\u06cc\\u06a9\\u062a\",\"url\":\"https:\\/\\/www.cinematicket.org\\/?p=nfilmdetailae&fid=1325&fileid=2257&t=%D8%AE%D9%85%D8%A7%D8%B1%DB%8C\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "0",
    "place_name": "سینماهای هنر و تجربه",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496912744_user445.jpg",
    "poster": "upload/events/posters/1496912744845_user445.jpg",
    "lng": "51.32167196273804",
    "lat": "35.75515196817652",
    "loc": "استان تهران، تهران، حيدری مقدم، ایران",
    "post_address": "",
    "phone1": "",
    "phone2": "",
    "reservdays": [{
        "daydate": "1495413000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495499400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495585800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495672200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495758600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495845000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495931400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496017800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496104200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496190600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496277000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496363400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496449800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496536200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496622600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496709000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496795400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496881800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498264200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498350600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498437000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498523400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498609800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498696200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498782600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498869000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498955400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499041800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499128200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499214600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499301000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499387400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499473800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499560200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499646600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499733000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499819400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499905800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499992200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500078600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500165000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4465",
    "catid": "9",
    "title": "زیر سقف دودی",
    "salon": "0",
    "fulltext": "کارگردان:پوران درخشنده\r\nتهیه کنندگان:پوران درخشنده\r\n&nbsp;\r\nبازیگران:\r\nفرهاد اصلانی، مریلا زارعی، بهنوش طباطبایی، هوشنگ توکلی، مریم بوبانی، هادی مرزبان، فریبا متخصص، شهرام حقیقت دوست، رسول نجفیان، نفیسه روشن، آزیتا حاجیان، حسام نواب صفوی و فرشید زارعی&zwnj;فرد\r\n&nbsp;\r\nسایر عوامل:\r\nمدیرفیلمبرداری: مسعود سلامی، دستیار اول کارگردان و برنامه&zwnj;ریز: جلیل شعبانی، طراح گریم: ایمان امیدواری، طراح صحنه: حجت اشتری، طراح دکور: گلناز گلشن، صدابردار: عباس رستگارپور، دستیاران کارگردان: علی جودی و لیلا درخشنده، مدیر تولید: عباس درخشنده، عکاس: بابک برزویه، مدیر تبلیغات: پیام ایرایی و مشاور رسانه&zwnj;ای: بیتا موسوی.\r\n&nbsp;\r\n&laquo;زیر سقف دودی&raquo; به موضوع طلاق عاطفی میان زوج&zwnj;ها می&zwnj;پردازد.",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496795400",
    "end_date": "1500751740",
    "reserve_start": "1496911912",
    "reserve_end": "1500751740",
    "meta_tags": "سینما,زیر-سقف-دودی,پوران-درخشنده,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496911912",
    "modify_by": null,
    "modify_date": null,
    "hits": "14",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0633\\u06cc\\u0646\\u0645\\u0627 \\u062a\\u06cc\\u06a9\\u062a\",\"url\":\"https:\\/\\/www.cinematicket.org\\/?p=nfilmdetail&fid=1350&fileid=2136&t=%D8%B2%DB%8C%D8%B1%20%D8%B3%D9%82%D9%81%20%D8%AF%D9%88%D8%AF%DB%8C\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "0",
    "place_name": "سینماهای سراسر کشور",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496911912_user445.jpg",
    "poster": "upload/events/posters/1496911912829_user445.jpg",
    "lng": "51.32167196273804",
    "lat": "35.75515196817652",
    "loc": "استان تهران، تهران، حيدری مقدم، ایران",
    "post_address": "",
    "phone1": "",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496795400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496881800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498264200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498350600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498437000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498523400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498609800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498696200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498782600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498869000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498955400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499041800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499128200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499214600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499301000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499387400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499473800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499560200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499646600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499733000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499819400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499905800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499992200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500078600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500165000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500251400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500337800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500424200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500510600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500597000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500683400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "6000",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4464",
    "catid": "5",
    "title": "دومین وبینار «روش‌هایی برای تغییر خود»",
    "salon": "0",
    "fulltext": "همهٔ ما به&zwnj;نوعی در فرآیند تغییر هستیم. یا به&zwnj;صورت ارادی شرایط تغییر را فراهم می&zwnj;کنیم یا غیرارادی درروند تغییر حرکت می&zwnj;کنیم.\r\nتغییر، تنها چیزی است که ثابت است.هراکلیتوس\r\nقسمت&zwnj;هایی مانند رشد بدن، تغییر فصل و حرکت زمین بدون ارادهٔ ما انجام می&zwnj;گیرد و ادامهٔ آن نیازی به تصمیم ما ندارد.می&zwnj;ماند قسمتی که برای کیفیت زندگی و سلامت جسم و روح خود تصمیم می&zwnj;گیریم. تغییرات و تجربه&zwnj;هایی که برای بهبود کیفیت زندگی&zwnj;مان حیاتی است.\r\nهرکداممان دلایلی برای تغییر داریم. ولی ممکن است ریشهٔ آغاز هر تغییری از این چند حالت خارج نباشد:\r\nاز روی نارضایتیرسیدن به هدفیا انتخابی از روی &laquo;ناچاری&raquo;هرکدام از دلایل بالا یا دلیل دیگر، آغازگر&nbsp;تغییر است و جدای دلیل آن، هرکدام روشی را برای تغییر انتخاب می&zwnj;کنیم و انجام می&zwnj;دهیم.\r\nدر این وبینار می&zwnj;خواهیم با یکی از روش&zwnj;های تغییر، آشنا شویم. این روش &laquo;ساخت عادت جدید و سازنده&raquo; نام دارد.\r\nرویداد آن لاین می باشد.",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497227400",
    "end_date": "1497295740",
    "reserve_start": "1496894820",
    "reserve_end": "1497279540",
    "meta_tags": "ویکی,ویکی_ایونت,وبینار,ایوند,روانشناسی,wiki,wiki_event",
    "meta_desc": "در این وبینار می‌خواهیم با یکی از روش‌های تغییر، آشنا شویم. این روش «ساخت عادت جدید و سازنده» نام دارد.",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496911030",
    "modify_by": null,
    "modify_date": "1496911106",
    "hits": "6",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0627\\u06cc\\u0648\\u0646\\u062f\",\"url\":\"https:\\/\\/evand.com\\/events\\/%D8%AF%D9%88%D9%85%DB%8C%D9%86-%D9%88%D8%A8%DB%8C%D9%86%D8%A7%D8%B1-%D8%B1%D9%88%D8%B4-%D9%87%D8%A7%DB%8C%DB%8C-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%AA%D8%BA%DB%8C%DB%8C%D8%B1-%D8%AE%D9%88%D8%AF\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "0",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496911106_user403.jpg",
    "poster": "upload/events/posters/1496911106555_user403.jpg",
    "lng": "51.32167196273804",
    "lat": "35.75515196817652",
    "loc": "استان تهران، تهران، حيدری مقدم، ایران",
    "post_address": "",
    "phone1": "09123807769",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "18:30",
            "endTime": "19:45",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4463",
    "catid": "5",
    "title": "کارگاه مسیر شغلی من",
    "salon": "0",
    "fulltext": "فرآیند ارزیابی و توصیف وضعیت موجود&nbsp;به ویژه جایگاه فعلی شغل، تصمیم&zwnj;گیری درباره جایگاهی که خواهانش هستیم (توصیف وضعیت مطلوب) و ایجاد تغییرات و اقدامات لازم برای حرکت از وضعیت موجود به سمت وضعیت مطلوب برای داشتن شغل موردنظر را می&zwnj;توان &laquo;تعیین مسیر شغلی&raquo; نامید.با توجه به این&zwnj;که اولین تجارب شغلی و اولین گام&zwnj;ها برای طراحی مسیر شغلی در سنین جوانی اتفاق می&zwnj;افتد و این اولین تجارب، می&zwnj;تواند بر چشم&zwnj;اندازهای شغلی و زندگی حرفه&zwnj;ای شغلی فرد تأثیر طولانی&zwnj;مدت داشته باشد، بنابراین توجه به طراحی مسیر شغلی بی&zwnj;شک یکی از اولویت&zwnj;های بالای ذهنی مخاطبان بیست&zwnj;تاسی است.\r\nبا توجه به استقبال خوب از کارگاه قبلی ما با همین موضوع مسیر شغلی، تصمیم&zwnj; گرفتیم با همکاری و حمایت گروه پژوهشی&nbsp;آریانا، مجدداً کارگاه &laquo;مسیر شغلی من&raquo; را در روز دوشنبه، 22&nbsp;خردادماه 1396 برگزار کنیم.\r\nمربی این کارگاه، محمد نجفی (بنیانگذار بیست&zwnj;تاسی) خواهد بود.\r\nظرفیت تعداد شرکت&zwnj;کنندگان در این کارگاه 20 نفر است.",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497227400",
    "end_date": "1497295740",
    "reserve_start": "1496910680",
    "reserve_end": "1497295740",
    "meta_tags": "ویکی,ویکی_ایونت,کارگاه,انتخاب_شغل,wiki,wiki_event",
    "meta_desc": "فرآیند ارزیابی و توصیف وضعیت موجود به ویژه جایگاه فعلی شغل، تصمیم‌گیری درباره جایگاهی که خواهانش هستیم (توصیف وضعیت مطلوب) و ایجاد تغییرات و اقدامات لازم برای حرکت از وضعیت موجود به سمت وضعیت مطلوب برای داشتن شغل موردنظر را می‌توان «تعیین مسیر شغلی» نامید.",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496910680",
    "modify_by": null,
    "modify_date": null,
    "hits": "5",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0627\\u06cc\\u0648\\u0646\\u062f\",\"url\":\"https:\\/\\/evand.com\\/events\\/sc02-116\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496910680_user403.jpg",
    "poster": "upload/events/posters/1496910680628_user403.jpg",
    "lng": "51.43191199046021",
    "lat": "35.71987997156987",
    "loc": "استان تهران، تهران، خیابان ملایری پور، ایران",
    "post_address": "سهروردی جنوبی، ملایری پور غربی، شماره 37، ساختمان آریانا، طبقه سوم، کلاس شماره 5",
    "phone1": "",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "17:30",
            "endTime": "20:30",
            "price": "39000",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4462",
    "catid": "7,10",
    "title": "نمایشنامه خوانی راز عروسک",
    "salon": "0",
    "fulltext": "نویسنده:&nbsp;داوود فتحعلی بیگی\r\nکارگردان:&nbsp;زهره رستگار مقدم\r\nبازیگران:&nbsp;زهره&zwnj;رستگارمقدم، نازنین&zwnj;قدس، محبوبه سنگ&zwnj;دهی، فاطمه&zwnj;نوروزی، مهری&zwnj;درخشان، رهاسلیمی، سارا&zwnj;ندیمی، یکتا&zwnj;مقدس&zwnj;فر، فاطمه&zwnj;اصغری، و باهنرنمایی نرگس&zwnj;صفدریان، کتایون&zwnj;الهی\r\nمشاور کارگردان: سید مصطفی موسوی منش راوی: علیرضا دستمالچی موسیقی: امین دارابی نوازندگان: امین دارابی ایمان متقی عکاس: امین محنتی طراحی پوستر: نجمه رستگار مقدم مدیر روابط عمومی: وحید سقلی\r\nبا تشکر از :حمید اصغری تتماج و شیوا خسرومهر\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497054600",
    "end_date": "1497209340",
    "reserve_start": "1496910258",
    "reserve_end": "1497209340",
    "meta_tags": "کودک,تئاتر,نمایشنامه-خوانی-راز-عروسک,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496910258",
    "modify_by": null,
    "modify_date": null,
    "hits": "17",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u062a\\u06cc\\u0648\\u0627\\u0644\",\"url\":\"https:\\/\\/www.tiwall.com\\/store\\/razearousak\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "تماشاخانه تتماج",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496910258_user445.jpg",
    "poster": "upload/events/posters/1496910258241_user445.jpg",
    "lng": "51.43087273836136",
    "lat": "35.70813071799542",
    "loc": "Tehran, Yazdanniyaz, ایران",
    "post_address": "خیابان طالقانی، خیابان بهار شمالی، کوچه یزدان نیاز، پلاک ۳۴، طبقه۳، هلیا فیلم، تماشاخانه تتماج",
    "phone1": "02177601790",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "20:00",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4461",
    "catid": "10",
    "title": "تئاتر سه روایت از زندگی در سایکودرام -تاتر درمانی",
    "salon": "0",
    "fulltext": "برای اولین بار تلفیق هنر تئاتر و روانشناسی در قالب نمایشنامه خوانی و تحلیل تخصصی روانشناسی\r\nتئاتر روانشناسی همراه با مداخله و تحلیل",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497141000",
    "end_date": "1497209340",
    "reserve_start": "1496910245",
    "reserve_end": "1497209340",
    "meta_tags": "ویکی,ویکی_ایونت,wiki,wiki_event,تاتر_درمانی",
    "meta_desc": "برای اولین بار تلفیق هنر تئاتر و روانشناسی در قالب نمایشنامه خوانی و تحلیل تخصصی روانشناسی\r\n\r\nتئاتر روانشناسی همراه با مداخله و تحلیل",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496910245",
    "modify_by": null,
    "modify_date": null,
    "hits": "8",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u0627\\u06cc\\u0648\\u0646\\u062f\",\"url\":\"https:\\/\\/evand.com\\/events\\/psychodrama2\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496910245_user403.jpg",
    "poster": "upload/events/posters/1496910245736_user403.jpg",
    "lng": "51.459251199999926",
    "lat": "35.6897883",
    "loc": "استان تهران، تهران، میرهاشمی، ایران",
    "post_address": "خیابان پیروزی، چهارصد دستگاه، خیابان اشارات، ک میرهاشمی، سرای محله چهارصد دستگاه، طبقه اول سالن همایش ها",
    "phone1": "09197514986",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "19:00",
            "price": "30000",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4460",
    "catid": "10",
    "title": "نمایشنامه خوانی کمی با نیل سایمون",
    "salon": "0",
    "fulltext": "نویسنده:&nbsp;نیل سایمون\r\nکارگردان:&nbsp;محمدرضا جمال\r\nبازیگران:&nbsp;محمد حسین سکوت، زکیه سیف، عاطفه شوقی، متین نظری، محمدرضا جمال\r\nتهیه کننده:&nbsp;خیریه میثاق موعود عشق\r\nدستیار کارگردان: زهرا عزتی صداگذار: منصور اصغری هماهنگی: مهدی احمدی طراح لباس: محمدرضا جمال روابط عمومی: امیر مولایی عکاس: محمدرضا روزی  طراح پوستر: مرصاد منصوری",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496968200",
    "end_date": "1497036540",
    "reserve_start": "1496893560",
    "reserve_end": "1497020340",
    "meta_tags": "تئاتر,نمایشنامه-خوانی-کمی-با-نیل-سایمون,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496909763",
    "modify_by": null,
    "modify_date": "1496909800",
    "hits": "13",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u062a\\u06cc\\u0648\\u0627\\u0644\",\"url\":\"https:\\/\\/www.tiwall.com\\/store\\/kamibanilsimon\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "تماشاخانه سه‌نقطه - سالن خسرو شکیبایی",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496909800_user445.jpg",
    "poster": "upload/events/posters/1496909800229_user445.jpg",
    "lng": "51.40339082479477",
    "lat": "35.71226001489553",
    "loc": "استان تهران، تهران، خیابان کبکانیان، ایران",
    "post_address": "میدان ولی عصر، بلوار کشاورز، بعد از خیابان فلسطین خ کبکانیان، نبش کوچه مرتضی زاده، پلاک ۱۰ و ۱۲",
    "phone1": "02188952440",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "18:40",
            "price": "10000",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "60"
},
{
    "id": "4459",
    "catid": "13",
    "title": "پینت بال - رازی",
    "salon": "0",
    "fulltext": "ورودی پینت بال رازی&nbsp;با ۵۰ عدد گلوله رایگان برای ساختن روزی سراسر هیجان و شادی تنها با پرداخت ۸۰۰ تومان اما به ارزش ۱۲۰۰۰ تومان(۹۳% تخفیف)دسترسی به رستوران و کافی&zwnj;شاپ: امکان استفاده از رستوران و کافی شاپ با پرداخت هزینه جداگانهدسترسی به وسایل نقلیه: داردهزینه های جانبی: بابت ۵۰ عدد تیر اولیه ۸۰۰۰ تومان جداگانه در محل دریافت می شود.\r\nمدت زمان استفاده ۲ ساعت۱۰ دقیقه آموزش بازیتعداد نفرات حداقل ۱۰ و حداکثر ۲۰ نفرقابل استفاده برای افراد بالای ۱۰ سال&nbsp;پخش موسیقی در پینت بال رازیبزرگترین زمین پینت بال در تهرانامکان استفاده به صورت خانوادگی (بانوان و آقایان)&nbsp;قرارگیری موانع در۲ طرف زمین&nbsp;امکان پیاده سازی ۳۴ استراتژی بازی&nbsp;مجهز به ۴ پارکینگ ۲۴ ساعتهانواع موانع در دو طرف زمین قرار گرفته و در نتیجه امکان پیاده&zwnj;سازی ۳۴ استراتژی وجود دارد.۲۰۰۰ متر فضای زمین پینت بال و ۴۰۰۰ متر فضای کناره و جایگاه تماشاچی برای ۲ گروه ۶۰ نفری (۱۲۰نفره) و اتاق های داوری و رختکن و سرویس بهداشتیارائه بهترين نوع مارکر (تفنگ) و ماسک و لباس و محافظ گردنی و دستکش (کفش مناسب به همراه داشته باشيد)امكان ورزش و بازی در شب با نور مناسب&nbsp;دارای جایگاه تماشاچیدارای رختکن مجزا بانوان و آقایانارائه لوازم بازی از قبیل تفنگ، ماسک، دستکش، لباس، جلیقه ضد ضربه و کلاهتجربه ای مهیج همراه با خانواده در پینت بال رازیدر کنار طبیعت و دریاچه ی بزرگ پارک رازی",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496709000",
    "end_date": "1499455740",
    "reserve_start": "1496909138",
    "reserve_end": "1499455740",
    "meta_tags": "ویکی,ویکی_ایونت,تفریحی,پینت_بال,پارک_رازی,wiki,wiki_event",
    "meta_desc": "ورودی پینت بال رازی با ۵۰ عدد گلوله رایگان برای ساختن روزی سراسر هیجان و شادی تنها با پرداخت ۸۰۰ تومان اما به ارزش ۱۲۰۰۰ تومان(۹۳% تخفیف)",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496909138",
    "modify_by": null,
    "modify_date": null,
    "hits": "10",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u062a\\u062e\\u0641\\u06cc\\u0641\\u0627\\u0646\",\"url\":\"http:\\/\\/takhfifan.com\\/%D9%BE%DB%8C%D9%86%D8%AA-%D8%A8%D8%A7%D9%84-%D8%B1%D8%A7%D8%B2%DB%8C-%D9%88%D8%B1%D9%88%D8%AF%DB%8C-%D8%AA%D9%81%D8%B1%DB%8C%D8%AD%DB%8C-%D9%88%D8%B1%D8%B2%D8%B4%DB%8C\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "پینت بال پارک رازی",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496909138_user403.jpg",
    "poster": "upload/events/posters/1496909138625_user403.jpg",
    "lng": "51.39097017616575",
    "lat": "35.66953843037744",
    "loc": "Tehran Province, Tehran, Shahid Moradi, ایران",
    "post_address": " میدان انقلاب، خیابان کارگر جنوبی، بین میدان قزوین و رازی",
    "phone1": "02155420587",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496709000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496795400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496881800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498264200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498350600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498437000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498523400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498609800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498696200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498782600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498869000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498955400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499041800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499128200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499214600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499301000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499387400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "23:00",
            "price": "800",
            "discount": "93",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "93",
    "maxdiscount": "93"
},
{
    "id": "4458",
    "catid": "13",
    "title": "پینت بال - طرشت",
    "salon": "0",
    "fulltext": "ورودی پینت بال باشگاه نیروگاه طرشت&nbsp;تنها با پرداخت ۸۰۰ تومان اما به ارزش ۸۰۰۰ تومان (۹۰% تخفیف) ۵۰ تیر اول در پینت بال باشگاه نیروگاه طرشت تنها با پرداخت ۶۳۰۰ تومان اما به ارزش ۷۰۰۰ &nbsp;تومان (۱۰% تخفیف)مخاطب:&nbsp;آقایان و بانوانبازی در گروه های ۸ الی ۲۰ نفره&nbsp;دارای لوازم و تجهیزات نوجایگاه استراحت VIPفیلم برداری با کادر حرفه ایبرگزاری دوره های آموزشی با کادری کاملا حرفه ایهمراهی مربی، داور و ناظر بازیاجرای متنوع بازی های روز دنیااهدای جایزه به کودکان زیر ۱۲ سالاستعدادیابی برای مسابقات حرفه ای و شرکت در آموزش های تخصصی&nbsp;آمادگی برگزاری مسابقات درون سازمانی و عقد قرارداد با مدارس ، ارگان ها، سازمان های دولتی و خصوصیلباس مخصوص پینت بال شامل: ماسک مخصوص با لنز نو و دو جداره ضد بخار، گردنبند ضد ضربه، لباس مخصوص با پدینگ داخل، جلیقه ضد ضربه، دستکش مخصوص پینت بال، زانو بند و غیره",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1492302600",
    "end_date": "1497727740",
    "reserve_start": "1496908149",
    "reserve_end": "1497727740",
    "meta_tags": "ویکی,ویکی_ایونت,wiki,wiki_event,تفریحی,تخفیفان",
    "meta_desc": "ورودی پینت بال باشگاه نیروگاه طرشت تنها با پرداخت ۸۰۰ تومان اما به ارزش ۸۰۰۰ تومان (۹۰% تخفیف)\r\n۵۰ تیر اول در پینت بال باشگاه نیروگاه طرشت تنها با پرداخت ۶۳۰۰ تومان اما به ارزش ۷۰۰۰  تومان (۱۰% تخفیف)",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496908149",
    "modify_by": null,
    "modify_date": null,
    "hits": "13",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u062a\\u062e\\u0641\\u06cc\\u0641\\u0627\\u0646\",\"url\":\"http:\\/\\/takhfifan.com\\/%D9%BE%DB%8C%D9%86%D8%AA-%D8%A8%D8%A7%D9%84-%D8%A8%D8%A7%D8%B4%DA%AF%D8%A7%D9%87-%D9%86%DB%8C%D8%B1%D9%88%DA%AF%D8%A7%D9%87-%D8%B7%D8%B1%D8%B4%D8%AA-67290\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496908149_user403.jpg",
    "poster": "upload/events/posters/1496908149720_user403.jpg",
    "lng": "51.35178741370851",
    "lat": "35.72384525408973",
    "loc": "استان تهران، تهران، خیابان نیرو، ایران",
    "post_address": " انتهای جلال آل احمد ، خیابان سازمان آب ‌، نیروگاه طرشت",
    "phone1": "02144281815",
    "phone2": "",
    "reservdays": [{
        "daydate": "1492302600",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492389000",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492475400",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492561800",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492648200",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492734600",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492821000",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492907400",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492993800",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493080200",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493166600",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493253000",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493339400",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493425800",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493512200",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493598600",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493685000",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493771400",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493857800",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493944200",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494030600",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494117000",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494203400",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494289800",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494376200",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494462600",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494549000",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494635400",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494721800",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494808200",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494894600",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494981000",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495067400",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495153800",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495240200",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495326600",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495413000",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495499400",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495585800",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495672200",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495758600",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495845000",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495931400",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496017800",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496104200",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496190600",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496277000",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496363400",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496449800",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496536200",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496622600",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496709000",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496795400",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496881800",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "12:00",
            "endTime": "",
            "price": "800",
            "discount": "90",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "90",
    "maxdiscount": "93"
},
{
    "id": "4457",
    "catid": "13",
    "title": "باغ پرندگان تهران ویژه ماه مبارک رمضان",
    "salon": "0",
    "fulltext": "ورودی باغ پرندگان تهران ویژه ماه مبارک رمضان تنها با پرداخت ۲۰۰۰ تومان اما با ارزش ۴۰۰۰ تومان (۵۰% تخفیف)\r\nبرای انتخاب روی گزینه خرید کلیک کنیدپارکینگ: داردمخاطب: تمامی گروه&zwnj;های سنیدسترسی به رستوران و کافی&zwnj;شاپ: داردایستگاه های متروی نزدیک به باغ پرندگان: متروی نوبنیاد و متروی گلبرگ&nbsp;امکان فیلم برداری و عکس برداری با موبایل شخصیدر صورت عکس برداری و فیلم برداری با دوربین حرفه ای باید هزینه جداگانه پرداخت شود.استفاده از کفش اسپرت و راحت برای پیاده روی (باغ با وسعتی حدود ۱۷ هکتار)دارای آلاچیق و نیمکت&zwnj;های چوبی برای استراحتبزرگ&zwnj; ترین مجموعه نگهداری پرندگان در تهرانبزرگترین باغ پرندگان دنیا از نظر وسعت با ۱۷هکتار و ۱۶۸ گونه و ۳۰۰۰ بال پرنده&nbsp;دارای بوفه و رستوران",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496449800",
    "end_date": "1498332540",
    "reserve_start": "1496907334",
    "reserve_end": "1498332540",
    "meta_tags": "تفریحی,سرگرمی,باغ_پرندگان,ویکی,ویکی_ایونت,wiki,wiki_event",
    "meta_desc": "ورودی باغ پرندگان تهران ویژه ماه مبارک رمضان تنها با پرداخت ۲۰۰۰ تومان اما با ارزش ۴۰۰۰ تومان (۵۰% تخفیف)",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496907334",
    "modify_by": null,
    "modify_date": null,
    "hits": "13",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u062a\\u062e\\u0641\\u06cc\\u0641\\u0627\\u0646\",\"url\":\"http:\\/\\/takhfifan.com\\/%D9%BE%DA%A9%DB%8C%D8%AC-%D8%A7%D9%81%D8%B7%D8%A7%D8%B1%DB%8C-%D9%88%D8%B1%D9%88%D8%AF%DB%8C-%D8%A8%D8%A7%D8%BA-%D9%BE%D8%B1%D9%86%D8%AF%DA%AF%D8%A7%D9%86-%D8%AA%D9%87%D8%B1%D8%A7%D9%86\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496907334_user403.jpg",
    "poster": "upload/events/posters/1496907334943_user403.jpg",
    "lng": "51.52782149999996",
    "lat": "35.7650182",
    "loc": "استان تهران، تهران، منطقه ۴، بلوار بوستان، ایران",
    "post_address": "اتوبان شهيد بابايی شرق، بعد از خروجی هنگام / الغدیر،خروجی باقری جنوب، لاين كندرو، خيابان كوهستان، باغ پرندگان ",
    "phone1": "02177075210",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496449800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496536200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496622600",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496709000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496795400",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496881800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498264200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "19:00",
            "price": "20000",
            "discount": "50",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "50",
    "maxdiscount": "93"
},
{
    "id": "4456",
    "catid": "13",
    "title": "کانتراسترایک در باغ نگارستان",
    "salon": "0",
    "fulltext": "یک سانس ۴۵ دقیقه بازی کانتراسترایک(۶ راند) در باغ نگارستان، تنها با پرداخت ۱۲۵۰۰ تومان اما به ارزش ۲۵۰۰۰ تومان (۵۰% تخفیف)&nbsp;\r\nیک سانس ۱ساعت و ۱۵ دقیقه بازی کانتراسترایک(۱۲ راند) در باغ نگارستان، تنها با پرداخت ۱۷۵۰۰ تومان اما به ارزش ۳۵۰۰۰ تومان (۵۰% تخفیف)\r\nمدت هر سانس ۱ ساعت و ۱۵ دقیقه ای: ۱۵ دقیقه آموزش + ۱۲ راند بازی ۱ ساعتهمدت هر سانس ۴۵ دقیقه&zwnj;ای:۱۵ دقیقه آموزش +۶ راند بازی ۳۰ دقیقه&zwnj;ایامکان بازی همزمان خانم&zwnj;ها و آقایان و به صورت خانوادگیبرای حضور در بازی حداقل افراد ۶ نفر و حداکثر ۱۰ نفر می باشد، در غیر اینصورت امکان بازی وجود ندارد.۱۵ دقیقه آموزش قبل از شروع بازیبدون نیاز به خرید تیر و هزینه&zwnj;های دیگربدون نیاز به ماسک و لباس مخصوص",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1492302600",
    "end_date": "1497727740",
    "reserve_start": "1496906631",
    "reserve_end": "1497727740",
    "meta_tags": "ویکی,ویکی_ایونت,تخفیف,تخفیفان,باغ_نگارستان,wiki,wiki_event",
    "meta_desc": "یک سانس ۴۵ دقیقه بازی کانتراسترایک(۶ راند) در باغ نگارستان، تنها با پرداخت ۱۲۵۰۰ تومان اما به ارزش ۲۵۰۰۰ تومان (۵۰% تخفیف) \r\n\r\nیک سانس ۱ساعت و ۱۵ دقیقه بازی کانتراسترایک(۱۲ راند) در باغ نگارستان، تنها با پرداخت ۱۷۵۰۰ تومان اما به ارزش ۳۵۰۰۰ تومان (۵۰% تخفیف)",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496906631",
    "modify_by": null,
    "modify_date": null,
    "hits": "9",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u062a\\u062e\\u0641\\u06cc\\u0641\\u0627\\u0646\",\"url\":\"http:\\/\\/takhfifan.com\\/%D8%A8%D8%A7%D8%B2%DB%8C-%DA%A9%D8%A7%D9%86%D8%AA%D8%B1%D8%A7%D8%B3%D8%AA%D8%B1%D8%A7%DB%8C%DA%A9-%D8%A8%D8%A7%D8%BA-%D9%86%DA%AF%D8%A7%D8%B1%D8%B3%D8%AA%D8%A7%D9%86-%D8%AA%D9%81%D8%B1%DB%8C%D8%AD%DB%8C-67311\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496906631_user403.jpg",
    "poster": "upload/events/posters/1496906631496_user403.jpg",
    "lng": "51.35525069999994",
    "lat": "35.7391886",
    "loc": "استان تهران، تهران، خیابان کوهسار، ایران",
    "post_address": "فلکه دوم شهران، خیابان کوهسار، ابتدای کن، کوچه دانش، باغ نگارستان، جنب زمین فوتبال",
    "phone1": "09354060211",
    "phone2": "",
    "reservdays": [{
        "daydate": "1492302600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492389000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492475400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492561800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492648200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492734600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492821000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492907400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492993800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493080200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493166600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493253000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493339400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493425800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493512200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493598600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493685000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493771400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493857800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493944200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494030600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494117000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494203400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494289800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494376200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494462600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494549000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494635400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494721800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494808200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494894600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494981000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495067400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495153800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495240200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495326600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495413000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495499400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495585800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495672200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495758600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495845000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495931400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496017800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496104200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496190600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496277000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496363400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496449800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496536200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496622600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496709000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496795400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496881800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "22:00",
            "price": "12500",
            "discount": "50",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "50",
    "maxdiscount": "93"
},
{
    "id": "4455",
    "catid": "13",
    "title": "باغ وحش پارک ارم",
    "salon": "0",
    "fulltext": "بلیط باغ وحش پارک ارم تنها با پرداخت ۵۶۰۰ تومان اما با ارزش ۷۰۰۰ تومان (۲۰% تخفیف)\r\nهمه روزه بجز پنجشنبه و جمعه ها\r\nبزرگترین باغ وحش پایتخت با بیش از ۱۱۰ گونه جانورییک روز هیجان انگیز را برای تماشای گونه های مختلف جانوری با خانواده به باغ وحش پارک ارم بروید.به ذهن کنجکاو کودک خود درباره زندگی حیوانات پاسخ دهید.",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1493598600",
    "end_date": "1497986940",
    "reserve_start": "1496889240",
    "reserve_end": "1497970740",
    "meta_tags": "ویکی,ویکی_ایونت,تفریح,سرگرمی,تفریحی,باغ_وحش_ارم,تخفیف,تخفیفان,wiki,wiki_event",
    "meta_desc": "بلیط باغ وحش پارک ارم تنها با پرداخت ۵۶۰۰ تومان اما با ارزش ۷۰۰۰ تومان (۲۰% تخفیف)",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496905466",
    "modify_by": null,
    "modify_date": "1496905528",
    "hits": "10",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u062a\\u062e\\u0641\\u06cc\\u0641\\u0627\\u0646\",\"url\":\"http:\\/\\/takhfifan.com\\/68437-%D9%88%D8%B1%D9%88%D8%AF%DB%8C-%D8%A8%D8%A7%D8%BA-%D9%88%D8%AD%D8%B4-%D9%BE%D8%A7%D8%B1%DA%A9-%D8%A7%D8%B1%D9%85-%D9%85%D8%AC%D9%85%D9%88%D8%B9%D9%87-%D9%88%D8%B1%D8%B2%D8%B4%DB%8C\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496905528_user403.jpg",
    "poster": "upload/events/posters/1496905528681_user403.jpg",
    "lng": "51.2936191",
    "lat": "35.7185198",
    "loc": "استان تهران، تهران، ورودی پارک ارم، ایران",
    "post_address": "اتوبان شهید باکری جنوب ، باغ وحش پارک ارم",
    "phone1": "02144113081",
    "phone2": "",
    "reservdays": [{
        "daydate": "1493598600",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493685000",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493771400",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493857800",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493944200",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494030600",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494117000",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494203400",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494289800",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494376200",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494462600",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494549000",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494635400",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494721800",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494808200",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494894600",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494981000",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495067400",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495153800",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495240200",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495326600",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495413000",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495499400",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495585800",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495672200",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495758600",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495845000",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495931400",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496017800",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496104200",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496190600",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496277000",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496363400",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496449800",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496536200",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496622600",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496709000",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496795400",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496881800",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "11:30",
            "endTime": "19:30",
            "price": "5600",
            "discount": "20",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "20",
    "maxdiscount": "93"
},
{
    "id": "4454",
    "catid": "13",
    "title": "یک جلسه تیراندازی پردیسان",
    "salon": "0",
    "fulltext": "&nbsp;یک جلسه تفریحی تیراندازی با &nbsp;تفنگ در مجموعه تخصصی تیراندازی پردیسان تنها با پرداخت ۱۵۰۰۰ تومان اما با ارزش ۳۰۰۰۰ تومان (۵۰% تخفیف)\r\n&nbsp;یک جلسه تفریحی تیراندازی با کمان در مجموعه تخصصی تیراندازی پردیسان تنها با پرداخت ۱۵۰۰۰ تومان اما با ارزش ۳۰۰۰۰ تومان (۵۰% تخفیف)\r\nمخاطب: بانوان و آقایانمدت زمان: یک جلسهتفریحی تفنگ:&nbsp;\r\nتفنگ ۲۰ تیر با زمان نامحدود + ۳۰ دقیقه استفاده از سالن دارت + استفاده رایگان از فوتبال دستیتفریحی کمان:\r\nکمان ۱۵ تیر + ۳۰ دقیقه استفاده از سالن دارت + استفاده رایگان از فوتبال دستی&nbsp;\r\nامکانات مجموعه: سالن تیراندازی تفنگ و تپانچه (الکترونیک) ، سالن دارت ، &nbsp;سایت کمان ، پیست ماشین های بنزینی ، TRX ، پیلاتس ، کافی شاپ ، پارکینگ رایگان ، فوتبال دستی ، پینگ پونگپایگاه استعدادیابی و قهرمانی شمال غرب تهرانبزرگترین و حرفه&zwnj;ای&zwnj;ترین سالن تیراندازی حال حاضر کشورمحبوب ترین و پر طرفدارترین ورزش در بهترین و مجهز ترین سالن تیراندازیتیراندازی تفریحی با تفنگ و کمان نشاط آورترین ورزش برای روزهای پاییزی۲۰ خط حرفه&zwnj;ای تیراندازی۵ خط تیراندازی تفریحی",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496190600",
    "end_date": "1498937340",
    "reserve_start": "1496904786",
    "reserve_end": "1498937340",
    "meta_tags": "ویکی,ویکی_ایونت,تفریحی,تیر_اندازی,wiki,wiki_event",
    "meta_desc": " یک جلسه تفریحی تیراندازی با  تفنگ در مجموعه تخصصی تیراندازی پردیسان تنها با پرداخت ۱۵۰۰۰ تومان اما با ارزش ۳۰۰۰۰ تومان (۵۰% تخفیف)\r\n\r\n یک جلسه تفریحی تیراندازی با کمان در مجموعه تخصصی تیراندازی پردیسان تنها با پرداخت ۱۵۰۰۰ تومان اما با ارزش ۳۰۰۰۰ تومان (۵۰% تخفیف)",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496904786",
    "modify_by": null,
    "modify_date": null,
    "hits": "8",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u062a\\u062e\\u0641\\u06cc\\u0641\\u0627\\u0646\",\"url\":\"http:\\/\\/takhfifan.com\\/%D8%AA%D9%81%D9%86%DA%AF-%DA%A9%D9%85%D8%A7%D9%86-%D9%85%D8%AC%D9%85%D9%88%D8%B9%D9%87-%D8%AA%D8%AE%D8%B5%D8%B5%DB%8C-%D8%AA%DB%8C%D8%B1%D8%A7%D9%86%D8%AF%D8%A7%D8%B2%DB%8C-%D9%BE%D8%B1%D8%AF%DB%8C%D8%B3%D8%A7%D9%86\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "مجموعه تیراندازی پردیسان",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496904786_user403.jpg",
    "poster": "upload/events/posters/1496904786256_user403.jpg",
    "lng": "51.366228099999944",
    "lat": "35.7367959",
    "loc": "Tehran Province, Tehran, Pas-va-Farhangiyan, ایران",
    "post_address": "اتوبان شیخ فضل الله نوری جنوب، بعد از پل حکیم، خروجی فرهنگیان، فاز۲",
    "phone1": "02188252902",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496190600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496277000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496363400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496449800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496536200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496622600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496709000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496795400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496881800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498264200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498350600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498437000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498523400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498609800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498696200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498782600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498869000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "20",
    "maxdiscount": "93"
},
{
    "id": "4453",
    "catid": "13",
    "title": "فوتبال حبابی-اکسیر",
    "salon": "0",
    "fulltext": "بازی فوتبال حبابی در باشگاه اکسیر تنها با پرداخت ۹۹۰۰ تومان اما با ارزش ۳۰۰۰۰ تومان (۶۷% تخفیف)\r\n&nbsp;\r\nروزهای سرویس&zwnj;دهی: ۵ شنبه ه\r\nامخاطب: بانوان و آقایان\r\nمدت زمان: مدت هر سانس ۳۰ دقیقه است .\r\nوسایل مورد نیاز:لباس ورزشی مناسب زمین فوتسال و کفش مناسبحداقل تعداد: حداقل تعداد نفرات برای تشکیل تیم ، ۶ نفر می باشد. (لطفا برای ۶ نفر از دوستان خود خرید کنید.)\r\nورزش کاملا تفریحی با مهارتهای فردی و نمایشی با جذابیت بالامناسب جوانان پر هیجان و پر انرژیفوتبال حبابی نیاز به هیچ مهارتی ندارد و هر کسی میتواند این بازی مهیج را بازی کند\r\n&nbsp;",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1494289800",
    "end_date": "1497986940",
    "reserve_start": "1496887860",
    "reserve_end": "1497970740",
    "meta_tags": "ویکی,ویکی_ایونت,تفریحی,فوتبال,فوتبال_حبابی,wiki,wiki_event",
    "meta_desc": "بازی فوتبال حبابی در باشگاه اکسیر تنها با پرداخت ۹۹۰۰ تومان اما با ارزش ۳۰۰۰۰ تومان (۶۷% تخفیف)",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496904062",
    "modify_by": null,
    "modify_date": "1496904204",
    "hits": "12",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u062a\\u062e\\u0641\\u06cc\\u0641\\u0627\\u0646\",\"url\":\"http:\\/\\/takhfifan.com\\/%D9%81%D9%88%D8%AA%D8%A8%D8%A7%D9%84-%D8%AD%D8%A8%D8%A7%D8%A8%DB%8C-%D8%A8%D8%A7%D8%B4%DA%AF%D8%A7%D9%87-%D8%A7%DA%A9%D8%B3%DB%8C%D8%B1\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "سالن ورزشی اکسیر",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496904204_user403.jpg",
    "poster": "upload/events/posters/1496904204671_user403.jpg",
    "lng": "51.50568720000001",
    "lat": "35.8024695",
    "loc": "استان تهران، تهران، بلوار کنگان، ایران",
    "post_address": "انتهای اقدسیه، ابتدای بلوار ارتش، خیابان نخل، شهرک نفت، بلوار کنگان، اننهای کوچه کنگان یکم",
    "phone1": "09213997316",
    "phone2": "",
    "reservdays": [{
        "daydate": "1494289800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494376200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494462600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494549000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494635400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494721800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494808200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494894600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494981000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495067400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495153800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495240200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495326600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495413000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495499400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495585800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495672200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495758600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495845000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495931400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496017800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496104200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496190600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496277000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496363400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496449800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496536200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496622600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496709000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496795400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496881800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "22:00",
            "price": "9900",
            "discount": "67",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "20",
    "maxdiscount": "93"
},
{
    "id": "4452",
    "catid": "13",
    "title": "سیرک بین المللی راشن",
    "salon": "0",
    "fulltext": "بلیت سیرک بین المللی راشن ویژه ماه مبارک رمضان&nbsp;تنها با پرداخت ۱۵۰۰۰ تومان اما با ارزش ۳۰۰۰۰ تومان (۵۰% تخفیف)\r\n&nbsp;نمایشی ویژه به همراه تلفیق نورو نمایش با هنرنمایی هنرمندانی از اروپااجرای برنامه ویژه آکروبات توسط هنرمندان لی لی پوتبرنامه ویژه Fire Show سرخپوستی توسط عقاب سیاهاجرای ویژه برنامه مرد عنکبوتی توسط اسپایدرمن سیرکرنجر مرگ توسط هنرمندان روسیه و یوناناجرای ویژه برنامه ترامپولین توسط گروه سه نفره ریکو لحظات شاد و پر از هیجان در پرش میان زمین هوابرنامه رویای پرواز در ارتفاع ۱۲ متری از زمینبرنامه ویژه ژانگولر دونفره که لحظاتی شاد و مفرح را برای شما به ارمغان میاورد.برنامه ویژه &nbsp;سیرک راشن&nbsp;بار پرش روی تخته ۱۰ سانتی برای اولین باردر ایران.برنامه های ویژه شاد کمدی توسط دلقکها فیدل چیچو و جینوهنرمندانی از کشورهای ایران، روسیه، یونان، ارمنستان ،اکراین، ترکیه، بوسنی...سیرک راشن هیچ نمایندگی و شعبه ای ندارد",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496017800",
    "end_date": "1498764540",
    "reserve_start": "1496887080",
    "reserve_end": "1498748340",
    "meta_tags": "ویکی,ویکی_ایونت,تفریحی,سیرک,بوستان_ولایت,wiki,wiki_event",
    "meta_desc": "بلیت سیرک بین المللی راشن ویژه ماه مبارک رمضان تنها با پرداخت ۱۵۰۰۰ تومان اما با ارزش ۳۰۰۰۰ تومان (۵۰% تخفیف)\r\n\r\n ",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496903288",
    "modify_by": null,
    "modify_date": "1496904826",
    "hits": "8",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u062a\\u062e\\u0641\\u06cc\\u0641\\u0627\\u0646\",\"url\":\"http:\\/\\/takhfifan.com\\/%D8%B3%DB%8C%D8%B1%DA%A9-%D8%B1%D8%A7%D8%B4%D9%86-%D9%88%DB%8C%DA%98%D9%87-%D9%85%D8%A7%D9%87-%D8%B1%D9%85%D8%B6%D8%A7%D9%86\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "درب جنوبی بوستان ولايت",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496904826_user403.jpg",
    "poster": "upload/events/posters/1496904826135_user403.jpg",
    "lng": "51.381588100000045",
    "lat": "35.6464977",
    "loc": "استان تهران، تهران، جوادیه، بزرگراه نواب، ایران",
    "post_address": "نواب، ابتدای تندگويان، ورودی خانی آباد نو، لاين كندرو، ",
    "phone1": " 09331071212",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496017800",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496104200",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496190600",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496277000",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496363400",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496449800",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496536200",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496622600",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496709000",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496795400",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496881800",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498264200",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498350600",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498437000",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498523400",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498609800",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498696200",
        "cycles": [{
            "startTime": "21:30",
            "endTime": "23:30",
            "price": "15000",
            "discount": "50",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "20",
    "maxdiscount": "93"
},
{
    "id": "4451",
    "catid": "13",
    "title": "تله سیژ توچال",
    "salon": "0",
    "fulltext": "استفاده از تله سیژ در مجموعه توچال تنها با پرداخت ۶۸۰۰ تومان اما به ارزش ۱۰۰۰۰ تومان (۳۲% تخفیف)\r\nارتفاعات زیبای قله توچال و بام تهران را از زاویه دیگر مشاهده کنیدمنظره ای متفاوت و زیبا از شهر تهران از تله سیژ توچالپیشنهادی استثنایی برای علاقمندان به طبیعت گردی و ورزش پیاده روی\r\nویژه بانوان و آقایانطول تله سیژ: حدود یک کلیومتر\r\nکارت خوانپارکینگ مناسبدارای رستوران های مختلف همراه با سلایق مختلف",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1490142600",
    "end_date": "1508704140",
    "reserve_start": "1496902868",
    "reserve_end": "1508704140",
    "meta_tags": "ویکی,ویکی_ایونت,تله_سیژ,تخفیفان,wiki,wiki_event",
    "meta_desc": "استفاده از تله سیژ در مجموعه توچال تنها با پرداخت ۶۸۰۰ تومان اما به ارزش ۱۰۰۰۰ تومان (۳۲% تخفیف)",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496902868",
    "modify_by": null,
    "modify_date": null,
    "hits": "8",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u062a\\u062e\\u0641\\u06cc\\u0641\\u0627\\u0646\",\"url\":\"http:\\/\\/takhfifan.com\\/66607-%D8%AA%D9%84%D9%87-%D8%B3%DB%8C%DA%98-%D8%AA%D9%88%DA%86%D8%A7%D9%84\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": " شرکت تله کابین توچال",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496902868_user403.jpg",
    "poster": "upload/events/posters/1496902868909_user403.jpg",
    "lng": "51.40692089999993",
    "lat": "35.8186986",
    "loc": "استان تهران، تهران، مسیر تله کابین توچال، ایران",
    "post_address": "بزرگراه شهید چمران، خیابان یمن، انتهای خیابان ولنجک",
    "phone1": "02124875000",
    "phone2": "",
    "reservdays": [{
        "daydate": "1490142600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1490229000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1490315400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1490401800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1490488200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1490574600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1490661000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1490747400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1490833800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1490920200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1491006600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1491093000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1491179400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1491265800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1491352200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1491438600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1491525000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1491611400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1491697800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1491784200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1491870600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1491957000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492043400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492129800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492216200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492302600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492389000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492475400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492561800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492648200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492734600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492821000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492907400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1492993800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493080200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493166600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493253000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493339400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493425800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493512200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493598600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493685000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493771400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493857800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1493944200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494030600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494117000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494203400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494289800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494376200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494462600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494549000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494635400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494721800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494808200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494894600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1494981000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495067400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495153800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495240200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495326600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495413000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495499400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495585800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495672200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495758600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495845000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1495931400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496017800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496104200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496190600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496277000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496363400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496449800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496536200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496622600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496709000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496795400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496881800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498264200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498350600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498437000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498523400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498609800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498696200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498782600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498869000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498955400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499041800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499128200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499214600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499301000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499387400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499473800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499560200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499646600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499733000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499819400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499905800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499992200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500078600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500165000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500251400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500337800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500424200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500510600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500597000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500683400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500769800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500856200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500942600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501029000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501115400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501201800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501288200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501374600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501461000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501547400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501633800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501720200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501806600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501893000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501979400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502065800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502152200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502238600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502325000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502411400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502497800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502584200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502670600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502757000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502843400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1502929800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503016200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503102600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503189000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503275400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503361800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503448200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503534600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503621000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503707400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503793800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503880200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1503966600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504053000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504139400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504225800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504312200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504398600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504485000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504571400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504657800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504744200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504830600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1504917000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505003400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505089800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505176200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505262600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505349000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505435400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505521800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505608200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505694600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505781000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505867400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1505953800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1506040200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1506126600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1506213000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1506299400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1506385800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1506472200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1506558600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1506645000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1506731400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1506817800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1506904200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1506990600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1507077000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1507163400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1507249800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1507336200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1507422600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1507509000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1507595400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1507681800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1507768200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1507854600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1507941000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1508027400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1508113800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1508200200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1508286600",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1508373000",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1508459400",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1508545800",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1508632200",
        "cycles": [{
            "startTime": "08:00",
            "endTime": "02:00",
            "price": "6800",
            "discount": "32",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "20",
    "maxdiscount": "93"
},
{
    "id": "4450",
    "catid": "13",
    "title": "گیم نت",
    "salon": "0",
    "fulltext": "یک ساعت بازی با دستگاه PS 4 برای دو نفر در گیم نت پرو تنها با پرداخت ۴۰۰۰ تومان اما به ارزش ۸۰۰۰ تومان(۵۰% تخفیف)\r\nجای پارک آسان: داردکارت&zwnj;خوان: داردمخاطب: آقایانمدت زمان: یک ساعتنوع دستگاه: PS 4دسترسی به وسایل نقلیه: داردتفریحی مهیج و پر هیجانتفریحی سرشار از انرژی و نشاط با دوستان در محیطی &nbsp;صمیمییک ساعت بازی با گیم های مهیج با دستگاه PS 4",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496795400",
    "end_date": "1499542140",
    "reserve_start": "1496886060",
    "reserve_end": "1499525940",
    "meta_tags": "ویکی,ویکی_ایونت,تفریحی,گیم_نت,تخفیفان,wiki,wiki-event",
    "meta_desc": "جای پارک آسان: دارد\r\nکارت‌خوان: دارد\r\nمخاطب: آقایان\r\nمدت زمان: یک ساعت\r\nنوع دستگاه: PS 4\r\nدسترسی به وسایل نقلیه: دارد\r\nتفریحی مهیج و پر هیجان\r\nتفریحی سرشار از انرژی و نشاط با دوستان در محیطی  صمیمی\r\nیک ساعت بازی با گیم های مهیج با دستگاه PS 4",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496902293",
    "modify_by": null,
    "modify_date": "1496902327",
    "hits": "10",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u062a\\u062e\\u0641\\u06cc\\u0641\\u0627\\u0646\",\"url\":\"http:\\/\\/takhfifan.com\\/cities\\/%D8%AA%D9%87%D8%B1%D8%A7%D9%86\\/%DA%AF%DB%8C%D9%85-%D9%86%D8%AA-%D9%BE%D8%B1%D9%88-%D8%A8%D8%A7%D8%B2%DB%8C-%D8%AA%D9%81%D8%B1%DB%8C%D8%AD%DB%8C-%D8%AF%D8%B3%D8%AA%DA%AF%D8%A7%D9%87-ps4\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496902327_user403.jpg",
    "poster": "upload/events/posters/1496902327557_user403.jpg",
    "lng": "51.33766395578914",
    "lat": "35.722599261462705",
    "loc": "استان تهران، تهران، بلوار شهدای صادقیه، ایران",
    "post_address": "صادقیه، ستارخان، ابتدای بلوار شهدای شمالی، پلاک ۱۵، طبقه سوم",
    "phone1": "02144258908",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496795400",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496881800",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498264200",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498350600",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498437000",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498523400",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498609800",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498696200",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498782600",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498869000",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498955400",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499041800",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499128200",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499214600",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499301000",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499387400",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499473800",
        "cycles": [{
            "startTime": "10:30",
            "endTime": "22:00",
            "price": "4000",
            "discount": "50",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "20",
    "maxdiscount": "93"
},
{
    "id": "4449",
    "catid": "13",
    "title": "پینت بال - دانیال",
    "salon": "0",
    "fulltext": "ورودی&nbsp;زمین پینت بال مجموعه ورزشی دانیال ویژه تمام روزهای هفته&nbsp;تنها با پرداخت ۸۸۰۰ تومان اما با ارزش ۲۲۰۰۰ تومان (۶۰% تخفیف)\r\n&nbsp;\r\nرختکن: داردبوفه: داردپارکینگ: داردکارت&zwnj;خوان: داردمخاطب: بانوان و آقایان (قابل استفاده به صورت خانوادگی و گروهی)مدت زمان: ۱ ساعت و نیمتجهیزات: ارائه تجهیزات کامل (لباس ، جلیقه ، مقنعه برای بانوان و ...)هزینه&zwnj;های جانبی: هزینه گلوله بصورت جداگانه و در محل دریافت می شودپینت بال دانیال با فضای بسیار بزرگ و در محیطی باز، آماده میزبانی از بازیکن های مبتدی تا حرفه ای می باشدزمینی به مساحت حدوداً ۴۸۰۰ متر مربعفیلمبرداری و عکسبرداری از کل بازی در صورت توافقتمامی گلوله ها مصرفی در باشگاه کره ای می باشنداولین و حرفه ای ترین زمین پینت بال در ایران با موانع طبیعی و جنگیدارای ماشین لباسشویی و خشک کن صنعتیدارای کمپروسور باد\r\nساعت با هماهنگی در اختیار علاقه مندان قرار میگیرد.",
    "videos": "null",
    "create_by": "403",
    "organ": "29",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496881800",
    "end_date": "1499628540",
    "reserve_start": "1496868840",
    "reserve_end": "1499596140",
    "meta_tags": "ویکی,ویکی_ایونت,تقریح,پینت_بال,تخفیفان,wiki,wiki_event",
    "meta_desc": "ختکن: دارد\r\nبوفه: دارد\r\nپارکینگ: دارد\r\nکارت‌خوان: دارد\r\nمخاطب: بانوان و آقایان (قابل استفاده به صورت خانوادگی و گروهی)\r\nمدت زمان: ۱ ساعت و نیم\r\nتجهیزات: ارائه تجهیزات کامل (لباس ، جلیقه ، مقنعه برای بانوان و ...)\r\nهزینه‌های جانبی: هزینه گلوله بصورت جداگانه و در محل دریافت می شود\r\nپینت بال دانیال با فضای بسیار بزرگ و در محیطی باز، آماده میزبانی از بازیکن های مبتدی تا حرفه ای می باشد\r\nزمینی به مساحت حدوداً ۴۸۰۰ متر مربع\r\nفیلمبرداری و عکسبرداری از کل بازی در صورت توافق\r\nتمامی گلوله ها مصرفی در باشگاه کره ای می باشند\r\nاولین و حرفه ای ترین زمین پینت بال در ایران با موانع طبیعی و جنگی\r\nدارای ماشین لباسشویی و خشک کن صنعتی\r\nدارای کمپروسور باد",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496901244",
    "modify_by": null,
    "modify_date": "1496903509",
    "hits": "9",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\\u062a\\u062e\\u0641\\u06cc\\u0641\\u0627\\u0646\",\"url\":\"http:\\/\\/takhfifan.com\\/cities\\/%D8%AA%D9%87%D8%B1%D8%A7%D9%86\\/%D9%88%D8%B1%D9%88%D8%AF%DB%8C-%D9%BE%DB%8C%D9%86%D8%AA-%D8%A8%D8%A7%D9%84-%D8%AF%D8%A7%D9%86%DB%8C%D8%A7%D9%84\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "مجموعه ورزشی تفریحی دانیال",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496903509_user403.jpg",
    "poster": "upload/events/posters/1496903509412_user403.jpg",
    "lng": "51.4834879",
    "lat": "35.80811989999999",
    "loc": "استان تهران، تهران، خیابان سباری، ایران",
    "post_address": "قدسیه، (آجودانیه قدیم)، انتهای کوچه سیزدهم شرقی، مجموعه ورزشی میثاق، ",
    "phone1": "02122810149",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496881800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498005000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498091400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498177800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498264200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498350600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498437000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498523400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498609800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498696200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498782600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498869000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1498955400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499041800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499128200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499214600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499301000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499387400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499473800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1499560200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "8800",
            "discount": "60",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "20",
    "maxdiscount": "93"
},
{
    "id": "4448",
    "catid": "5,9",
    "title": "برگزاری کارگاه های آموزش فیلم سازی در جشنواره شهر",
    "salon": "0",
    "fulltext": "\r\nششمین جشنواره بین&zwnj;المللی فیلم شهر در بخش محله، ورک&zwnj;شاپ، تور آموزش فیلمسازی شهری و مسترکلاس انتقال تجربیات فیلمسازی برگزار می&zwnj;کند.\r\nبخش محله این دوره از جشنواره، علاوه بر داوری فیلم&zwnj;های کوتاه داستانی و مستند کمتر از دو دقیقه که با دوربین&zwnj;های حرفه&zwnj;ای و یا تلفن&zwnj;های همراه ساخته شده&zwnj;اند، کارگاه&zwnj;، تور آموزش فیلمسازی شهری و مسترکلاس انتقال تجربیات فیلمسازی برگزار می&zwnj;کند.\r\nاین تورها و کارگاه&zwnj;های تخصصی برای افرادی است که با موضوع فیلمسازی آشنایی داشته و قصد دارند از طریق شرکت در کارگاه&zwnj;های اساتید حرفه&zwnj;ای سینمای ایران، سطح آموزش&zwnj;های خود را بالاتر ببرند.\r\nکارگاه&zwnj;ها و تورهای تخصصی ششمین جشنواره بین&zwnj;المللی فیلم شهر در حوزه&zwnj;های مختلف مانند کارگردانی، فیلمنامه&zwnj;نویسی، کارگردانی انیمیشن و... برگزار می&zwnj;شود و نحوه ثبت&zwnj;نام آنلاین آن از طریق وب&zwnj;سایت جشنواره به آدرس&nbsp;www.urbanfilmfest.org&nbsp;&nbsp;به زودی اعلام خواهد شد.\r\nبر اساس این گزارش، موسسه تصویر شهر در سال گذشته سه تور فیلمسازی شهری با حضور 90 هنرجو برگزار کرد که ساخت بیش از 40 فیلم کوتاه حاصل برگزاری این تورها بود.\r\n&nbsp;\r\nششمین جشنواره بین&zwnj;المللی فیلم شهر نیمه اول مردادماه به دبیری سیدعلی احمدی در تهران برگزار می&zwnj;شود.\r\n",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1500769800",
    "end_date": "1502047740",
    "reserve_start": "1496847488",
    "reserve_end": "1502047740",
    "meta_tags": "کارگاه,سینما,برگزاری-کارگاه-های-آموزش-فیلم-سازی-در-جشنواره-فیلم-شهر,ویکی,ویکی-ایونت,wiki,wikievent,wiki-event",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496847488",
    "modify_by": null,
    "modify_date": null,
    "hits": "7",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "0",
    "place_name": "",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496847488_user445.jpg",
    "poster": "upload/events/posters/1496847488972_user445.jpg",
    "lng": "51.32167196273804",
    "lat": "35.75515196817652",
    "loc": "استان تهران، تهران، حيدری مقدم، ایران",
    "post_address": "",
    "phone1": "",
    "phone2": "",
    "reservdays": [{
        "daydate": "1500769800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500856200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1500942600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501029000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501115400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501201800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501288200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501374600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501461000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501547400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501633800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501720200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501806600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501893000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1501979400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "93"
},
{
    "id": "4447",
    "catid": "3",
    "title": "مسابقه عکاسی با گوشی همراه روزنه نیکی",
    "salon": "0",
    "fulltext": "فرهنگسرای اشراق همزمان با ایام ماه مبارک رمضان مسابقه عکاسی با گوشی همراه با عنوان \" روزنه نیکی \" را برگزار می کند.\r\nبه گزارش روابط عمومی فرهنگسرای اشراق؛ مسابقه عکاسی &laquo;روزنه نیکی&raquo; با هدف گسترش فرهنگ حلم و آرامش و مهربانی و ایجاد حس همدردی و نوع دوستی با موضوع مهربانی برگزار می&zwnj;شود.\r\n&nbsp;علاقه&zwnj;مندان می&zwnj;توانند&nbsp; مهربانی به تصویر کشیده شده توسط گوشی همراه خود را به تعداد ۵ فریم عکس تا ۳۰ خرداد به آدرس ایمیل preshragh@gmail.com ارسال کنند.\r\n&nbsp;\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496795400",
    "end_date": "1497986940",
    "reserve_start": "1496846733",
    "reserve_end": "1497986940",
    "meta_tags": "فرهنگی,مسابقه-عکاسی-با-گوشی-همراه-روزنه-نیکی,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496846733",
    "modify_by": null,
    "modify_date": null,
    "hits": "8",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "فرهنگسرای اشراق",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496846733_user445.jpg",
    "poster": "upload/events/posters/1496846733543_user445.jpg",
    "lng": "51.54861903190613",
    "lat": "35.73031664128694",
    "loc": "استان تهران، تهران، جشنواره، ایران",
    "post_address": "تهرانپارس ، فلکه دوم تهرانپارس ، انتهای خیابان جشنواره",
    "phone1": "09394663164",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496795400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496881800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497573000",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497659400",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497745800",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497832200",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497918600",
        "cycles": [{
            "startTime": "",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "93"
},
{
    "id": "4446",
    "catid": "3",
    "title": "نمایشگاه سرمه دوزی کبری فاضلی",
    "salon": "0",
    "fulltext": "نمایشگاه \"سرمه دوزی\" بانوی هنرمند &laquo;کبری فاضلی&raquo; همزمان با روز جهانی صنایع دستی به مدت یک هفته در نگارخانه پردیسان فرهنگسرای فردوس برپا می شود.\r\nاین نمایشگاه به مناسبت روز جهانی صنایع دستی و با هدف آشنایی هر چه بیشتر شهروندان با هنرهای صناعی و دستی ایران و همچنین فرهنگ سازی و سوق دوستداران هنر به بازدید از آثار نمایشگاهی هنرمندان در جهت حمایت و تشویق این قشر، شنبه 20 خردادماه ساعت 16 گشایش می&zwnj;یابد.\r\n&nbsp;\r\nگفتنی است؛ &laquo;کبری فاضلی&raquo; صاحب آثار این نمایشگاه، از 26 سال پیش تاکنون &nbsp;مشغول کار سرمه و سوزن دوزی است. حضور در نمایشگاه های ششم و هشتم قرآن به صورت گروهی، نمایش آثار در کشور یونان در هفته فرهنگی ایران و یونان به صورت انفرادی، حضور در برنامه \"همیشه خونه\"در شبکه آموزش و نمایش تعداد زیادی از آثار وی در این برنامه تلویزیونی در رزومه کاری کبری فاضلی به چشم می خورد.\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497141000",
    "end_date": "1497554940",
    "reserve_start": "1496846248",
    "reserve_end": "1497554940",
    "meta_tags": "فرهنگی,نمایشگاه-سرمه-دوزی-کبری-فاضلی,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496846248",
    "modify_by": null,
    "modify_date": null,
    "hits": "7",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "فرهنگسرای فردوس",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496846248_user445.jpg",
    "poster": "upload/events/posters/1496846248957_user445.jpg",
    "lng": "51.32242834568024",
    "lat": "35.72265200308628",
    "loc": "استان تهران، تهران، فردوس، بلوار فردوس شرقی، ایران",
    "post_address": "فلکه دوم صادقیه، بلوار فردوس، بعد از چهارراه شهید سلیمی جهرمی",
    "phone1": "02144000203",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497313800",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497400200",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497486600",
        "cycles": [{
            "startTime": "09:00",
            "endTime": "17:00",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "93"
},
{
    "id": "4445",
    "catid": "8",
    "title": "معرفی و بررسی مجموعه آن، مان، نباران",
    "salon": "0",
    "fulltext": "آخرین نشست پاتوق کتاب فرهنگ&zwnj;سرای بندگی ویژه ماه مبارک رمضان در مصلای تهران، به معرفی و بررسی مجموعه هفت جلدی نمایشنامه&zwnj;های &laquo;آن، مان، نباران&raquo; اثر مصطفی رحمان&zwnj;دوست اختصاص دارد.\r\nمجموعه هفت جلدی &laquo;آن، مان، نباران&raquo; هفت نمایشنامه&zwnj; به قلم مصطفی رحماندوست شاعر شناخته شده و چهره مطرح ادبیات کودک و نوجوان کشور است که در آن نمایشنامه&zwnj;ها به جای &laquo;یکی بود یکی نبود&raquo; با &laquo;آن&zwnj;مان نباران&raquo; آغاز می&zwnj;شوند. این نمایشنامه&zwnj;ها کوتاه و آهنگین هستند و با دو یا سه شخصیت اجرا می&zwnj;شوند.\r\nمجموعه &laquo;آن&zwnj;مان نباران&raquo; برای گروه سنی &laquo;الف&raquo; سروده شده و شامل جلد اول (یک بابا و یک مامان)، جلد دوم (یک مسواک و یک دندان)، جلد سوم (یک اخمو و یک خندان)، جلد چهارم (بهار بود و زمستان)، جلد پنجم (قصه گرگ و چوپان)، جلد ششم (قصه باغ و باغبان) و جلد هفتم (قصه ابر و باران) هستند که به تازگی از سوی انتشارات سوره مهر روانه بازار کتاب شده است.\r\nفرهنگ&zwnj;سرای بندگی در قالب ویژه برنامه&zwnj;های ماه مبارک رمضان، بر آستان جانان، از سوم تا هفدهم ماه مبارک رمضان برابر با هشتم تا بیست و دوم خردادماه از ساعت ۱۹ تا ۲۴ خرداد در مصلای امام خمینی(ره) دایر خواهد بود و برنامه معرفی و بررسی کتاب &laquo;آن، مان، نباران&raquo; در روز چهارشنبه هفدهم خردادماه، از ساعت ۱۰:۳۰ تا اذان مغرب برگزار و آخرین نشست پاتوق کتاب یادشده خواهد بود.\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1496017800",
    "end_date": "1497295740",
    "reserve_start": "1496845861",
    "reserve_end": "1497295740",
    "meta_tags": "فرهنگی,معرفی-و-بررسی-مجموعه-آن-مان-نباران,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496845861",
    "modify_by": null,
    "modify_date": null,
    "hits": "7",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "مصلای امام خمینی(ره)",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496845861_user445.jpg",
    "poster": "upload/events/posters/1496845861507_user445.jpg",
    "lng": "51.42578458786011",
    "lat": "35.735576943412575",
    "loc": "استان تهران، تهران، به سمت شبستان، ایران",
    "post_address": "خیابان شهید دکتر بهشتی، روبروی خیابان میرعماد",
    "phone1": "02188531000",
    "phone2": "",
    "reservdays": [{
        "daydate": "1496017800",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "23:55",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496104200",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "23:55",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496190600",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "23:55",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496277000",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "23:55",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496363400",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "23:55",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496449800",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "23:55",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496536200",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "23:55",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496622600",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "23:55",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496709000",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "23:55",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496795400",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "23:55",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496881800",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "23:55",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1496968200",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "23:55",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "23:55",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497141000",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "23:55",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    },
    {
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "19:00",
            "endTime": "23:55",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }
    ],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "93"
},
{
    "id": "4444",
    "catid": "8",
    "title": "رونمایی و نقد کتاب نیروانا در پوست و مغز",
    "salon": "0",
    "fulltext": "کتاب\" نیروانه در پوست و مغز\" راهکارهایی برای مراقبه در مکتب ذن، نوشته اسکات شاو پژو هشگر شرق با ترجمه محمدجواد ادبی پژوهشگر مطالعات ادیان و عرفان شنبه 20خرداد ساعت 18 در خانه موزه شهید بهشتی رونمایی و نقد می شود.\r\nنویسنده در این کتاب سعی دارد نحوه زیستن معنوی در دنیای مدرن را بیان کند. دکتر محمدجواد ادبی پژوهشگر مطالعات ادیان وعرفان، برگزیده همایش جهانی گفتگوی ادیان وعرفان است و تاکنون با ترجمه وی کتاب های حکمت بودا، نیایش، رنگین کمان ایمان و مفاخرنامه در اختیار علاقه مندان قرار گرفته است.&nbsp; محمدجواد ادبی این بار در پژوهشی تطبیقی در باب تمرکز ذهن و روش های تمرکز در ادیان شرقی به خصوص بودیزم با عرفان اسلامی و رویکرد تطبیقی و گذرا با تصوف، ترجمه کتاب (157 مراقبه در مکتب ذن) را روانه بازار می کند . این کتاب با حضور دکتر عبدالرضا مظاهری رییس دانشکده هنر دانشگاه تهران، دکتر محسن سلیمانی استاد وپژوهشگر هنر و دکتر محمدجواد ادبی رونمایی می شود .",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497054600",
    "end_date": "1497122940",
    "reserve_start": "1496845170",
    "reserve_end": "1497122940",
    "meta_tags": "فرهنگی,رونمایی-و-نقد-کتاب-نیروانا-در-پوست-و-مغز,ویکی,ویکی-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496845170",
    "modify_by": null,
    "modify_date": null,
    "hits": "6",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "خانه موزه شهید بهشتی",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496845170_user445.jpg",
    "poster": "upload/events/posters/1496845170728_user445.jpg",
    "lng": "51.437811613082886",
    "lat": "35.76789752750857",
    "loc": "استان تهران، تهران، مهر، ایران",
    "post_address": "خيابان شريعتي، خ ظفر، کوچه صبرمطهری شمالی، کوچه مهر",
    "phone1": "02122872812",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497054600",
        "cycles": [{
            "startTime": "18:00",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "93"
},
{
    "id": "4439",
    "catid": "8",
    "title": "معرفی و نقد کتاب &quot;بوطیقای شیطان&quot;",
    "salon": "0",
    "fulltext": "پنجاهمین جلسه یک کتاب، یک نویسنده به معرفی کتاب &laquo;بوطیقای شیطان&raquo; می&zwnj;پردازد.\r\nکتاب &laquo;بوطیقای شیطان&raquo; تالیف علیرضا لبش در&nbsp;پنجاهمین جلسه یک کتاب، یک نویسنده با حضور فرحناز علیزاده، منتقد،&nbsp;معرفی و نقد و بررسی می&zwnj;شود.\r\n&nbsp;",
    "videos": "null",
    "create_by": "445",
    "organ": "33",
    "publish_up": null,
    "publish_down": null,
    "start_date": "1497227400",
    "end_date": "1497295740",
    "reserve_start": "1496821560",
    "reserve_end": "1497279540",
    "meta_tags": "فرهنگی,معرفی-و-نقد-کتاب-بوطیقای-شیطان,ویکی,یویک-ایونت,wiki,wikievent",
    "meta_desc": "",
    "rating_sum": "0",
    "rating_count": "0",
    "create_date": "1496837761",
    "modify_by": null,
    "modify_date": "1496837943",
    "hits": "6",
    "params": null,
    "advanced_scheduling_mode": "0",
    "exclude_mode": "0",
    "external_links": "{\"link1\":{\"title\":\"\",\"url\":\"\"}}",
    "featured": "0",
    "status": "1",
    "salable": "0",
    "buy_type": "0",
    "suitcase": "0",
    "notification": "0",
    "state": "prv_8",
    "city": "cty_103",
    "map": "1",
    "place_name": "فرهنگسرای بهاران",
    "price": null,
    "discount": null,
    "likes": "0",
    "fav": "0",
    "cover": "upload/events/covers/1496837943_user445.jpg",
    "poster": "upload/events/posters/1496837943872_user445.jpg",
    "lng": "51.355446338653564",
    "lat": "35.64742978531664",
    "loc": "Tehran Province, Tehran, Fard-e-Mohammadi, ایران",
    "post_address": "خیابان سجاد جنوبی، میدان بهاران، فرهنگسرای بهاران",
    "phone1": "02166231118",
    "phone2": "",
    "reservdays": [{
        "daydate": "1497227400",
        "cycles": [{
            "startTime": "16:00",
            "endTime": "",
            "price": "0",
            "discount": "",
            "name": "cycle1"
        }]
    }],
    "minprice": "0",
    "maxprice": "3800000",
    "mindiscount": "",
    "maxdiscount": "93"
}
]*/
        // console.log(this.items);
        this.loadList();

        // this.allTheListInArray();
        // console.log(this.respon);

        this.items = this.loadList().then(() => {
            // this.respon = JSON.parse(JSON.stringify(results));
            // this.respon = Object.assign({}, results);
            // this.respon = Object.create(results);
            // this.respon.push(results);
            // this.respon = results;
            // console.log(results);
            
        })
        
        console.log(this.items);

    }



/*    allTheListInArray() {
        this.loadList().then((results) => {
            // this.respon = JSON.parse(JSON.stringify(results));
            // this.respon = Object.assign({}, results);
            // this.respon = Object.create(results);
            // this.respon.push(results);
            this.respon = results;
            console.log(results);
            return results;
        })
    }*/

    loadList() {

        return new Promise(resolve => {
            this.http.get('../assets/json/wikievent.json')
                // this.http.get('http://www.wikievent.net/index.php/api/Wikievent/events/page/0/rows/10')
                .map(res => res.json())
                .subscribe(results => {
                    this.data = results.events;
                    resolve(this.data);

                    for (var key in this.data) {
                        if (this.data.hasOwnProperty(key)) {
                            var element = this.data[key];
                            // console.log(element);

                        }
                    }
                    element = this.data;
                    console.log(element);
                    console.log(this.data);


                });
        });


    }


    filterItems(searchTerm) {

        return this.items.filter((item) => {
            return (item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        })

    }



}

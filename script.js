/* ═══════════════════════════════════════════════════════
   ANURADHA & SEHANI — Luxury Wedding Website
   script.js — Complete Interactive Experience
═══════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────────────────
   01. TRANSLATIONS (EN / SI / TA)
───────────────────────────────────────────────────── */
const i18n = {
  en: {
    'nav.story':      'Our Story',
    'nav.events':     'Events',
    'nav.gallery':    'Gallery',
    'nav.dresscode':  'Dress Code',
    'nav.rsvp':       'RSVP',
    'nav.wishes':     'Blessings',
    'hero.pre':       'Together with their families',
    'hero.request':   'request the pleasure of your company at their',
    'hero.wedding':   'Wedding Celebration',
    'hero.cta':       'View Events',
    'hero.rsvp':      'RSVP Now',
    'hero.scroll':    'Scroll to Explore',
    'countdown.eye':  'The Big Day is Almost Here',
    'countdown.title':'Counting Down to Forever',
    'countdown.days': 'Days',
    'countdown.hours':'Hours',
    'countdown.minutes':'Minutes',
    'countdown.seconds':'Seconds',
    'couple.eye':     'With the Blessings of Their Families',
    'couple.title':   'Two Families · One Love',
    'couple.groom':   'Anuradha Bimsara',
    'couple.groom_role':'The Groom',
    'couple.son_of':  'Son of',
    'couple.bride':   'Sehani Koshila',
    'couple.bride_role':'The Bride',
    'couple.daughter_of':'Daughter of',
    'couple.together':'Together Since 2019',
    'story.eye':      'A Journey of Love',
    'story.title':    'Our Story',
    'story.desc':     'From a chance meeting to a lifetime promise — this is how our love began.',
    'story.t1.h':     'First Meeting',
    'story.t1.p':     'Fate brought two souls together at the University of Colombo during the Faculty of Science orientation. A simple smile across the lecture hall changed everything forever.',
    'story.t2.h':     'First Date',
    'story.t2.p':     'A rainy evening in Kandy, a warm cup of tea, and hours of laughter. They both knew this was the beginning of something truly beautiful and rare.',
    'story.t3.h':     'Adventures Together',
    'story.t3.p':     'From the misty mountains of Ella to the golden shores of Mirissa, they explored the beauty of Sri Lanka hand in hand, building memories for a lifetime.',
    'story.t4.h':     'The Proposal',
    'story.t4.p':     'Under the stars at Galle Fort, with the ocean breeze and the scent of jasmine in the air, Anuradha asked the question that would begin their forever. She said yes.',
    'story.t5.h':     'The Wedding Day',
    'story.t5.p':     'Now, surrounded by the love of family and friends, Anuradha and Sehani begin their forever on the 14th of September 2025. And you are part of this beautiful chapter.',
    'events.eye':     'Mark Your Calendar',
    'events.title':   'Wedding Events',
    'events.ceremony':'Ceremony',
    'events.luncheon':'Luncheon',
    'events.reception':'Reception',
    'events.e1.name': 'Poruwa Ceremony',
    'events.e1.date': 'Saturday, 14th September 2025',
    'events.e1.time': 'Nekath: 9:27 AM',
    'events.e1.venue':'Grand Ballroom, Shangri-La Colombo',
    'events.e2.name': 'Wedding Luncheon',
    'events.e2.date': 'Saturday, 14th September 2025',
    'events.e2.time': '1:00 PM — 3:30 PM',
    'events.e2.venue':'Kaema Sutra, Shangri-La Colombo',
    'events.e3.name': 'Evening Reception',
    'events.e3.date': 'Saturday, 14th September 2025',
    'events.e3.time': '7:00 PM Onwards',
    'events.e3.venue':'Crystal Ballroom, Shangri-La Colombo',
    'events.dir':     'Get Directions ↗',
    'events.sched':   'Day Schedule',
    'events.s1':      'Auspicious Arrival & Blessing',
    'events.s2':      '⭐ Nekath — Poruwa Ceremony',
    'events.s3':      'Blessings & Family Photographs',
    'events.s4':      'Wedding Luncheon',
    'events.s5':      '✨ Evening Reception & Dinner',
    'events.s6':      'First Dance & Celebrations',
    'events.s7':      'Cake Cutting & Farewell',
    'gallery.eye':    'Moments to Cherish',
    'gallery.title':  'Our Gallery',
    'gallery.note':   '📸 Beautiful memories will be added here after the big day',
    'dresscode.eye':  'Looking Your Best',
    'dresscode.title':'Dress Code',
    'dresscode.ladies':'Ladies',
    'dresscode.ladies_type':'Saree / Evening Gown',
    'dresscode.ladies_desc':'We kindly request our lovely ladies to grace the occasion in traditional sarees or elegant evening gowns.',
    'dresscode.gents':'Gentlemen',
    'dresscode.gents_type':'National Dress / Formal Suit',
    'dresscode.gents_desc':'Gentlemen are requested to wear traditional Sri Lankan national dress or sharp formal attire.',
    'dresscode.formal':'Formal',
    'dresscode.attire':'Attire',
    'dresscode.palette':'Preferred Colour Palette',
    'rsvp.eye':       'We\'d Love to See You',
    'rsvp.title':     'RSVP',
    'rsvp.desc':      'Kindly confirm your attendance by 31st August 2025.',
    'rsvp.name':      'Your Full Name',
    'rsvp.phone':     'WhatsApp Number',
    'rsvp.guests':    'Number of Guests',
    'rsvp.attending': 'Will you be attending?',
    'rsvp.yes':       'Joyfully Accept ✓',
    'rsvp.no':        'Regretfully Decline ✗',
    'rsvp.msg':       'Special Message (Optional)',
    'rsvp.submit':    'Send RSVP via WhatsApp',
    'map.eye':        'Find Your Way',
    'map.title':      'Venue Location',
    'map.open':       'Open in Google Maps ↗',
    'wishes.eye':     'Words from the Heart',
    'wishes.title':   'Leave Your Blessings',
    'wishes.name_lbl':'Your Name',
    'wishes.msg_lbl': 'Your Blessing',
    'wishes.submit':  'Send Blessings',
    'footer.share':   'Share this invitation',
    'footer.copy':    'Copy Link',
    'footer.blessing':'ජය ශ්‍රී ✦ May Love & Happiness Guide Their Journey ✦ அன்பு வாழ்க',
  },

  si: {
    'nav.story':      'අපේ කතාව',
    'nav.events':     'උත්සව',
    'nav.gallery':    'ගැලරිය',
    'nav.dresscode':  'ඇඳුම් සංකේතය',
    'nav.rsvp':       'RSVP',
    'nav.wishes':     'ආශිර්වාද',
    'hero.pre':       'ඔවුන්ගේ පවුල් සමඟ',
    'hero.request':   'ඔවුන්ගේ විවාහ මංගල්‍යයට ඔබේ ගෞරවනීය පැමිණීම ඉල්ලා සිටිමු',
    'hero.wedding':   'විවාහ උත්සවය',
    'hero.cta':       'උත්සව බලන්න',
    'hero.rsvp':      'RSVP',
    'hero.scroll':    'පහළට scroll කරන්න',
    'countdown.eye':  'ශුභ දිනය ළඟ ළඟ ය',
    'countdown.title':'සදහටම ගෙවෙන දින ගණනය',
    'countdown.days': 'දින',
    'countdown.hours':'පැය',
    'countdown.minutes':'මිනිත්තු',
    'countdown.seconds':'තත්පර',
    'couple.eye':     'ඔවුන්ගේ පවුල් ආශිර්වාදය සමඟ',
    'couple.title':   'පවුල් දෙකක් · ආදරය එකක්',
    'couple.groom':   'අනුරාධ බිම්සර',
    'couple.groom_role':'花ාමිබිළිඳා',
    'couple.son_of':  'පුතා',
    'couple.bride':   'සේහාන් කෝෂිල',
    'couple.bride_role':'花ාමිනිබිළිඳිය',
    'couple.daughter_of':'දියණිය',
    'couple.together':'2019 සිට එකට',
    'story.eye':      'ආදරයේ ගමන',
    'story.title':    'අපේ කතාව',
    'story.desc':     'අහඹු හමුවීමකින් ජීවිත ගිවිසුමකට — අපේ ආදරය ආරම්භ වූ ආකාරය.',
    'story.t1.h':     'පළමු හමුවීම',
    'story.t1.p':     'කොළඹ විශ්ව විද්‍යාලයේ විද්‍යා පීඨ දිනයේ ඉරනම 魂 ආත්ම දෙකක් එකට ගෙනාවා. දේශන ශාලාව හරහා ගිය සරල සිනහවක් සෑම දෙයක්ම වෙනස් කළා.',
    'story.t2.h':     'පළමු ආලාපය',
    'story.t2.p':     'කඳු රටේ වැසි සවසක්, උණු තේ කෝප්පයක්, සහ පැය ගණනක් හිනා. ඔවුන් දෙදෙනා දැනගත්තා — මෙය ඇත්තෙන්ම ශ්‍රේෂ්ඨ දෙයක ආරම්භයයි.',
    'story.t3.h':     'එකට සිය ගමන',
    'story.t3.p':     'ඇල්ලේ කිරිදූ කඳු සිට මිරිස්සේ රන් වෙරළ දක්වා, ඔවුන් ශ්‍රී ලංකාවේ සෞන්දර්යය අත්අල්ලාගෙන ගවේෂණය කළා.',
    'story.t4.h':     'යෝජනාව',
    'story.t4.p':     'ගාලු කොටුවේ තරු යට, සාගරේ සුළඟ සහ ජාතී සුවඳ සමඟ, අනුරාධ ශාශ්වත ගිවිසුම ඉල්ලුවා. ඇය "ඔව්" කිව්වා.',
    'story.t5.h':     'විවාහ දිනය',
    'story.t5.p':     'දැන්, පවුල් සහ යහළුවන්ගේ ආදරය සමඟ, අනුරාධ සහ සේහාන් 2025 සැප්තැම්බර් 14 දා ඔවුන්ගේ ශාශ්වත ජීවිතය ආරම්භ කරනවා. ඔබ ද මේ සුන්දර පිටුවේ කොටසක්.',
    'events.eye':     'ඔබේ දිනදර්ශනයේ සලකුණු කරන්න',
    'events.title':   'විවාහ උත්සව',
    'events.ceremony':'මංගල්‍ය',
    'events.luncheon':'දිවා භෝජනය',
    'events.reception':'සාදය',
    'events.e1.name': 'පෝරුව මංගල්‍ය',
    'events.e1.date': 'සෙනසුරාදා, 2025 සැප්තැම්බර් 14',
    'events.e1.time': 'නේකත: ප.ව. 9:27',
    'events.e1.venue':'ශාංග්‍රිලා කොළඹ, Grand Ballroom',
    'events.e2.name': 'විවාහ දිවා භෝජනය',
    'events.e2.date': 'සෙනසුරාදා, 2025 සැප්තැම්බර් 14',
    'events.e2.time': 'ප.ව. 1:00 — 3:30',
    'events.e2.venue':'Kaema Sutra, ශාංග්‍රිලා',
    'events.e3.name': 'සවස සාදය',
    'events.e3.date': 'සෙනසුරාදා, 2025 සැප්තැම්බර් 14',
    'events.e3.time': 'ප.ව. 7:00 සිට',
    'events.e3.venue':'Crystal Ballroom, ශාංග්‍රිලා',
    'events.dir':     'මාර්ගය ලබාගන්න ↗',
    'events.sched':   'දිනෙය සාරාංශය',
    'events.s1':      'ශුභ පැමිණීම සහ ආශිර්වාදය',
    'events.s2':      '⭐ නේකත — පෝරුව මංගල්‍ය',
    'events.s3':      'ආශිර්වාද සහ ඡායාරූප',
    'events.s4':      'විවාහ දිවා භෝජනය',
    'events.s5':      '✨ සවස සාදය සහ රාත්‍රී භෝජනය',
    'events.s6':      'පළමු නර්තනය සහ සමරාලා',
    'events.s7':      'කේක් කපා ගැනීම සහ සමුගැනීම',
    'gallery.eye':    'රැකගත යුතු මොහොතු',
    'gallery.title':  'ගැලරිය',
    'gallery.note':   '📸 ශ්‍රේෂ්ඨ දිනයෙන් පසු සිහිකැඳවීම් මෙහි එකතු වේ',
    'dresscode.eye':  'හොඳ ඇඳුමකින් ශෝභා වන්න',
    'dresscode.title':'ඇඳුම් සංකේතය',
    'dresscode.ladies':'කාන්තාවන්',
    'dresscode.ladies_type':'සාරිය / සවස ඇඳුම',
    'dresscode.ladies_desc':'සාම්ප්‍රදායික සාරි හෝ අලංකාර සවස ඇඳුමකින් ශෝභා වෙන ලෙස ආදරයෙන් ඉල්ලා සිටිමු.',
    'dresscode.gents':'පිරිමි',
    'dresscode.gents_type':'ජාතික ඇඳුම / ෆෝමල් සූට්',
    'dresscode.gents_desc':'ශ්‍රී ලාංකිය ජාතික ඇඳුම හෝ ෆෝමල් ඇඳුමකින් ශෝභා ගන්නා ලෙස ඉල්ලා සිටිමු.',
    'dresscode.formal':'ෆෝමල්',
    'dresscode.attire':'ඇඳුම',
    'dresscode.palette':'රෙදිපිළිකෑ වර්ණ',
    'rsvp.eye':       'ඔබව දැකීමට ආශාවෙමු',
    'rsvp.title':     'RSVP',
    'rsvp.desc':      'කරුණාකර 2025 අගෝස්තු 31 දිනට පෙර ඔබේ පැමිණීම තහවුරු කරන්න.',
    'rsvp.name':      'ඔබේ සම්පූර්ණ නම',
    'rsvp.phone':     'WhatsApp අංකය',
    'rsvp.guests':    'අමුත්තන් ගණන',
    'rsvp.attending': 'ඔබ පැමිණේ ද?',
    'rsvp.yes':       'සතුටින් පිළිගනිමි ✓',
    'rsvp.no':        'කනගාටුවෙන් ප්‍රතික්ෂේප කරමි ✗',
    'rsvp.msg':       'විශේෂ පණිවිඩය (අවශ්‍ය නොවේ)',
    'rsvp.submit':    'WhatsApp හරහා RSVP යවන්න',
    'map.eye':        'ස්ථානය සොයාගන්න',
    'map.title':      'රැස්වීමේ ස්ථානය',
    'map.open':       'Google Maps හිදී විවෘත කරන්න ↗',
    'wishes.eye':     'හදවතෙන් වචන',
    'wishes.title':   'ඔබේ ආශිර්වාද දෙන්න',
    'wishes.name_lbl':'ඔබේ නම',
    'wishes.msg_lbl': 'ඔබේ ආශිර්වාදය',
    'wishes.submit':  'ආශිර්වාද යවන්න',
    'footer.share':   'ඇරයුම බෙදාගන්න',
    'footer.copy':    'සබැඳිය පිටපත් කරන්න',
    'footer.blessing':'ජය ශ්‍රී ✦ ආදරය හා සතුට ඔවුන් හමු වේවා ✦ அன்பு வாழ்க',
  },

  ta: {
    'nav.story':      'எங்கள் கதை',
    'nav.events':     'நிகழ்வுகள்',
    'nav.gallery':    'கேலரி',
    'nav.dresscode':  'உடை குறியீடு',
    'nav.rsvp':       'RSVP',
    'nav.wishes':     'வாழ்த்துகள்',
    'hero.pre':       'அவர்களின் குடும்பங்களுடன்',
    'hero.request':   'அவர்களின் திருமண விழாவிற்கு உங்கள் அன்பான வருகையை வேண்டுகிறோம்',
    'hero.wedding':   'திருமண விழா',
    'hero.cta':       'நிகழ்வுகள் பார்க்க',
    'hero.rsvp':      'RSVP',
    'hero.scroll':    'கீழே உருட்டுங்கள்',
    'countdown.eye':  'சுபமான நாள் வந்துவிட்டது',
    'countdown.title':'என்றும் நிலைத்திருக்க',
    'countdown.days': 'நாட்கள்',
    'countdown.hours':'மணிகள்',
    'countdown.minutes':'நிமிடங்கள்',
    'countdown.seconds':'நொடிகள்',
    'couple.eye':     'குடும்பங்களின் ஆசீர்வாதத்துடன்',
    'couple.title':   'இரு குடும்பங்கள் · ஒரு காதல்',
    'couple.groom':   'அனுரதா பிம்சரா',
    'couple.groom_role':'மணமகன்',
    'couple.son_of':  'மகன்',
    'couple.bride':   'சேஹானி கோஷிலா',
    'couple.bride_role':'மணமகள்',
    'couple.daughter_of':'மகள்',
    'couple.together':'2019 முதல் ஒன்றாக',
    'story.eye':      'காதல் பயணம்',
    'story.title':    'எங்கள் கதை',
    'story.desc':     'தற்செயல் சந்திப்பிலிருந்து வாழ்நாள் வாக்குறுதி வரை — இதுதான் எங்கள் காதல் தொடங்கிய விதம்.',
    'story.t1.h':     'முதல் சந்திப்பு',
    'story.t1.p':     'கொழும்பு பல்கலைக்கழகத்தில் விதி இரு ஆத்மாக்களை இணைத்தது. விரிவுரை மண்டபத்தில் ஒரு புன்னகை எல்லாவற்றையும் மாற்றியது.',
    'story.t2.h':     'முதல் சந்திப்பு',
    'story.t2.p':     'மழையில் நனைந்த ஒரு மாலை, ஒரு கோப்பை டீ, மணிக்கணக்கில் சிரிப்பு. இதுவே ஏதோ அழகான ஒன்றின் தொடக்கம் என்று இருவரும் உணர்ந்தனர்.',
    'story.t3.h':     'ஒன்றாக சாகசங்கள்',
    'story.t3.p':     'எல்லாவின் மூடுபனி மலைகளிலிருந்து மிரிஸ்ஸாவின் தங்க கடற்கரை வரை, இலங்கையின் அழகை கைகோர்த்து ஆராய்ந்தனர்.',
    'story.t4.h':     'திருமண முன்மொழிவு',
    'story.t4.p':     'காலே கோட்டையில் நட்சத்திரங்களின் கீழ், கடல் காற்றிலும் மல்லிகை வாசனையிலும், அனுரதா என்றும் நிலைக்கும் கேள்வியை கேட்டான். அவள் ஆம் என்றாள்.',
    'story.t5.h':     'திருமண நாள்',
    'story.t5.p':     'இப்போது, குடும்பத்தினர் மற்றும் நண்பர்களின் அன்பால் சூழப்பட்டு, அனுரதாவும் சேஹானியும் 2025 செப்டம்பர் 14 அன்று தங்கள் நிரந்தர வாழ்வை தொடங்குகிறார்கள்.',
    'events.eye':     'உங்கள் நாட்காட்டியில் குறித்துக்கொள்ளுங்கள்',
    'events.title':   'திருமண நிகழ்வுகள்',
    'events.ceremony':'விழா',
    'events.luncheon':'மதிய விருந்து',
    'events.reception':'வரவேற்பு',
    'events.e1.name': 'போருவா விழா',
    'events.e1.date': 'சனிக்கிழமை, 14 செப்டம்பர் 2025',
    'events.e1.time': 'நேகத்: காலை 9:27',
    'events.e1.venue':'Grand Ballroom, ஷாங்கிரி-லா கொழும்பு',
    'events.e2.name': 'திருமண மதிய விருந்து',
    'events.e2.date': 'சனிக்கிழமை, 14 செப்டம்பர் 2025',
    'events.e2.time': 'பிற்பகல் 1:00 — 3:30',
    'events.e2.venue':'Kaema Sutra, ஷாங்கிரி-லா',
    'events.e3.name': 'மாலை வரவேற்பு',
    'events.e3.date': 'சனிக்கிழமை, 14 செப்டம்பர் 2025',
    'events.e3.time': 'மாலை 7:00 முதல்',
    'events.e3.venue':'Crystal Ballroom, ஷாங்கிரி-லா',
    'events.dir':     'வழிகாட்டு ↗',
    'events.sched':   'நாள் அட்டவணை',
    'events.s1':      'சுபமான வருகை & ஆசீர்வாதம்',
    'events.s2':      '⭐ நேகத் — போருவா விழா',
    'events.s3':      'ஆசீர்வாதம் & குடும்ப புகைப்படங்கள்',
    'events.s4':      'திருமண மதிய விருந்து',
    'events.s5':      '✨ மாலை வரவேற்பு & இரவு உணவு',
    'events.s6':      'முதல் நடனம் & கொண்டாட்டங்கள்',
    'events.s7':      'கேக் வெட்டல் & விடைபெறல்',
    'gallery.eye':    'அன்பான நினைவுகள்',
    'gallery.title':  'கேலரி',
    'gallery.note':   '📸 அந்த அற்புதமான நாளுக்கு பிறகு நினைவுகள் இங்கே சேர்க்கப்படும்',
    'dresscode.eye':  'சிறந்த தோற்றத்தில்',
    'dresscode.title':'உடை குறியீடு',
    'dresscode.ladies':'பெண்கள்',
    'dresscode.ladies_type':'சேலை / மாலை நேர உடை',
    'dresscode.ladies_desc':'பாரம்பரிய சேலை அல்லது நேர்த்தியான மாலை நேர உடையில் வர அன்பாக வேண்டுகிறோம்.',
    'dresscode.gents':'ஆண்கள்',
    'dresscode.gents_type':'தேசிய உடை / முறையான உடை',
    'dresscode.gents_desc':'இலங்கை தேசிய உடை அல்லது முறையான சூட்டில் வர வேண்டுகிறோம்.',
    'dresscode.formal':'முறையான',
    'dresscode.attire':'உடை',
    'dresscode.palette':'விரும்பிய வண்ண சேர்க்கை',
    'rsvp.eye':       'உங்களை சந்திக்க ஆவலாக இருக்கிறோம்',
    'rsvp.title':     'RSVP',
    'rsvp.desc':      'தயவுசெய்து ஆகஸ்ட் 31, 2025 க்குள் உங்கள் வருகையை உறுதிப்படுத்துங்கள்.',
    'rsvp.name':      'உங்கள் முழு பெயர்',
    'rsvp.phone':     'WhatsApp எண்',
    'rsvp.guests':    'விருந்தினர் எண்ணிக்கை',
    'rsvp.attending': 'நீங்கள் வருவீர்களா?',
    'rsvp.yes':       'மகிழ்ச்சியாக ஏற்கிறேன் ✓',
    'rsvp.no':        'வருந்தி மறுக்கிறேன் ✗',
    'rsvp.msg':       'சிறப்பு செய்தி (விருப்பத்திற்கு)',
    'rsvp.submit':    'WhatsApp வழியாக RSVP அனுப்பு',
    'map.eye':        'வழி காண்க',
    'map.title':      'நிகழ்விட இடம்',
    'map.open':       'Google Maps இல் திற ↗',
    'wishes.eye':     'இதயத்தின் வார்த்தைகள்',
    'wishes.title':   'உங்கள் ஆசீர்வாதங்கள் வழங்குங்கள்',
    'wishes.name_lbl':'உங்கள் பெயர்',
    'wishes.msg_lbl': 'உங்கள் ஆசீர்வாதம்',
    'wishes.submit':  'ஆசீர்வாதம் அனுப்பு',
    'footer.share':   'இந்த அழைப்பிதழை பகிரவும்',
    'footer.copy':    'இணைப்பை நகலெடுக்கவும்',
    'footer.blessing':'ජය ශ්‍රී ✦ அன்பும் மகிழ்ச்சியும் அவர்களுடன் இருக்கட்டும் ✦ அன்பு வாழ்க',
  }
};

let currentLang = 'en';

function applyTranslations(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });
  document.body.className = `lang-${lang}`;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyTranslations(btn.dataset.lang));
});

/* ─────────────────────────────────────────────────────
   02. LOADING SCREEN
───────────────────────────────────────────────────── */
(function initLoader() {
  const screen = document.getElementById('loadingScreen');
  const bar    = document.getElementById('loadingBar');
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 18 + 6;
    if (progress > 100) progress = 100;
    bar.style.width = progress + '%';
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        screen.classList.add('hidden');
        document.body.style.overflow = 'auto';
        triggerHeroReveal();
      }, 600);
    }
  }, 120);
  document.body.style.overflow = 'hidden';
})();

function triggerHeroReveal() {
  document.querySelectorAll('#hero .reveal-up, #hero .reveal-fade').forEach((el, i) => {
    setTimeout(() => el.classList.add('revealed'), i * 150);
  });
}

/* ─────────────────────────────────────────────────────
   03. CUSTOM CURSOR + SPARKLES
───────────────────────────────────────────────────── */
(function initCursor() {
  const dot   = document.getElementById('cursorDot');
  const ring  = document.getElementById('cursorRing');
  const sparks = document.getElementById('sparkleContainer');
  let mx = -100, my = -100;
  let rx = -100, ry = -100;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
    // Occasional sparkle
    if (Math.random() < 0.2) createSparkle(mx, my);
  });

  // Ring follows with lag
  function animateRing() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover state
  document.querySelectorAll('a, button, .gi, .choice-btn, .ctr-btn, .dcp').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
  });

  function createSparkle(x, y) {
    const s = document.createElement('div');
    s.className = 'sparkle';
    const angle  = Math.random() * 360;
    const radius = Math.random() * 30 + 10;
    s.style.setProperty('--sx', Math.cos(angle) * radius + 'px');
    s.style.setProperty('--sy', Math.sin(angle) * radius + 'px');
    s.style.left = (x - 3) + 'px';
    s.style.top  = (y - 3) + 'px';
    s.style.background = Math.random() > 0.5 ? '#e8d48b' : '#c5a8e8';
    sparks.appendChild(s);
    setTimeout(() => s.remove(), 800);
  }
})();

/* ─────────────────────────────────────────────────────
   04. FLOATING PETALS (Canvas)
───────────────────────────────────────────────────── */
(function initPetals() {
  const canvas = document.getElementById('petalCanvas');
  const ctx    = canvas.getContext('2d');
  const PETAL_COUNT = 28;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const colors = [
    'rgba(197,168,232,0.55)',
    'rgba(177,132,220,0.45)',
    'rgba(212,184,240,0.50)',
    'rgba(240,213,224,0.50)',
    'rgba(232,180,200,0.45)',
    'rgba(201,168,76,0.25)',
  ];

  function Petal() {
    this.reset(true);
  }
  Petal.prototype.reset = function(initial) {
    this.x    = Math.random() * canvas.width;
    this.y    = initial ? Math.random() * canvas.height : -20;
    this.w    = Math.random() * 10 + 5;
    this.h    = Math.random() * 6  + 4;
    this.vx   = (Math.random() - 0.5) * 0.6;
    this.vy   = Math.random() * 0.7 + 0.3;
    this.rot  = Math.random() * Math.PI * 2;
    this.vrot = (Math.random() - 0.5) * 0.025;
    this.color= colors[Math.floor(Math.random() * colors.length)];
    this.sway = Math.random() * Math.PI * 2;
    this.swaySpeed = Math.random() * 0.012 + 0.006;
  };
  Petal.prototype.update = function() {
    this.sway += this.swaySpeed;
    this.x  += this.vx + Math.sin(this.sway) * 0.5;
    this.y  += this.vy;
    this.rot += this.vrot;
    if (this.y > canvas.height + 20) this.reset(false);
  };
  Petal.prototype.draw = function() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rot);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, this.w, this.h, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  const petals = Array.from({ length: PETAL_COUNT }, () => new Petal());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
})();

/* ─────────────────────────────────────────────────────
   05. NAVIGATION — Scroll behaviour & mobile
───────────────────────────────────────────────────── */
(function initNav() {
  const nav    = document.getElementById('mainNav');
  const burger = document.getElementById('navBurger');
  const menu   = document.getElementById('mobileMenu');
  const close  = document.getElementById('mobClose');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  burger.addEventListener('click', () => menu.classList.add('open'));
  close.addEventListener('click', () => menu.classList.remove('open'));

  document.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
})();

/* ─────────────────────────────────────────────────────
   06. SCROLL REVEAL
───────────────────────────────────────────────────── */
(function initReveal() {
  const opts = { threshold: 0.15, rootMargin: '0px 0px -60px 0px' };
  const obs  = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        obs.unobserve(e.target);
      }
    });
  }, opts);

  document.querySelectorAll('.reveal-up, .reveal-fade, .reveal-left, .reveal-right').forEach(el => {
    // Skip hero elements (handled by loader)
    if (!el.closest('#hero')) obs.observe(el);
  });
})();

/* ─────────────────────────────────────────────────────
   07. COUNTDOWN TIMER
───────────────────────────────────────────────────── */
(function initCountdown() {
  const TARGET = new Date('2026-09-14T09:27:00');
  const dEl = document.getElementById('cdDays');
  const hEl = document.getElementById('cdHours');
  const mEl = document.getElementById('cdMins');
  const sEl = document.getElementById('cdSecs');

  function pad(n) { return String(Math.max(0, n)).padStart(2, '0'); }

  function tick() {
    const now  = new Date();
    const diff = TARGET - now;
    if (diff <= 0) {
      dEl.textContent = hEl.textContent = mEl.textContent = sEl.textContent = '00';
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000)  / 60000);
    const s = Math.floor((diff % 60000)    / 1000);
    [dEl, hEl, mEl, sEl].forEach((el, i) => {
      const val = pad([d, h, m, s][i]);
      if (el.textContent !== val) {
        el.style.transform = 'translateY(-8px)';
        el.style.opacity = '0';
        setTimeout(() => {
          el.textContent = val;
          el.style.transform = '';
          el.style.opacity = '';
          el.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        }, 150);
      }
    });
  }
  tick();
  setInterval(tick, 1000);
})();

/* ─────────────────────────────────────────────────────
   08. RSVP FORM — WhatsApp
───────────────────────────────────────────────────── */
(function initRSVP() {
  let guestCount  = 1;
  let attending   = 'yes';

  const guestDisp = document.getElementById('guestCount');
  const minusBtn  = document.getElementById('guestMinus');
  const plusBtn   = document.getElementById('guestPlus');

  minusBtn.addEventListener('click', () => {
    if (guestCount > 1) { guestCount--; guestDisp.textContent = guestCount; }
  });
  plusBtn.addEventListener('click', () => {
    if (guestCount < 20) { guestCount++; guestDisp.textContent = guestCount; }
  });

  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      attending = this.dataset.choice;
    });
  });

  document.getElementById('rsvpSubmit').addEventListener('click', () => {
    const name  = document.getElementById('rsvpName').value.trim();
    const phone = document.getElementById('rsvpPhone').value.trim();
    const msg   = document.getElementById('rsvpMsg').value.trim();

    if (!name) { showToast('⚠️ Please enter your name.'); return; }

    const WHATSAPP_NUMBER = '94786662160'; // Replace with actual number
    const status = attending === 'yes' ? '✅ Joyfully Accepting' : '❌ Regretfully Declining';
    let text = `🌸 *Wedding RSVP — Anuradha & Sehani*\n\n`;
    text += `👤 *Name:* ${name}\n`;
    text += `📞 *Phone:* ${phone || 'Not provided'}\n`;
    text += `👥 *Guests:* ${guestCount}\n`;
    text += `📋 *Status:* ${status}\n`;
    if (msg) text += `💬 *Message:* ${msg}\n`;
    text += `\n📅 14th September 2025\n🏨 Shangri-La Colombo\n\n_Sent via Digital Invitation_`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    showToast('✅ Opening WhatsApp…');
  });
})();

/* ─────────────────────────────────────────────────────
   09. WISHES / BLESSINGS
───────────────────────────────────────────────────── */
(function initWishes() {
  const grid = document.getElementById('wishesGrid');
  let wishes = [];

  // Load from localStorage
  try {
    const stored = localStorage.getItem('wedding_wishes_as');
    if (stored) wishes = JSON.parse(stored);
    renderStoredWishes();
  } catch(e) {}

  document.getElementById('wishSubmit').addEventListener('click', () => {
    const name = document.getElementById('wishName').value.trim();
    const msg  = document.getElementById('wishMsg').value.trim();
    if (!name || !msg) { showToast('⚠️ Please enter your name and message.'); return; }

    const wish = {
      name, msg,
      date: new Date().toLocaleDateString('en-GB', { month: 'long', day: 'numeric', year: 'numeric' })
    };
    wishes.push(wish);
    try { localStorage.setItem('wedding_wishes_as', JSON.stringify(wishes)); } catch(e) {}

    addWishCard(wish);
    document.getElementById('wishName').value = '';
    document.getElementById('wishMsg').value  = '';
    showToast('🌸 Your blessing has been sent!');
  });

  function renderStoredWishes() {
    wishes.forEach(w => addWishCard(w));
  }

  function addWishCard(w) {
    const card = document.createElement('div');
    card.className = 'wish-card';
    card.innerHTML = `
      <div class="wc-quote">❝</div>
      <p class="wc-text">${escapeHtml(w.msg)}</p>
      <div class="wc-author">— ${escapeHtml(w.name)}</div>
      <div class="wc-date">${w.date}</div>`;
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    grid.appendChild(card);
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'none';
    }, 50);
  }
})();

/* ─────────────────────────────────────────────────────
   10. GALLERY LIGHTBOX
───────────────────────────────────────────────────── */
(function initGallery() {
  const lb    = document.getElementById('lightbox');
  const close = document.getElementById('lbClose');

  document.querySelectorAll('.gi').forEach(item => {
    item.addEventListener('click', () => lb.classList.add('open'));
  });
  close.addEventListener('click', () => lb.classList.remove('open'));
  lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });
})();

/* ─────────────────────────────────────────────────────
   11. SHARE BUTTONS
───────────────────────────────────────────────────── */
(function initShare() {
  const waShare  = document.getElementById('waShare');
  const copyLink = document.getElementById('copyLink');
  const inviteUrl = window.location.href;

  waShare.addEventListener('click', () => {
    const msg = `🌸 You're invited to the wedding of *Anuradha Bimsara & Sehani Koshila*!\n\n📅 14th September 2025\n🏨 Shangri-La Colombo\n\n🔗 View Invitation: ${inviteUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
  });

  copyLink.addEventListener('click', () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(inviteUrl).then(() => showToast('🔗 Invitation link copied!'));
    } else {
      const ta = document.createElement('textarea');
      ta.value = inviteUrl;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
      showToast('🔗 Invitation link copied!');
    }
  });
})();

/* ─────────────────────────────────────────────────────
   12. PARALLAX (hero watercolor layers)
───────────────────────────────────────────────────── */
(function initParallax() {
  const wc1 = document.querySelector('.hero-wc-1');
  const wc2 = document.querySelector('.hero-wc-2');
  const wc3 = document.querySelector('.hero-wc-3');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight * 1.5) {
      if (wc1) wc1.style.transform = `translateY(${y * 0.1}px)`;
      if (wc2) wc2.style.transform = `translateY(${y * 0.2}px)`;
      if (wc3) wc3.style.transform = `translateY(${y * 0.05}px)`;
    }
  }, { passive: true });
})();

/* ─────────────────────────────────────────────────────
   13. TOAST NOTIFICATIONS
───────────────────────────────────────────────────── */
function showToast(message, duration = 3000) {
  const t = document.getElementById('toast');
  t.textContent = message;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

/* ─────────────────────────────────────────────────────
   14. UTILITY
───────────────────────────────────────────────────── */
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ─────────────────────────────────────────────────────
   15. SMOOTH NAV LINK CLICKS
───────────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ─────────────────────────────────────────────────────
   16. GOLD SHIMMER — periodic glow on hero names
───────────────────────────────────────────────────── */
(function initGoldShimmer() {
  const amp = document.querySelector('.amp-text');
  if (!amp) return;
  setInterval(() => {
    amp.style.textShadow = '0 0 60px rgba(201,168,76,0.7)';
    setTimeout(() => { amp.style.textShadow = ''; }, 600);
  }, 4000);
})();

/* ─────────────────────────────────────────────────────
   17. EVENT CARDS — staggered reveal
───────────────────────────────────────────────────── */
(function initEventCards() {
  const cards = document.querySelectorAll('.event-card');
  const obsv  = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = e.target.style.getPropertyValue('--d') || '0s';
        e.target.style.transitionDelay = delay;
        e.target.classList.add('revealed');
        obsv.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  cards.forEach(c => { c.classList.add('reveal-up'); obsv.observe(c); });
})();

/* ─────────────────────────────────────────────────────
   18. ACTIVE NAV LINK on scroll
───────────────────────────────────────────────────── */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link:not(.nav-cta)');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active-link'));
        const link = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
        if (link) link.classList.add('active-link');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => obs.observe(s));
})();

/* ─────────────────────────────────────────────────────
   19. PORTRAIT HOVER PARALLAX
───────────────────────────────────────────────────── */
document.querySelectorAll('.family-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateX(${-y*5}deg) rotateY(${x*5}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.5s ease';
  });
});

/* ─────────────────────────────────────────────────────
   20. ON PAGE READY LOG
───────────────────────────────────────────────────── */
console.log('%c💍 Anuradha & Sehani — Wedding Invitation', 'font-family:Georgia;font-size:1.2rem;color:#c9a84c;font-weight:bold;');
console.log('%c14th September 2025 · Shangri-La Colombo', 'font-family:Georgia;font-size:0.9rem;color:#8b5cc8;');

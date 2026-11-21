const icon = name => `<svg aria-hidden="true"><use href="#${name}"/></svg>`;
const link = (url,text,type='secondary') => `<a class="button ${type}" href="${url}" target="_blank" rel="noopener">${text}${icon('external')}</a>`;
const projects = {
 postman:{
  title:'על לא דוור',kicker:'משחק מיון לימודי ומחולל תוכן',
  intro:'משחק מיון לימודי שבו השחקן מגלם דוור ועליו לחלק חבילות לבתי הרחוב. כל חבילה מייצגת פריט וכל דלת מייצגת קטגוריה; כדי להשלים את מסלול החלוקה, יש למסור כל חבילה לדלת המתאימה. מטרת המשחק היא לתרגל ולחזק ידע באמצעות מיון, התנסות חוזרת ומשוב.',
  facts:[['שחקנים','שחקן יחיד'],['קהל יעד','בעיקר גיל בית ספר יסודי'],['צוות','3 סטודנטיות'],['משך ומסגרת','שני סמסטרים · שנה ב׳']],
  overview:'סיפור המסגרת והעיצוב מיועדים בעיקר לילדים בגיל בית הספר היסודי. התוכן עצמו ניתן להתאמה לנושאים, לגילים ולרמות ידע שונות באמצעות מחולל תוכן — מערכת עריכה ליצירת משחקי מיון על בסיס אותה תבנית, ללא כתיבת קוד.',
  gallery:[['assets/postman.webp','מסך פתיחה והזנת קוד משחק'],['assets/postman-1.webp','מסך המשחק: מיון חבילות לקטגוריות'],['assets/postman-0.webp','מחולל התוכן: עריכת קטגוריות ופריטים']],
  videoNote:'מיועד להדגמת חלוקת חבילות, טעות ותרגול חוזר, המשוב המאבחן ועריכת התוכן במחולל.',
  content:`<section class="case-section"><h3>מהו מחולל התוכן?</h3><p>מחולל התוכן הוא מערכת עריכה המאפשרת למורים, למדריכים וליוצרי תוכן לבנות משחק בנושא לבחירתם, ללא צורך בתכנות. סיפור המסגרת והמכניקה נשארים קבועים, והעורך משנה את התוכן: מגדיר שלוש עד חמש קטגוריות, מוסיף פריטים בטקסט או בתמונה ובוחר מגבלת זמן או משחק ללא הגבלת זמן. למשל, אותו משחק יכול לשמש למיון בעלי חיים לקבוצות או מדינות ליבשות. לאחר הפרסום ניתן לפתוח את המשחק באמצעות קוד משחק.</p></section>
  <section class="case-section"><h3>סביבת הפיתוח</h3><p>המשחק פותח ב־<bdi>Unity</bdi> בשפת <bdi>C#</bdi>. המחולל פותח כיישום אינטרנט בסביבת <bdi>Blazor / ASP.NET Core</bdi>, בשפת <bdi>C#</bdi> וברכיבי <bdi>Razor</bdi>, עם עיצוב ב־<bdi>HTML ו־CSS</bdi> ושמירת התוכן במסד נתונים <bdi>SQLite</bdi>. החיבור בין המחולל למשחק מאפשר לטעון תכנים משתנים לאותה תבנית משחק. האפיון והאב־טיפוס תוכננו ב־<bdi>Figma</bdi>.</p></section>
  <section class="case-section"><h3>יצירת נכסים ופיתוח בסיוע AI</h3><p>בתהליך היצירה נעשה שימוש ב־<bdi>ChatGPT</bdi> וב־<bdi>Gemini</bdi> לפיתוח נכסים חזותיים, סרטוני פתיחה וסיום ולסיוע בקוד. ההנחיות התייחסו לסגנון, לצבעוניות, לעקביות הדמויות ולמצבי הממשק; התוצאות נבחנו ועודכנו לפני שילובן במשחק. למשל, יצירת מצבים שונים לאותה דמות וגרסאות רגילות ולחוצות של כפתורים דרשה שמירה על שפה חזותית אחידה. תהליך העבודה כלל גם סיוע בפתרון בעיות קוד ובדיקת ההתנהגות במשחק.</p></section>
  <section class="case-section"><h3>התרומה שלי בפרויקט</h3><p>כל חברות הצוות השתתפו באפיון, בפיתוח ובבדיקות של המשחק והמחולל. מוקדי האחריות המרכזיים שלי היו העיצוב, יצירת אנימציות וסרטוני פתיחה, פיתוח ב־Unity ובדיקות QA. בנוסף, ריכזתי את המשימות ותיאמתי את חלוקת העבודה בצוות לאורך הפרויקט, תוך תעדוף דרישות והתאמת היקף העבודה לזמן הזמין.</p></section>
  <section class="case-section"><h3>החלטות בתכנון חוויית השחקן</h3><p>המטרה הלימודית הנחתה את תכנון המשחק: לאפשר לשחקן להבין את הקשר בין פריט לקטגוריה, לתרגל תכנים שבהם התקשה ולבחון את הטעויות בסיום.</p><ul><li><strong>תרגול חוזר לאחר טעות:</strong> חבילה ששויכה לדלת שגויה חוזרת בהמשך, עד שהשחקן משייך אותה נכון. כך הטעות מובילה להזדמנות נוספת לתרגול.</li><li><strong>משוב מאבחן בסיום:</strong> הפריטים שבהם השחקן טעה בניסיון הראשון מוצגים תחת הקטגוריות הנכונות, כדי לאפשר חזרה ממוקדת על התוכן שבו התקשה.</li><li><strong>מיון לפי התוכן:</strong> מיקום הקטגוריות משתנה בין סיבובים, כדי לעודד זיהוי של הקטגוריה המתאימה במקום הסתמכות על מיקומה במסך.</li><li><strong>התאמת קצב התרגול:</strong> העורך יכול לבחור מגבלת זמן או לבטל אותה. הספירה מתחילה רק לאחר סיום אנימציית הכניסה של הדוור, כדי להשאיר לשחקן את מלוא זמן המענה.</li><li><strong>משוב ברור ועקבי:</strong> אנימציה, סימון חזותי וסאונד מבחינים בין שיוך נכון לשגוי. פעולות מסוימות נחסמות בזמן המשוב והמעברים כדי לשמור על רצף תקין.</li></ul></section>
  <section class="case-section"><h3>אפיון, בדיקות משחק ושיפור גרסאות</h3><p>הפרויקט נבנה בצוות של שלוש סטודנטיות לאורך שני סמסטרים בשנה ב׳ לתואר. הוא שילב שלושה קורסים בתחומי התכנות, האפיון וחוויית המשתמש, והאנימציה והאינטראקציה.</p><p>כל שלב התחיל באפיון מעמיק של הרכיבים שנכללו בו, לפני תחילת הפיתוח. בסמסטר הראשון אופיין ופותח המשחק הראשוני; בסמסטר השני אופיינו המשחק המשופר ומחולל התוכן, ולאחר מכן פותחו וחוברו למערכת אחת. האפיון ב־Figma תיעד מסכים, זרימות משתמש, פעולות כפתורים ומצבי משוב.</p><p>התהליך היה איטרטיבי: נערכו בדיקות משחק (<bdi>Playtesting</bdi>) ובדיקות תקינות, והתקבל משוב מחברות הצוות, מכרים, עמיתים לכיתה ומהמרצה. בעקבותיו עודכנו העיצוב והמנגנונים. לדוגמה, תזמון הטיימר והתנהגות ההשהיה הותאמו כדי לשמור על מלוא זמן המענה ועל רצף משוב ורישום תוצאות תקין.</p></section>`,
  links:[['https://triangle.telem-hit.net/2026/AlLoDavar_RomiReginaDan','פתיחת המשחק · קודים 1001 / 1002','primary'],['https://www.figma.com/design/kqK0t2x4l15UsM9VrIPW70/?node-id=0-1','צפייה באפיון ב־Figma']],
  linkNote:'צילומי המסך זמינים להגדלה כאן באתר, ללא חשבון Figma. הקישור לקובץ האפיון מיועד לעיון נוסף.',
  credit:'צוות הפרויקט: דן כהן, רומי מילר ורגינה אברהם. פירוט מקורות המדיה והשימוש בכלי AI מופיע בקרדיטים של הפרויקט.'
 },
 penguin:{
  title:'Pinguin Jump',kicker:'משחק ארקייד דו־ממדי · Game Jam',
  intro:'משחק שנוצר במסגרת Game Jam בצוות של שלוש, בהשראת Flappy Bird. השחקן שולט בפינגווין באמצעות מקש אחד, נמנע מהתנגשות בקרחונים ובגבולות המסך ואוסף דגים. המשחק מציג בנפרד את זמן ההישרדות ואת מספר הדגים שנאספו.',
  facts:[['מסגרת','Game Jam'],['צוות','3 סטודנטיות'],['כלים','Unity · C#']],
  gallery:[['assets/penguin-1.webp','מסך המשחק: הפינגווין, המכשולים והפריטים לאיסוף'],['assets/penguin-end.webp','מסך הסיום: תוצאות וכפתור התחלה מחדש']],
  videoNote:'מיועד להדגמת השליטה בפינגווין, איסוף דגים, משוב וסיום סיבוב.',
  content:`<section class="case-section"><h3>המנגנון המשחקי</h3><p>לחיצה על מקש הרווח מניעה את הפינגווין כלפי מעלה. המכשולים נוצרים בגבהים משתנים, והשחקן נדרש לתזמן את התנועה כדי לעבור ביניהם ולאסוף דגים. פגיעה במכשול או בגבולות המסך מסיימת את הסיבוב.</p></section>
  <section class="case-section"><h3>ממשק ומשוב</h3><p>מסך הפתיחה מציג את אופן השליטה, ובמהלך המשחק מוצגים שני מוני ניקוד. צלילים שונים מסמנים איסוף דג ופסילה. בסיום מוצגות התוצאות וניתנת אפשרות להתחיל סיבוב נוסף.</p></section>
  <section class="case-section"><h3>לולאת המשחק והמימוש ב־Unity</h3><p>הפרויקט הצוותי כלל עבודה עם פיזיקה דו־ממדית ב־Unity, שליטה בדמות, יצירת מכשולים ופריטים, ממשק ניקוד, תנאי סיום ומשוב קולי. לולאת המשחק (<bdi>Core Loop</bdi>) מחברת בין תזמון התנועה, התחמקות, איסוף דגים, קבלת תוצאה והתחלה מחדש. התוצר מדגים חיבור בין מכניקה פשוטה, ממשק ומשוב במסגרת Game Jam.</p></section>`,
  links:[['https://dancohit.github.io/PinguinJump/','פתיחת המשחק','primary']],
  credit:'צוות הפרויקט: דן כהן, עדי ביבי ולינור ביטון. תיאור המימוש מתייחס לתוצר הקבוצתי; מקורות המדיה מופיעים בקרדיטים במשחק.'
 },
 table:{
  title:'שולחן ערוך',kicker:'אפליקציה לסידורי ישיבה · פרויקט אישי',
  intro:'אפליקציה לתכנון סידורי ישיבה בארוחות משפחתיות, שיצרתי ביוזמה פרטית מחוץ למסגרת הלימודים. הפרויקט נועד לתת מענה לצורך שחוזר במשפחתי בכל יום שישי: תכנון ישיבה לפי הרכב המשתתפים, העדפות משפחתיות וצורכי הילדים.',
  facts:[['מסגרת','פרויקט אישי'],['סוג תוצר','אפליקציית Web'],['מיקוד','אפיון, חוקים וממשק']],
  gallery:[['assets/table.webp','עמוד הפתיחה של האפליקציה'],['assets/table-planning.webp','מסך תכנון הארוחה: תאריך וסיכום המשתתפים']],
  videoNote:'מיועד להדגמת בחירת המשתתפים ויצירת סידור הישיבה.',
  content:`<section class="case-section"><h3>הצורך שהוביל לפיתוח</h3><p>בארוחות המשפחתיות יש להביא בחשבון מספר משתתפים משתנה, העדפות לגבי מקומות הישיבה והתאמות לילדים. רציתי לרכז את המידע והאילוצים במערכת שתסייע בתכנון הארוחה.</p></section>
  <section class="case-section"><h3>תהליך השימוש</h3><p>המשתמש בוחר תאריך ומשתתפים, והאפליקציה מתכננת סידור בהתאם לחוקים שהוגדרו. היא מביאה בחשבון את גיל הילדים במועד הארוחה ואת סוג הכיסא והכלים המתאימים להם.</p></section>
  <section class="case-section"><h3>אפיון דרישות ופתרון בעיות</h3><p>הפרויקט התחיל בזיהוי צורך אמיתי ובהגדרת דרישות: מי משתתף בארוחה, אילו העדפות יש להביא בחשבון ואילו התאמות נדרשות לילדים. תרגמתי את הצורך לזרימת משתמש ולמערכת חוקים, מהזנת הנתונים ועד להצגת סידור הישיבה. העבודה מדגימה חשיבה מוצרית (<bdi>Product Thinking</bdi>), פתרון בעיות ויוזמה אישית מחוץ למסגרת הלימודים.</p></section>`,
  links:[['https://shulchan-aruch.danco234.workers.dev/','פתיחת האפליקציה','primary']],
  credit:'פרויקט אישי של דן כהן.'
 },
 style:{
  title:'כפית של סטייל',kicker:'אפיון ועיצוב ממשק · אב־טיפוס ב־Figma',
  intro:'אב־טיפוס אינטראקטיבי לאתר המסייע למארחים בתחילת הדרך לתכנן עיצוב שולחן אירוח. הפרויקט כולל הגדרת קהל יעד ותרחישי שימוש, ארגון תוכן, תכנון Wireframes ועיצוב ממשק עם שאלון העדפות, גלריית השראה וצ׳ק ליסט.',
  facts:[['מסגרת','פרויקט אקדמי'],['צוות','3 סטודנטיות'],['כלים','Figma · UX/UI']],
  gallery:[['assets/style-0.webp','העיצוב הסופי: עמוד הפתיחה'],['assets/style-image27.webp','Wireframe מוקדם: מבנה התוכן והניווט'],['assets/style-image28.webp','אפיון אינטראקציות והערות לתכנון']],
  videoNote:'מיועד להדגמת הניווט באתר והאינטראקציות באב־הטיפוס.',
  content:`<section class="case-section"><h3>זרימות משתמש ואב־טיפוס אינטראקטיבי</h3><p>העבודה כללה הגדרת מטרות ותרחישים, בחינת פתרונות קיימים ותכנון מבנה האתר. תרחישי השימוש תורגמו לזרימות משתמש (<bdi>User Flows</bdi>) ולתכנון מסכים. לאחר יצירת ה־Wireframes פותח עיצוב מפורט ונבנה אב־טיפוס אינטראקטיבי ב־Figma, כדי להמחיש את הניווט, פעולות המשתמש ומצבי הממשק לפני פיתוח.</p></section>
  <section class="case-section"><h3>החלטות במבנה ובממשק</h3><ul><li><strong>היררכיית מידע:</strong> מידע מרכזי על תוכן האתר הועבר מחלונית לתוכן גלוי, כדי שלא לדרוש פעולה נוספת לצורך הבנת מטרתו.</li><li><strong>ארגון תוכן:</strong> פלטות הצבעים שולבו באזור ההשראה, לצד הסגנון הרלוונטי, במקום במקטע נפרד.</li><li><strong>תכנון אינטראקציות:</strong> הוגדרו מצבי פתיחה וסגירה, הנחיות לפעולה ומשוב חזותי לרכיבים לחיצים.</li></ul></section>
  <section class="case-section"><h3>שיפור איטרטיבי ותעדוף תכולה</h3><p>במהלך הפרויקט תועדו גרסאות ושינויים בעקבות ביקורת בכיתה ושני ייעוצים. התכנון עודכן בהתאם למשוב ולהיתכנות המימוש: סימולטור לעיצוב שולחן הוסר לאחר בחינת הכלים הזמינים, ושאלון ההעדפות מומש כמסלול הדגמה מתוסרט, ללא אלגוריתם התאמה מלא. ההחלטות מדגימות התאמת היקף (<bdi>Scope Prioritization</bdi>) ושיפור הדרגתי של הפתרון.</p></section>
  <section class="case-section"><h3>העבודה בצוות</h3><p>השתתפתי בפרויקט צוותי ששילב אפיון, עיצוב ובניית אב־טיפוס. העבודה התבססה על חלוקת משימות ומפגשים שבועיים לבחינת התוצרים ולקבלת החלטות משותפות. התהליך חיזק את ההתנסות שלי בתעדוף, התאמת רעיונות להיתכנות ותיאום עבודה.</p></section>
  <p class="case-note">התוצר הוא אב־טיפוס ב־Figma. הפרסונות שימשו כלי תכנון, וחלק מהתהליך נעשה בסיוע AI; המשוב המתועד התקבל בעיקר במסגרת האקדמית.</p>`,
  links:[['https://www.figma.com/design/MyobstS4F8EOmrvrR5xFlM/?node-id=1670-38','צפייה בעיצוב ב־Figma','primary'],['https://www.figma.com/design/JJLS3G6lRogIiQoEMkZcf6/?node-id=821-2','צפייה ב־Wireframes']],
  credit:'צוות הפרויקט: דן כהן, רומי מילר ונעם טואטי. פירוט מקורות המדיה והשימוש ב־AI מופיע בתיעוד הפרויקט.'
 }
};
const dialog=document.querySelector('#project-dialog');
const content=document.querySelector('#dialog-content');
const mediaDialog=document.querySelector('#media-dialog');
let opener,mediaOpener;
const mediaHtml=item=>`<section class="media-section"><div class="media-heading"><h3>תיעוד חזותי</h3><span>לחיצה על צילום מסך תפתח תצוגה מוגדלת</span></div><div class="case-gallery ${item.gallery.length===3?'three':''}">${item.gallery.map(([src,caption])=>`<figure><button data-image="${src}" data-caption="${caption}" aria-label="הגדלת התמונה: ${caption}"><img src="${src}" alt="${caption}"></button><figcaption>${caption}</figcaption></figure>`).join('')}${item.reserved?`<figure><div class="media-reserved"><strong>${item.reserved}</strong><span>מקום לצילום מסך נוסף · יתווסף בהמשך</span></div><figcaption>תיעוד נוסף להכנה</figcaption></figure>`:''}</div><div class="video-placeholder" role="note">${icon('play')}<div><h4>מקום לסרטון הדגמה קצר</h4><p>הסרטון יתווסף בהמשך. ${item.videoNote}</p></div></div></section>`;
function openProject(id){
 const item=projects[id];if(!item)return;opener=document.activeElement;
 content.innerHTML=`<div class="case-body"><p class="case-kicker">${item.kicker}</p><h2 id="dialog-title" class="case-title">${item.title}</h2><p class="case-intro">${item.intro}</p><div class="case-facts">${item.facts.map(([label,value])=>`<span>${label}<strong>${value}</strong></span>`).join('')}</div>${item.overview?`<p class="case-intro">${item.overview}</p>`:''}${mediaHtml(item)}<div class="case-links">${item.links.map(args=>link(...args)).join('')}</div>${item.linkNote?`<p class="case-note">${item.linkNote}</p>`:''}${item.content}<p class="case-credit">${item.credit}</p></div>`;
 dialog.showModal();dialog.scrollTop=0;document.body.classList.add('body-locked');document.querySelector('.close-dialog').focus();
}
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>openProject(button.dataset.project)));
content.addEventListener('click',event=>{const button=event.target.closest('[data-image]');if(!button)return;mediaOpener=button;const image=document.querySelector('#media-image');image.src=button.dataset.image;image.alt=button.dataset.caption;document.querySelector('#media-caption').textContent=button.dataset.caption;mediaDialog.showModal();document.querySelector('.close-media').focus();});
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
document.querySelector('.close-media').addEventListener('click',()=>mediaDialog.close());
for(const modal of [dialog,mediaDialog])modal.addEventListener('click',event=>{if(event.target===modal){const r=modal.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)modal.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('body-locked');opener?.focus();});
mediaDialog.addEventListener('close',()=>mediaOpener?.focus());
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
 let visible=0;document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&button.dataset.filter!==card.dataset.category;if(!card.hidden)visible++;});
 document.querySelector('.project-count').textContent=`מוצגים ${visible} פרויקטים נבחרים`;
}));

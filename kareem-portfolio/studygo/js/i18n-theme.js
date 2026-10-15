(() => {
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeToggle');
  const langBtn = document.getElementById('langToggle');
  /* Arabic copy (Egyptian, friendly). Key = exact English text on the page. */
  const translations = {
    'Why':'ليه التطبيق','Features':'المميزات','Explore':'الشاشات','Design':'التصميم',
    'A UI/UX design project · High-fidelity Figma prototype':'مشروع تصميم واجهات وتجربة مستخدم · نموذج تفاعلي متكامل على Figma',
    'Learn smarter,':'ذاكر بذكاء،','not harder.':'مش بمجهود أكتر.',
    'Study Go helps university students organize their study schedules, track progress, and stay motivated.':'Study Go بيساعد طلاب الجامعة ينظّموا جدول مذاكرتهم، ويتابعوا تقدّمهم، ويفضلوا متحمسين.',
    'See the features':'شوف المميزات','Explore the screens':'شوف الشاشات',
    'UI screens':'شاشة تصميم','Mobile app':'تطبيق موبايل','concept':'كفكرة تصميم','high-fidelity prototype':'نموذج تفاعلي متكامل',
    'The problem':'المشكلة','Studying is hard to keep organized.':'تنظيم المذاكرة والمواظبة عليها مش سهل دايمًا.',
    'Study tasks pile up':'المهام بتتراكم عليك','Difficulty organizing tasks and schedules.':'صعب ترتّب مهامك ومواعيد مذاكرتك.',
    'Plan and track tasks':'نظّم مهامك وتابعها',
    'Add tasks with a type, date and description, and follow the to-do progress.':'ضيف المهام بنوعها وميعادها وتفاصيلها، وتابع اللي خلّصته واللي لسه.',
    'See how':'اعرف أكتر',
    'Distractions break focus':'المشتتات بتضيّع تركيزك','Study time without a clear structure.':'وقت مذاكرة من غير خطة واضحة.',
    'A focus timer':'مؤقّت للتركيز','Start a timed session tied to a task, with white noise and music controls.':'ابدأ جلسة بمؤقّت مرتبطة بمهمة، وشغّل أصوات هادية أو موسيقى لو حابب.',
    'Motivation fades':'الحماس بيقل مع الوقت','Hard to stay consistent and see progress.':'صعب تفضل مواظب وتشوف تقدّمك.',
    'Progress, streaks, friends':'التقدّم والاستمرارية والصحاب','Progress rings and charts, a day streak, and a ranking among friends.':'دواير ورسوم بتوضّح تقدّمك، وسلسلة أيام متتالية، وترتيب وسط صحابك.',
    'Key features':'أهم المميزات','Six ways Study Go supports your study routine.':'Study Go بيساعدك في مذاكرتك بـ 6 طرق.',
    'Seven ways Study Go supports your study routine.':'Study Go بيساعدك في مذاكرتك بـ 7 طرق.',
    'Calm sounds and distraction blocking':'أصوات هادية وحجب المشتتات',
    'Pick a white-noise sound like rain, cafe, forest or sea to help you concentrate. In Focus Setting, choose which apps to block during a session so distractions stay out of reach.':'اختار صوت هادي زي المطر أو الكافيه أو الغابة أو البحر عشان يساعدك تركّز. ومن إعدادات التركيز تقدر تحجب كل التطبيقات أو تختار بس اللي بتشتتك، عشان تفضل بعيد عن أي إلهاء وإنت بتذاكر.','Five things Study Go does.':'أهم مميزات Study Go.',
    'Create a task with a name, a type and a date, add a description, and set it to repeat daily. Subjects and groups get their own color and details.':'اعمل مهمة جديدة واكتب اسمها ونوعها وميعادها وتفاصيلها، وخليها تتكرر كل يوم لو عايز. وكل مادة أو جروب ليه لونه وتفاصيله.',
    'Set a daily study target':'حدّد هدف مذاكرتك اليومي',
    'Choose how many hours you want to study each day. Your target stays visible on the home screen throughout the day, so you can keep your goal in sight, check your progress, and stay motivated to reach it.':'اختار هتذاكر كام ساعة كل يوم. هدفك بيفضل ظاهر على الشاشة الرئيسية طول اليوم، فتفضل فاكره وتتابع وصلت لفين وتفضل متحمس توصله.',
    'See progress at a glance':'شوف تقدّمك من أول نظرة',
    'The dashboard shows today\'s focus and break time, with 7-day charts for focus and to-do progress.':'لوحة المتابعة بتعرض وقت التركيز ووقت الراحة النهارده، ومعاها رسوم لآخر 7 أيام لتركيزك وتقدّمك في المهام.',
    'Focus sessions':'جلسات التركيز',
    'Tomato Go pairs a timer with the task you are studying, plus white noise and music controls. A focus note can be added during a session.':'Tomato Go بيربط المؤقّت بالمهمة اللي بتذاكرها، ومعاه أصوات هادية وموسيقى. وتقدر تكتب ملاحظة وإنت في الجلسة.',
    'Streaks and friendly competition':'الاستمرارية والمنافسة الحلوة',
    'A daily streak rewards consistency, with clear streak rules. A ranking compares total study time among friends.':'سلسلة الأيام بتشجّعك تذاكر كل يوم، وقواعدها واضحة. والترتيب بيقارن وقت مذاكرتك بوقت صحابك.',
    'Friends, groups and chat':'الصحاب والجروبات والشات',
    'Join study groups, manage friends, and use the in-app chat assistant with quick reply suggestions.':'انضم لجروبات مذاكرة، وتابع صحابك، واستخدم المساعد جوه التطبيق مع اقتراحات ردود سريعة.',
    'Explore the app':'شوف التطبيق من جوه','Seven screens, one student day.':'7 شاشات بتحكي يوم طالب كامل.',
    'Design process':'مراحل التصميم','From student problems to a prototype.':'من مشاكل الطلاب لنموذج تفاعلي.',
    'Students can struggle with organization, distraction and consistency.':'الطلاب ممكن يلاقوا صعوبة في التنظيم، والتشتت، والمواظبة.',
    'The structure':'هيكل التطبيق',
    'Onboarding and sign-up lead to a home screen. Dashboard, focus timer, rankings, friends, groups and chat sit behind a floating bottom navigation.':'شاشات الترحيب وإنشاء الحساب بتوصّلك للشاشة الرئيسية. ومنها توصل لملخص التقدّم ومؤقّت التركيز والترتيب والصحاب والجروبات والشات من شريط تنقّل عايم تحت.',
    'The interface':'شكل الواجهة',
    'One blue primary, pill-shaped buttons, color-coded subjects and tasks, progress rings and bar charts, and a flame icon for the streak.':'لون أزرق أساسي، وأزرار بحواف مدوّرة، وكل مادة ومهمة ليها لون مميّز، ودواير ورسوم أعمدة للتقدّم، وأيقونة لهب لسلسلة الأيام.',
    'The prototype':'النموذج التفاعلي',
    'A high-fidelity Figma prototype of 15+ screens, with a design system covering typography, color palette, component library and layout grids.':'نموذج تفاعلي متكامل على Figma بأكتر من 15 شاشة، ومعاه نظام تصميم يشمل الخطوط والألوان ومكتبة العناصر وشبكات التخطيط.',
    'My role':'دوري','Platform':'المنصة','Tools':'الأدوات','Deliverable':'اللي سلّمته',
    'UI/UX Design':'تصميم واجهات وتجربة مستخدم','High-fidelity prototype':'نموذج تفاعلي متكامل',
    'A solo UI/UX project by Kareem Hawash · 2025–2026. Study Go is a design concept and prototype, not a released app.':'مشروع UI/UX فردي لكريم حواش · 2025–2026. Study Go فكرة تصميم ونموذج تجريبي، مش تطبيق منشور.',
    'Learn smarter, not harder. Plan, focus, and keep going together.':'ذاكر بذكاء مش بمجهود أكتر. نظّم، ركّز، وكمّل مع صحابك.',
    'Explore the screens again':'شوف الشاشات تاني',
    '· UI/UX case study by Kareem Hawash':'· دراسة حالة UI/UX لكريم حواش','Back to top ↑':'ارجع لفوق ↑','← Back to portfolio':'← ارجع للبورتفوليو',
    /* explore showcase (tabs, titles, captions) */
    'Welcome':'أهلًا بيك','Home':'الرئيسية','Dashboard':'ملخص التقدّم','Focus':'التركيز','Ranking':'الترتيب','Study room':'غرفة المذاكرة','Chat':'الشات',
    'Stay Focused':'ركّز في مذاكرتك','Chat go':'Chat go · المساعد',
    'Onboarding introduces focus, progress tracking and studying with friends in three short steps.':'شاشات الترحيب بتعرّفك على التركيز ومتابعة التقدّم والمذاكرة مع صحابك في 3 خطوات بسيطة.',
    'Today\'s progress, a day streak, subject and task progress rings, a list of study targets, and a daily study-hour goal that stays visible on the home screen.':'تقدّمك النهارده، وعدّاد أيام متتالية، ودواير تقدّم للمواد والمهام، وقايمة أهداف المذاكرة، وهدف ساعات يومي بيفضل ظاهر على الشاشة الرئيسية.',
    'Focus and break time for today, with 7-day charts for focus and to-do progress.':'وقت التركيز والراحة النهارده، ومعاهم رسوم لآخر 7 أيام لتركيزك وتقدّمك في المهام.',
    'A countdown ring with pause, stop and music controls, and a place to add a focus note.':'دايرة عدّ تنازلي فيها إيقاف مؤقّت وإنهاء وتحكّم في الموسيقى، ومكان تكتب فيه ملاحظة للجلسة.',
    'A ranking that compares total study time, with a daily view.':'ترتيب بيقارن إجمالي وقت المذاكرة، وفيه عرض يومي.',
    'A shared study room showing today\'s focus, the current focus session, and each member\'s time.':'غرفة مذاكرة مشتركة بتوضّح تركيز النهارده، وجلسة التركيز الحالية، ووقت كل عضو.',
    'An in-app assistant with quick reply suggestions such as creating a study schedule.':'مساعد جوه التطبيق بيقترح ردود سريعة، زي إنه يعمل لك جدول مذاكرة.'
  };
  /* Arabic for image descriptions and button labels (screen readers) */
  const attrs = {
    'Study Go dashboard with today\'s focus and break time and weekly focus charts':'لوحة المتابعة في Study Go بوقت التركيز والراحة النهارده ورسوم التركيز الأسبوعية',
    'Study Go home screen with daily progress, day streak and subject progress rings':'الشاشة الرئيسية في Study Go بالتقدّم اليومي وسلسلة الأيام ودواير تقدّم المواد',
    'Study Go focus screen with a running countdown ring':'شاشة التركيز في Study Go بدايرة عدّ تنازلي شغّالة',
    'Study Go Add task panel with task name, task type, date and description fields':'نافذة إضافة مهمة في Study Go فيها اسم المهمة ونوعها وميعادها وتفاصيلها',
    'Study Go daily target setting with an 8-hour goal, slider, Cancel and Save controls':'إعداد الهدف اليومي في Study Go بهدف 8 ساعات ومؤشّر سحب وأزرار إلغاء وحفظ',
    'Study Go dashboard with focus and break time and 7-day charts':'لوحة المتابعة في Study Go بوقت التركيز والراحة ورسوم آخر 7 أيام',
    'Study Go Tomato Go timer screen with a white noise bar and study math task':'شاشة مؤقّت Tomato Go في Study Go بشريط أصوات هادية ومهمة مذاكرة رياضيات',
    'Study Go ranking screen listing study time':'شاشة الترتيب في Study Go بقايمة أوقات المذاكرة',
    'Study Go Streak Rules panel':'نافذة قواعد سلسلة الأيام في Study Go',
    'Study Go My Groups screen':'شاشة جروباتي في Study Go',
    'Study Go Chat go assistant with quick reply suggestions':'مساعد Chat go في Study Go باقتراحات ردود سريعة',
    'Study Go ranking screen':'شاشة الترتيب في Study Go',
    'Study Go onboarding screen: Stay Focused':'شاشة الترحيب في Study Go: ركّز في مذاكرتك',
    'Study Go chat assistant screen':'شاشة المساعد في Study Go',
    'Study Go onboarding screen: Stay Focused':'شاشة الترحيب في Study Go: ركّز في مذاكرتك',
    'Study Go home screen with daily progress, day streak and progress rings':'الشاشة الرئيسية في Study Go بالتقدّم اليومي وسلسلة الأيام ودواير التقدّم',
    'Study Go study room screen with members and their focus times':'شاشة غرفة المذاكرة في Study Go بالأعضاء وأوقات تركيزهم',
    'Study Go white noise screen with sound options: None, clock, rain, wind, campfire, cafe, storm, sea, morning, desert, forest and river':'شاشة الأصوات الهادية في Study Go بخيارات: بدون، ساعة، مطر، رياح، نار مخيم، كافيه، عاصفة، بحر، صباح، صحراء، غابة ونهر',
    'Study Go Focus Setting panel with an All Apps checkbox and a select apps option':'نافذة إعدادات التركيز في Study Go فيها خيار كل التطبيقات وخيار اختيار تطبيقات',
    'Main':'القائمة الرئيسية','Choose a screen':'اختار شاشة','Enlarge this screen':'كبّر الشاشة دي',
    'Previous screen':'الشاشة اللي قبلها','Next screen':'الشاشة اللي بعدها','Close':'إغلاق','Screen viewer':'عارض الشاشات','Project summary':'ملخص المشروع'
  };
  const original = new Map();
  function tr(source) {
    if (translations[source]) return translations[source];
    let m = source.match(/^(\d+\.\s)(.+)$/) || source.match(/^(\d+ \/ \d+ · )(.+)$/);
    return m && translations[m[2]] ? m[1] + translations[m[2]] : null;
  }
  function translateNode(node) {
    if (!original.has(node)) original.set(node, node.nodeValue);
    const source = original.get(node).trim();
    if (!source) return;
    const t = tr(source);
    if (t) { const v = original.get(node).replace(source, t); if (v !== node.nodeValue) node.nodeValue = v; }
  }
  const skip = 'script,style,button#langToggle,button#themeToggle';
  function translateTree(el) {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) { const n = walker.currentNode; if (n.parentElement && !n.parentElement.closest(skip)) translateNode(n); }
  }
  function translateAttrs(ar) {
    document.querySelectorAll('img[alt],[aria-label]').forEach(el => {
      if (el === langBtn || el === themeBtn) return;
      ['alt','aria-label'].forEach(a => {
        if (!el.hasAttribute(a)) return;
        const k = 'en' + a;
        if (el.dataset[k] === undefined) el.dataset[k] = el.getAttribute(a);
        const en = el.dataset[k], v = ar && attrs[en] ? attrs[en] : en;
        if (el.getAttribute(a) !== v) el.setAttribute(a, v);
      });
    });
  }
  function applyLanguage(lang) {
    const ar = lang === 'ar';
    root.lang = ar ? 'ar' : 'en'; root.dir = ar ? 'rtl' : 'ltr';
    // Restore original text first, so switching languages never stacks translations.
    for (const [node, value] of original) if (node.isConnected) node.nodeValue = value;
    if (ar) translateTree(document.body);
    translateAttrs(ar);
    document.title = ar ? 'Study Go: ذاكر بذكاء مش بمجهود أكتر' : 'Study Go: Learn smarter, not harder';
    langBtn.textContent = ar ? 'English' : 'عربي';
    langBtn.setAttribute('aria-label', ar ? 'حوّل الموقع للإنجليزي' : 'حوّل الموقع للعربي');
    localStorage.setItem('studygo-lang', lang);
  }
  /* The showcase is built by app.js after this file loads, so translate it once the page is ready and whenever it changes. */
  function watch() {
    applyLanguage(root.lang === 'ar' ? 'ar' : 'en');
    const obs = new MutationObserver(muts => {
      if (root.lang !== 'ar') return;
      muts.forEach(m => {
        if (m.type === 'attributes') { translateAttrs(true); return; }
        if (m.type === 'characterData') { translateNode(m.target); return; }
        m.addedNodes.forEach(n => n.nodeType === 3 ? translateNode(n) : n.nodeType === 1 && translateTree(n));
      });
    });
    ['cap','lcap','tabs','steps'].forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el, {childList:true, characterData:true, subtree:true}); });
    const li = document.getElementById('limg'); if (li) obs.observe(li, {attributes:true, attributeFilter:['alt']});
  }
  document.addEventListener('DOMContentLoaded', watch);
  function applyTheme(theme) {
    root.dataset.theme = theme; const dark = theme === 'dark';
    themeBtn.innerHTML = dark ? '☀ <span>فاتح</span>' : '☾ <span>داكن</span>';
    themeBtn.setAttribute('aria-label', dark ? 'التبديل للوضع الفاتح' : 'التبديل للوضع الداكن');
    localStorage.setItem('studygo-theme', theme);
  }
  themeBtn.addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
  langBtn.addEventListener('click', () => applyLanguage(root.lang === 'ar' ? 'en' : 'ar'));
  applyTheme(localStorage.getItem('studygo-theme') || 'light');
  applyLanguage(localStorage.getItem('studygo-lang') || 'en');
})();

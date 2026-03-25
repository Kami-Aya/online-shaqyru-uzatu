const translations = {
    kz: {
        heroLabel: "ҚЫЗ ҰЗАТУ",
        musicText: "ӘНДІ ҚОСУ ҮШІН БАСЫҢЫЗ",
        headerText: "ҚҰРМЕТТІ ҚОНАҚТАР!",
        introText: "Сіздерді қызымыз",
        brideName: "Тоғжанның",
        mainDesc: "қыз ұзату тойына арналған дастарханымыздың қадірлі қонағы болуға шақырамыз.",
        wishText: "Бұл қуанышымыздың куәсі болып, ақ тілектеріңізді арнап, бақытты сәтімізді бірге бөліссеңіз — біз үшін үлкен мәртебе болмақ.",
        closing: "Ізгі тілекпен,",
        parentsLabel: "ата-анасы",
        month: "тамыз",
        weekday: "сәрсенбі",
        infoTitle: ["Той жайлы ақпарат:", "Тойдың басталу уақыты:", "Тойдың мекенжайы:"],
        ownersLabel: "Той иелері:",
        parentsLabelSmall: "ата-анасы: Нұржан - Әсел",
        timeDetail: "5 тамыз | 17:00",
        addressText: "Қосшы қаласы,<br>Республика көшесі, 155<br><strong>\"Хан Сарайы\" мейрамханасы</strong>",
        mapBtn: "2GIS арқылы ашу",
        timerTitle: "Қыз ұзатуға дейін:",
        calendarTitle: "Тамыз 2026",
        calendarDays: ["Дс", "Сс", "Ср", "Бс", "Жм", "Сб", "Жк"],
        rsvpTitle: "Құрметті қонақ,",
        rsvpSubtitle: "тойға келетініңізді нақтылаңыз:",
        labelName: "Есіміңіз",
        inputPlaceholder: "Аты-жөніңіз",
        labelAttend: "Келе аласыз ба?",
        radioYes: "Келемін",
        radioNo: "Өкінішке орай, келе алмаймын",
        labelCount: "Қанша адам болады?",
        submitBtn: "Жіберу",
        sending: "⌛ Жіберілуде...",
        successMsg: "✅ Жауабыңыз қабылданды! Рақмет.",
        errorMsg: "❌ Қате кетті. Қайта көріңіз."
    },
    ru: {
        heroLabel: "ПРОВОДЫ НЕВЕСТЫ",
        musicText: "НАЖМИТЕ, ЧТОБЫ ВКЛЮЧИТЬ МУЗЫКУ",
        headerText: "ДОРОГИЕ ГОСТИ!",
        introText: "Приглашаем вас на",
        brideName: "проводы невесты Тогжан",
        mainDesc: "Станьте почетными гостями на нашем торжественном дастархане.",
        wishText: "Для нас будет большой честью, если вы разделите с нами этот радостный момент.",
        closing: "С добрыми пожеланиями,",
        parentsLabel: "родители",
        month: "август",
        weekday: "среда",
        infoTitle: ["Информация о тойе:", "Время начала:", "Адрес мероприятия:"],
        ownersLabel: "Хозяева торжества:",
        parentsLabelSmall: "родители: Нуржан - Асель",
        timeDetail: "5 августа | 17:00",
        addressText: "город Косшы,<br>ул. Республика, 155<br><strong>Ресторан \"Хан Сарайы\"</strong>",
        mapBtn: "Открыть в 2GIS",
        timerTitle: "До проводов невесты:",
        calendarTitle: "Август 2026",
        calendarDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        rsvpTitle: "Дорогой гость,",
        rsvpSubtitle: "подтвердите ваше присутствие:",
        labelName: "Ваше имя",
        inputPlaceholder: "Имя и фамилия",
        labelAttend: "Сможете прийти?",
        radioYes: "Приду",
        radioNo: "К сожалению, не смогу",
        labelCount: "Сколько человек будет?",
        submitBtn: "Отправить",
        sending: "⌛ Отправка...",
        successMsg: "✅ Ваш ответ принят! Спасибо.",
        errorMsg: "❌ Ошибка. Попробуйте снова."
    }
};

function changeLang(lang) {
    const t = translations[lang];
    document.getElementById('btn-kz').classList.toggle('active', lang === 'kz');
    document.getElementById('btn-ru').classList.toggle('active', lang === 'ru');

    // Текст ауыстыру
    document.querySelector('.hero-label').innerText = t.heroLabel;
    document.querySelector('.music-text textPath').innerHTML = t.musicText + " &nbsp; ";
    document.querySelector('.header-text').innerText = t.headerText;
    document.querySelector('.intro-text').innerText = t.introText;
    document.querySelector('.bride-name').innerText = t.brideName;
    document.querySelector('.main-description').innerText = t.mainDesc;
    document.querySelector('.wish-text').innerText = t.wishText;
    document.querySelector('.closing').innerText = t.closing;
    document.querySelector('.parents-label').innerText = t.parentsLabel;
    document.querySelector('.month').innerText = t.month;
    document.querySelectorAll('.line-info')[0].innerText = t.weekday;

    const infoTitles = document.querySelectorAll('.info-title');
    t.infoTitle.forEach((title, i) => { if(infoTitles[i]) infoTitles[i].innerText = title; });

    document.querySelector('.label').innerText = t.ownersLabel;
    document.querySelector('.parents-names-small').innerText = t.parentsLabelSmall;
    document.querySelector('.time-detail').innerText = t.timeDetail;
    document.querySelector('.address-text').innerHTML = t.addressText;
    document.querySelector('.map-button').innerText = t.mapBtn;
    document.querySelector('.timer-title-main').innerText = t.timerTitle;
    document.querySelector('.calendar-title-main').innerText = t.calendarTitle;

    document.querySelectorAll('.timer-item label').forEach((label, i) => {
        const timerKeys = lang === 'kz' ? ['күн', 'сағат', 'минут', 'секунд'] : ['дней', 'часов', 'минут', 'секунд'];
        label.innerText = timerKeys[i];
    });

    document.querySelectorAll('.day-name').forEach((day, i) => { if(t.calendarDays[i]) day.innerText = t.calendarDays[i]; });

    // RSVP Form аудармасы
    document.querySelector('.title-script').innerText = t.rsvpTitle;
    document.querySelector('.rsvp-subtitle').innerText = t.rsvpSubtitle;
    const labels = document.querySelectorAll('#rsvp-form .input-group > label');
    labels[0].innerText = t.labelName;
    labels[1].innerText = t.labelAttend;
    if(labels[2]) labels[2].innerText = t.labelCount;
    document.getElementById('name').placeholder = t.inputPlaceholder;
    const radioSpans = document.querySelectorAll('.radio-label span');
    radioSpans[0].innerText = t.radioYes;
    radioSpans[1].innerText = t.radioNo;
    document.querySelector('.submit-btn').innerText = t.submitBtn;
}

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. МУЗЫКА ---
    const music = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-btn");
    const icon = document.getElementById("music-icon");
    if (musicBtn && music) {
        musicBtn.addEventListener('click', () => {
            if (music.paused) { music.play().then(() => icon.innerText = "II"); } 
            else { music.pause(); icon.innerText = "▶"; }
        });
    }

    // --- 2. ТАЙМЕР ---
    function updateTimer() {
        const diff = new Date("August 5, 2026 18:00:00").getTime() - new Date().getTime();
        if (diff > 0) {
            document.getElementById("days").innerText = Math.floor(diff / 86400000).toString().padStart(2, '0');
            document.getElementById("hours").innerText = Math.floor((diff % 86400000) / 3600000).toString().padStart(2, '0');
            document.getElementById("minutes").innerText = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
            document.getElementById("seconds").innerText = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
        }
    }
    setInterval(updateTimer, 1000);

    // --- 3. RSVP ЛОГИКАСЫ ---
    const rsvpForm = document.getElementById('rsvp-form');
    if (rsvpForm) {
        // Келемін/Келмеймін таңдауын бақылау
        document.querySelectorAll('input[name="attendance"]').forEach(radio => {
            radio.addEventListener('change', function() {
                const guestGroup = document.getElementById('person-count-group');
                guestGroup.style.display = (this.value === 'Келемін' || this.value === 'Приду') ? 'block' : 'none';
            });
        });

        // Форманы жіберу (Telegram + Google Sheets)
        rsvpForm.addEventListener('submit', e => {
            e.preventDefault();
            const lang = document.getElementById('btn-kz').classList.contains('active') ? 'kz' : 'ru';
            const status = document.getElementById('form-status');
            status.innerHTML = translations[lang].sending;

            const formData = new FormData(rsvpForm);
            const name = document.getElementById('name').value;
            const attendance = document.querySelector('input[name="attendance"]:checked').value;
            const guests = document.getElementById('guests')?.value || "1";

            // Telegram деректері
            const token = '8784948066:AAGG0z7R0iBa0CQO74deRq_7RecqyeltXmM';
            const chatId = '565766719';
            const message = `<b>🔔 Жаңа жауап!</b>\n<b>👤 Есімі:</b> ${name}\n<b>✅ Таңдауы:</b> ${attendance}\n<b>👥 Адам саны:</b> ${guests}`;
            const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}&parse_mode=html`;

            Promise.all([
                fetch('https://script.google.com/macros/s/AKfycbwsTGP5-QP4ue9ltMwnDO3a48axlJvsktS2yH_T-xkZDEpD7WrLLarEOASwWzKhLl7tmw/exec', { method: 'POST', body: formData }),
                fetch(telegramUrl)
            ]).then(() => {
                status.innerHTML = translations[lang].successMsg;
                rsvpForm.reset();
                rsvpForm.style.display = 'none';
            }).catch(() => {
                status.innerHTML = translations[lang].errorMsg;
            });
        });
    }
});
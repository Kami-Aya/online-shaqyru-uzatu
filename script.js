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
        heroLabel: "ҚЫЗ ҰЗАТУ",
        musicText: "НАЖМИТЕ ЧТОБЫ ВКЛЮЧИТЬ МУЗЫКУ ",
        headerText: "ДОРОГИЕ ГОСТИ!",
        introText: "Приглашаем вас на",
        brideName: "ҚЫЗ ҰЗАТУ нашей дочери Тоғжан",
        mainDesc: "В жизни каждой семьи есть моменты, полные трепета и счастья.",
        wishText: "Мы хотим провести этот важный вечер в кругу близких людей, чья поддержка и добрые слова нам так дороги. Разделите с нами этот счастливый миг, став почетными гостями нашего торжества",
        closing: "С наилучшими пожеланиями,",
        parentsLabel: "родители",
        month: "август",
        weekday: "среда",
        infoTitle: ["Информация о тойе:", "Время начала:", "Адрес мероприятия:"],
        ownersLabel: "Хозяева торжества:",
        parentsLabelSmall: "родители: Нуржан - Асель",
        timeDetail: "5 августа | 17:00",
        addressText: "город Косшы,<br>ул. Республика, 155<br><strong>Ресторан \"Хан Сарайы\"</strong>",
        mapBtn: "Открыть в 2GIS",
        timerTitle: "До Қыз ұзату:",
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
    if (!t) return;

    document.getElementById('btn-kz').classList.toggle('active', lang === 'kz');
    document.getElementById('btn-ru').classList.toggle('active', lang === 'ru');

    // Текст ауыстыру функциясы (қателерді болдырмау үшін)
    const setElText = (selector, text, isHTML = false) => {
        const el = document.querySelector(selector);
        if (el) isHTML ? el.innerHTML = text : el.innerText = text;
    };

    setElText('.hero-label', t.heroLabel);
    setElText('.music-text textPath', t.musicText + " &nbsp; ", true);
    setElText('.header-text', t.headerText);
    setElText('.intro-text', t.introText);
    setElText('.bride-name', t.brideName);
    setElText('.main-description', t.mainDesc);
    setElText('.wish-text', t.wishText);
    setElText('.closing', t.closing);
    setElText('.parents-label', t.parentsLabel);
    setElText('.month', t.month);

    const lineInfo = document.querySelectorAll('.line-info');
    if (lineInfo[0]) lineInfo[0].innerText = t.weekday;

    const infoTitles = document.querySelectorAll('.info-title');
    t.infoTitle.forEach((title, i) => { if(infoTitles[i]) infoTitles[i].innerText = title; });

    setElText('.label', t.ownersLabel);
    setElText('.parents-names-small', t.parentsLabelSmall);
    setElText('.time-detail', t.timeDetail);
    setElText('.address-text', t.addressText, true);
    setElText('.map-button', t.mapBtn);
    setElText('.timer-title-main', t.timerTitle);
    setElText('.calendar-title-main', t.calendarTitle);

    document.querySelectorAll('.timer-item label').forEach((label, i) => {
        const timerKeys = lang === 'kz' ? ['күн', 'сағат', 'минут', 'секунд'] : ['дней', 'часов', 'минут', 'секунд'];
        label.innerText = timerKeys[i];
    });

    document.querySelectorAll('.day-name').forEach((day, i) => { if(t.calendarDays[i]) day.innerText = t.calendarDays[i]; });

    setElText('.title-script', t.rsvpTitle);
    setElText('.rsvp-subtitle', t.rsvpSubtitle);
    
    const labels = document.querySelectorAll('#rsvp-form .input-group > label');
    if(labels[0]) labels[0].innerText = t.labelName;
    if(labels[1]) labels[1].innerText = t.labelAttend;
    if(labels[2]) labels[2].innerText = t.labelCount;
    
    const nameInput = document.getElementById('name');
    if(nameInput) nameInput.placeholder = t.inputPlaceholder;
    
    const radioSpans = document.querySelectorAll('.radio-label span');
    if(radioSpans[0]) radioSpans[0].innerText = t.radioYes;
    if(radioSpans[1]) radioSpans[1].innerText = t.radioNo;
    
    setElText('.submit-btn', t.submitBtn);
}

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. МУЗЫКА ---
    const music = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-btn");
    const icon = document.getElementById("music-icon");

    if (musicBtn && music) {
        musicBtn.addEventListener('click', () => {
            if (music.paused) { 
                music.play().then(() => {
                    icon.innerHTML = "II&#xFE0E;"; 
                }).catch(e => console.error("Music play failed:", e)); 
            } else { 
                music.pause(); 
                icon.innerHTML = "&#9654;&#xFE0E;"; 
            }
        });
    }

    // --- 2. ТАЙМЕР ---
    function updateTimer() {
        const targetDate = new Date("August 5, 2026 18:00:00").getTime();
        const now = new Date().getTime();
        const diff = targetDate - now;

        if (diff > 0) {
            const d = document.getElementById("days");
            const h = document.getElementById("hours");
            const m = document.getElementById("minutes");
            const s = document.getElementById("seconds");

            if(d) d.innerText = Math.floor(diff / 86400000).toString().padStart(2, '0');
            if(h) h.innerText = Math.floor((diff % 86400000) / 3600000).toString().padStart(2, '0');
            if(m) m.innerText = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
            if(s) s.innerText = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
        }
    }
    setInterval(updateTimer, 1000);
    updateTimer();

    // --- 3. RSVP ЛОГИКАСЫ ---
    const rsvpForm = document.getElementById('rsvp-form');
    if (rsvpForm) {
        document.querySelectorAll('input[name="attendance"]').forEach(radio => {
            radio.addEventListener('change', function() {
                const guestGroup = document.getElementById('person-count-group');
                if (guestGroup) {
                    guestGroup.style.display = (this.value === 'Келемін' || this.value === 'Приду') ? 'block' : 'none';
                }
            });
        });

        rsvpForm.addEventListener('submit', e => {
            e.preventDefault();
            const lang = document.getElementById('btn-kz').classList.contains('active') ? 'kz' : 'ru';
            const status = document.getElementById('form-status');
            if(status) status.innerHTML = translations[lang].sending;

            const formData = new FormData(rsvpForm);
            const name = document.getElementById('name').value;
            const attendEl = document.querySelector('input[name="attendance"]:checked');
            const attendance = attendEl ? attendEl.value : "Unknown";
            const guests = document.getElementById('guests')?.value || "1";

            const token = '8784948066:AAGG0z7R0iBa0CQO74deRq_7RecqyeltXmM';
            const chatId = '565766719';
            const message = `<b>🔔 Жаңа жауап!</b>\n<b>👤 Есімі:</b> ${name}\n<b>✅ Таңдауы:</b> ${attendance}\n<b>👥 Адам саны:</b> ${guests}`;
            const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}&parse_mode=html`;

            Promise.all([
                fetch('https://script.google.com/macros/s/AKfycbwsTGP5-QP4ue9ltMwnDO3a48axlJvsktS2yH_T-xkZDEpD7WrLLarEOASwWzKhLl7tmw/exec', { method: 'POST', body: formData }),
                fetch(telegramUrl)
            ]).then(() => {
                if(status) status.innerHTML = translations[lang].successMsg;
                rsvpForm.reset();
                rsvpForm.style.display = 'none';
            }).catch(() => {
                if(status) status.innerHTML = translations[lang].errorMsg;
            });
        });
    }
});

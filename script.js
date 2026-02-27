// بيانات تجريبية للألحان
const hymnsData = {
    annual: [
        { title: "لحن تاي شوري السنوي", url: "link_to_audio_1.mp3" },
        { title: "الهيتينيات السنوي", url: "link_to_audio_2.mp3" }
    ],
    fasting: [
        { title: "لحن إنثو تيه تي شوري (الصوم الكبير)", url: "link_to_audio_3.mp3" },
        { title: "ميغالو (أسبوع الآلام)", url: "link_to_audio_4.mp3" }
    ],
    joyful: [
        { title: "لحن إبؤرو (الفرايحي)", url: "link_to_audio_5.mp3" }
    ],
    palm: [
        { title: "لحن أفلوجيمينوس", url: "link_to_audio_6.mp3" }
    ],
    sad: [
        { title: "لحن بيك إثرونوس (الحزايني)", url: "link_to_audio_7.mp3" }
    ]
};

function showCategory(category) {
    const container = document.getElementById('songs-container');
    const title = document.getElementById('category-title');
    
    // مسح المحتوى القديم
    container.innerHTML = '';
    
    // تحديث العنوان
    const names = { annual: 'السنوي', fasting: 'الصيام', joyful: 'الفرايحي', palm: 'الشعنيني', sad: 'الحزايني' };
    title.innerText = "ألحان المناسبات " + names[category];

    // إضافة الألحان
    hymnsData[category].forEach(hymn => {
        const div = document.createElement('div');
        div.className = 'audio-item';
        div.innerHTML = `
            <span>${hymn.title}</span>
            <audio controls>
                <source src="${hymn.url}" type="audio/mpeg">
                متصفحك لا يدعم تشغيل الصوت.
            </audio>
        `;
        container.appendChild(div);
    });
}
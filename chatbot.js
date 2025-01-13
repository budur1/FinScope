// Static Answers for Suggested Questions
// Static Answers for Suggested Questions
const staticAnswers = {
    "ما أبرز النقاط في التقرير المالي السنوي لشركة 'سابك' لعام 2024؟": `
        <strong>نتائج سابك 2024م:</strong><br>
        <ul>
            <li><strong>الإيرادات:</strong> 141.54 مليار ريال (+3%).</li>
            <li><strong>صافي الربح:</strong> 2.4 مليار ريال (بعد خسارة 2.77 مليار في 2023م).</li>
            <li><strong>مشاريع:</strong> استثمار 6.4 مليار دولار في الصين (ينتهي 2026م).</li>
            <li><strong>ابتكار:</strong> تدشين أكبر منشأة طاقة شمسية بمواد دائرية.</li>
            <li><strong>استدامة:</strong> تحسن الأداء البيئي بنسبة 60%.</li>
        </ul>
            <p>للمزيد: <a href="https://www.sabic.com/en" class="sabic-link">sabic.com</a></p>
    `, 

    "أعد تقريرًا تحليليًا عن أداء قطاع التجزئة في السوق السعودي خلال النصف الأول من عام 2024": `
        <strong>تحليل أداء قطاع التجزئة في السعودية (النصف الأول من 2024):</strong><br>
        شهد قطاع التجزئة في المملكة العربية السعودية خلال النصف الأول من عام 2024 استقرارًا نسبيًا، على الرغم من التحديات التي واجهها، مثل دخول مشاريع تجزئة جديدة ذات جودة عالية وزيادة طلب المستهلكين على تجارب تسوق متطورة. 
        <br><br>
        <strong>التوقعات المستقبلية:</strong> تُظهر التوقعات المستقبلية تفاؤلًا بشأن القطاع، حيث يُتوقع أن يستفيد من زيادة الإنفاق على التجزئة ونمو عدد السياح، مما يدعم الطلب المستقبلي.
        <br><br>
        بالإضافة إلى ذلك، يُتوقع أن يصل حجم قطاع التجزئة في المملكة إلى 460 مليار ريال بنهاية عام 2024، مما يعكس نموًا ملحوظًا في هذا القطاع الحيوي.
    `, 

    "ما هي نسبة نمو الأرباح الصافية لشركة 'الاتصالات السعودية' في الربع الثالث مقارنة بالربع السابق؟": `
        <strong>نسبة نمو الأرباح الصافية لشركة 'الاتصالات السعودية' في الربع الثالث مقارنة بالربع السابق:</strong><br>
        ارتفع صافي أرباح شركة الاتصالات السعودية (stc) في الربع الثالث من عام 2024 بنسبة 40.5% مقارنة بالربع السابق، حيث بلغ صافي الربح 4.64 مليار ريال سعودي، مقارنة بـ 3.3 مليار ريال في الربع الثاني.
    `
};


function sendSuggestedQuestion(question) {
    const chatBox = document.querySelector(".chat-box");

    const userMessage = document.createElement("div");
    userMessage.classList.add("chat-message", "user");
    userMessage.innerHTML = `<div class="message">${question}</div>`;
    chatBox.appendChild(userMessage);

    const botMessage = document.createElement("div");
    botMessage.classList.add("chat-message", "bot");
    botMessage.innerHTML = `<div class="message">${staticAnswers[question]}</div>`;
    chatBox.appendChild(botMessage);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendUserMessage() {
    const userMessageText = document.getElementById("user-input").value;

    if (userMessageText.trim()) {
        const chatBox = document.querySelector(".chat-box");

        const userMessage = document.createElement("div");
        userMessage.classList.add("chat-message", "user");
        userMessage.innerHTML = `<div class="message">${userMessageText}</div>`;
        chatBox.appendChild(userMessage);

        document.getElementById("user-input").value = '';

        const botMessage = document.createElement("div");
        botMessage.classList.add("chat-message", "bot");
        botMessage.innerHTML = `<div class="message">تم استلام سؤالك. شكرًا!</div>`;
        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// Event listeners for the suggestion question buttons
document.getElementById("question1").addEventListener("click", function() {
    sendSuggestedQuestion("ما أبرز النقاط في التقرير المالي السنوي لشركة 'سابك' لعام 2024؟");
});
document.getElementById("question2").addEventListener("click", function() {
    sendSuggestedQuestion("أعد تقريرًا تحليليًا عن أداء قطاع التجزئة في السوق السعودي خلال النصف الأول من عام 2024");
});
document.getElementById("question3").addEventListener("click", function() {
    sendSuggestedQuestion("ما هي نسبة نمو الأرباح الصافية لشركة 'الاتصالات السعودية' في الربع الثالث مقارنة بالربع السابق؟");
});

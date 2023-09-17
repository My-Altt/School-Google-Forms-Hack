function attachEventListeners() {
    let startQuesRadio = document.getElementById('startQues');
    startQuesRadio.addEventListener('click', () => startQuesRadio.select());

    document.getElementById('endQuesRadio').addEventListener('click', () => {
        let lastQuesRadio = document.getElementById('lastQuesRadio');
        lastQuesRadio.checked = false;
        let fieldText = document.getElementById('endQuesField');
        fieldText.select();
    });

    let textField = document.getElementById('endQuesField');
    textField.addEventListener('click', () => {
        let lastQuesRadio = document.getElementById('lastQuesRadio');
        lastQuesRadio.checked = false;
        let endQuesRadio = document.getElementById('endQuesRadio');
        endQuesRadio.checked = true;
        textField.select();
    });

    document.getElementById('lastQuesRadio').addEventListener('click', () => {
        let endQuesRadio = document.getElementById('endQuesRadio');
        endQuesRadio.checked = false;
    })
}

attachEventListeners();

let form = document.querySelector("form");

form.addEventListener("submit", function (event, activeTab) {
    try {
        const data = new FormData(form);
        const startQues = parseInt(data.get("startQues"));
        const endQues = parseInt(data.get("endQues"));
        const lastQues = data.get("lastQues");

        if (Math.min(startQues, endQues) < 1 || startQues > endQues) {
            throw new Error('Invalid range');
        }
}, 

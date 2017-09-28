window.onload = startVoiceGuide;

function startVoiceGuide() {
  window.speechSynthesis.cancel();
  const recognition = new webkitSpeechRecognition();

  const categories = [
    {
      name: 'FOOD',
      keywords: ['hungry', 'food', 'eat'],
      url: './food.html',
    },
    {
      name: 'SHELTER',
      keywords: ['shelter', 'sleep', 'warm'],
      url: './shelter.html',
    },
    {
      name: 'JOB',
      keywords: ['job', 'employ', 'work'],
      url: './job.html',
    },
  ];

  speakToUser("What would you like help with?")
    .then(() => speakToUser("You can say things like I'm hungry, I want a job, or a place to sleep."))
    .then(listenForResponse)
    .then(parseUserResponse)
    .catch(error => console.error);

  function speakToUser(textToSay) {
    const message = new SpeechSynthesisUtterance(textToSay);
    console.log(message);
    const promise = new Promise(resolve => {
      message.onend = (result) => {
        console.log(result);
        resolve();
      }
    });
    window.speechSynthesis.speak(message);
    return promise;
  }

  function listenForResponse() {
    document.getElementById("listening-icon").classList.remove('hidden');
    const promise = new Promise(resolve => {
      recognition.onresult = resolve;
    });
    recognition.start();
    return promise;
  }

  function parseUserResponse(event) {
    const spoken = event.results[0][0].transcript;
    const confidence = event.results[0][0].confidence;
    console.log(`Speech recognition confidence in it's understanding of the speech is: ${confidence}`);
    console.log(`Speech was understood as: ${spoken}`);

    const chosenCategory = categories.find(category => isKeywordInSpeech(spoken, category));

    document.getElementById("listening-icon").classList.add('hidden');

    if (chosenCategory === undefined) {
      speakToUser("Sorry, I can't find what you're looking for");
    } else {
      window.location.href = chosenCategory.url;
    }
  }

  function isKeywordInSpeech(spoken, category) {
    const foundKeyword = category.keywords.find(keyword => spoken.includes(keyword));
    return foundKeyword !== undefined;
  }
}

let searchForm = document.querySelector('#search-form');
let searchFormInput = document.querySelector('input');


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;




if(SpeechRecognition){
  
    searchForm.insertAdjacentHTML('beforeend', '<button type="button"><i class="fas fa-microphone"></i></button>');

    const microBtn = document.querySelector('button');
    const microIcon = document.querySelector('i');

    console.log('Hi, Chrome')

    let recognition = new SpeechRecognition();

     recognition.continuous = true; 

    microBtn.addEventListener('click', () =>{
        if(microIcon.classList.contains('fa-microphone')){
            recognition.start();  
        } else{
            recognition.stop();
        }
    });

    recognition.addEventListener('start', () =>{   // start Speech
        microIcon.classList.remove('fa-microphone');
        microIcon.classList.add('fa-microphone-alt-slash');
        console.log('Active record');
    });

    recognition.addEventListener('end', () =>{  // stop Speech
        microIcon.classList.add('fa-microphone');
        microIcon.classList.remove('fa-microphone-alt-slash');
        console.log('End record');
    });

  
    recognition.addEventListener("result",resultOfSpeechRecognition);
    function resultOfSpeechRecognition(event) {
        var currentResultIndex = event.resultIndex;
        var transcript = event.results[currentResultIndex][0].transcript;
       
        if(transcript.toLowerCase().trim().includes("поиск") || transcript.toLowerCase().trim().includes("найти")) {
            searchFormInput.value = transcript.replace("поиск","").replace("найти","").trim();
            searchForm.submit()
             }
             
       
 
  //  }
     //   setTimeout(() => {
       //     searchForm.submit();
       // }, 500);
    }
}
   
 else{
    console.log('no');
}

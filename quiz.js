const questions=[
    {
        'ques':'Which of the following is a Markup Language?',
        '1':'HTML',
        '2':'CSS',
        '3':'JavaScript',
        '4':'React',
        'correct':'1'
    },
    {
        'ques':'Identify the incorrect HTML tag among the following',
        '1':'<input>',
        '2':'<list>',
        '3':'<textarea>',
        '4':'<b>',
        'correct':'2'
    },
    {       
        'ques':'What is the correct HTML for creating a hyperlink?',
        '1':'<a name="">A</a>',
        '2':'<a>B</a>',
        '3':'<a href="http://www.example.com">example</a>',
        '4':'<a url="http://www.example.com">example</a>',
        'correct':'3'
        
    },
    {       
        'ques':'How can you open a link in a new browser window?',
        '1':'<a href="url" new>',
        '2':'<a href="url" target="new">',
        '3':'<a href="url" target="_blank">',
        '4':'<a href="url" target="">',
        'correct':'3'
        
    },
    {       
        'ques':'What are meta tags used for?',
        '1':'To store information usually relevant to browsers and search engines',
        '2':'To only store information usually relevant to browsers',
        '3':'To only store information about search engines',
        '4':'To store information about external links',
        'correct':'1'
        
    }

];

let index=0;
let total=questions.length;
let correct_ans=0;
let ques=document.querySelector(".ques");
let options=document.querySelectorAll("input");
let submit=document.querySelector(".submit");
let container=document.querySelector(".container");
let endContainer=document.querySelector(".endContainer");
let restartbtn=document.querySelector(".restart");
let flag=true;


const loadQuestions= () =>{
    container.classList.remove("hide");
    if (flag===false){
    index=0;
    correct_ans=0;
   options.forEach((option)=>{
    option.checked=false;
   })

    }
    if (index===total){
        endQuiz();
    }
    let q=questions[index];
    ques.innerText=`${index+1}. `+q.ques;

    options[0].nextElementSibling.innerText=q[1];
    options[1].nextElementSibling.innerText=q[2];
    options[2].nextElementSibling.innerText=q[3];
    options[3].nextElementSibling.innerText=q[4];
    flag=true;
}

const getAnswer=()=>{
    let answer;
    options.forEach((option)=>{
        
        if(option.checked){
            answer=option.value;
            console.log(answer);
        }
    })
    return answer;
}

submit.addEventListener("click",()=>{
    let ans=getAnswer();

    if (questions[index].correct === ans){
        correct_ans++;
    }
    options.forEach((option)=>{
        option.checked=false;
    })
    index++;
    loadQuestions();
});

const endQuiz = () =>{

    container.classList.add("hide");
    endContainer.classList.remove("hideCon");
    restartbtn.classList.remove("hideCon");
    endContainer.innerText=`You have scored ${correct_ans}/${total}`;

    
restartbtn.addEventListener("click",()=>{
    endContainer.classList.add("hideCon");
    restartbtn.classList.add("hideCon");
    flag=false;
    loadQuestions();
      
});
    

}
loadQuestions();
// requires 2 hours to complete

// API data

const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable descaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

// global variables declarations

const accordionBody = document.querySelector(".accordion_body");

const faqs = [];

function showFaq() {}

// function for creating faq and its elements

function createFaq(item) {
  const faq = document.createElement("div");
  const faqHeader = document.createElement("div");
  const questionH3 = document.createElement("h3");
  const showBtn = document.createElement("button");
  const answerPara = document.createElement("p");

  // adding attributes to the elements

  faq.className = "faq";
  faqHeader.className = "faq_header";
  showBtn.className = "show_btn";
  answerPara.className = "hidden";
  faq.id = "1";

  // adding content to elements

  questionH3.textContent = item.question;
  showBtn.textContent = "+";
  answerPara.textContent = item.answer;

  // adding event listeners

  showBtn.addEventListener("click", (e) => {
    // console.log("btn clicked");
    // console.dir(e.target);
    // e.target.classList.add("active");
    // console.log(e.target.classList);
    const classListArray = Array.from(e.target.classList);
    // console.log(classListArray.includes("active"));
    if (classListArray.includes("active")) {
      e.target.classList.remove("active");
      e.target.parentElement.nextElementSibling.className = "hidden";
    } else {
      e.target.classList.add("active");
      e.target.parentElement.nextElementSibling.className = " ";
    }
  });

  // appending elements to their parent elements
  faq.appendChild(faqHeader);
  faq.appendChild(answerPara);

  faqHeader.appendChild(questionH3);
  faqHeader.appendChild(showBtn);

  accordionBody.appendChild(faq);
}

// Getting all the accordion items from API

faqData.map((item) => {
  createFaq(item);
});

// const showBtnElement = document.querySelector(".show_btn");
// showBtnElement.addEventListener("click", (e) => {
//   console.log("btn clicked");
//   console.dir(e.target);
// });

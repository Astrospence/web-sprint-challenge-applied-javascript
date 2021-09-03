import axios from "axios";

const Tabs = (topics) => {
  //creating elements
  const top = document.createElement('div');
  const item1 = document.createElement('div');
  const item2 = document.createElement('div');
  const item3 = document.createElement('div');
  const item4 = document.createElement('div');
  const item5 = document.createElement('div');

  //adding classes
  top.classList.add('topics');
  item1.classList.add('tab');
  item2.classList.add('tab');
  item3.classList.add('tab');
  item4.classList.add('tab');
  item5.classList.add('tab');
  

  //adding content
  item1.textContent = topics[0];
  item2.textContent = topics[1];
  item3.textContent = topics[2];
  item4.textContent = topics[3];
  item5.textContent = topics[4];

  //building out the element
  top.appendChild(item1);
  top.appendChild(item2);
  top.appendChild(item3);
  top.appendChild(item4);
  top.appendChild(item5);

  return top;
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {
  const tabsContainer = document.querySelector(selector);

  axios.get('http://localhost:5000/api/topics')
    .then(response => {
      tabsContainer.appendChild(Tabs(response.data.topics));
    })
    .catch(err => {
      console.log(err);
    })
    return tabsContainer;
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }

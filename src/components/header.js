const Header = (title, date, temp) => {
  //creating elements
  const header = document.createElement('div');
  const dte = document.createElement('span');
  const ttle = document.createElement('h1');
  const tmp = document.createElement('span');

  //adding classes
  header.classList.add('header');
  dte.classList.add('date');
  tmp.classList.add('temp');

  //adding content
  dte.textContent = date;
  ttle.textContent = title;
  tmp.textContent = temp;
  
  //building out header element
  header.appendChild(dte);
  header.appendChild(ttle);
  header.appendChild(tmp);

  return header;
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  const container = document.querySelector(`'${selector}'`);
  container.appendChild(Header('Lambda Times', 'JANUARY 6, 2021', '26°'));
  return container;
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }

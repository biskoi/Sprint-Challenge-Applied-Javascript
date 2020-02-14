// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function headerMaker(attr) {
    const header = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerH1 = document.createElement('h1');
    const headerTemp = document.createElement('span');

    header.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    headerDate.textContent = attr.date;
    headerH1.textContent = attr.header;
    headerTemp.textContent = attr.temp;

    header.append(headerDate, headerH1, headerTemp);

    return header;

}

let defaultHead = {
    date: 'MARCH 28, 2019',
    header: 'Lambda Times',
    temp: '98°'
}

let headerParent = document.querySelector('.header-container');

headerParent.append(headerMaker(defaultHead));

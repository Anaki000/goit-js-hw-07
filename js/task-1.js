const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);


categories.forEach((element) => {
    const header = element.firstElementChild.textContent;
    console.log(`Category: ${header}`);

    const elements = element.lastElementChild.childElementCount;
    console.log(`Elements: ${elements}`);

});
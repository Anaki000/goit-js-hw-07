const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`)



categories.forEach((category) => {
    const headers = category.firstElementChild.textContent;
    console.log(`Category: ${headers}`);
    const elements = category.lastElementChild.childElementCount;
    console.log(`Elements: ${elements}`)
})








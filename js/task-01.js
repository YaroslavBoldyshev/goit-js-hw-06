const categoriesList = document.querySelector('#categories');
const categoriesArr = categoriesList.children;
const numberCategories = categoriesArr.length;
console.log('Number of categories:', numberCategories);

function logNameAndNumberOfItems(arr) {
    [...arr].map(item => {
        console.log('Category:', item.querySelector('h2').textContent);
        console.log('Elements:', item.querySelector('ul').children.length);
    })
}
logNameAndNumberOfItems(categoriesArr);

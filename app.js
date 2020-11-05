const infoList = document.getElementById('infoList');
const searchBar = document.getElementById('searchBar');
let info = [];

// FUZZY SEARCH
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = info.filter((content) => {
        return (
            content.firstname.toLowerCase().includes(searchString) ||
            content.lastname.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

// API FETCH (praegu on ainult 1 API)
const loadCharacters = async() => {
    try {
        const teach = await fetch('https://be.ta19heinsoo.itmajakas.ee/api/teachers')
        info = await teach.json();

        displayCharacters(info);
    } catch (err) {
        console.error(err);
    }
};

// API INFO HTML-i
const displayCharacters = (contentAll) => {
    const htmlString = contentAll
        .map((content) => {
            return `<p class="content">${content.firstname} ${content.lastname}</p>`;
        })
        .join('');
    infoList.innerHTML = htmlString;
};

loadCharacters();
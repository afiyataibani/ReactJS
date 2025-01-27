// 1. Search Bar (Real-Time Filtering):
// Problem: Create a search bar component that filters a list of names as the user types.
// Real-Life Example: A search bar on a contact list that filters and shows matching names as the user types (e.g., "John", "Jane").
function SearchBar() {
    const searchDiv = document.getElementById("search-bar");

    const heading = document.createElement("h1");
    heading.textContent = "1. Search Contact List";
    heading.style.textDecoration = "underline";

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search by name";

    const names = ["John", "Jane", "Alice", "Bob", "Charlie", "David", "Eva"];
    const listContainer = document.createElement("ul");

    const filterList = () => {
        listContainer.innerHTML = "";
        const searchTerm = searchInput.value.toLowerCase();
        names.forEach(name => {
            if (name.toLowerCase().includes(searchTerm)) {
                const listItem = document.createElement("li");
                listItem.style.fontSize = "20px";
                listItem.textContent = name;
                listContainer.appendChild(listItem);
            }
        });
    };

    searchDiv.appendChild(heading);
    searchDiv.appendChild(searchInput);
    searchDiv.appendChild(listContainer);

    filterList();
    searchInput.onkeyup = filterList;
}

SearchBar();

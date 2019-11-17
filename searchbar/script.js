const notes = [{
    title: "My next trip",
    body: "Id like to go to spain"
}, {
    title: "Office supplies",
    body: "Stapler, coffee"
}, {
    title: "Osama Bin Laden",
    body: "Yep"
}];

const filter = {
    searchText: ""
}

const renderNotes = function (filter, notes) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filter.searchText.toLowerCase())
    })

    document.querySelector("#notes-area").innerHTML = ""

    filteredNotes.forEach(note => {
        const noteEl = document.createElement("p");
        noteEl.textContent = note.title;
        document.querySelector("#notes-area").appendChild(noteEl)
    });
}

renderNotes(filter, notes);

document.querySelector("#search-text").addEventListener("input", e => {
    filter.searchText = e.target.value;
    renderNotes (filter, notes);
});
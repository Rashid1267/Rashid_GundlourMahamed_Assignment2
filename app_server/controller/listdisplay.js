const listDisplay = function (req, res) {
    res.render('list-display', { title: 'Book List', list: listArray });
}

const listArray = [
    { name: "A Promised Land", Author: "Barack Obama" },
    { name: "The World between us", Author: "Sara Naveed" },
    { name: "Of Thee I Sing", Author: "Barack Obama" }
]

module.exports = {
    listDisplay
};


class IngredientsList extends React.Component {
    renderListItem(ingredient, i) {
        return React.createElement("li", { key: i }, ingredient)
    }
    render() {
        return React.createElement("ul", {className: "ingredients"},
            this.props.items.map(this.renderListItem)
        )
    }
}

const items = [
    "1 lb Salmon",
    "1 cup Pine Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil",
    "3 cloves of Garlic"
];
ReactDOM.render(
    React.createElement(IngredientsList, {items}, null),
    document.getElementById('react-container')
);
// let dish = React.createElement("section", {id: "baked-salmon"},
//     React.createElement("h1", null, "Baked Salmon"),
//     React.createElement("ul", {className: "ingredients"},
//         items.map((ingredient, i) => React.createElement("li", {key: i}, ingredient))
//     ),
//     React.createElement("section", {"className": "instructions"},
//         React.createElement("h2", null, "Cooking Instructions"),
//         React.createElement("p", null, "Preheat the oven to 350 degrees."),
//         React.createElement("p", null, "Spread the olive oil around a glass baking dish."),
//         React.createElement("p", null, "Add the salmon, garlic, and pine..."),
//         React.createElement("p", null, "Bake for 15 minutes."),
//         React.createElement("p", null, "Add the yellow squash and put..."),
//         React.createElement("p", null, "Remove from oven and let cool for 15 ....")
//     )
// );
// ReactDOM.render(dish, document.getElementById('react-container'));
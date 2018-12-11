// Теперь, имея компоненты для ингредиентов и инструкций, мы можем составить
// композицию рецептов, используя эти компоненты

import IngredientsList from './IngredientsList'
import Instructions from './Instructions'

const Recipe = ({name, ingredients, steps}) =>
    <section id={name.toLowerCase().replace(/ /g, '-')}>
        <h1>{name}</h1>
        <IngredientsList list={ingredients}/>
        <Instructions title="Cooking Instructions" steps={steps}/>
    </section>;
export default Recipe
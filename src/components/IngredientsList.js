// Используя компонент Ingredient, можно выстроить компонент IngredientsList,
// который пригодится всякий раз, когда необходимо отобразить список ингредиентов
import Ingredient from './Ingredient'
const IngredientsList = ({ list }) =>
    <ul className="list-group">
        {list.map((ingredient, i) =>
            <Ingredient key={i} {...ingredient} />
        )}
    </ul>;
export default IngredientsList

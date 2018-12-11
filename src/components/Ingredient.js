// Для представления отдельно взятого ингредиента можно создать функциональный компонент, не имеющий состояния
const Ingredient = ({ amount, measurement, name }) =>
    <li className="list-group-item">
        <span className="amount">{amount}</span>
        <span className="measurement">{measurement}</span>
        <span className="name">{name}</span>
    </li>
export default Ingredient
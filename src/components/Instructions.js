// Инструкции для приготовления рецепта.
// Функциональны компонент не имеющий состояние
const Instructions = ({ title, steps }) =>
    <section className="instructions">
        <h2>{title}</h2>
        {steps.map((s, i) =>
            <p key={i}>{s}</p>
        )}
    </section>;
export default Instructions
import MenuGrid from './MenuGrid';

export default function Menu() {

    return (
        <section className="menu margins mb7">
            <MenuGrid menuSectionTitle="Starter" menuCategory="starter" hash="starters" />
            <MenuGrid menuSectionTitle="Pizza" menuCategory="pizza" hash="pizzas" />
            <MenuGrid menuSectionTitle="Extra Toppings" menuCategory="topping" hash="" />
            <MenuGrid menuSectionTitle="Pasta" menuCategory="pasta" hash="pastadishes" />
            <MenuGrid menuSectionTitle="Main Event" menuCategory="main" hash="mains" />
            <MenuGrid menuSectionTitle="Sides" menuCategory="side" hash="" />


        </section>
    )
}

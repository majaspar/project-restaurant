import MenuGrid from './MenuGrid';

export default function Menu() {



    return (
        <section className="menu margins mb7">


            <MenuGrid menuSectionTitle="Starter" menuCategory="starter" />
            <MenuGrid menuSectionTitle="Pizza" menuCategory="pizza" />
            <MenuGrid menuSectionTitle="Extra Toppings" menuCategory="topping" />
            <MenuGrid menuSectionTitle="Pasta" menuCategory="pasta" />
            <MenuGrid menuSectionTitle="Main Event" menuCategory="main" />
            <MenuGrid menuSectionTitle="Sides" menuCategory="side" />


        </section>
    )
}

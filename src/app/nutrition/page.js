// components/Nutrition.tsx
import Image from 'next/image';
import "@/app/nutrition/nutrition.css"; // Make sure to create this CSS file

const Nutrition = () => {
  return (
    <section className="nutrition-section">
      <div className="container">
        <h2 className="section-title">Nutrition <span>Recipes</span></h2>
        <div className="recipes">
          <div className="recipe">
            <Image
              src="/images/quinoa-salad.jpg"
              alt="Quinoa Salad with Veggies"
              width={400}
              height={300}
              className="recipe-image"
            />
            <h3>Quinoa Salad with Veggies</h3>
            <p>A refreshing and nutrient-packed salad perfect for a quick lunch.</p>
          </div>
          <div className="recipe">
            <Image
              src="/images/chicken-stir-fry.jpg"
              alt="Chicken Stir-Fry"
              width={400}
              height={300}
              className="recipe-image"
            />
            <h3>Chicken Stir-Fry</h3>
            <p>A flavorful and protein-rich meal that's easy to make.</p>
          </div>
        </div>

        <h2 className="section-title">Nutrition <span>Tips</span></h2>
        <div className="tips">
          <div className="tip">
            <h3>Hydrate Regularly</h3>
            <p>Drinking enough water is crucial for overall health and fitness.</p>
          </div>
          <div className="tip">
            <h3>Balance Your Macronutrients</h3>
            <p>Ensure you're getting the right balance of protein, carbs, and fats in your diet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nutrition;

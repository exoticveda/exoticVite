
export const RecipeCard = ({ recipe }) => (
    <div className="bg-white rounded-xl shadow p-4 w-full h-full">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="rounded-md w-full h-48 object-cover"
      />
      <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>

      <div className="mt-2">
        <h5 className="font-medium">Ingredients:</h5>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-2">
        <h5 className="font-medium">Instructions:</h5>
        <ul className="list-decimal list-inside">
          {recipe.instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ul>
      </div>

      <p className="mt-2 text-sm">
        <strong>Benefits:</strong> {recipe.benefits}
      </p>
    </div>
  );
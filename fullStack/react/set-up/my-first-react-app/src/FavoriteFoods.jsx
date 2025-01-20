const FavoriteFoods = () => {
  const foods = ["Pizza", "Noodles", "Sushi"];

  return (
    <div>
      <h2>My Favorite Foods</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteFoods;

import { useState, useEffect } from "react";
import { useDebounce } from "../utilities/customHooks";

export default function AutoCompleteSearchBox() {
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState<any[]>([]);
  const [toggleAutoCompleteBox, setToggleAutoCompleteBox] = useState(false);
  const [cache, setCache] = useState<{ [key: string]: any[] }>({});

  const debouncedValue = useDebounce(input);

  useEffect(() => {
    if (debouncedValue.length) {
      fetchRecipes();
    } else {
      setRecipes([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const onChangeHandler = (e: any) => {
    if (!e?.target) {
      return;
    }
    setInput(e.target.value);
  };

  const fetchRecipes = async () => {
    if (cache[debouncedValue]) {
      setRecipes(cache[debouncedValue]);
      return;
    }
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${debouncedValue}`
    );
    const { recipes } = await response.json();
    setRecipes(recipes);
    setCache((prevState) => ({
      ...prevState,
      [debouncedValue]: recipes,
    }));
  };

  return (
    <>
      <h2 className="mt-10 mb-5 flex justify-center items-center text-xl font-bold">
        Autocomplete Search Box like Google Search
      </h2>
      <div className="mb-5 flex justify-center items-center text-md font-normal">
        You can search for recipes like "pizza", "burger", "mango", etc. Input
        is debounced. Output is cached in a hash map. Input field has focus and
        blur properties.
      </div>
      <div className="flex items-center justify-center flex-col gap-1">
        <input
          type="text"
          className="border border-solid border-gray-700 w-96 h-8 rounded-md text-gray-900 p-1"
          placeholder="Search here"
          value={input}
          onChange={onChangeHandler}
          onFocus={() => setToggleAutoCompleteBox(true)}
          onBlur={() => setToggleAutoCompleteBox(false)}
        />
        {toggleAutoCompleteBox && recipes.length ? (
          <div className="w-96 border border-solid border-gray-400 rounded-md p-1 max-h-96 overflow-y-scroll">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="p-1 hover:bg-gray-200">
                {recipe.name}
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

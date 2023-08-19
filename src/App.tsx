import React from "react";
import { useDebounce } from "./hooks/useDebounce";

const fruits: string[] = [
  "apple",
  "banana",
  "dragonfruit",
  "orange",
  "watermelon",
  "papaya",
  "grapes",
  "guava",
  "pineapple",
];

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [suggestions, setSuggestions] = React.useState<string[]>([]);
  const debouncedSearchResults = useDebounce(searchTerm, 1000);

  const getSuggestions = (searchVal: string) => {
    const filteredSuggestions = fruits.filter((fruit) => {
      return fruit.toLowerCase().includes(searchVal.toLowerCase());
    });
    if (searchTerm !== "") {
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  React.useEffect(() => {
    getSuggestions(debouncedSearchResults);
  }, [debouncedSearchResults]);

  return (
    <main className="flex flex-col justify-center items-center mt-10 w-[550px] mx-auto">
      <input
        type="text"
        placeholder="Search..."
        className="border-2 w-[550px] outline-none py-2 pl-2 rounded-md"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(e.target.value)
        }
      />
      <ul className="bg-gray-100 w-full ">
        {suggestions.map((suggestion) => (
          <li
            key={suggestion}
            className="flex justify-center items-center py-4"
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;

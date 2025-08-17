import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { newContext } from "../context/contextApi";

function Shop() {
  const { calas, setCalas } = useContext(newContext);
  const [isLoading, setIsLoading] = useState(true);
  const [chep, setChep] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [finalList, setFinalList] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setCalas(data);
        // setFinalList(data)
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    }
    getData();
  }, []);
  function applayFilter() {
    let filtered = calas;

    if (chep) filtered = filtered.filter((item) => item.price <= 100);

    if (inputValue.trim()) {
      filtered = filtered.filter((cala) => 
        cala.title.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
    setFinalList(filtered)
  }
  
  useEffect(() => {
    applayFilter();
  } ,[calas ,chep ,inputValue])
  return (
    <div className="container">
      <div className="w-full flex max-md:flex-col justify-between items-center flex-row-reverse bg-white rounded-full py-5 px-6 mt-3">
        <div className="flex border max-md:w-full justify-between items-center border-gray-300 rounded-2xl py-4 pl-6">
          <input
            className="w-[500px] max-md:w-full outline-none"
            type="text"
            placeholder="searching..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className="flex">
          <label htmlFor="chep" className="text-2xl cursor-pointer">
            chep
          </label>
          <input
            onChange={() => setChep(!chep)}
            className="ml-1 cursor-pointer"
            checked={chep}
            id="chep"
            type="checkbox"
          />
        </div>
      </div>
      {isLoading && <p className="text-center mt-4 text-2xl">is loading...</p>}
      <div className="grid grid-cols-4 gap-4 mt-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 ">
        {finalList.map((cala) => (
          <Link
            to={`/cala/${cala.id}`}
            className="border w-full bg-white p-4 border-gray-300 rounded-2xl"
            key={cala.id}
          >
            <img
              className="mb-6 h-[250px] m-auto object-cover max-xl:h-[150px]"
              src={cala.image}
              alt="image"
            />
            <p className="text-2xl line-clamp-1 mb-3">{cala.title}</p>
            <p className="mb-8 text-lg line-clamp-2">{cala.description}</p>
            <p className="font-bold">{cala.price}$</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Shop;

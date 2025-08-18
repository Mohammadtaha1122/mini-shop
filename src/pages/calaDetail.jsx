import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { newContext, useLogin } from "../context/contextApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function CalaDetail() {
  const { setBuying, isLogin } = useLogin();
  const { id } = useParams();
  const [calas, setCalas] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setCalas(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getData();
  }, []);
  const found = calas.find((cala) => cala.id === Number(id));
  if (!found) return <p className="text-center">loading...</p>;
  return (
    <div className="container mt-8 ">
      <button onClick={() => navigate("/shop")} className="cursor-pointer">
        <FontAwesomeIcon icon={faXmark} size="xl" className="ml-3"/>
      </button>
      <div className="flex mt-4 max-sm:flex-col justify-between p-4 pt-6 flex-row-reverse">
        <p className="text-2xl font-bold mb-6 sm:hidden">{found.title}</p>
        <img className="w-100px mb-3" src={found.image} alt="" />
        <div className="flex flex-col gap-6 w-1/2 max-sm:w-full">
          <p className="text-2xl font-bold max-sm:hidden">{found.title}</p>
          <p className="text-xl">{found.description}</p>
          <p className="text-xl text-center font-medium">{found.price}$</p>
          {isLogin ? (
            <button
              onClick={() => {
                setBuying((prev) => {
                  const ownsBuy = prev.some((item) => item.id === found.id);
                  if (ownsBuy) return prev;
                  return [...prev, found];
                });
              }}
              className="w-full bg-orange-400 transition ease-in cursor-pointer py-4 rounded-2xl hover:bg-orange-500"
            >
              add to buying
            </button>
          ) : (
            <p className=" text-center text-2xl font-medium">
              login to buy
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CalaDetail;

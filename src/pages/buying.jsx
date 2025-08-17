import { useLogin } from "../context/contextApi";
import { Link } from "react-router-dom";

function Buying() {
  const {buying ,setBuying,isLogin} = useLogin()
  return ( 
    <div className="container pt-6">
      {isLogin ?(buying.length === 0 && (
        <div className="text-center text-2xl max-sm:text-xl">
          <p className="mb-6 font-semibold text-orange-400">empty</p>
          <Link className="bg-orange-400 text-white py-4 font-medium px-8 rounded-lg" to={"/shop"}>Go to shop</Link>
        </div>)):(
          <div className="text-center text-2xl max-sm:text-xl">
            <p className="mb-6 font-semibold text-orange-400">not login</p>
            <Link className="bg-orange-400 text-white py-4 font-medium px-8 rounded-lg" to={"/form/signup"}>Go to Login</Link>
          </div>
        )
      }
      {buying.map(item => (
        <div className="bg-white border border-gray-300 rounded-2xl p-5 shadow-xl mb-10 " key={item.id}>
          <button onClick={() => setBuying(buying.filter(cala => cala.id !== item.id))} className="cursor-pointer">❌</button>
          <div className="flex mt-4 items-center flex-row-reverse gap-4 max-sm:h-auto justify-between w-full h-[250px]">
            <img src={item.image} className="mr-4 max-sm:w-[72px] object-cover" alt="" />
            <div className="flex flex-col gap-6">
              <p className="text-3xl max-sm:text-xl max-sm:line-clamp-none line-clamp-1 font-medium">{item.title}</p>
              <p className="text-2xl max-sm:text-lg line-clamp-3 max-sm:hidden">{item.description}</p>
              <p className="text-2xl max-sm:text-lg font-bold">{item.price}$</p>
            </div>
          </div>
        </div>
      ))}
    </div>
   );
}

export default Buying;
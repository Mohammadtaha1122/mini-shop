import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/contextApi";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");
  const [accept, setAccsept] = useState(false);
  const [errorAccept, setErrorAccsept] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfrimPassword, seterrorConfrimPassword] = useState("");
  const navigate = useNavigate();
  const {isLogin ,setIsLogin} = useLogin()

  function submitHandler(e) {
    e.preventDefault();

    // reset errors
    setErrorUserName("");
    setErrorPassword("");
    seterrorConfrimPassword("");
    setErrorAccsept("");

    let hasError = false

    if (!userName.trim()) {
      setErrorUserName("fill in the user name field");
      hasError=true
    }

    if (!password.trim()) {
      setErrorPassword("fill in the password field");
      hasError=true
    } else if (password.length < 6)
      setErrorPassword("password is too short");

    if (confrimPassword.trim() !== password) {
      seterrorConfrimPassword("password is incorrect");
      hasError=true
    }

    if (!accept) {
      setErrorAccsept("please check the rules");
      hasError=true
    }
    if (!hasError)
      navigate("/")

    if (!hasError){
      setIsLogin({
        userName :userName,
        password: password
      })
    }
  }

  return (
    <div className="bg-gradient-to-br from-cyan-400 to-green-300 w-screen h-screen flex justify-center items-center">
      <form onSubmit={submitHandler} className="bg-white p-6 w-[500px] max-sm:w-full mx-6 rounded-xl shadow-xl">
        <button className="block mb-4 cursor-pointer" type="button" onClick={() => navigate('/')}>❌</button>

        <label className="font-medium">user name:</label>
        <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" className="w-full border border-gray-300 p-3 rounded-xl outline-none mb-1"/>
        {errorUserName && <p className="text-red-500 mb-6">{errorUserName}</p>}

        <label className="font-medium">password:</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full border border-gray-300 p-3 rounded-xl outline-none mb-1"/>
        {errorPassword && <p className="text-red-500 mb-6">{errorPassword}</p>}

        <label className="font-medium">confirm password:</label>
        <input value={confrimPassword} onChange={(e) => setConfrimPassword(e.target.value)} type="password" className="w-full border border-gray-300 p-3 rounded-xl outline-none mb-1"/>
        {errorConfrimPassword && <p className="text-red-500 mb-6">{errorConfrimPassword}</p>}

        <div className="flex gap-1 items-center">
          <input checked={accept} onChange={() => setAccsept(!accept)} className="cursor-pointer" type="checkbox" id="accept"/>
          <label className="cursor-pointer" htmlFor="accept">accept the rules</label>
        </div>
        {errorAccept && <p className="text-red-500">{errorAccept}</p>}

        <button type="submit" className="bg-orange-400 mt-5 cursor-pointer w-full p-3 rounded-xl text-white hover:bg-orange-500 ease-in transition">submit</button>
      </form>
    </div>
  );
}

export default SignUp;
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { useState } from "react";

function AuthLogin() {
  const initialLogin = {
    email: "",
    password: ""
  };

  const [formData, setformData] = useState(initialLogin);

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/register"
          >
            Register
          </Link>
        </p>
      </div>
      <div>
        <Input 
          type='email' 
          placeholder="Enter your email" 
          texture={''} 
          setformData={setformData} 
          formData={formData}
          field="email" // Pass the field name to identify which state to update
        />
        <Input 
          type='password' 
          placeholder="Enter your password" 
          texture={''} 
          setformData={setformData} 
          formData={formData}
          field="password" // Pass the field name to identify which state to update
        />
        <div >
          <button className="relative">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthLogin;

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db  } from "../../config/firebase";
import { toast } from "react-toastify";
import SignInwithGoogle from "../signin/signInWIthGoogle";
import { updateDoc, getDoc, doc } from "firebase/firestore";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/profile";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
    
    const collectionRef = doc(db, "Users");
    const querySnapshot = await getDoc(collectionRef);

    querySnapshot.forEach((doc) => {
      const docRef = doc(db, "Users", doc.id);
      updateDoc(docRef, {
        treesPlanted: 0
      });
    });



  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        New user <a href="/register">Register Here</a>
      </p>
      <SignInwithGoogle/>
    </form>
  );
}

export default Login;

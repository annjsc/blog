export default function LoginPage(){

  return(
    <div className="login">
      <h1>Sign In</h1>
      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password"/>
      <button type="submit">Submit</button>
    </div>
  );
}
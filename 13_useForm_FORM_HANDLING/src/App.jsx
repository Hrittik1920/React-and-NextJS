import './App.css'
import { useForm } from "react-hook-form"


function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,  // Use to implement COSTUM ERRORS
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      },d*1000)
    })
  }

  const onSubmit = async (data) => {
    // await delay(2); // simulating network delay
    let r = await fetch("http://localhost:3000/", { method: "POST", headers : { 
      "Content-Type" : "application/json"},
       body: JSON.stringify(data)});
    let res = await r.text();
    console.log(data, res)

    // Writting our own costum messages for error
    if(data.username === "Niraj") {
      setError("blocked", {message: "CAN'T REGISTER! Niraj is blocked from this site."})
    }
    if(data.username === "hrittik") {
      setError("myform", { message: "Already have an account!" })
    }
    
  } 

  return (
    <>
    {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", { required: { value: true, message: "This field is required!"}, minLength: { value: 3, message: "Minimum length should be 3!"}, maxLength: {value: 10, message: "Maximum length should be 10!"} })} type="text" />
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <br />
          <input placeholder='password' {...register("password", { required: true, minLength: { value: 8, message: "Minimum length of the password should be 8"} })} type="password" />
          {errors.password && <div className='red'>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myform && <div className='red'>{errors.myform.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App

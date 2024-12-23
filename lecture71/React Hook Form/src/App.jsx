import './App.css'
import { useForm } from 'react-hook-form';

function App() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    //Call the API
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("submitting the form", data);
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input
        className={errors.firstName ? 'input-error' : 
          ""}
           {...register('firstName',
           { 
            required: true,
            minLength:{value:3, message:'Min Len atleast 3'},
            maxLength:{value:6, message:'Max Length atmost 6'} })} />
            {errors.firstName && <p className='errors-msg'>
              {errors.firsttName.message}</p>}
      </div>
      <br/>
      <div>
        <label>Middle Name</label>
        <input {...register('middleName')} />
      </div>
      <br/>

      <div>
        <label>Last Name</label>
        <input {...register('lastName', {
         pattern: {
          value: /^[A-Za-z]+$/i ,
          message:"Last Name is not as per the rules"
         }
        })}/>
        {errors.lastName && <p className='error-msg'>{errors.lastName.message}
        </p>}
      </div>
      <br/>
      <input type='submit' disabled={isSubmitting}
      value={isSubmitting ? "Submitting" : "Submit"} />
    </form>
  )
}

export default App

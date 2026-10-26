import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().trim().required("სახელი სავალდებულოა"),
  email: yup.string().trim().email("შეიყვანე სწორი ელფოსტა").required("ელფოსტა სავალდებულოა"),
  password: yup.string().min(6, "პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს").required("პაროლი სავალდებულოა")
}).required();

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });

  const onSubmit = (values) => {
    console.log("ფორმა წარმატებით გაიგზავნა:", values);
    reset();
  };

  return (
    <section className="panel">
      <h2>6. რეგისტრაციის ფორმა</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>
          სახელი
          <input {...register("name")} autoComplete="name" />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </label>
        <label>
          ელფოსტა
          <input {...register("email")} type="email" autoComplete="email" />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </label>
        <label>
          პაროლი
          <input {...register("password")} type="password" autoComplete="new-password" />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </label>
        <div className="button-row">
          <button type="submit" disabled={isSubmitting}>გაგზავნა</button>
          <button type="button" className="secondary" onClick={() => reset()}>გასუფთავება</button>
        </div>
      </form>
      <p className="muted">წარმატებით გაგზავნილი მონაცემები გამოჩნდება ბრაუზერის Console-ში.</p>
    </section>
  );
}
export default RegistrationForm;
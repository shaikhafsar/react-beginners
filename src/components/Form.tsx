import React, { FormEvent, useRef, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  //const nameRef = useRef<HTMLInputElement>(null);
  //const ageRef = useRef<HTMLInputElement>(null);
  //const person = { name: "", age: 0 };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  /*   const [person, setPerson] = useState({
    name: "",
    age: 0,
  }); */

  //const handleSubmit = (event: FormEvent) => {
  //  event.preventDefault();
  //if (nameRef.current !== null) person.name = nameRef.current.value;
  //if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
  //  console.log(person);
  //};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          //onChange={(event) =>
          //  setPerson({ ...person, name: event.target.value })
          // }
          //ref={nameRef}
          //  value={person.name}
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be atleast 3 charachters.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          /*           onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          //ref={ageRef}
          value={person.age} */
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

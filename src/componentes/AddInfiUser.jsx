import React from "react";
import { useForm } from "react-hook-form";

function AddInfiUser(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);

    props.addInfo(data);
    e.target.reset();
  };

  return (
    <div>
      <h3>Add Info</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="addInformation">
        <div>
          <h4>Name:</h4>
          <input
            type="text"
            placeholder="Name"
            required
            {...register("name")}
          />
        </div>
        <div>
          <h4>Email:</h4>
          <input
            type="Email"
            placeholder="Email"
            name="Email"
            required
            {...register("Email")}
          />
        </div>
        <div>
          <h4>Addres:</h4>
          <input
            type="text"
            placeholder="Addres"
            name="Addres"
            required
            {...register("Addres")}
          />
        </div>

        <div>
          <h4>Phone</h4>
          <input
            type="text"
            placeholder="Phone"
            name="Phone"
            required
            {...register("Phone")}
          />
        </div>
        <button>Add New Info</button>
      </form>
    </div>
  );
}

export default AddInfiUser;

import React from "react";
import { useForm } from "react-hook-form";

function EditUserInfo(props) {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: props.currentInfo,
  });

  setValue("name", props.currentInfo.name);
  setValue("Email", props.currentInfo.Email);
  setValue("Addres", props.currentInfo.Addres);
  setValue("Phone", props.currentInfo.Phone);

  const onSubmit = (data, e) => {
    data.id = props.currentInfo.id;
    props.updateInfo(props.currentInfo.id, data);

    e.target.reset();
  };

  return (
    <div>
      <h3>Edit Info</h3>
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
            type="tel"
            placeholder="Phone"
            name="Phone"
            required
            {...register("Phone")}
          />
        </div>
        <button>Edit Info</button>
      </form>
    </div>
  );
}

export default EditUserInfo;

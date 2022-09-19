import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const UsersForm = ({ getUsers, userSelected, deselectUser }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (userSelected) {
      reset(userSelected);
    }
  }, [userSelected]);

  const submit = (data) => {
    if (userSelected) {
      axios
        .put(
          `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
          data
        )
        .then(() => getUsers());
    } else {
      axios
        .post(`https://users-crud1.herokuapp.com/users/`, data)
        .then(() => getUsers())
        .catch((error) => console.log(error.response));
    }
    clear();
  };

  const clear = () => {
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    });
    deselectUser();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="input-container">
        <div className="input-camp">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-user"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="#474241"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="7" r="4" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
          <label htmlFor="first_name"></label>
          <input
            type="text"
            placeholder="First Name"
            id="first_name"
            required
            {...register("first_name")}
          />

          <label htmlFor="last_name"></label>
          <input
            type="text"
            placeholder="Last Name"
            id="last_name"
            required
            {...register("last_name")}
          />
        </div>
      </div>

      <div className="input-container email">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-mail"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="#474241"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <polyline points="3 7 12 13 21 7" />
        </svg>
        <label htmlFor="email"></label>
        <input
          type="text"
          placeholder="user@user.com"
          id="email"
          required
          {...register("email")}
        />
      </div>

      <div className="input-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-lock"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="#474241"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <circle cx="12" cy="16" r="1" />
          <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
        </svg>
        <label htmlFor="password"></label>
        <input
          type="password"
          placeholder="*******"
          id="password"
          required
          {...register("password")}
        />
      </div>

      <div className="input-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-confetti"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="#474241"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 5h2" />
          <path d="M5 4v2" />
          <path d="M11.5 4l-.5 2" />
          <path d="M18 5h2" />
          <path d="M19 4v2" />
          <path d="M15 9l-1 1" />
          <path d="M18 13l2 -.5" />
          <path d="M18 19h2" />
          <path d="M19 18v2" />
          <path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1.003 1.003 0 0 0 1.329 1.329l9.579 -4.39z" />
        </svg>
        <label htmlFor="birthday"></label>
        <input type="date" id="birthday" required {...register("birthday")} />
      </div>
      <div className="btn">
        <button>Create User</button>
        <button onClick={clear} type="button">
          Clear
        </button>
      </div>
    </form>
  );
};

export default UsersForm;

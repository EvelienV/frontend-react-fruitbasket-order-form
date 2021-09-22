import React from 'react';
import { useForm } from "react-hook-form";
import './Form.css';
import Button from "../Button/Button";

function Form() {
  const { register, handleSubmit } = useForm()

  function onFormSubmit(data) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <fieldset className="form">
        <legend>Bestelformulier</legend>
        <label htmlFor="first-name">
          Voornaam:
          <input
            type="text"
            {...register("first-name")}
          />
        </label>
        <label htmlFor="last-name">
          Achternaam:
          <input
            type="text"
            {...register("last-name")}
          />
        </label>
        <label htmlFor="age">
          Leeftijd:
          <input
            type="number"
            {...register("age")}
          />
        </label>
        <label htmlFor="postal-code">
          Postcode:
          <input
            type="text"
            {...register("postal-code")}
          />
        </label>
        <label htmlFor="delivery-frequency">
          Bezorgfrequentie:
          <select
            {...register("delivery-frequency")}
          >
            <option value="every-week">Iedere week</option>
            <option value="every-other-week">Om de week</option>
            <option value="every-month">Iedere maand</option>
          </select>
        </label>
        <label htmlFor="delivery-time">
          Tijdvak:
          <input
            type="radio"
            {...register("delivery-time")}
            value="day"
          />
          <label htmlFor="day">Overdag</label>
          <input
            type="radio"
            {...register("delivery-time")}
            value="night"
          />
          <label htmlFor="day">'s Avonds'</label>
        </label>

        <label htmlFor="remarks">
          Opmerkingen:
          <textarea
            {...register("remarks")}
            rows="3"
            cols="12"
            placeholder="plaats hier eventuele opmerkingen"
          />
        </label>
        <label htmlFor="conditions">
          Ik ga akkoord met de voorwaarden:
          <input
            type="checkbox"
            {...register("remarks")}
          />
        </label>

        <Button type="submit" text="Versturen">
        </Button>
      </fieldset>
    </form>
  );
}

export default Form;
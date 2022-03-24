import React, { useState } from "react";
import "./Contact.css";
import { GiEnvelope } from "react-icons/gi";

const Contact = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const handleChange = (f) => {
    setNameValue(f.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };

  return (
    <>
      <form>
        <div>
          <GiEnvelope className="icon-contact" />
        </div>
        <input
          className={nameValue.length > 1 ? "good" : ""}
          value={nameValue}
          onChange={(f) => handleChange(f)}
          type="text"
          placeholder="Nom Prénom"
          required
        />
        <input
          className={emailValue.length > 1 ? "good" : ""}
          value={emailValue}
          onChange={(e) => handleChangeEmail(e)}
          type="email"
          placeholder="Email"
          required
        />
        <input type="text" placeholder="Objet du contact" />
        <textarea placeholder="Descritpion" required defaultValue={""} />
        <label className="required-msg">Champ obligatoire</label>
        <input type="submit" defaultValue="Send" />
      </form>
    </>
  );
};

export default Contact;

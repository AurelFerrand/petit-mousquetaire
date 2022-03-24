import React from "react";
import "./Contact.css";
import { GiEnvelope } from "react-icons/gi";

const Contact = () => {
  return (
    <>
      <form>
        <div>
          <GiEnvelope className="icon-contact" />
        </div>
        <input type="text" placeholder="Nom Prénom (Obligatoire)" required />
        <input type="email" placeholder="Email (Obligatoire)" required />
        <input
          type="text"
          placeholder="Objet du contact (Obligatoire)"
          required
        />
        <textarea
          placeholder="Descritpion (Obligatoires)"
          required
          defaultValue={""}
        />
        <input type="submit" defaultValue="Send" />
      </form>
    </>
  );
};

export default Contact;

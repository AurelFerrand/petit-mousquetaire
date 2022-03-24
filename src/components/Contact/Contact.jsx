import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <form>
        <div>
          <img
            src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/mail-letter-offer-256.png"
            alt="icon"
          />
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

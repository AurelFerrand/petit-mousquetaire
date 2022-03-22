import React from "react";
import "./Acceuil.css";

const Acceuil = () => {
  return (
    <div className="acceuil-container">
      <h1 className="acceuil-title">Bienvenue sur Petit.Mousquetaire</h1>
      <div className="img-paragraphe">
        <img
          className="acceuil-image"
          src="https://images.pexels.com/photos/3821385/pexels-photo-3821385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="entrepot"
        />

        <p className="paragraphe">
          Ce site a été créé pour une utilisation simple et progressive. Il est
          lié à l'activité d'agent logistique , manutentionnaire ou quiconque en
          aurait l'utilité. Il a pour but d'aider dans l'information et le
          regroupement des équipes de la plateforme "ITM LAI"
          Villeneuve-Les-Béziers.{" "}
        </p>
      </div>
    </div>
  );
};

export default Acceuil;

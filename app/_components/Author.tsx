import React from "react";
import Image from "next/image";
import profil from "../../public/user1.png";
const Author = () => {
  return (
    <div className="md:ml-28 w-full md:w-4/5 sm:p-12">
      <hr />
      <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row pt-4 pb-4 justify-center">
        <Image src={profil} alt="Logo MmB" width={120} height={120} />

        <div className="flex flex-col">
          <h4 className="text-xl font-semibold text-center md:text-left">
            Ecris par Mubarak Mohamed
          </h4>
          <p>
            J'aide mes étudiants au quotidien à apprendre la programmation. Je
            suis un rédacteur d'acticles techniques et développeur depuis 4 ans.
            J'ai accompagné plus 50 personnes dans l'apprentissage du code
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Author;

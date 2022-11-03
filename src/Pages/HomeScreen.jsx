import React from "react";


function HomeScreen() {
  return (
    <div className="flex flex-col w-screen h-screen items-center">
      <div className="m-10 text-5xl">Sistem İstatistikleri</div>

      <div className="flex flex-row justify-center w-full">
        <div className="bg-blue-500 m-10 w-1/3">
          
          <div className="flex flex-row items-center">
            <div className=" p-10 text-3xl">Hayvan Sahibi Sayısı</div>
          </div>

          <div className="text-5xl m-10">{ownerRows.length}</div>
        </div>

        <div className="bg-red-500 m-10 w-1/3">
          <div className=" p-10 text-3xl">Hayvan Sayısı</div>
          <div className="text-5xl m-10">3</div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;

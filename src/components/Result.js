import React from "react";
const Result = ({ data }) => {
  const divCss =
    "flex flex-col items-center justify-between px-2 border-2 border-solid border-gray-700 rounded-md md:flex-row gap-2";
  return (
    <div className="w-[90%] p-4 border-2 border-solid border-gray-700 rounded-lg">
      <div className="flex justify-between my-2">
        <h2 className="font-bold">
          {data?.name}, {data?.sys?.country}
        </h2>
        {data?.coord ? (
          <div className="flex gap-2">
            <h2>Latitude: {data?.coord?.lat}</h2>
            <h2>Longitude: {data?.coord?.lon}</h2>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {data?.weather ? (
          <div className={divCss}>
            <h3 className="font-semibold bg-orange-500 h-fit p-2 rounded-lg">
              {data?.weather[0]?.main}
            </h3>
            <img
              src={`http://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`}
              alt="weather icon"
            ></img>
            <span className="text-center">{data?.weather[0]?.description}</span>
          </div>
        ) : (
          <></>
        )}
        {data?.main ? (
          <div className={divCss}>
            <h3 className="font-semibold bg-orange-500 h-fit p-2 rounded-lg">
              {data?.main?.temp}°C
            </h3>
            <span className="text-center">
              Feels like {data?.main?.feels_like}°C
            </span>
            <span>Min: {data?.main?.temp_min}°C</span>
            <span>Max: {data?.main?.temp_min}°C</span>
          </div>
        ) : (
          <></>
        )}
        {data?.main ? (
          <div className={divCss}>
            {data?.main?.humidity ? (
              <span>Humidity: {data?.main?.humidity}</span>
            ) : (
              <></>
            )}
            {data?.main?.pressure ? (
              <span>Pressure: {data?.main?.pressure}</span>
            ) : (
              <></>
            )}
            {data?.main?.sea_level ? (
              <span className="text-center">
                Sea-level: {data?.main?.sea_level}
              </span>
            ) : (
              <></>
            )}
            {data?.main?.grnd_level ? (
              <span className="text-center">
                Ground-level: {data?.main?.grnd_level}
              </span>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
        {data?.wind ? (
          <div className={divCss}>
            {data?.wind?.speed ? (
              <span className="text-center">
                Wind Speed: {data?.wind?.speed}
              </span>
            ) : (
              <></>
            )}
            {data?.wind?.deg ? <span>Degree: {data?.wind?.deg}°</span> : <></>}
            {data?.wind?.gust ? <span>Gust: {data?.wind?.gust}</span> : <></>}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Result;

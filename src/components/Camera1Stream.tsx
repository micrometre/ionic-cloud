import './Camera1Stream.css'
import React from "react";

interface ContainerProps {
  name: string;
}

const Camera1Stream: React.FC<ContainerProps> = () => {
  function onChange(e: React.ChangeEvent<HTMLImageElement>) {
    e.target.src = "http://127.0.0.1:8080/video";
    console.log(e);
  }
  return (
    <div className='container' >
      <img src="http://192.168.1.156:8080/video" width="375" height="281" onError={onChange} ></img>
    </div>
  );
};

export default Camera1Stream;

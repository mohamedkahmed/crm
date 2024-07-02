/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createRef, useRef, useState } from "react";
import "./uploade.scss";
import { MdAttachFile } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlayCircle } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import toast from "react-hot-toast";

<<<<<<< HEAD
const Uploadeproject = ({ images, setimages }) => {
  // const [currentimage , setcurrentimage] = useState()
  const videoref = useRef({});
  const [duration, setIsDeuration] = useState({});
  const handelDelateimage = (imageName) => {
    const newimages = images.filter((image) => image.name !== imageName);
    return setimages(newimages);
  };
  const handelplay = async (imagenam) => {
    const video = videoref.current[imagenam];
=======
// handel uplaod section 
const Uploadeproject = ({images , setimages , docs ,setdocs}) => {

const videoref = useRef({})
// const [checkdocType , setCheckDoc] = useState(false)
// handel delate image
const handelDelateimage = (imageName) => {
const newimages = images.filter((image) => image.name !== imageName)
return setimages(newimages)
}
// handeldealate viddeo
const handelDelatedoc = (docname) => {
    const newimages = docs.filter((image) => image.name !== docname)
    return setdocs(newimages)
    }
// handelVideo play
const handelplay = async (imagenam) => {
  
    const video = videoref.current[imagenam]
>>>>>>> b1d3c73e356c87013ae60f6dbcf7e03908782406
    try {
      if (video.paused) {
        await video.play().catch((error) => {
          console.log("Play error:", error);
        });
      } else {
        await video.pause();
      }
    } catch (error) {
      console.log(error);
    }

    //    return setPlay(!isPlay)
  };

  return (
    <div className="uploads  border">
<<<<<<< HEAD
      <div className="row  gap-4" style={{ width: "80%", height: "100%" }}>
        <div className="text-lenght-image d-flex gap-2 mb-4">
          <span>
            <MdAttachFile />
          </span>
          <p>الصور والفديوهات ({images.length})</p>
        </div>
        {images.map((image, i) => {
          return (
            <div className="col-3 mb-4" key={image.name}>
              <div className="imagesection">
                {image?.type?.includes("image") ? (
                  <>
                    <img src={URL.createObjectURL(image)} alt={image.name} />
                    <div className="overly">
                      <button
                        type="button"
                        className="delate-image"
                        onClick={() => handelDelateimage(image.name)}
                      >
                        <RiDeleteBin6Line />
                      </button>
                      <p className="size-file">
                        <span>
                          {image.size / 1024 < 900
                            ? (image.size / 1024).toFixed(2) + "KB"
                            : (image.size / (1024 * 1024)).toFixed(2) + "MB"}
                        </span>
                      </p>
                    </div>{" "}
                  </>
                ) : (
                  <div className="video">
                    <video
                      ref={(video) => (videoref.current[image.name] = video)}
                      src={URL.createObjectURL(image)}
                      alt={image.name}
                      type="video/mp4"
                    />
                    <div className="overly-video">
                      <button
                        type="button"
                        className="delate-video"
                        onClick={() => handelDelateimage(image.name)}
                      >
                        <RiDeleteBin6Line />
                      </button>
=======
            <div className="text-lenght-image d-flex  gap-2 mb-2">
            <span className="icon-upload">
                    <MdAttachFile style={{fontSize:"40px"}} />
                   
             </span>
                <p>الصور والفديوهات ({images.length})</p>
              
>>>>>>> b1d3c73e356c87013ae60f6dbcf7e03908782406

                      <button
                        className="play-video"
                        type="button"
                        onClick={() => handelplay(image.name)}
                      >
                        <FaPlayCircle />
                      </button>
                      <p className="size-video">
                        <span>
                          {image.size / 1024 < 900
                            ? (image.size / 1024).toFixed(2) + "KB"
                            : (image.size / (1024 * 1024)).toFixed(2) + "MB"}
                        </span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
<<<<<<< HEAD
          );
        })}
      </div>
      <br />
=======
        <div className="row  gap-4" style={{width:"80%" , height:"100%"}}>
       {/* render list op image - videos select */}
            {
                images.map((image , i) => {
                    return (
                        <div className="col-3 mb-3"  key={image.name}>
                          
                              <div className="imagesection">
                                {
                                    image?.type?.includes("image") ?  (
                                        <>
                                        <img src={URL.createObjectURL(image)} alt={image.name}  />
                                        <div className="overly">
                                        <button type="button" className="delate-image" onClick={() => handelDelateimage(image.name)}>
                                            <RiDeleteBin6Line />
                                        </button>
                                        <p className="size-file"><span>{image.size / 1024 < 900  ? (image.size / 1024).toFixed(2) + "KB" : (image.size / (1024 * 1024)).toFixed(2) + "MB"}</span></p>
                                        <p className="image-name">{image.name.length > 10 ? image.name.substr(0 , 10) : image.name}</p>
                                    </div> </>):
                                   <div className="video">
                                    <video ref={(video) => videoref.current[image.name] = video} src={URL.createObjectURL(image)} alt={image.name}  type="video/mp4"/>
                                        <div className="overly-video">
                                        <button type="button" className="delate-video" onClick={() => handelDelateimage(image.name)}>
                                           
                                            <RiDeleteBin6Line /> 
                                           
                                        </button>
                                   
                                            <button className="play-video" type="button" onClick={() => handelplay(image.name)}>
                                                
                                                   
                                                      <FaPlayCircle />
                                                
                                           
                                            </button>
                                            <p className="size-video"><span>{image.size / 1024 < 900  ? (image.size / 1024).toFixed(2) + "KB" : (image.size / (1024 * 1024)).toFixed(2) + "MB"}</span></p>
                                            <p className="video-name">{image.name.length > 10 ? image.name.substr(0 , 10) : image.name}</p>
                                        </div>
                                   </div>
                                     
                                    
                                }
                            
                        
                        
                        </div>
                        </div>
                      
                    )
                })
            }

</div>

<span style={{width:"100%" , height:"2px" , background:"#eee" , display:"block"}} />
<div className=" mt-4">
<div className="text-lenght-image d-flex gap-2 mb-3">
            <span className="icon-upload">
                    <MdAttachFile />
                   
             </span>
                <p>المرفقات({docs.length})</p>
              

            </div>
    <div className="file_box" >
 {/* render docs selected */}
        {
            
            docs.map((doc , i) => {
                
                    return (
                    <div className="section-doc" key={`${doc.name} + itam ${i}`}>
                      <div className="details">
                        <span style={{ color: "#D74D52", fontWeight: "600" }}>{doc.name.length > 10 ? doc.name.substr(0, 10) : doc.name + ".."}</span>
                        <p className="size-video">
                          <span>{doc.size / 1024 < 900 ? (doc.size / 1024).toFixed(2) + "KB" : (doc.size / (1024 * 1024)).toFixed(2) + "MB"}</span>
                        </p>
                      </div>
                      <span className="icon-doc"><FaFilePdf /></span>
                      <div className="overly-doc">
                        <button type="button" className="delate-doc" onClick={() => handelDelatedoc(doc.name)}>
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    </div>
                  );
              
              })
              }
    </div>
</div>

>>>>>>> b1d3c73e356c87013ae60f6dbcf7e03908782406
    </div>
  );
};

<<<<<<< HEAD
export default Uploadeproject;
{
  /* <div>
<p>{image.name}</p>
<p> </p>
</div> */
}
=======
export default Uploadeproject
>>>>>>> b1d3c73e356c87013ae60f6dbcf7e03908782406

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdAttachFile } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlayCircle } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { useRef } from "react";
import "./uploade.scss"
const UploadProject = ({ images, setImages, docs, setDocs }) => {
  const videoRef = useRef({});

  const handleDeleteImage = (imageName) => {
    const newImages = images.filter((image) => image.name !== imageName);
    setImages(newImages);
  };

  const handleDeleteDoc = (docName) => {
    const newDocs = docs.filter((doc) => doc.name !== docName);
    setDocs(newDocs);
  };

  const handlePlay = async (imageName) => {
    const video = videoRef.current[imageName];
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
  };

  return (
    <div className="uploads border">
      <div className="text-lenght-image d-flex gap-2 mb-2">
        <span className="icon-upload">
          <MdAttachFile style={{ fontSize: "40px" }} />
        </span>
        <p>الصور والفديوهات ({images.length})</p>
      </div>
      <div className="row gap-4" style={{ width: "80%", height: "100%" }}>
        {images.map((image, i) => (
          <div className="col-3 mb-3" key={image.name}>
            <div className="imagesection">
              {image?.type?.includes("image") ? (
                <>
                  <img src={URL.createObjectURL(image)} alt={image.name} />
                  <div className="overly">
                    <button
                      type="button"
                      className="delate-image"
                      onClick={() => handleDeleteImage(image.name)}
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
                    <p className="image-name">
                      {image.name.length > 10
                        ? image.name.substr(0, 10)
                        : image.name}
                    </p>
                  </div>
                </>
              ) : (
                <div className="video">
                  <video
                    ref={(video) => (videoRef.current[image.name] = video)}
                    src={URL.createObjectURL(image)}
                    alt={image.name}
                    type="video/mp4"
                  />
                  <div className="overly-video">
                    <button
                      type="button"
                      className="delate-video"
                      onClick={() => handleDeleteImage(image.name)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                    <button
                      className="play-video"
                      type="button"
                      onClick={() => handlePlay(image.name)}
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
                    <p className="video-name">
                      {image.name.length > 10
                        ? image.name.substr(0, 10)
                        : image.name}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <span
        style={{ width: "100%", height: "2px", background: "#eee", display: "block" }}
      />
      <div className="mt-4">
        <div className="text-lenght-image d-flex gap-2 mb-3">
          <span className="icon-upload">
            <MdAttachFile />
          </span>
          <p>المرفقات({docs.length})</p>
        </div>
        <div className="file_box">
          {docs.map((doc, i) => (
            <div className="section-doc" key={`${doc.name} + item ${i}`}>
              <div className="details">
                <span style={{ color: "#D74D52", fontWeight: "600" }}>
                  {doc.name.length > 10 ? doc.name.substr(0, 10) : doc.name + ".."}
                </span>
                <p className="size-video">
                  <span>
                    {doc.size / 1024 < 900
                      ? (doc.size / 1024).toFixed(2) + "KB"
                      : (doc.size / (1024 * 1024)).toFixed(2) + "MB"}
                  </span>
                </p>
              </div>
              <span className="icon-doc">
                <FaFilePdf />
              </span>
              <div className="overly-doc">
                <button
                  type="button"
                  className="delate-doc"
                  onClick={() => handleDeleteDoc(doc.name)}
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadProject;
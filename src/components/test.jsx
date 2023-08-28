import React, { useState } from "react";
import Modal from "react-modal";
import "../css/test.css";
import axios from "axios";
import config from "../config";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";

export default function Test() {
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    postType: 'IMAGE',
    captionText: '',
    userId: sessionStorage.getItem('userId'),
  })
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
    console.log(formData)
  };

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const handleUploadImage = () => {
    debugger;
    if (selectedImage) {
      const formDataUpload = new FormData();
      formDataUpload.append("imageFile", selectedImage);
      formDataUpload.append("userId", formData.userId);
      formDataUpload.append("captionText", formData.captionText);
      formDataUpload.append("postType", formData.postType);

      console.log(formDataUpload);
      debugger;
      axios
        .post(config.serverURL + `/post/image`, formDataUpload)
        .then((response) => {
          debugger;
          console.log("Image uploaded successfully:", response.data);
          toast.success("Post Uploaded")
          history.push("/explorer/feed")

          debugger;
          // Update the selectedService with the new image URL
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    }
  };


  const handleSubmit = (e) => {

    e.preventDefault();
    // Perform your API call or update logic here
    handleUploadImage();

  };

  return (
    <div className="PostForm">
      <button onClick={toggleModal}>Open modal</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>Upload Post Here</div>
        <div>
          <form onSubmit={handleSubmit}>
            <label for="formFile" class="form-label"><b>Caption Text</b></label>
            <input class="form-control mb-3" type="text" name="captionText" value={formData.captionText} onChange={handleChange} />
            <label for="formFile" class="form-label"><b>Upload Post</b></label>
            <input class="form-control mb-3" type="file" accept="image/*" name="imageFile" onChange={handleImageChange} />
            <div className="d-flex justify-content-evenly">
              <button className="btn btn-primary mb-4">Save Changes</button>
              <button className="btn btn-danger mb-4" onClick={toggleModal}>Cancel</button>
            </div>
          </form>
        </div>

      </Modal>
    </div>
  );
}

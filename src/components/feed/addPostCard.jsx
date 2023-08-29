import React, { useState } from "react";
import Modal from "react-modal";
import "../../css/test.css";
import axios from "axios";
import config from "../../config";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

function AddPost({refresh}) {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    postType: "IMAGE",
    captionText: "",
    userId: sessionStorage.getItem("userId"),
  });

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
    console.log(formData);
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
          toast.success("Post Uploaded");
          if (sessionStorage.getItem("role") === "ROLE_EXPLORER") {
            debugger;
            history.push("/explorer/feed");
          } else {
            history.push("/maestro/feed");
            debugger;
          }
          toggleModal();
          refresh();
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
    <div className="card">
      <div className="card-body">
        <input
          type="text"
          className="form-control content"
          name="captionText"
          value={formData.captionText}
          onChange={handleChange}
          placeholder="             Share your thoughts..."
        />
        <div className="d-flex justify-content-center">
          <span>
            <button
              className="mediatext btn btn-light mt-3 ms-4"
              onClick={toggleModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="#70B5F9"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
              </svg>
              <span className="ms-1 mediatext">Image</span>
            </button>
            <Modal
              isOpen={isOpen}
              onRequestClose={toggleModal}
              contentLabel="My dialog"
              className="mymodal"
              overlayClassName="myoverlay"
              closeTimeoutMS={500}
            >
              <div>Upload Post</div>
              <div>
                <form onSubmit={handleSubmit}>
                  <label for="formFile" class="form-label">
                    <b>Caption Text</b>
                  </label>
                  <input
                    class="form-control mb-3"
                    type="text"
                    name="captionText"
                    value={formData.captionText}
                    onChange={handleChange}
                  />
                  <label for="formFile" class="form-label">
                    <b>Upload Post</b>
                  </label>
                  <input
                    class="form-control mb-3"
                    type="file"
                    accept="image/*"
                    name="imageFile"
                    onChange={handleImageChange}
                  />
                  <div className="d-flex justify-content-evenly">
                    <button className="btn btn-primary mb-4">
                      Save Changes
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger mb-4"
                      onClick={toggleModal}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </Modal>
          </span>
          <span>
            <button className="mediatext btn btn-light mt-3 ms-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="#7FC15E"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
              </svg>
              <span className="ms-1 mediatext">Video</span>
            </button>
          </span>
          <span>
            <button className="mediatext btn btn-light mt-3 ms-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="#E7A33E"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
              </svg>
              <span className="ms-1 mediatext">Event</span>
            </button>
          </span>
          <span>
            <button className="mediatext btn btn-light mt-3 ms-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="#F5987E"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
              </svg>
              <span className="ms-1 mediatext">Thoughts</span>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AddPost;

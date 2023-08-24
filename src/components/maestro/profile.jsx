import React, { useState } from "react";
import axios from "axios";


const Profile = () => {
  const [selectedService, setSelectedService] = useState(null);

  const [userProfile, setUserProfile] = useState({
    bio: "",
    userRole: "",
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
    dp: "",
    expertise: "",
    socialMediaLink: ""
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const userId = sessionStorage.getItem("userId");
  const token = sessionStorage.getItem("jwt");
  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  if (token != null)
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    const handleUploadImage = () => {
      if (selectedImage) {
        const formData = new FormData();
        formData.append("image", selectedImage);
  
        axios
          .post("/upload-image", formData) // Replace with your server endpoint
          .then((response) => {
            console.log("Image uploaded successfully:", response.data);
  
            // Update the selectedService with the new image URL
            setSelectedService({
              ...selectedService,
              dp: response.data.imageUrl, // Replace with the actual response field
            });
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

    console.log("User Profile Updated:", userProfile);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-white text-center">
              <h2 className="mb-0">Edit Profile</h2>
            </div>
            <div className="card-body">
            <div className="text-center mb-4">
                <img
                  src={require("../../images/users/user1/dp.jpg")}
                  alt="Current Display Picture"
                  className="img-fluid rounded-circle mb-2 shadow-sm bg-body rounded"
                  style={{ width: "200px", height: "190px" }}
                />
              </div>
              <div className="text-center mb-3">
                <input
                  type="file"
                  accept="image/*"
                  className="form-control visually-hidden"
                  id="uploadImage"
                  onChange={handleImageChange}
                />
                <label htmlFor="uploadImage" className="btn btn-outline-primary">
                  Choose New Display Picture
                </label>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="bio" className="form-label">Bio</label>
                  <textarea
                    id="bio"
                    className="form-control"
                    rows="5"
                    placeholder="Write a brief bio about yourself"
                    value={userProfile.bio}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="userRole" className="form-label">
                    User Role
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userRole"
                    name="userRole"
                    value={userProfile.userRole}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    name="userName"
                    value={userProfile.userName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userRole" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userRole"
                    name="userRole"
                    value={userProfile.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userRole" className="form-label">
                   First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userRole"
                    name="userRole"
                    value={userProfile.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userRole" className="form-label">
                   Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userRole"
                    name="userRole"
                    value={userProfile.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userRole" className="form-label">
                   Expertise
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userRole"
                    name="userRole"
                    value={userProfile.expertise}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userRole" className="form-label">
                   Linkedin Profile Link
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userRole"
                    name="userRole"
                    value={userProfile.socialMediaLink}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleImageChange}>
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
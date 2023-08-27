import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "../context/userContext";
import { toast } from "react-toastify";
import config from "../../config";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Profile = () => {

  const history = useHistory();
  const { user, updateUser, logout } = useUserContext();
  const [dpUrl, setDpUrl] = useState();

  const [userProfile, setUserProfile] = useState({
    bio: "",
    userRole: "",
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
    dp: "",
    expertise: "",
    socialMediaLink: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    debugger;
    if (user != null) {
      setUserProfile(user.userDetails);
      
      setDpUrl(
        config.serverURL + "/users/finddp?path=" + user.userDetails.dpUrl
      );
      debugger;
    }
  }, [user]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const userId = sessionStorage.getItem("userId");
  const token = sessionStorage.getItem("jwt");

  if (token != null)
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  const handleUploadImage = () => {
    debugger;
    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);
      debugger;
      axios
        .post(config.serverURL+`/users/${userId}/dp`, formData)
        .then((response) => {
          debugger;
          console.log("Image uploaded successfully:", response.data);
          
          updateUser({userDetails: response.data.data });
          debugger;
          // Update the selectedService with the new image URL
          console.log(user);
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    }
  };

  //Update the user details
  const editProfileData = () => {
    console.log(userProfile);
    debugger;
    axios
      .put(config.serverURL + `/users/edit`, {...userProfile, id: Number(sessionStorage.getItem('userId'))})
      .then((response) => {
        const result = response.data;
        debugger;
        if (result === "error") {
          toast.error("Something went wrong!");
        } else {
          toast.success("Successfully updated profile!");
          updateUser({userDetails: response.data.data });
          history.push("/maestro/dashboard/")
        }
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    console.log(dpUrl);
    e.preventDefault();
    // Perform your API call or update logic here
    handleUploadImage();
    editProfileData();
    console.log("User Profile Updated:", userProfile);
    history.push("/maestro/dashboard/profile");
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
                  src={dpUrl}
                  alt="Current Display Picture"
                  className="img-fluid rounded-circle mb-2 shadow-sm bg-body rounded"
                  style={{ width: "200px", height: "190px" }}
                />
              </div>
              <div className="text-center mb-3">
                {/* <input
                  type="file"
                  accept="image/*"
                  className="form-control visually-hidden"
                  id="uploadImage"
                  onChange={handleImageChange}
                /> */}
            <label for="formFile" class="form-label"><b>Update Profile DP</b></label>
            <input class="form-control" type="file" accept="image/*" id="uploadImage" onChange={handleImageChange}/>
                {/* <label
                  htmlFor="uploadImage"
                  className="btn btn-outline-primary"
                >
                  Choose New Display Picture
                </label> */}
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="bio" className="form-label">
                  <b>Bio</b>
                  </label>
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
                  <b>User Role</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userRole"
                    name="userRole"
                    value={userProfile.userRole}
                    onChange={handleChange}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">
                  <b>User Name</b>
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
                  <label htmlFor="email" className="form-label">
                  <b>Email</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={userProfile.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                  <b>First Name</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={userProfile.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                  <b>Last Name</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={userProfile.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userRole" className="form-label">
                  <b>Expertise</b>
                  </label>
                  <select
                    className="form-select"
                    id="expertise"
                    name="expertise"
                    value={userProfile.expertise}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="TRAVELLER">
                      Traveller
                    </option>
                    <option value="WRITER">Writer</option>
                    <option value="SINGER">Singer</option>
                    <option value="ARTIST">Artist</option>
                    <option value="DEVELOPER">Developer</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="socialMediaLink" className="form-label">
                  <b>Linkedin Profile Link</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="socialMediaLink"
                    name="socialMediaLink"
                    value={userProfile.socialMediaLink}
                    onChange={handleChange}
                  />
                </div>
                <button
                  className="btn btn-primary"
                >
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

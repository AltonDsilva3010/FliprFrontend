import React from "react";
import { Modal } from "react-bootstrap";
import "../../Style/AdminForm.css";
import axios from "axios";
import CustomToast from "../Common/CustomToast";
const AdminForm = (props) => {
  const [uploadedFile, setuploadLink] = React.useState(null);
  const [image, setuploadImage] = React.useState(null);
  const [toast, setToast] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");
  const [toastVariant, setToastVariant] = React.useState("");
  const [UploadField, setUploadField] = React.useState({
    title: "",
    subtitle: "",
    description: "",
    authorName: "",
    type: "",
    speakerName: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setUploadField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    console.log("Upload", e.target.files);

    const { files } = e.target;
    console.log(files[0]);
    setuploadLink(files[0]);
  };

  const handleIamgeUpload = (e) => {
    console.log("Upload", e.target.files);

    const { files } = e.target;
    console.log(files[0]);
    setuploadImage(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit Form");
    console.log("Field", UploadField);
    let formData = new FormData();
    const data = JSON.stringify({
      UploadField,
    });
    formData.append(
      "data",
      JSON.stringify({
        UploadField,
      })
    );
    formData.append("image", image);

    for (const value of formData.values()) {
      console.log(value);
    }
    for (const value of formData.keys()) {
      console.log(value);
    }
    if (formData) {
      await axios({
        method: "post",
        config: { headers: { "Content-Type": "application/json" } },
        url: "https://calm-gray-armadillo-cape.cyclic.app/npodcast",
        data: formData,
      })
        .then((response) => {
          console.log(response);
          setToast((prev) => !prev);
          if (response.data.statuscode === 200) {
            setToastMessage(response.data.message);
            setToastVariant("success");
          } else {
            setToastMessage("Unable To Upload");
            setToastVariant("warning");
          }
        })
        .catch((e) => {
          setToast((prev) => !prev);
          setToastMessage("Something Went Wrong");
          setToastVariant("warning");
        });
    }
    let form = new FormData();
    form.append("video", uploadedFile);
    form.append("title", UploadField.title);

    if (formData) {
      await axios({
        method: "post",
        config: { headers: { "Content-Type": "application/json" } },
        url: "https://calm-gray-armadillo-cape.cyclic.app/npodcast/newVideo",
        data: form,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    e.target.reset();
    setUploadField({
      authorName: "",
      title: "",
      subtitle: "",
      type: "",
      description: "",
      file: "",
      poster: "",
      speakerName: "",
      category: "",
    });

    console.log(formData);

    props.setShow();
  };
  return (
    <>
      <Modal
        show={props.show}
        onHide={() => props.setShow()}
        dialogClassName="modal-80w"
        className="admin-form"
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Podcast Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="admin-form-container">
            <p className="admin-form-title">Podcast Details</p>
            <form className="form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="title"
                  id="podcastname"
                  required
                  placeholder="Enter PodCast Title"
                  onChange={handleChange}
                  value={UploadField.title}
                />
              </div>

              <div className="input-group">
                <input
                  type="text"
                  required
                  name="subtitle"
                  id="podcastname"
                  placeholder="Enter PodCast Subtitle"
                  onChange={handleChange}
                  value={UploadField.subtitle}
                />
              </div>

              <div className="input-group">
                <textarea
                  name="description"
                  required
                  cols="30"
                  rows="10"
                  placeholder="Enter PodCast Description"
                  onChange={handleChange}
                  value={UploadField.description}
                />
              </div>

              <div className="row options-row">
                <div className="col-6 input-group ">
                  <select
                    name="type"
                    id="type"
                    required
                    placeholder="Choose Podcast Type"
                    multiple={false}
                    onChange={handleChange}
                    value={UploadField.type}
                  >
                    <option value="" disabled selected>
                      Choose Podcast Type
                    </option>
                    <option value="Audio">Audio</option>
                    <option value="Video">Video</option>
                  </select>
                </div>
                <div className="col-6 input-group ">
                  <select
                    required
                    name="category"
                    id="type"
                    placeholder="Choose Podcast Category"
                    multiple={false}
                    onChange={handleChange}
                    value={UploadField.category}
                  >
                    <option value="" disabled selected>
                      Choose Podcast Category
                    </option>
                    <option value="Education">Education</option>
                    <option value="Business">
                      Business And Entrepreneurship
                    </option>
                    <option value="Fitness">Fitness</option>
                    <option value="Music">Music</option>
                    <option value="News_Politics">News And Politics</option>
                    <option value="Science_Technology">
                      Science And Technology
                    </option>
                    <option value="Society_Culture">Society And Culture</option>
                    <option value="Sports">Sports</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="True_Crime_Mystery">
                      True Crime And Mystery
                    </option>
                    <option value="Horror">Horror</option>
                    <option value="Spiritual">Spiritual</option>
                  </select>
                </div>
              </div>

              <div className="row upload-row">
                <label for="file-input" className="col-5 drop-container">
                  <span>Upload Podcast Here</span>
                  <input
                    type="file"
                    accept="video/*"
                    required
                    id="file-input"
                    name="uploadFile"
                    onChange={handleFileUpload}
                  />
                </label>
                <label for="file-input" className="col-5 drop-container">
                  <span>Upload Poster Here</span>
                  <input
                    type="file"
                    accept="image/*"
                    required
                    id="file-input"
                    name="image"
                    onChange={handleIamgeUpload}
                  />
                </label>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  required
                  name="authorName"
                  id="podcastname"
                  placeholder="Enter Author Name"
                  onChange={handleChange}
                  value={UploadField.authorName}
                />
              </div>

              <div className="input-group">
                <input
                  type="text"
                  required
                  name="speakerName"
                  id="podcastname"
                  placeholder="Enter Speaker Name"
                  onChange={handleChange}
                  value={UploadField.speakerName}
                />
              </div>

              <button className="upload">Upload</button>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      {toast && (
        <CustomToast
          toastMessage={toastMessage}
          setShow={setToast}
          show={toast}
          variant={toastVariant}
        />
      )}
    </>
  );
};

export default AdminForm;

// Contact.js
import React, { useState } from "react";
import styles from "./Contact.module.css";
import contactlogo from "../../assets/contact.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newFormErrors = { ...formErrors };

    // Name validation
    if (!formData.name.trim()) {
        newFormErrors.name = "Name is required";
        valid = false;
      } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
        newFormErrors.name = "Invalid Name";
        valid = false;
      } else {
        newFormErrors.name = "";
      }

    // Email validation
    if (!formData.email.trim()) {
      newFormErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@gmail\.com$/.test(formData.email)) {
      newFormErrors.email = "Invalid email format";
      valid = false;
    } else {
      newFormErrors.email = "";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newFormErrors.phone = "Phone is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newFormErrors.phone = "Invalid phone number";
      valid = false;
    } else {
      newFormErrors.phone = "";
    }

    // Message validation
    if (!formData.message.trim()) {
      newFormErrors.message = "Message is required";
      valid = false;
    } else {
      newFormErrors.message = "";
    }

    setFormErrors(newFormErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Manish");
    if (validateForm()) {
      try {
        const response = await fetch(
          "https://laptop-galaxy-project-default-rtdb.firebaseio.com/Contact.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              message: formData.message,
            }),
          }
        );

        if (response.ok) {
          console.log("Data sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        } else {
          console.error(
            "Failed to send data to Firebase. Server returned:",
            response
          );
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className={styles.contact}>
      <div className={styles.column}>
        <img src={contactlogo} alt="Contact" className={styles.image} />
      </div>
      <div className={styles.column}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {formErrors.name && (
            <span className={styles.error}>{formErrors.name}</span>
          )}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {formErrors.email && (
            <span className={styles.error}>{formErrors.email}</span>
          )}

          <label htmlFor="phone">Phone No:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {formErrors.phone && (
            <span className={styles.error}>{formErrors.phone}</span>
          )}

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {formErrors.message && (
            <span className={styles.error}>{formErrors.message}</span>
          )}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;


// // Contact.js
// import React, { useState } from "react";
// import styles from "./Contact.module.css";
// import contactlogo from "../../assets/contact.png";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validateForm = () => {
//     let valid = true;
//     const newFormErrors = { ...formErrors };

//     // Name validation
//     if (!formData.name.trim()) {
//       newFormErrors.name = "Name is required";
//       valid = false;
//     } else {
//       newFormErrors.name = "";
//     }

//     // Email validation
//     if (!formData.email.trim()) {
//       newFormErrors.email = "Email is required";
//       valid = false;
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newFormErrors.email = "Invalid email format";
//       valid = false;
//     } else {
//       newFormErrors.email = "";
//     }

//     // Phone validation
//     if (!formData.phone.trim()) {
//       newFormErrors.phone = "Phone is required";
//       valid = false;
//     } else if (!/^\d{10}$/.test(formData.phone)) {
//       newFormErrors.phone = "Invalid phone number";
//       valid = false;
//     } else {
//       newFormErrors.phone = "";
//     }

//     // Message validation
//     if (!formData.message.trim()) {
//       newFormErrors.message = "Message is required";
//       valid = false;
//     } else {
//       newFormErrors.message = "";
//     }

//     setFormErrors(newFormErrors);
//     return valid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Manish");
//     if (validateForm()) {
//       try {
//         const response = await fetch(
//           "https://laptop-galaxy-project-default-rtdb.firebaseio.com/Contact.json",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               name: formData.name,
//               email: formData.email,
//               phone: formData.phone,
//               message: formData.message,
//             }),
//           }
//         );

//         if (response.ok) {
//           console.log("Data sent successfully!");
//           setFormData({
//             name: "",
//             email: "",
//             phone: "",
//             message: "",
//           });
//         } else {
//           console.error(
//             "Failed to send data to Firebase. Server returned:",
//             response
//           );
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     }
//   };

//   return (
//     <div className={styles.contact}>
//       <div className={styles.column}>
//         <img src={contactlogo} alt="Contact" className={styles.image} />
//       </div>
//       <div className={styles.column}>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />

//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <label htmlFor="phone">Phone No:</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />

//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             name="message"
//             rows="4"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit" onClick={handleChange}>
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;


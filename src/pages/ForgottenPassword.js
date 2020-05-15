// import React, { useState, useEffect } from "react";
// import { useHistory, Link } from "react-router-dom";
// import * as yup from "yup";
// import AuthSider from "../components/AuthSider";

// // Redux
// import { connect } from "react-redux";

// // Components
// import { Form, Input, Button, Alert } from "antd";

// // Actions
// import { registerUser, setError, clearError } from "../redux/actions/userActions";

// //This is the forgot password/input email

// const passwordSchema = yup.object({
//     email: yup.string().email("Please enter your email associated with your account.")
// })

// const submitPassword = (e) => {
//     e.preventDefault();

//     passwordSchema
//     .validate(applicant, { abortEarly: true })
//     .then(() => {
//         registerUser(applicant);
//     })
// }
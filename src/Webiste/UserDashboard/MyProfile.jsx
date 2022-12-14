import React, { Fragment } from "react";
import Header from "../Components/Reuseable/Header";
import Auth from "../Components/Reuseable/Auth";
import Search from "../Components/Home/Components/Search";
import ExNews from "../Components/Home/Components/ExNews";
import Notification from "../Components/Home/Components/Notification";
import Tracker from "../Components/Home/Components/Tracker";
import { fetchProfile } from "../redux/getReducer/getUserProfile";
import { Form } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-date-picker";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserDetails } from "../redux/postReducer/UserPost";

import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";

const MyProfile = () => {
  const history = useNavigate();
  const { state } = useLocation();
  const [DOB, setDOB] = useState();
  const dispatch = useDispatch();

  const { userInfo, userToken } = useSelector((state) => state.user);
    
  useEffect(() => {
    if (userToken) {
      dispatch(getUserDetails());
    }
   
  }, [userToken, dispatch]);
  console.log(userInfo,'userInfo sd')

  return (
    <Fragment>
      <div className="d-flex">
        <Header />
        <Auth />
      </div>
      <div className="rightlayoutinner dashboardH">
        <ExNews />
        <Search />
        <Tracker />
        <Notification />
      </div>
      <div className="userHeader">
        <h3>My Profile</h3>
      </div>
      <div className="form">
        <form>
          <div className="row mainrow">
            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
                // onChange={(e) => setNameEn(e.target.value)}
                //                   name="Name"
                //                   value={NameEn}
              >
                <Form.Control type="text"
                value={userInfo === null ? <> </> : userInfo.data.FirstName} 
                placeholder="Name" />
              </FloatingLabel>

              <span className="spanForm"> |</span>
            </div>

            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="اسم"
                className="mb-3 floatingInputAr"
                // onChange={(e) => setNameAr(e.target.value)}
                //                   name="Name"
                //                   value={NameAr}
                style={{ direction: "rtl" }}
              >
                <Form.Control type="text"
                
                placeholder="اسم" />
              </FloatingLabel>
            </div>
          </div>
          <div className="row mainrow">
            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="User Name"
                className="mb-3"
                // onChange={(e) => setNameEn(e.target.value)}
                //                   name="Name"
                //                   value={NameEn}
              >
                <Form.Control type="text" placeholder="User Name" />
              </FloatingLabel>

              <span className="spanForm"> |</span>
            </div>

            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="اسم"
                className="mb-3 floatingInputAr"
                // onChange={(e) => setNameAr(e.target.value)}
                //                   name="Name"
                //                   value={NameAr}
                style={{ direction: "rtl" }}
              >
                <Form.Control type="text" placeholder="اسم" />
              </FloatingLabel>
            </div>
          </div>
          <div className="row mainrow">
            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
                // onChange={(e) => setNameEn(e.target.value)}
                //                   name="Name"
                //                   value={NameEn}
              >
                <Form.Control type="email"
                value={userInfo === null ? <> </> : userInfo.data.Email} 
                placeholder="Email" />
              </FloatingLabel>

              <span className="spanForm"> |</span>
            </div>

            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label=""
                className="mb-3 floatingInputAr"
                // onChange={(e) => setNameAr(e.target.value)}
                //                   name="Name"
                //                   value={NameAr}
                style={{ direction: "rtl" }}
              >
                <Form.Control type="text" placeholder="" />
              </FloatingLabel>
            </div>
          </div>
          <div className="row mainrow">
            <div className="col-sm">
              <DatePicker
                onChange={setDOB}
                value={DOB}
                dayPlaceholder=""
                monthPlaceholder="DOB"
                yearPlaceholder=""
              />
              <span className="spanForm"> |</span>
            </div>

            <div className="col-sm" style={{ direction: "rtl" }}>
              <input value={DOB} placeholder="تاريخ الولادة" />
            </div>
          </div>
          <div className="row mainrow">
            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="Passport Number"
                className="mb-3"
                // onChange={(e) => setNameEn(e.target.value)}
                //                   name="Name"
                //                   value={NameEn}
              >
                <Form.Control type="number" placeholder="User Name" />
              </FloatingLabel>

              <span className="spanForm"> |</span>
            </div>

            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="اسم"
                className="mb-3 floatingInputAr"
                // onChange={(e) => setNameAr(e.target.value)}
                //                   name="Name"
                //                   value={NameAr}
                style={{ direction: "rtl" }}
              >
                <Form.Control type="number" placeholder="اسم" />
              </FloatingLabel>
            </div>
          </div>
          <div className="Updateprofile">
            <p>
              {" "}
              For updating passport number please send us email. Passport copy
              and passport number enter must match to claim prize.{" "}
            </p>
          </div>
          <div className="row mainrow">
            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="Passport Scan Copy"
                className="mb-3"
                // onChange={(e) => setNameEn(e.target.value)}
                //                   name="Name"
                //                   value={NameEn}
              >
                <Form.Control type="file" placeholder="Passport Scan Copy" />
              </FloatingLabel>

              <span className="spanForm"> |</span>
            </div>

            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="اسم"
                className="mb-3 floatingInputAr"
                // onChange={(e) => setNameAr(e.target.value)}
                //                   name="Name"
                //                   value={NameAr}
                style={{ direction: "rtl" }}
              >
                <Form.Control type="text" placeholder="اسم" />
              </FloatingLabel>
            </div>
          </div>
          <div className="row mainrow">
            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="Nationality"
                className="mb-3"
                // onChange={(e) => setNameEn(e.target.value)}
                //                   name="Name"
                //                   value={NameEn}
              >
                <Form.Control type="text" placeholder="Nationality" />
              </FloatingLabel>

              <span className="spanForm"> |</span>
            </div>

            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="اسم"
                className="mb-3 floatingInputAr"
                // onChange={(e) => setNameAr(e.target.value)}
                //                   name="Name"
                //                   value={NameAr}
                style={{ direction: "rtl" }}
              >
                <Form.Control type="text" placeholder="اسم" />
              </FloatingLabel>
            </div>
          </div>
          <div className="row mainrow">
            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="Address"
                className="mb-3"
                // onChange={(e) => setNameEn(e.target.value)}
                //                   name="Name"
                //                   value={NameEn}
              >
                <Form.Control type="text" placeholder="Address" />
              </FloatingLabel>

              <span className="spanForm"> |</span>
            </div>

            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="اسم"
                className="mb-3 floatingInputAr"
                // onChange={(e) => setNameAr(e.target.value)}
                //                   name="Name"
                //                   value={NameAr}
                style={{ direction: "rtl" }}
              >
                <Form.Control type="text" placeholder="اسم" />
              </FloatingLabel>
            </div>
          </div>
          <div className="row mainrow">
            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="Password"
                className="mb-3"
                // onChange={(e) => setNameEn(e.target.value)}
                //                   name="Name"
                //                   value={NameEn}
              >
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>

              <span className="spanForm"> |</span>
            </div>

            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="اسم"
                className="mb-3 floatingInputAr"
                // onChange={(e) => setNameAr(e.target.value)}
                //                   name="Name"
                //                   value={NameAr}
                style={{ direction: "rtl" }}
              >
                <Form.Control type="text" placeholder="اسم" />
              </FloatingLabel>
            </div>
          </div>
          <div className="row mainrow">
            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="Re-type Password"
                className="mb-3"
                // onChange={(e) => setNameEn(e.target.value)}
                //                   name="Name"
                //                   value={NameEn}
              >
                <Form.Control type="password" placeholder="Re-type Password" />
              </FloatingLabel>

              <span className="spanForm"> |</span>
            </div>

            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="اسم"
                className="mb-3 floatingInputAr"
                // onChange={(e) => setNameAr(e.target.value)}
                //                   name="Name"
                //                   value={NameAr}
                style={{ direction: "rtl" }}
              >
                <Form.Control type="text" placeholder="اسم" />
              </FloatingLabel>
            </div>
          </div>

          <div className="ButtonSection">
            <button className="updateButton">Update</button>
            <button type="submit" className="SubmitButton">
              Save
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default MyProfile;

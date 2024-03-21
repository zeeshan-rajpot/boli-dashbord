import OtpInput from "react-otp-input";
import { useState } from "react";
import "./otp.css";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  return (
    <div
      className="ms-2 d-block d-md-flex  justify-content-around "
      style={{ height: "100vh" }}
    >
      <div>
        <h1 className="mt-5 " style={{ color: "#00BF63" }}>
          BOLI
        </h1>
        <div className="d-flex flex-column justify-content-center h-75">
          <div>
            <h2 className="fw-bold">Verification Code</h2>
            <p className="w-75" style={{ color: "#667085" }}>
              Please enter verification code we sent you on
              debra.holt@example.com
            </p>
          </div>
          <div className="mt-4">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              className="inputStyle my-5"
              //   renderSeparator={<span>-</span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="inputotp w-25  shadow rounded-3"
                  style={{ color: 'blue' }}
                />
              )}
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="border rounded-2 p-2 w-100"
              style={{ background: "#00BF63", color: "white" }}
            >
              Done
            </button>
          </div>
        </div>
      </div>

      <div className="object-contain  d-md-flex d-none  ">
        <img src="/Frame 4.png" className="w-100 h-auto" />
      </div>
    </div>
  );
};

export default OtpVerification;

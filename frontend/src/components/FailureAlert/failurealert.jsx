import { Alert } from "react-bootstrap";
import { InfoSquareFill } from "react-bootstrap-icons";
import "./failurealert.css"

export const FailureAlert = (props) => {
  return (
    <Alert variant="danger" >
      <div class="error-content">
        <InfoSquareFill className="me-2"/>
          <p>
            {props.errorMsg}
          </p>
      </div>
    </Alert>
  );
};
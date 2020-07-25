import React from "react";
import { useSelector } from "react-redux";
import { Message, Segment, Dimmer, Loader } from "semantic-ui-react";

function App() {
  const errorMessage = useSelector((state) => state.error.errorMessage);
  const successMessage = useSelector((state) => state.error.successMessage);
  const loader = useSelector((state) => state.error.showLoader);

  return (
    <div className="App">
      <div>
        {/* Components Go Here */}
      </div>
      {errorMessage && errorMessage.length > 0 && (
        <Message
          id="errorMessage"
          icon="cancel"
          header="There was an error"
          content={errorMessage}
          wide
        />
      )}
      {successMessage && successMessage.length > 0 && (
        <Message
          id="successMessage"
          icon="check"
          header="There was a successful action"
          content={successMessage}
          wide
        />
      )}
      {loader && (
        <Segment id="table-spinner">
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        </Segment>
      )}
    </div>
  );
}

export default App;

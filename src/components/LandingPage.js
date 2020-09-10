import React, { useState } from "react";
import { GithubOutlined, LoadingOutlined } from "@ant-design/icons";
import { Typography, Input, Button } from "antd";
import { userDataFetchApi } from "../actions/userAction";
import { connect } from "react-redux";
import CustomerSpecificCard from "./CustomerSpecificCard";

const LandingPage = (props) => {
  const { userGitDetails } = props;
  const [dataload, setDataload] = useState(false);
  const [username, setUsername] = useState("");
  let textInput = React.createRef();
  const handleDataFetch = () => {
    if (username.length != 0) {
      console.log("how are you", username);
      props.userDataFetchApi(username);
      setDataload(true);
    } else {
      alert("Enter User Name");
    }
  };

  const getCustomerCard = () => {
    const array = [];
    {
      userGitDetails.data !== null &&
        userGitDetails.data
          .sort((a, b) => b.followers - a.followers)
          .map((gituser) => {
            array.push(
              <CustomerSpecificCard
                imglink={gituser.avatar_url}
                followers={gituser.followers}
                following={gituser.following}
                public_repos={gituser.public_repos}
                public_gists={gituser.public_gists}
                login={gituser.login}
              />
            );
          });
    }
    return <>{array}</>;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          color: "#fff",
          background: "black",
          width: "100%",
          height: "10vh",
          flex: "display",
          justifyContent: "center",
          alignContent: "center",
          fontSize: "2em",
        }}
      >
        {" "}
        Crated By Ashish Kumar
      </div>
      <h1>Github Compare</h1>
      <div>
        <GithubOutlined
          style={{
            padding: 0,
            margin: 0,
            fontSize: "5rem",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "1.5rem",
        }}
      >
        <Typography style={{ paddingRight: "1rem" }}>
          Enter User Name:-{" "}
        </Typography>
        <Input
          placeholder='User Name'
          style={{
            borderColor: "black",
            borderRadius: "1rem",
            height: "1.4rem",
            // w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}
            // "&:hover": {
            //   color: "#fff!important",
            //   backgroundColor: "#4CAF50!important",
            // },
          }}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div
        style={{
          padding: "1rem 0 0 0",
        }}
      >
        {" "}
        <Button
          style={{
            backgroundColor: "#1a53ff",
            width: "20rem",
            height: "2rem",
            cursor: "pointer",
          }}
          onClick={() => handleDataFetch()}
        >
          Compare{" "}
        </Button>
      </div>
      <div>
        {!userGitDetails.isDataLoading ? (
          getCustomerCard()
        ) : (
          <div>
            {dataload && <LoadingOutlined />}
            {!dataload && <Typography> Ready to Compare</Typography>}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userGitDetails: state.userDetails,
});
export default connect(mapStateToProps, { userDataFetchApi })(LandingPage);

// userGitDetails.data.map((gituser) => {
//   <CustomerSpecificCard
//     imglink={
//       "https://images.unsplash.com/photo-1504933350103-e840ede978d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
//     }
//   />;
// })

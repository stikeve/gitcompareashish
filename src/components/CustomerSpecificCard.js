import React from "react";
import { Card } from "antd";
import { Typography, Input, Button } from "antd";

const CustomerSpecificCard = (props) => {
  // console.log(props.)
  return (
    <div style={{ alignItems: "center" }}>
      <Card
        style={{
          borderColor: "red",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          width: "25rem",
          height: "40vh",
          alignItems: "center",
          // marginLeft: "29.5rem",
          //margin: "4rem 29.5rem 0 0",
          margin: "3rem 0 1rem 27rem",
          background: "#3F5185",
          backgroundImage: "linear-gradient(315deg, #3F5185 0%, #09293F 74%)",
        }}
      >
        <img
          src={props.imglink}
          style={{
            height: "100px",
            width: "100px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // position: "absolute",
            // top: "-2rem",
            right: "25px",
            borderRadius: "50%",
            boxShadow: "5px 5px 10px rgba(0,0,0,0.5)",
          }}
        />
        <div>
          {" "}
          <Typography style={{ color: "#009999", fontSize: "2em" }}>
            {props.login}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontWeight: "bold",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div>
              <Typography style={{ color: "#cc0066" }}> Followers</Typography>
              <Typography style={{ color: "#fff" }}>
                {" "}
                {props.followers}
              </Typography>
            </div>
            <div>
              <Typography style={{ color: "#cc0066" }}>Following</Typography>
              <Typography style={{ color: "#fff" }}>
                {props.following}
              </Typography>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <Typography style={{ color: "#cc0066" }}>Public Repos</Typography>
              <Typography style={{ color: "#fff" }}>
                {props.public_repos}
              </Typography>
            </div>
            <div>
              <Typography style={{ color: "#cc0066" }}>
                Public Gitsts
              </Typography>
              <Typography style={{ color: "#fff" }}>
                {" "}
                {props.public_gists}
              </Typography>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CustomerSpecificCard;

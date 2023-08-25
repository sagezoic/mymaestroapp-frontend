import React from "react";

function PostCard() {
  return (
    <div class="card mb-3">
      <div class="card-header bg-white border-0">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQEq7HNPXtEvvw/profile-displayphoto-shrink_200_200/0/1596227507685?e=1617235200&v=beta&t=Br4sHpegbSSX-GR1RnrEqRrZxTr55k3R80qTImOV0i0"
          style={{ borderRadius: "50%", width: "50px", height: "50px" }}
        />
        <span
          style={{
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
            fontWeight: "bold",
            fontSize: "14px",
            marginLeft: "8px",
          }}
          class="align-top"
        >
          <a
            href="https://www.linkedin.com/in/malan/"
            target="_blank"
            style={{ color: "#212529" }}
          >
            David J. Malan
          </a>
        </span>
        <span class="float-right">
          <i class="fas fa-ellipsis-h fa-md"></i>
        </span>
        <span
          class="align-middle"
          style={{
            marginLeft: "-96px",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
            fontSize: "13px",
            color: "#474747",
          }}
        >
          I teach CS50
        </span>
        <span
          class="align-bottom"
          style={{
            marginLeft: "-78px",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell sans-serif",
            fontSize: "13px",
            color: "#474747",
          }}
        >
          25a <i class="fas fa-globe-americas fa-sm"></i>
        </span>
      </div>
      <div>
        <p
          class="card-text ms-3"
          style={{
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
            fontSize: "15px",
            color: "black",
          }}
        >
          They have done great things!
        </p>
        <div>
          <img
            src="https://pbs.twimg.com/media/Em2_xBbXUAEVDx1.jpg"
            class="card-img-top mb-1"
            alt="..."
          />
        </div>
        <span class="ms-3 mt-5">
          <img
            src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
            alt=""
          />
        </span>
        <span class="mt-5">
          <img
            src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
            alt=""
          />
        </span>
        <span
          class="mt-5"
          style={{
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
            fontSize: "13px",
            color: "#474747",
          }}
        >
          <img
            src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97"
            alt=""
          />
          958
        </span>
        <div class="card-footer bg-white mt-1">
          <span>
            <button class="ref btn btn-light btn-sm">
              <i class="far fa-thumbs-up fa-md" style={{ fontSize: "1.2rem" }}>
                <span class="ms-2 mediatext">Like</span>
              </i>
            </button>
          </span>
          <span>
            <button class="ref btn btn-light btn-sm">
              <i class="far fa-comment fa-md" style={{ fontSize: "1.2rem" }}>
                <span class="ms-2 mediatext">Comment</span>
              </i>
            </button>
          </span>
          <span>
            <button class="ref btn btn-light btn-sm">
              <i class="fas fa-share fa-md" style={{ fontSize: "1.2rem" }}>
                <span class="ms-2 mediatext">Share</span>
              </i>
            </button>
          </span>
          <span>
            <button class="ref btn btn-light btn-sm">
              <i
                class="fas fa-paper-plane fa-md"
                style={{ fontSize: "1.2rem" }}
              >
                <span class="ms-2 mediatext">DM</span>
              </i>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default PostCard;

import React from 'react'

function LatestNews() {
  return (
    <div>
        <div class="card mt-2" style={{ width: "19rem" }}>
        <div class="card-header bg-white border-0">
          <span>Latest Updates</span>
          <span>
            <i class="fas fa-info-circle float-right"></i>
          </span>
        </div>
        <div class="card-title">
          <ol>
            <li>
              The Six Morning Habits of High Perf...
              <div
                style={{
                  fontWeight: "lighter",
                  fontSize: "13px",
                  color: "#5f5f5f",
                }}
              >
                Pete Mocakatais | How to be blabla...
              </div>
            </li>
            <li class="mt-2">
              Onconscious Blas
              <div
                style={{
                  fontWeight: "lighter",
                  fontSize: "13px",
                  color: "#5f5f5f",
                }}
              >
                Stacey Gordon
              </div>
            </li>
            <li class="mt-2">
              Critical Thinking for Better Judgme...
              <div
                style={{
                  fontWeight: "lighter",
                  fontSize: "13px",
                  color: "#5f5f5f",
                }}
              >
                Becki Saltzman
              </div>
            </li>
          </ol>
        </div>
        <div
          class="card-footer bg-white border-0 text-center fontWeight-bold"
          style={{ color: "#0a66c2", fontSize: "15px", marginTop: "-25px" }}
        >
          Maestro App Community
        </div>
      </div>
      <div
        class="text-center mt-3 ms-3"
        style={{ position: "sticky", top: "4rem", overflow: "visible" }}
      >
        <span>
          <a href="#" class="link me-3">
            About
          </a>
        </span>
        <span>
          <a
            href="#" class="link me-3"
          >
            Team
          </a>
        </span>
        <span>
          <a
            href="#" class="link me-3"
          >
            Services
          </a>
        </span>
        <span>
          <a
            href="#" 
            class="link me-3"
          >
            Contact
          </a>
        </span>
        <div class="text-center" style={{ marginTop: "10px" }}>
          <img
            src={require("../../images/common/logo.png")}
            width="20px"
            height="20px"
          />
          <span style={{ fontSize: "12px" }}>
            Maestro Corporation © 2023
          </span>
        </div>
      </div>
    </div>
  )
}

export default LatestNews
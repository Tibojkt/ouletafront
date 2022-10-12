import React from "react";

const Preloader = () => {
  return (
    <>
      <div className="preloader-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .preloader-area {
          position: fixed;
          background: #fff;
          width: 100%;
          top: 0;
          height: 100%;
          z-index: 9999999;
          left: 0;
          text-align: center;
          opacity: 0.97;
        }
        .preloader-area img {
          margin-bottom: 5px;
        }
        .preloader-area p {
          font-size: 17px;
        }
      `}</style>
    </>
  );
};

export default Preloader;

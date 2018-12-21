import React from "react";

function header() {
  return (
    <div>
    <div class="jumbotron jumbotron-fluid wrapper">
  <div class="container">
    <h1 class="display-6">Click game</h1>
    <h3 class="lead">Click an image to begin</h3>
    </div>
      
    </div>
    <div role="img" aria-label="click item" class="click-item"></div>
    <div role="img" aria-label="click item" class="click-item"></div>
    <div role="img" aria-label="click item" class="click-item"></div>
  </div>
  );
}

export default header;

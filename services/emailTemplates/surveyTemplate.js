const keys = require("../../config/keys");
module.exports = (survey) => {
  return `
  <html>
    <body>
      <div style="text-align:center;">
      <h3>How are we doing?</h3>
        <p>We are more than happy to receive your feedback!</p>
        <p>${survey.body}</p>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Pretty well</a>
        </div>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">Not well</a>
        </div>
      </div>
    </body>
  </html>
 
  `;
};

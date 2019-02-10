const keys = require ('../../config/keys');

module.exports = survey => {
  return `
    <html>
        <body>
            <div style="text-align:center;">
                <h3>I'd like your input</h3>
                <p>Please answer on our survey</p>
                <p>${survey.body}</p>
                <div> 
                    <a style="margin:10px; color:green;" href="${keys.redirectDomain}/api/surveys/clicked">Yes</a>
                    <a style="margin:10px; color:red;" href="${keys.redirectDomain}/api/surveys/clicked">No</a>
                </div>
            </div>
        </body>
    </html>
  `;
};

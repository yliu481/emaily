# Emaily

Emaily is a web project for sending surveys based on recipients list.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install requirements.

```bash
pip install
```

## Usage
before doing so make sure you create a dev.js in the config folder.  
|server  
 &nbsp;&nbsp;|config  
&nbsp;&nbsp;&nbsp;&nbsp;|dev.js  
The dev.js will export 8 variables for development.
```javascript
module.exports = {
  googleClientID: //GOOGLE_CLIENT_ID,
  googleClientSecret: //GOOGLE_CLIENT_SECRET,
  mongoURI: //MONGO_URI,
  cookieKey: //COOKIE_KEY,
  stripePublishableKey: //STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: //STRIPE_SECRET_KEY,
  sendGridKey: //SEND_GRID_KEY,
  redirectDomain: //REDIRECT_DOMAIN,
};
```

In the server folder  

```python
npm run dev
```
This will start both the front end and the back end.
## Tech Stack
ReactJS, NodeJS, Express,  
Login using Google OAuth  
Payment using [StripAPI](https://stripe.com/docs/api)  
Sending email surveys using [Twilio SendGrid](https://sendgrid.com/docs/api-reference/)  



## License
[MIT](https://choosealicense.com/licenses/mit/)
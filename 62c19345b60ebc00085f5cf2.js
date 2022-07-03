const express = require("@runkit/runkit/express-endpoint/1.0.0");
const cors = require ("cors");
require("core-js")  
const belvo = require("belvo").default;
const bodyParser = require("body-parser");

const app = express(exports);
app.use(cors());
app.use(bodyParser.json());

const client = new belvo(
"4ad88c2f-dc93-40cc-bd22-281dc976d9d5",
"D*T_2pnJcWatg*X_*gcG7nTF*vwz9_RUFD9CiZDvH2cBp6e6vvqio3Nu2htYTPPC",
"https://sandbox.belvo.com"
);

const options = {
//widget: {
//    branding: {
 //     company_icon: COMPANY_ICON_URL,
 //     company_logo: COMPANY_LOGO_URL,
 //     company_name: COMPANY_NAME,
  //    company_benefit_header: COMPANY_BENEFIT_HEADER,
 //     company_benefit_content: COMPANY_BENEFIT_CONTENT,
 //     opportunity_loss: COMPANY_OPPORTUNITY_LOSS
 
//    }
// }
}

app.get("/token", (req, res) => {
    return client.connect().then(() => {
        return client.widgetToken.create(options).then((belvoResponse) => {
            res.json(belvoResponse);            
         })
     })
});
            
app.post("/sucess", (req, res) => {
    return client.connect().then(() => {
    return client.institutions.list({
        filters: {
            name: req.body.institution
            }
            }).then((belvoResponse) => {
            res.json(belvoResponse);
            }).catch((err) => res.send(err))
        })
});    ;

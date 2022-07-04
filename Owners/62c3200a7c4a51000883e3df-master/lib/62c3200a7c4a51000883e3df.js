// check our node package on github
// https://github.com/belvo-finance/belvo-js
require ("core-js")
var belvo = require('belvo').default;

var client = new belvo(
  '4ad88c2f-dc93-40cc-bd22-281dc976d9d5',
  'D*T_2pnJcWatg*X_*gcG7nTF*vwz9_RUFD9CiZDvH2cBp6e6vvqio3Nu2htYTPPC',
  'https://sandbox.belvo.com'
);

client.connect()
  .then(function () {
    client.owners.retrieve('7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91')
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
});

[
  {
    "id": "1d5aafc1-a8e8-4897-a942-db9ed3f78515",
    "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
    "created_at": "2022-07-04T18:09:50.474281Z",
    "collected_at": "2022-07-04T01:21:34.285908Z",
    "internal_identification": "00ca3331",
    "display_name": "Erick da Rocha Pereira",
    "first_name": "Erick",
    "last_name": "da Rocha",
    "second_last_name": "Pereira",
    "business_name": null,
    "email": "kfernandes@da.com",
    "phone_number": "71 9155 2474",
    "address": "Vereda Barros, 7\nVila Bandeirantes\n52229-414 Ferreira / SP",
    "document_id": {
      "document_type": "CPF",
      "document_number": "210.785.469-67"
    }
  }
];

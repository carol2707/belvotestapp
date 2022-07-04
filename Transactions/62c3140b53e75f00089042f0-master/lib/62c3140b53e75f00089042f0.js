// check our node package on github
// https://github.com/belvo-finance/belvo-js
require  ("core-js")
var belvo = require('belvo').default;

var client = new belvo(
  '4ad88c2f-dc93-40cc-bd22-281dc976d9d5',
  'D*T_2pnJcWatg*X_*gcG7nTF*vwz9_RUFD9CiZDvH2cBp6e6vvqio3Nu2htYTPPC',
  'https://sandbox.belvo.com'
);

client.connect()
  .then(function () {
    client.transactions.retrieve('7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91', '2020-02-07', { 'dateTo': '2022-02-15' })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
});

[
  {
    "id": "b86a4bf2-6fac-4cc8-bd10-a2f834a9b4fd",
    "account": {
      "id": "e7542361-0f27-4f79-a062-33a0d0d80644",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.975464Z",
      "collected_at": "2022-07-04T01:21:34.353181Z",
      "currency": "BRL",
      "category": "PENSION_FUND_ACCOUNT",
      "type": "PROGRESSIVA",
      "number": "28953416",
      "agency": null,
      "bank_product_id": "11",
      "internal_identification": "753c46ba",
      "public_identification_name": "PENSION_PLAN_ID",
      "public_identification_value": "114702255053449022",
      "credit_data": null,
      "loan_data": null,
      "name": "VGBL - COMPENSAVEL",
      "balance": {
        "current": 0,
        "available": 0
      },
      "last_accessed_at": "2022-07-04T00:47:05",
      "funds_data": [
        {
          "collected_at": "2022-07-04T01:21:34.353205Z",
          "name": "PREMIUM III",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-01"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 81993,
          "percentage": 9
        },
        {
          "collected_at": "2022-07-04T01:21:34.353271Z",
          "name": "MULTI DIVIDENDOS I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-02"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 82282,
          "percentage": 7
        },
        {
          "collected_at": "2022-07-04T01:21:34.353328Z",
          "name": "ESTRATEGIA 2025 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-03"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 47657,
          "percentage": 5
        },
        {
          "collected_at": "2022-07-04T01:21:34.353380Z",
          "name": "CICLO DE VIDA 2020 I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-04"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 13301,
          "percentage": 8
        },
        {
          "collected_at": "2022-07-04T01:21:34.353427Z",
          "name": "ESTRATEGIA 2035 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-05"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 39207,
          "percentage": 4
        },
        {
          "collected_at": "2022-07-04T01:21:34.353471Z",
          "name": "ESTRATEGIA 2035 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-06"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 13698,
          "percentage": 2.220446049250313e-16
        },
        {
          "collected_at": "2022-07-04T01:21:34.353521Z",
          "name": "ESTRATEGIA 2025 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-07"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 57525,
          "percentage": 1
        },
        {
          "collected_at": "2022-07-04T01:21:34.353565Z",
          "name": "FIX X",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-08"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 71367,
          "percentage": 4
        },
        {
          "collected_at": "2022-07-04T01:21:34.353608Z",
          "name": "CICLO DE VIDA 2020 I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-09"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 67742,
          "percentage": 6
        },
        {
          "collected_at": "2022-07-04T01:21:34.353652Z",
          "name": "FIX X",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-10"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 90798,
          "percentage": 2.220446049250313e-16
        }
      ],
      "balance_type": "ASSET"
    },
    "created_at": "2022-07-04T01:21:44.846304Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Stanley, Brown and Anderson",
      "website": "www.stanleybrownandanderson.com",
      "logo": "www.stanleybrownandanderson.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 50635.48,
    "currency": "BRL",
    "gig_data": null,
    "reference": "7512",
    "value_date": "2022-02-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:38.765432Z",
    "observations": null,
    "accounting_date": "2022-06-27T08:18:30",
    "internal_identification": "7fb8a8c0"
  },
  {
    "id": "50fee500-ab9c-4c43-8352-5812ff7d700a",
    "account": {
      "id": "e7542361-0f27-4f79-a062-33a0d0d80644",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.975511Z",
      "collected_at": "2022-07-04T01:21:34.353181Z",
      "currency": "BRL",
      "category": "PENSION_FUND_ACCOUNT",
      "type": "PROGRESSIVA",
      "number": "28953416",
      "agency": null,
      "bank_product_id": "11",
      "internal_identification": "753c46ba",
      "public_identification_name": "PENSION_PLAN_ID",
      "public_identification_value": "114702255053449022",
      "credit_data": null,
      "loan_data": null,
      "name": "VGBL - COMPENSAVEL",
      "balance": {
        "current": 0,
        "available": 0
      },
      "last_accessed_at": "2022-07-04T00:47:05",
      "funds_data": [
        {
          "collected_at": "2022-07-04T01:21:34.353205Z",
          "name": "PREMIUM III",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-01"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 81993,
          "percentage": 9
        },
        {
          "collected_at": "2022-07-04T01:21:34.353271Z",
          "name": "MULTI DIVIDENDOS I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-02"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 82282,
          "percentage": 7
        },
        {
          "collected_at": "2022-07-04T01:21:34.353328Z",
          "name": "ESTRATEGIA 2025 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-03"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 47657,
          "percentage": 5
        },
        {
          "collected_at": "2022-07-04T01:21:34.353380Z",
          "name": "CICLO DE VIDA 2020 I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-04"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 13301,
          "percentage": 8
        },
        {
          "collected_at": "2022-07-04T01:21:34.353427Z",
          "name": "ESTRATEGIA 2035 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-05"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 39207,
          "percentage": 4
        },
        {
          "collected_at": "2022-07-04T01:21:34.353471Z",
          "name": "ESTRATEGIA 2035 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-06"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 13698,
          "percentage": 2.220446049250313e-16
        },
        {
          "collected_at": "2022-07-04T01:21:34.353521Z",
          "name": "ESTRATEGIA 2025 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-07"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 57525,
          "percentage": 1
        },
        {
          "collected_at": "2022-07-04T01:21:34.353565Z",
          "name": "FIX X",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-08"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 71367,
          "percentage": 4
        },
        {
          "collected_at": "2022-07-04T01:21:34.353608Z",
          "name": "CICLO DE VIDA 2020 I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-09"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 67742,
          "percentage": 6
        },
        {
          "collected_at": "2022-07-04T01:21:34.353652Z",
          "name": "FIX X",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-10"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 90798,
          "percentage": 2.220446049250313e-16
        }
      ],
      "balance_type": "ASSET"
    },
    "created_at": "2022-07-04T01:21:44.846353Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Flores-Phillips",
      "website": "www.floresphillips.com",
      "logo": "www.floresphillips.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 64144.2,
    "currency": "BRL",
    "gig_data": null,
    "reference": "9032",
    "value_date": "2022-01-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:38.766057Z",
    "observations": null,
    "accounting_date": "2022-07-03T02:17:30",
    "internal_identification": "c1dae6d5"
  },
  {
    "id": "1f2c9aa5-fb24-49bd-a117-db97f638e6fb",
    "account": {
      "id": "e7542361-0f27-4f79-a062-33a0d0d80644",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.975560Z",
      "collected_at": "2022-07-04T01:21:34.353181Z",
      "currency": "BRL",
      "category": "PENSION_FUND_ACCOUNT",
      "type": "PROGRESSIVA",
      "number": "28953416",
      "agency": null,
      "bank_product_id": "11",
      "internal_identification": "753c46ba",
      "public_identification_name": "PENSION_PLAN_ID",
      "public_identification_value": "114702255053449022",
      "credit_data": null,
      "loan_data": null,
      "name": "VGBL - COMPENSAVEL",
      "balance": {
        "current": 0,
        "available": 0
      },
      "last_accessed_at": "2022-07-04T00:47:05",
      "funds_data": [
        {
          "collected_at": "2022-07-04T01:21:34.353205Z",
          "name": "PREMIUM III",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-01"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 81993,
          "percentage": 9
        },
        {
          "collected_at": "2022-07-04T01:21:34.353271Z",
          "name": "MULTI DIVIDENDOS I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-02"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 82282,
          "percentage": 7
        },
        {
          "collected_at": "2022-07-04T01:21:34.353328Z",
          "name": "ESTRATEGIA 2025 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-03"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 47657,
          "percentage": 5
        },
        {
          "collected_at": "2022-07-04T01:21:34.353380Z",
          "name": "CICLO DE VIDA 2020 I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-04"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 13301,
          "percentage": 8
        },
        {
          "collected_at": "2022-07-04T01:21:34.353427Z",
          "name": "ESTRATEGIA 2035 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-05"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 39207,
          "percentage": 4
        },
        {
          "collected_at": "2022-07-04T01:21:34.353471Z",
          "name": "ESTRATEGIA 2035 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-06"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 13698,
          "percentage": 2.220446049250313e-16
        },
        {
          "collected_at": "2022-07-04T01:21:34.353521Z",
          "name": "ESTRATEGIA 2025 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-07"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 57525,
          "percentage": 1
        },
        {
          "collected_at": "2022-07-04T01:21:34.353565Z",
          "name": "FIX X",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-08"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 71367,
          "percentage": 4
        },
        {
          "collected_at": "2022-07-04T01:21:34.353608Z",
          "name": "CICLO DE VIDA 2020 I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-09"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 67742,
          "percentage": 6
        },
        {
          "collected_at": "2022-07-04T01:21:34.353652Z",
          "name": "FIX X",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-10"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 90798,
          "percentage": 2.220446049250313e-16
        }
      ],
      "balance_type": "ASSET"
    },
    "created_at": "2022-07-04T01:21:44.846402Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Saunders LLC",
      "website": "www.saundersllc.com",
      "logo": "www.saundersllc.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 91495.8,
    "currency": "BRL",
    "gig_data": null,
    "reference": "2762",
    "value_date": "2021-12-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:38.766554Z",
    "observations": null,
    "accounting_date": "2022-07-01T10:25:01",
    "internal_identification": "e1a2b1e1"
  },
  {
    "id": "d3138235-c7f3-423b-a123-9adbebc39379",
    "account": {
      "id": "e7542361-0f27-4f79-a062-33a0d0d80644",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.975607Z",
      "collected_at": "2022-07-04T01:21:34.353181Z",
      "currency": "BRL",
      "category": "PENSION_FUND_ACCOUNT",
      "type": "PROGRESSIVA",
      "number": "28953416",
      "agency": null,
      "bank_product_id": "11",
      "internal_identification": "753c46ba",
      "public_identification_name": "PENSION_PLAN_ID",
      "public_identification_value": "114702255053449022",
      "credit_data": null,
      "loan_data": null,
      "name": "VGBL - COMPENSAVEL",
      "balance": {
        "current": 0,
        "available": 0
      },
      "last_accessed_at": "2022-07-04T00:47:05",
      "funds_data": [
        {
          "collected_at": "2022-07-04T01:21:34.353205Z",
          "name": "PREMIUM III",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-01"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 81993,
          "percentage": 9
        },
        {
          "collected_at": "2022-07-04T01:21:34.353271Z",
          "name": "MULTI DIVIDENDOS I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-02"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 82282,
          "percentage": 7
        },
        {
          "collected_at": "2022-07-04T01:21:34.353328Z",
          "name": "ESTRATEGIA 2025 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-03"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 47657,
          "percentage": 5
        },
        {
          "collected_at": "2022-07-04T01:21:34.353380Z",
          "name": "CICLO DE VIDA 2020 I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-04"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 13301,
          "percentage": 8
        },
        {
          "collected_at": "2022-07-04T01:21:34.353427Z",
          "name": "ESTRATEGIA 2035 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-05"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 39207,
          "percentage": 4
        },
        {
          "collected_at": "2022-07-04T01:21:34.353471Z",
          "name": "ESTRATEGIA 2035 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-06"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 13698,
          "percentage": 2.220446049250313e-16
        },
        {
          "collected_at": "2022-07-04T01:21:34.353521Z",
          "name": "ESTRATEGIA 2025 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-07"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 57525,
          "percentage": 1
        },
        {
          "collected_at": "2022-07-04T01:21:34.353565Z",
          "name": "FIX X",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-08"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 71367,
          "percentage": 4
        },
        {
          "collected_at": "2022-07-04T01:21:34.353608Z",
          "name": "CICLO DE VIDA 2020 I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-09"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 67742,
          "percentage": 6
        },
        {
          "collected_at": "2022-07-04T01:21:34.353652Z",
          "name": "FIX X",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-10"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 90798,
          "percentage": 2.220446049250313e-16
        }
      ],
      "balance_type": "ASSET"
    },
    "created_at": "2022-07-04T01:21:44.846449Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Webster LLC",
      "website": "www.websterllc.com",
      "logo": "www.websterllc.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 86737.21,
    "currency": "BRL",
    "gig_data": null,
    "reference": "4667",
    "value_date": "2021-11-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:38.766945Z",
    "observations": null,
    "accounting_date": "2022-07-03T22:48:10",
    "internal_identification": "da40e941"
  },
  {
    "id": "5c7225d7-23a2-455a-9ca7-9f8c7bf3aa32",
    "account": {
      "id": "e7542361-0f27-4f79-a062-33a0d0d80644",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.975655Z",
      "collected_at": "2022-07-04T01:21:34.353181Z",
      "currency": "BRL",
      "category": "PENSION_FUND_ACCOUNT",
      "type": "PROGRESSIVA",
      "number": "28953416",
      "agency": null,
      "bank_product_id": "11",
      "internal_identification": "753c46ba",
      "public_identification_name": "PENSION_PLAN_ID",
      "public_identification_value": "114702255053449022",
      "credit_data": null,
      "loan_data": null,
      "name": "VGBL - COMPENSAVEL",
      "balance": {
        "current": 0,
        "available": 0
      },
      "last_accessed_at": "2022-07-04T00:47:05",
      "funds_data": [
        {
          "collected_at": "2022-07-04T01:21:34.353205Z",
          "name": "PREMIUM III",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-01"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 81993,
          "percentage": 9
        },
        {
          "collected_at": "2022-07-04T01:21:34.353271Z",
          "name": "MULTI DIVIDENDOS I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-02"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 82282,
          "percentage": 7
        },
        {
          "collected_at": "2022-07-04T01:21:34.353328Z",
          "name": "ESTRATEGIA 2025 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-03"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 47657,
          "percentage": 5
        },
        {
          "collected_at": "2022-07-04T01:21:34.353380Z",
          "name": "CICLO DE VIDA 2020 I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-04"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 13301,
          "percentage": 8
        },
        {
          "collected_at": "2022-07-04T01:21:34.353427Z",
          "name": "ESTRATEGIA 2035 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-05"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 39207,
          "percentage": 4
        },
        {
          "collected_at": "2022-07-04T01:21:34.353471Z",
          "name": "ESTRATEGIA 2035 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-06"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 13698,
          "percentage": 2.220446049250313e-16
        },
        {
          "collected_at": "2022-07-04T01:21:34.353521Z",
          "name": "ESTRATEGIA 2025 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-07"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 57525,
          "percentage": 1
        },
        {
          "collected_at": "2022-07-04T01:21:34.353565Z",
          "name": "FIX X",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-08"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 71367,
          "percentage": 4
        },
        {
          "collected_at": "2022-07-04T01:21:34.353608Z",
          "name": "CICLO DE VIDA 2020 I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-09"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 67742,
          "percentage": 6
        },
        {
          "collected_at": "2022-07-04T01:21:34.353652Z",
          "name": "FIX X",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-10"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 90798,
          "percentage": 2.220446049250313e-16
        }
      ],
      "balance_type": "ASSET"
    },
    "created_at": "2022-07-04T01:21:44.846497Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Gonzalez, Brennan and Soto",
      "website": "www.gonzalezbrennanandsoto.com",
      "logo": "www.gonzalezbrennanandsoto.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 93506.35,
    "currency": "BRL",
    "gig_data": null,
    "reference": "0874",
    "value_date": "2021-10-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:38.767335Z",
    "observations": null,
    "accounting_date": "2022-06-25T01:32:10",
    "internal_identification": "ded79f1d"
  },
  {
    "id": "ea1e5dd8-6b03-4deb-905b-1a74c6c670ba",
    "account": {
      "id": "e7542361-0f27-4f79-a062-33a0d0d80644",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.975702Z",
      "collected_at": "2022-07-04T01:21:34.353181Z",
      "currency": "BRL",
      "category": "PENSION_FUND_ACCOUNT",
      "type": "PROGRESSIVA",
      "number": "28953416",
      "agency": null,
      "bank_product_id": "11",
      "internal_identification": "753c46ba",
      "public_identification_name": "PENSION_PLAN_ID",
      "public_identification_value": "114702255053449022",
      "credit_data": null,
      "loan_data": null,
      "name": "VGBL - COMPENSAVEL",
      "balance": {
        "current": 0,
        "available": 0
      },
      "last_accessed_at": "2022-07-04T00:47:05",
      "funds_data": [
        {
          "collected_at": "2022-07-04T01:21:34.353205Z",
          "name": "PREMIUM III",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-01"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 81993,
          "percentage": 9
        },
        {
          "collected_at": "2022-07-04T01:21:34.353271Z",
          "name": "MULTI DIVIDENDOS I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-02"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 82282,
          "percentage": 7
        },
        {
          "collected_at": "2022-07-04T01:21:34.353328Z",
          "name": "ESTRATEGIA 2025 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-03"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 47657,
          "percentage": 5
        },
        {
          "collected_at": "2022-07-04T01:21:34.353380Z",
          "name": "CICLO DE VIDA 2020 I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-04"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 13301,
          "percentage": 8
        },
        {
          "collected_at": "2022-07-04T01:21:34.353427Z",
          "name": "ESTRATEGIA 2035 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-05"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 39207,
          "percentage": 4
        },
        {
          "collected_at": "2022-07-04T01:21:34.353471Z",
          "name": "ESTRATEGIA 2035 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-06"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 13698,
          "percentage": 2.220446049250313e-16
        },
        {
          "collected_at": "2022-07-04T01:21:34.353521Z",
          "name": "ESTRATEGIA 2025 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-07"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 57525,
          "percentage": 1
        },
        {
          "collected_at": "2022-07-04T01:21:34.353565Z",
          "name": "FIX X",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-08"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 71367,
          "percentage": 4
        },
        {
          "collected_at": "2022-07-04T01:21:34.353608Z",
          "name": "CICLO DE VIDA 2020 I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-09"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 67742,
          "percentage": 6
        },
        {
          "collected_at": "2022-07-04T01:21:34.353652Z",
          "name": "FIX X",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-10"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 90798,
          "percentage": 2.220446049250313e-16
        }
      ],
      "balance_type": "ASSET"
    },
    "created_at": "2022-07-04T01:21:44.846545Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Macdonald, Boyer and Brown",
      "website": "www.macdonaldboyerandbrown.com",
      "logo": "www.macdonaldboyerandbrown.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 90696.76,
    "currency": "BRL",
    "gig_data": null,
    "reference": "1921",
    "value_date": "2021-09-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:38.767954Z",
    "observations": null,
    "accounting_date": "2022-06-22T02:41:23",
    "internal_identification": "5d195390"
  },
  {
    "id": "443d6a89-3a71-465a-8635-3e246cc91dec",
    "account": {
      "id": "e7542361-0f27-4f79-a062-33a0d0d80644",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.975749Z",
      "collected_at": "2022-07-04T01:21:34.353181Z",
      "currency": "BRL",
      "category": "PENSION_FUND_ACCOUNT",
      "type": "PROGRESSIVA",
      "number": "28953416",
      "agency": null,
      "bank_product_id": "11",
      "internal_identification": "753c46ba",
      "public_identification_name": "PENSION_PLAN_ID",
      "public_identification_value": "114702255053449022",
      "credit_data": null,
      "loan_data": null,
      "name": "VGBL - COMPENSAVEL",
      "balance": {
        "current": 0,
        "available": 0
      },
      "last_accessed_at": "2022-07-04T00:47:05",
      "funds_data": [
        {
          "collected_at": "2022-07-04T01:21:34.353205Z",
          "name": "PREMIUM III",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-01"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 81993,
          "percentage": 9
        },
        {
          "collected_at": "2022-07-04T01:21:34.353271Z",
          "name": "MULTI DIVIDENDOS I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-02"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 82282,
          "percentage": 7
        },
        {
          "collected_at": "2022-07-04T01:21:34.353328Z",
          "name": "ESTRATEGIA 2025 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-03"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 47657,
          "percentage": 5
        },
        {
          "collected_at": "2022-07-04T01:21:34.353380Z",
          "name": "CICLO DE VIDA 2020 I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-04"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 13301,
          "percentage": 8
        },
        {
          "collected_at": "2022-07-04T01:21:34.353427Z",
          "name": "ESTRATEGIA 2035 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-05"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 39207,
          "percentage": 4
        },
        {
          "collected_at": "2022-07-04T01:21:34.353471Z",
          "name": "ESTRATEGIA 2035 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-06"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 13698,
          "percentage": 2.220446049250313e-16
        },
        {
          "collected_at": "2022-07-04T01:21:34.353521Z",
          "name": "ESTRATEGIA 2025 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-07"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 57525,
          "percentage": 1
        },
        {
          "collected_at": "2022-07-04T01:21:34.353565Z",
          "name": "FIX X",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-08"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 71367,
          "percentage": 4
        },
        {
          "collected_at": "2022-07-04T01:21:34.353608Z",
          "name": "CICLO DE VIDA 2020 I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-09"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 67742,
          "percentage": 6
        },
        {
          "collected_at": "2022-07-04T01:21:34.353652Z",
          "name": "FIX X",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-10"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 90798,
          "percentage": 2.220446049250313e-16
        }
      ],
      "balance_type": "ASSET"
    },
    "created_at": "2022-07-04T01:21:44.846593Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Sutton, Murray and Thompson",
      "website": "www.suttonmurrayandthompson.com",
      "logo": "www.suttonmurrayandthompson.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 63937.15,
    "currency": "BRL",
    "gig_data": null,
    "reference": "6101",
    "value_date": "2021-08-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:38.768620Z",
    "observations": null,
    "accounting_date": "2022-06-30T08:00:11",
    "internal_identification": "15ac5323"
  },
  {
    "id": "2946f8dd-856e-4f29-adab-82df8799dc3e",
    "account": {
      "id": "e7542361-0f27-4f79-a062-33a0d0d80644",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.975796Z",
      "collected_at": "2022-07-04T01:21:34.353181Z",
      "currency": "BRL",
      "category": "PENSION_FUND_ACCOUNT",
      "type": "PROGRESSIVA",
      "number": "28953416",
      "agency": null,
      "bank_product_id": "11",
      "internal_identification": "753c46ba",
      "public_identification_name": "PENSION_PLAN_ID",
      "public_identification_value": "114702255053449022",
      "credit_data": null,
      "loan_data": null,
      "name": "VGBL - COMPENSAVEL",
      "balance": {
        "current": 0,
        "available": 0
      },
      "last_accessed_at": "2022-07-04T00:47:05",
      "funds_data": [
        {
          "collected_at": "2022-07-04T01:21:34.353205Z",
          "name": "PREMIUM III",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-01"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 81993,
          "percentage": 9
        },
        {
          "collected_at": "2022-07-04T01:21:34.353271Z",
          "name": "MULTI DIVIDENDOS I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-02"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 82282,
          "percentage": 7
        },
        {
          "collected_at": "2022-07-04T01:21:34.353328Z",
          "name": "ESTRATEGIA 2025 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-03"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 47657,
          "percentage": 5
        },
        {
          "collected_at": "2022-07-04T01:21:34.353380Z",
          "name": "CICLO DE VIDA 2020 I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-04"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 13301,
          "percentage": 8
        },
        {
          "collected_at": "2022-07-04T01:21:34.353427Z",
          "name": "ESTRATEGIA 2035 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-05"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 39207,
          "percentage": 4
        },
        {
          "collected_at": "2022-07-04T01:21:34.353471Z",
          "name": "ESTRATEGIA 2035 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-06"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 13698,
          "percentage": 2.220446049250313e-16
        },
        {
          "collected_at": "2022-07-04T01:21:34.353521Z",
          "name": "ESTRATEGIA 2025 II",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-07"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 57525,
          "percentage": 1
        },
        {
          "collected_at": "2022-07-04T01:21:34.353565Z",
          "name": "FIX X",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-08"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 71367,
          "percentage": 4
        },
        {
          "collected_at": "2022-07-04T01:21:34.353608Z",
          "name": "CICLO DE VIDA 2020 I",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-09"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 67742,
          "percentage": 6
        },
        {
          "collected_at": "2022-07-04T01:21:34.353652Z",
          "name": "FIX X",
          "type": "PGBL",
          "public_identifications": [
            {
              "name": "CNPJ",
              "value": "11.222.333/4444-10"
            },
            {
              "name": "SUSEP",
              "value": "11111.222222/3333-44"
            }
          ],
          "balance": 90798,
          "percentage": 2.220446049250313e-16
        }
      ],
      "balance_type": "ASSET"
    },
    "created_at": "2022-07-04T16:23:04.975814Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Shepard Inc",
      "website": "www.shepardinc.com",
      "logo": "www.shepardinc.com/logo.png"
    },
    "collected_at": "2022-07-04T01:21:38.769282Z",
    "currency": "BRL",
    "description": "CAMARON PRIME BR",
    "internal_identification": "c2ab9b0e",
    "value_date": "2021-07-04",
    "accounting_date": "2022-06-29T09:45:22",
    "amount": 5000,
    "type": "OUTFLOW",
    "status": "PROCESSED",
    "reference": "2073",
    "balance": 87939.57,
    "observations": null,
    "gig_data": null
  },
  {
    "id": "cf34c303-4936-445b-8481-85eb7b027102",
    "account": {
      "id": "5c2dd082-4cd5-4f82-a6ea-b7ff9f8882aa",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.975055Z",
      "collected_at": "2022-07-04T01:21:34.348867Z",
      "currency": "BRL",
      "category": "CREDIT_CARD",
      "type": "Contas",
      "number": "1229 None5807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "CREDIT_CARD_NUMBER",
      "public_identification_value": "4431 None1368",
      "credit_data": {
        "collected_at": "2022-07-01T19:06:11.153565Z",
        "credit_limit": 15168,
        "cutting_date": "2022-07-19",
        "next_payment_date": "2022-07-23",
        "minimum_payment": 906.928,
        "monthly_payment": 5,
        "no_interest_payment": 0,
        "last_payment_date": "2022-06-24",
        "last_period_balance": 0,
        "interest_rate": 0
      },
      "loan_data": null,
      "name": "Cartão crédito mastercard elite",
      "balance": {
        "current": 17963.99,
        "available": 17963.99
      },
      "last_accessed_at": "2022-07-02T07:22:48",
      "balance_type": "LIABILITY"
    },
    "created_at": "2022-07-04T01:21:44.839076Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Carey Ltd",
      "website": "www.careyltd.com",
      "logo": "www.careyltd.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 96418.82,
    "currency": "BRL",
    "gig_data": null,
    "reference": "3297",
    "value_date": "2022-02-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:37.660165Z",
    "observations": null,
    "accounting_date": "2022-06-22T10:20:45",
    "internal_identification": "b471ad68"
  },
  {
    "id": "5b2f6b5a-0202-4a13-87b9-029bbe9578f9",
    "account": {
      "id": "5c2dd082-4cd5-4f82-a6ea-b7ff9f8882aa",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.975102Z",
      "collected_at": "2022-07-04T01:21:34.348867Z",
      "currency": "BRL",
      "category": "CREDIT_CARD",
      "type": "Contas",
      "number": "1229 None5807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "CREDIT_CARD_NUMBER",
      "public_identification_value": "4431 None1368",
      "credit_data": {
        "collected_at": "2022-07-01T19:06:11.153565Z",
        "credit_limit": 15168,
        "cutting_date": "2022-07-19",
        "next_payment_date": "2022-07-23",
        "minimum_payment": 906.928,
        "monthly_payment": 5,
        "no_interest_payment": 0,
        "last_payment_date": "2022-06-24",
        "last_period_balance": 0,
        "interest_rate": 0
      },
      "loan_data": null,
      "name": "Cartão crédito mastercard elite",
      "balance": {
        "current": 17963.99,
        "available": 17963.99
      },
      "last_accessed_at": "2022-07-02T07:22:48",
      "balance_type": "LIABILITY"
    },
    "created_at": "2022-07-04T01:21:44.839125Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Rodriguez Group",
      "website": "www.rodriguezgroup.com",
      "logo": "www.rodriguezgroup.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 41039.87,
    "currency": "BRL",
    "gig_data": null,
    "reference": "6660",
    "value_date": "2022-01-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:37.660558Z",
    "observations": null,
    "accounting_date": "2022-06-29T03:23:05",
    "internal_identification": "fd734a71"
  },
  {
    "id": "db504164-b502-46c1-b645-1a8c8b9aaacf",
    "account": {
      "id": "5c2dd082-4cd5-4f82-a6ea-b7ff9f8882aa",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.975149Z",
      "collected_at": "2022-07-04T01:21:34.348867Z",
      "currency": "BRL",
      "category": "CREDIT_CARD",
      "type": "Contas",
      "number": "1229 None5807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "CREDIT_CARD_NUMBER",
      "public_identification_value": "4431 None1368",
      "credit_data": {
        "collected_at": "2022-07-01T19:06:11.153565Z",
        "credit_limit": 15168,
        "cutting_date": "2022-07-19",
        "next_payment_date": "2022-07-23",
        "minimum_payment": 906.928,
        "monthly_payment": 5,
        "no_interest_payment": 0,
        "last_payment_date": "2022-06-24",
        "last_period_balance": 0,
        "interest_rate": 0
      },
      "loan_data": null,
      "name": "Cartão crédito mastercard elite",
      "balance": {
        "current": 17963.99,
        "available": 17963.99
      },
      "last_accessed_at": "2022-07-02T07:22:48",
      "balance_type": "LIABILITY"
    },
    "created_at": "2022-07-04T01:21:44.839172Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Brown, Booker and Harmon",
      "website": "www.brownbookerandharmon.com",
      "logo": "www.brownbookerandharmon.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 64314.78,
    "currency": "BRL",
    "gig_data": null,
    "reference": "5866",
    "value_date": "2021-12-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:37.660981Z",
    "observations": null,
    "accounting_date": "2022-06-26T02:55:17",
    "internal_identification": "6a0c8716"
  },
  {
    "id": "5e9e8185-652f-4df4-b5e3-7eaf0aee6f9b",
    "account": {
      "id": "5c2dd082-4cd5-4f82-a6ea-b7ff9f8882aa",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.975197Z",
      "collected_at": "2022-07-04T01:21:34.348867Z",
      "currency": "BRL",
      "category": "CREDIT_CARD",
      "type": "Contas",
      "number": "1229 None5807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "CREDIT_CARD_NUMBER",
      "public_identification_value": "4431 None1368",
      "credit_data": {
        "collected_at": "2022-07-01T19:06:11.153565Z",
        "credit_limit": 15168,
        "cutting_date": "2022-07-19",
        "next_payment_date": "2022-07-23",
        "minimum_payment": 906.928,
        "monthly_payment": 5,
        "no_interest_payment": 0,
        "last_payment_date": "2022-06-24",
        "last_period_balance": 0,
        "interest_rate": 0
      },
      "loan_data": null,
      "name": "Cartão crédito mastercard elite",
      "balance": {
        "current": 17963.99,
        "available": 17963.99
      },
      "last_accessed_at": "2022-07-02T07:22:48",
      "balance_type": "LIABILITY"
    },
    "created_at": "2022-07-04T01:21:44.839220Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Mckinney Ltd",
      "website": "www.mckinneyltd.com",
      "logo": "www.mckinneyltd.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 93121.5,
    "currency": "BRL",
    "gig_data": null,
    "reference": "9208",
    "value_date": "2021-11-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:37.661610Z",
    "observations": null,
    "accounting_date": "2022-06-22T04:24:19",
    "internal_identification": "ee7835c7"
  },
  {
    "id": "de69fcee-d202-4ae9-b08a-e249eb6e82aa",
    "account": {
      "id": "5c2dd082-4cd5-4f82-a6ea-b7ff9f8882aa",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.975245Z",
      "collected_at": "2022-07-04T01:21:34.348867Z",
      "currency": "BRL",
      "category": "CREDIT_CARD",
      "type": "Contas",
      "number": "1229 None5807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "CREDIT_CARD_NUMBER",
      "public_identification_value": "4431 None1368",
      "credit_data": {
        "collected_at": "2022-07-01T19:06:11.153565Z",
        "credit_limit": 15168,
        "cutting_date": "2022-07-19",
        "next_payment_date": "2022-07-23",
        "minimum_payment": 906.928,
        "monthly_payment": 5,
        "no_interest_payment": 0,
        "last_payment_date": "2022-06-24",
        "last_period_balance": 0,
        "interest_rate": 0
      },
      "loan_data": null,
      "name": "Cartão crédito mastercard elite",
      "balance": {
        "current": 17963.99,
        "available": 17963.99
      },
      "last_accessed_at": "2022-07-02T07:22:48",
      "balance_type": "LIABILITY"
    },
    "created_at": "2022-07-04T01:21:44.839268Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Perry Group",
      "website": "www.perrygroup.com",
      "logo": "www.perrygroup.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 45546.79,
    "currency": "BRL",
    "gig_data": null,
    "reference": "0057",
    "value_date": "2021-10-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:37.662016Z",
    "observations": null,
    "accounting_date": "2022-07-03T12:14:34",
    "internal_identification": "7501df71"
  },
  {
    "id": "4a382e10-b12d-4c09-b9ee-bed8b7375797",
    "account": {
      "id": "5c2dd082-4cd5-4f82-a6ea-b7ff9f8882aa",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.975294Z",
      "collected_at": "2022-07-04T01:21:34.348867Z",
      "currency": "BRL",
      "category": "CREDIT_CARD",
      "type": "Contas",
      "number": "1229 None5807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "CREDIT_CARD_NUMBER",
      "public_identification_value": "4431 None1368",
      "credit_data": {
        "collected_at": "2022-07-01T19:06:11.153565Z",
        "credit_limit": 15168,
        "cutting_date": "2022-07-19",
        "next_payment_date": "2022-07-23",
        "minimum_payment": 906.928,
        "monthly_payment": 5,
        "no_interest_payment": 0,
        "last_payment_date": "2022-06-24",
        "last_period_balance": 0,
        "interest_rate": 0
      },
      "loan_data": null,
      "name": "Cartão crédito mastercard elite",
      "balance": {
        "current": 17963.99,
        "available": 17963.99
      },
      "last_accessed_at": "2022-07-02T07:22:48",
      "balance_type": "LIABILITY"
    },
    "created_at": "2022-07-04T01:21:44.839316Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Ferguson, Sullivan and Lee",
      "website": "www.fergusonsullivanandlee.com",
      "logo": "www.fergusonsullivanandlee.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 9951.57,
    "currency": "BRL",
    "gig_data": null,
    "reference": "3213",
    "value_date": "2021-09-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:37.662420Z",
    "observations": null,
    "accounting_date": "2022-06-24T11:20:40",
    "internal_identification": "3ed1c0de"
  },
  {
    "id": "60948f1f-0afa-4e8a-83fb-5c8ebc169787",
    "account": {
      "id": "5c2dd082-4cd5-4f82-a6ea-b7ff9f8882aa",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.975364Z",
      "collected_at": "2022-07-04T01:21:34.348867Z",
      "currency": "BRL",
      "category": "CREDIT_CARD",
      "type": "Contas",
      "number": "1229 None5807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "CREDIT_CARD_NUMBER",
      "public_identification_value": "4431 None1368",
      "credit_data": {
        "collected_at": "2022-07-01T19:06:11.153565Z",
        "credit_limit": 15168,
        "cutting_date": "2022-07-19",
        "next_payment_date": "2022-07-23",
        "minimum_payment": 906.928,
        "monthly_payment": 5,
        "no_interest_payment": 0,
        "last_payment_date": "2022-06-24",
        "last_period_balance": 0,
        "interest_rate": 0
      },
      "loan_data": null,
      "name": "Cartão crédito mastercard elite",
      "balance": {
        "current": 17963.99,
        "available": 17963.99
      },
      "last_accessed_at": "2022-07-02T07:22:48",
      "balance_type": "LIABILITY"
    },
    "created_at": "2022-07-04T01:21:44.839364Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Wolfe LLC",
      "website": "www.wolfellc.com",
      "logo": "www.wolfellc.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 34664.53,
    "currency": "BRL",
    "gig_data": null,
    "reference": "9360",
    "value_date": "2021-08-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:37.663038Z",
    "observations": null,
    "accounting_date": "2022-07-01T03:59:12",
    "internal_identification": "1f1cb742"
  },
  {
    "id": "3eee311c-d2a9-4561-8399-68a4f4d7e8b9",
    "account": {
      "id": "5c2dd082-4cd5-4f82-a6ea-b7ff9f8882aa",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.975415Z",
      "collected_at": "2022-07-04T01:21:34.348867Z",
      "currency": "BRL",
      "category": "CREDIT_CARD",
      "type": "Contas",
      "number": "1229 None5807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "CREDIT_CARD_NUMBER",
      "public_identification_value": "4431 None1368",
      "credit_data": {
        "collected_at": "2022-07-01T19:06:11.153565Z",
        "credit_limit": 15168,
        "cutting_date": "2022-07-19",
        "next_payment_date": "2022-07-23",
        "minimum_payment": 906.928,
        "monthly_payment": 5,
        "no_interest_payment": 0,
        "last_payment_date": "2022-06-24",
        "last_period_balance": 0,
        "interest_rate": 0
      },
      "loan_data": null,
      "name": "Cartão crédito mastercard elite",
      "balance": {
        "current": 17963.99,
        "available": 17963.99
      },
      "last_accessed_at": "2022-07-02T07:22:48",
      "balance_type": "LIABILITY"
    },
    "created_at": "2022-07-04T16:23:04.975434Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Clark and Sons",
      "website": "www.clarkandsons.com",
      "logo": "www.clarkandsons.com/logo.png"
    },
    "collected_at": "2022-07-04T01:21:37.663430Z",
    "currency": "BRL",
    "description": "CAMARON PRIME BR",
    "internal_identification": "78c3b7e1",
    "value_date": "2021-07-04",
    "accounting_date": "2022-07-03T23:22:10",
    "amount": 5000,
    "type": "OUTFLOW",
    "status": "PROCESSED",
    "reference": "6394",
    "balance": 97007.91,
    "observations": null,
    "gig_data": null
  },
  {
    "id": "092483b3-287b-4c73-87a2-08f46e567beb",
    "account": {
      "id": "120ad5bd-aab0-4c1d-a477-abae2eeab7e8",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.974208Z",
      "collected_at": "2022-07-04T01:21:34.339477Z",
      "currency": "BRL",
      "category": "CHECKING_ACCOUNT",
      "type": "Contas",
      "number": "12295807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "CLABE",
      "public_identification_value": "4431368",
      "credit_data": null,
      "loan_data": null,
      "name": "Conta corrente",
      "balance": {
        "current": 59952.83,
        "available": 59952.83
      },
      "last_accessed_at": "2022-07-03T22:34:04",
      "balance_type": "ASSET"
    },
    "created_at": "2022-07-04T01:21:44.827297Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Moon-Roman",
      "website": "www.moonroman.com",
      "logo": "www.moonroman.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 24791.95,
    "currency": "BRL",
    "gig_data": null,
    "reference": "9171",
    "value_date": "2022-02-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:36.055104Z",
    "observations": null,
    "accounting_date": "2022-06-25T10:37:54",
    "internal_identification": "84db6d6c"
  },
  {
    "id": "a887dc78-5007-4fa9-aaee-c3e706c61616",
    "account": {
      "id": "120ad5bd-aab0-4c1d-a477-abae2eeab7e8",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.974671Z",
      "collected_at": "2022-07-04T01:21:34.342540Z",
      "currency": "BRL",
      "category": "LOAN_ACCOUNT",
      "type": "Crédito pessoal",
      "number": "12295807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "ACCOUNT_NUMBER",
      "public_identification_value": "4431368",
      "credit_data": null,
      "loan_data": {
        "collected_at": "2022-07-01T19:06:11.155652Z",
        "credit_limit": 80386,
        "cutting_day": "13",
        "cutting_date": "2022-09-11",
        "next_payment_date": "2022-06-22",
        "limit_date": "2022-07-21",
        "limit_day": "10",
        "monthly_payment": null,
        "no_interest_payment": null,
        "last_payment_date": "2022-05-16",
        "last_period_balance": null,
        "interest_rate": null,
        "principal": null,
        "loan_type": null,
        "payment_due_day": null,
        "outstanding_balance": null,
        "outstanding_principal": null,
        "number_of_installments_total": null,
        "number_of_installments_outstanding": null,
        "contract_start_date": null,
        "contract_number": null,
        "interest_rates": null
      },
      "name": "Conta corrente",
      "balance": {
        "current": 44276.17,
        "available": 44276.17
      },
      "last_accessed_at": "2022-07-02T15:57:23",
      "balance_type": "LIABILITY"
    },
    "created_at": "2022-07-04T01:21:44.834149Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Scott, Buchanan and Griffin",
      "website": "www.scottbuchananandgriffin.com",
      "logo": "www.scottbuchananandgriffin.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 61347.99,
    "currency": "BRL",
    "gig_data": null,
    "reference": "2307",
    "value_date": "2022-02-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:36.937975Z",
    "observations": null,
    "accounting_date": "2022-07-02T23:39:40",
    "internal_identification": "7e951f7d"
  },
  {
    "id": "687b9815-67a9-47a2-840a-d96838fb47fe",
    "account": {
      "id": "120ad5bd-aab0-4c1d-a477-abae2eeab7e8",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.974319Z",
      "collected_at": "2022-07-04T01:21:34.339477Z",
      "currency": "BRL",
      "category": "CHECKING_ACCOUNT",
      "type": "Contas",
      "number": "12295807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "CLABE",
      "public_identification_value": "4431368",
      "credit_data": null,
      "loan_data": null,
      "name": "Conta corrente",
      "balance": {
        "current": 59952.83,
        "available": 59952.83
      },
      "last_accessed_at": "2022-07-03T22:34:04",
      "balance_type": "ASSET"
    },
    "created_at": "2022-07-04T01:21:44.827346Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Ayala, Gonzalez and Velazquez",
      "website": "www.ayalagonzalezandvelazquez.com",
      "logo": "www.ayalagonzalezandvelazquez.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 69268.37,
    "currency": "BRL",
    "gig_data": null,
    "reference": "9764",
    "value_date": "2022-01-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:36.055654Z",
    "observations": null,
    "accounting_date": "2022-06-30T02:10:43",
    "internal_identification": "da2d27e9"
  },
  {
    "id": "572e336f-0acb-4927-9c5e-bc9a79b514b5",
    "account": {
      "id": "120ad5bd-aab0-4c1d-a477-abae2eeab7e8",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.974720Z",
      "collected_at": "2022-07-04T01:21:34.342540Z",
      "currency": "BRL",
      "category": "LOAN_ACCOUNT",
      "type": "Crédito pessoal",
      "number": "12295807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "ACCOUNT_NUMBER",
      "public_identification_value": "4431368",
      "credit_data": null,
      "loan_data": {
        "collected_at": "2022-07-01T19:06:11.155652Z",
        "credit_limit": 80386,
        "cutting_day": "13",
        "cutting_date": "2022-09-11",
        "next_payment_date": "2022-06-22",
        "limit_date": "2022-07-21",
        "limit_day": "10",
        "monthly_payment": null,
        "no_interest_payment": null,
        "last_payment_date": "2022-05-16",
        "last_period_balance": null,
        "interest_rate": null,
        "principal": null,
        "loan_type": null,
        "payment_due_day": null,
        "outstanding_balance": null,
        "outstanding_principal": null,
        "number_of_installments_total": null,
        "number_of_installments_outstanding": null,
        "contract_start_date": null,
        "contract_number": null,
        "interest_rates": null
      },
      "name": "Conta corrente",
      "balance": {
        "current": 44276.17,
        "available": 44276.17
      },
      "last_accessed_at": "2022-07-02T15:57:23",
      "balance_type": "LIABILITY"
    },
    "created_at": "2022-07-04T01:21:44.834196Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Chen-Taylor",
      "website": "www.chentaylor.com",
      "logo": "www.chentaylor.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 83156.38,
    "currency": "BRL",
    "gig_data": null,
    "reference": "1002",
    "value_date": "2022-01-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:36.938642Z",
    "observations": null,
    "accounting_date": "2022-06-27T00:26:50",
    "internal_identification": "ac671bae"
  },
  {
    "id": "5512d650-7600-4905-b5d7-6afdd77f9867",
    "account": {
      "id": "120ad5bd-aab0-4c1d-a477-abae2eeab7e8",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.974376Z",
      "collected_at": "2022-07-04T01:21:34.339477Z",
      "currency": "BRL",
      "category": "CHECKING_ACCOUNT",
      "type": "Contas",
      "number": "12295807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "CLABE",
      "public_identification_value": "4431368",
      "credit_data": null,
      "loan_data": null,
      "name": "Conta corrente",
      "balance": {
        "current": 59952.83,
        "available": 59952.83
      },
      "last_accessed_at": "2022-07-03T22:34:04",
      "balance_type": "ASSET"
    },
    "created_at": "2022-07-04T01:21:44.827393Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Williams-Schwartz",
      "website": "www.williamsschwartz.com",
      "logo": "www.williamsschwartz.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 45299.95,
    "currency": "BRL",
    "gig_data": null,
    "reference": "1738",
    "value_date": "2021-12-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:36.056330Z",
    "observations": null,
    "accounting_date": "2022-06-22T09:31:38",
    "internal_identification": "11ca3dbc"
  },
  {
    "id": "6718bebe-91f9-49c7-8039-0b2ef232944f",
    "account": {
      "id": "120ad5bd-aab0-4c1d-a477-abae2eeab7e8",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.974768Z",
      "collected_at": "2022-07-04T01:21:34.342540Z",
      "currency": "BRL",
      "category": "LOAN_ACCOUNT",
      "type": "Crédito pessoal",
      "number": "12295807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "ACCOUNT_NUMBER",
      "public_identification_value": "4431368",
      "credit_data": null,
      "loan_data": {
        "collected_at": "2022-07-01T19:06:11.155652Z",
        "credit_limit": 80386,
        "cutting_day": "13",
        "cutting_date": "2022-09-11",
        "next_payment_date": "2022-06-22",
        "limit_date": "2022-07-21",
        "limit_day": "10",
        "monthly_payment": null,
        "no_interest_payment": null,
        "last_payment_date": "2022-05-16",
        "last_period_balance": null,
        "interest_rate": null,
        "principal": null,
        "loan_type": null,
        "payment_due_day": null,
        "outstanding_balance": null,
        "outstanding_principal": null,
        "number_of_installments_total": null,
        "number_of_installments_outstanding": null,
        "contract_start_date": null,
        "contract_number": null,
        "interest_rates": null
      },
      "name": "Conta corrente",
      "balance": {
        "current": 44276.17,
        "available": 44276.17
      },
      "last_accessed_at": "2022-07-02T15:57:23",
      "balance_type": "LIABILITY"
    },
    "created_at": "2022-07-04T01:21:44.834243Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Smith-Wu",
      "website": "www.smithwu.com",
      "logo": "www.smithwu.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 46061.74,
    "currency": "BRL",
    "gig_data": null,
    "reference": "3499",
    "value_date": "2021-12-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:36.939161Z",
    "observations": null,
    "accounting_date": "2022-06-23T20:20:59",
    "internal_identification": "13f3aec6"
  },
  {
    "id": "bae698fb-ecdb-45f2-b72c-58fda997466e",
    "account": {
      "id": "120ad5bd-aab0-4c1d-a477-abae2eeab7e8",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.974428Z",
      "collected_at": "2022-07-04T01:21:34.339477Z",
      "currency": "BRL",
      "category": "CHECKING_ACCOUNT",
      "type": "Contas",
      "number": "12295807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "CLABE",
      "public_identification_value": "4431368",
      "credit_data": null,
      "loan_data": null,
      "name": "Conta corrente",
      "balance": {
        "current": 59952.83,
        "available": 59952.83
      },
      "last_accessed_at": "2022-07-03T22:34:04",
      "balance_type": "ASSET"
    },
    "created_at": "2022-07-04T01:21:44.827442Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Smith Ltd",
      "website": "www.smithltd.com",
      "logo": "www.smithltd.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 3429.97,
    "currency": "BRL",
    "gig_data": null,
    "reference": "7970",
    "value_date": "2021-11-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:36.056902Z",
    "observations": null,
    "accounting_date": "2022-06-27T12:49:30",
    "internal_identification": "80c58710"
  },
  {
    "id": "ebd783e5-8fe1-427e-a1c7-d561c5377e0f",
    "account": {
      "id": "120ad5bd-aab0-4c1d-a477-abae2eeab7e8",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.974817Z",
      "collected_at": "2022-07-04T01:21:34.342540Z",
      "currency": "BRL",
      "category": "LOAN_ACCOUNT",
      "type": "Crédito pessoal",
      "number": "12295807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "ACCOUNT_NUMBER",
      "public_identification_value": "4431368",
      "credit_data": null,
      "loan_data": {
        "collected_at": "2022-07-01T19:06:11.155652Z",
        "credit_limit": 80386,
        "cutting_day": "13",
        "cutting_date": "2022-09-11",
        "next_payment_date": "2022-06-22",
        "limit_date": "2022-07-21",
        "limit_day": "10",
        "monthly_payment": null,
        "no_interest_payment": null,
        "last_payment_date": "2022-05-16",
        "last_period_balance": null,
        "interest_rate": null,
        "principal": null,
        "loan_type": null,
        "payment_due_day": null,
        "outstanding_balance": null,
        "outstanding_principal": null,
        "number_of_installments_total": null,
        "number_of_installments_outstanding": null,
        "contract_start_date": null,
        "contract_number": null,
        "interest_rates": null
      },
      "name": "Conta corrente",
      "balance": {
        "current": 44276.17,
        "available": 44276.17
      },
      "last_accessed_at": "2022-07-02T15:57:23",
      "balance_type": "LIABILITY"
    },
    "created_at": "2022-07-04T01:21:44.834291Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Hunt and Sons",
      "website": "www.huntandsons.com",
      "logo": "www.huntandsons.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 25385.45,
    "currency": "BRL",
    "gig_data": null,
    "reference": "6974",
    "value_date": "2021-11-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:36.939674Z",
    "observations": null,
    "accounting_date": "2022-06-24T18:23:05",
    "internal_identification": "2a6ab31d"
  },
  {
    "id": "9987ae92-01c8-4da2-b995-e63baec3d636",
    "account": {
      "id": "120ad5bd-aab0-4c1d-a477-abae2eeab7e8",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.974478Z",
      "collected_at": "2022-07-04T01:21:34.339477Z",
      "currency": "BRL",
      "category": "CHECKING_ACCOUNT",
      "type": "Contas",
      "number": "12295807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "CLABE",
      "public_identification_value": "4431368",
      "credit_data": null,
      "loan_data": null,
      "name": "Conta corrente",
      "balance": {
        "current": 59952.83,
        "available": 59952.83
      },
      "last_accessed_at": "2022-07-03T22:34:04",
      "balance_type": "ASSET"
    },
    "created_at": "2022-07-04T01:21:44.827491Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Ballard-Pham",
      "website": "www.ballardpham.com",
      "logo": "www.ballardpham.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 27290.79,
    "currency": "BRL",
    "gig_data": null,
    "reference": "3910",
    "value_date": "2021-10-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:36.057343Z",
    "observations": null,
    "accounting_date": "2022-07-01T14:38:43",
    "internal_identification": "a9ffaec9"
  },
  {
    "id": "cb5b253c-ae67-41a6-967e-05669f77ee03",
    "account": {
      "id": "120ad5bd-aab0-4c1d-a477-abae2eeab7e8",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.974865Z",
      "collected_at": "2022-07-04T01:21:34.342540Z",
      "currency": "BRL",
      "category": "LOAN_ACCOUNT",
      "type": "Crédito pessoal",
      "number": "12295807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "ACCOUNT_NUMBER",
      "public_identification_value": "4431368",
      "credit_data": null,
      "loan_data": {
        "collected_at": "2022-07-01T19:06:11.155652Z",
        "credit_limit": 80386,
        "cutting_day": "13",
        "cutting_date": "2022-09-11",
        "next_payment_date": "2022-06-22",
        "limit_date": "2022-07-21",
        "limit_day": "10",
        "monthly_payment": null,
        "no_interest_payment": null,
        "last_payment_date": "2022-05-16",
        "last_period_balance": null,
        "interest_rate": null,
        "principal": null,
        "loan_type": null,
        "payment_due_day": null,
        "outstanding_balance": null,
        "outstanding_principal": null,
        "number_of_installments_total": null,
        "number_of_installments_outstanding": null,
        "contract_start_date": null,
        "contract_number": null,
        "interest_rates": null
      },
      "name": "Conta corrente",
      "balance": {
        "current": 44276.17,
        "available": 44276.17
      },
      "last_accessed_at": "2022-07-02T15:57:23",
      "balance_type": "LIABILITY"
    },
    "created_at": "2022-07-04T01:21:44.834339Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Gomez-Snow",
      "website": "www.gomezsnow.com",
      "logo": "www.gomezsnow.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 97769.17,
    "currency": "BRL",
    "gig_data": null,
    "reference": "9703",
    "value_date": "2021-10-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:36.940075Z",
    "observations": null,
    "accounting_date": "2022-07-01T23:53:34",
    "internal_identification": "7380f30a"
  },
  {
    "id": "3d5d1383-5a57-42e4-bf28-fcf23d7a81bd",
    "account": {
      "id": "120ad5bd-aab0-4c1d-a477-abae2eeab7e8",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.974526Z",
      "collected_at": "2022-07-04T01:21:34.339477Z",
      "currency": "BRL",
      "category": "CHECKING_ACCOUNT",
      "type": "Contas",
      "number": "12295807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "CLABE",
      "public_identification_value": "4431368",
      "credit_data": null,
      "loan_data": null,
      "name": "Conta corrente",
      "balance": {
        "current": 59952.83,
        "available": 59952.83
      },
      "last_accessed_at": "2022-07-03T22:34:04",
      "balance_type": "ASSET"
    },
    "created_at": "2022-07-04T01:21:44.827540Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Manning, Bond and Jackson",
      "website": "www.manningbondandjackson.com",
      "logo": "www.manningbondandjackson.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 16102.23,
    "currency": "BRL",
    "gig_data": null,
    "reference": "2121",
    "value_date": "2021-09-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:36.057887Z",
    "observations": null,
    "accounting_date": "2022-07-01T02:55:38",
    "internal_identification": "a906826a"
  },
  {
    "id": "19e6cbcf-5e76-428b-93f2-928d7c5b2846",
    "account": {
      "id": "120ad5bd-aab0-4c1d-a477-abae2eeab7e8",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.974913Z",
      "collected_at": "2022-07-04T01:21:34.342540Z",
      "currency": "BRL",
      "category": "LOAN_ACCOUNT",
      "type": "Crédito pessoal",
      "number": "12295807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "ACCOUNT_NUMBER",
      "public_identification_value": "4431368",
      "credit_data": null,
      "loan_data": {
        "collected_at": "2022-07-01T19:06:11.155652Z",
        "credit_limit": 80386,
        "cutting_day": "13",
        "cutting_date": "2022-09-11",
        "next_payment_date": "2022-06-22",
        "limit_date": "2022-07-21",
        "limit_day": "10",
        "monthly_payment": null,
        "no_interest_payment": null,
        "last_payment_date": "2022-05-16",
        "last_period_balance": null,
        "interest_rate": null,
        "principal": null,
        "loan_type": null,
        "payment_due_day": null,
        "outstanding_balance": null,
        "outstanding_principal": null,
        "number_of_installments_total": null,
        "number_of_installments_outstanding": null,
        "contract_start_date": null,
        "contract_number": null,
        "interest_rates": null
      },
      "name": "Conta corrente",
      "balance": {
        "current": 44276.17,
        "available": 44276.17
      },
      "last_accessed_at": "2022-07-02T15:57:23",
      "balance_type": "LIABILITY"
    },
    "created_at": "2022-07-04T01:21:44.834387Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Smith-Little",
      "website": "www.smithlittle.com",
      "logo": "www.smithlittle.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 8170.94,
    "currency": "BRL",
    "gig_data": null,
    "reference": "6432",
    "value_date": "2021-09-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:36.940587Z",
    "observations": null,
    "accounting_date": "2022-06-24T11:34:39",
    "internal_identification": "15c23df3"
  },
  {
    "id": "d2d559c0-0395-4871-a47d-8368aba5ba22",
    "account": {
      "id": "120ad5bd-aab0-4c1d-a477-abae2eeab7e8",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.974574Z",
      "collected_at": "2022-07-04T01:21:34.339477Z",
      "currency": "BRL",
      "category": "CHECKING_ACCOUNT",
      "type": "Contas",
      "number": "12295807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "CLABE",
      "public_identification_value": "4431368",
      "credit_data": null,
      "loan_data": null,
      "name": "Conta corrente",
      "balance": {
        "current": 59952.83,
        "available": 59952.83
      },
      "last_accessed_at": "2022-07-03T22:34:04",
      "balance_type": "ASSET"
    },
    "created_at": "2022-07-04T01:21:44.827588Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Parrish Group",
      "website": "www.parrishgroup.com",
      "logo": "www.parrishgroup.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 16938.13,
    "currency": "BRL",
    "gig_data": null,
    "reference": "9215",
    "value_date": "2021-08-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:36.058557Z",
    "observations": null,
    "accounting_date": "2022-06-26T22:54:22",
    "internal_identification": "3b5c800a"
  },
  {
    "id": "f8a141e7-823a-4e4c-96b5-705f94e4319e",
    "account": {
      "id": "120ad5bd-aab0-4c1d-a477-abae2eeab7e8",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.974961Z",
      "collected_at": "2022-07-04T01:21:34.342540Z",
      "currency": "BRL",
      "category": "LOAN_ACCOUNT",
      "type": "Crédito pessoal",
      "number": "12295807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "ACCOUNT_NUMBER",
      "public_identification_value": "4431368",
      "credit_data": null,
      "loan_data": {
        "collected_at": "2022-07-01T19:06:11.155652Z",
        "credit_limit": 80386,
        "cutting_day": "13",
        "cutting_date": "2022-09-11",
        "next_payment_date": "2022-06-22",
        "limit_date": "2022-07-21",
        "limit_day": "10",
        "monthly_payment": null,
        "no_interest_payment": null,
        "last_payment_date": "2022-05-16",
        "last_period_balance": null,
        "interest_rate": null,
        "principal": null,
        "loan_type": null,
        "payment_due_day": null,
        "outstanding_balance": null,
        "outstanding_principal": null,
        "number_of_installments_total": null,
        "number_of_installments_outstanding": null,
        "contract_start_date": null,
        "contract_number": null,
        "interest_rates": null
      },
      "name": "Conta corrente",
      "balance": {
        "current": 44276.17,
        "available": 44276.17
      },
      "last_accessed_at": "2022-07-02T15:57:23",
      "balance_type": "LIABILITY"
    },
    "created_at": "2022-07-04T01:21:44.834434Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Garcia Group",
      "website": "www.garciagroup.com",
      "logo": "www.garciagroup.com/logo.png"
    },
    "type": "OUTFLOW",
    "amount": 5000,
    "status": "PROCESSED",
    "balance": 90837.44,
    "currency": "BRL",
    "gig_data": null,
    "reference": "0234",
    "value_date": "2021-08-04",
    "description": "CAMARON PRIME BR",
    "collected_at": "2022-07-04T01:21:36.941170Z",
    "observations": null,
    "accounting_date": "2022-06-22T20:26:46",
    "internal_identification": "a25e2b3c"
  },
  {
    "id": "e2568eef-2daf-4dfc-9c88-df830280fb3b",
    "account": {
      "id": "120ad5bd-aab0-4c1d-a477-abae2eeab7e8",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.974623Z",
      "collected_at": "2022-07-04T01:21:34.339477Z",
      "currency": "BRL",
      "category": "CHECKING_ACCOUNT",
      "type": "Contas",
      "number": "12295807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "CLABE",
      "public_identification_value": "4431368",
      "credit_data": null,
      "loan_data": null,
      "name": "Conta corrente",
      "balance": {
        "current": 59952.83,
        "available": 59952.83
      },
      "last_accessed_at": "2022-07-03T22:34:04",
      "balance_type": "ASSET"
    },
    "created_at": "2022-07-04T16:23:04.974641Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Mcknight-Solis",
      "website": "www.mcknightsolis.com",
      "logo": "www.mcknightsolis.com/logo.png"
    },
    "collected_at": "2022-07-04T01:21:36.058987Z",
    "currency": "BRL",
    "description": "CAMARON PRIME BR",
    "internal_identification": "cc20a6f9",
    "value_date": "2021-07-04",
    "accounting_date": "2022-06-26T16:58:52",
    "amount": 5000,
    "type": "OUTFLOW",
    "status": "PROCESSED",
    "reference": "7062",
    "balance": 84822.77,
    "observations": null,
    "gig_data": null
  },
  {
    "id": "5a141498-973d-4249-bed2-69b3da30cf58",
    "account": {
      "id": "120ad5bd-aab0-4c1d-a477-abae2eeab7e8",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:23:04.975009Z",
      "collected_at": "2022-07-04T01:21:34.342540Z",
      "currency": "BRL",
      "category": "LOAN_ACCOUNT",
      "type": "Crédito pessoal",
      "number": "12295807",
      "agency": null,
      "bank_product_id": "34",
      "internal_identification": "4adedafe39",
      "public_identification_name": "ACCOUNT_NUMBER",
      "public_identification_value": "4431368",
      "credit_data": null,
      "loan_data": {
        "collected_at": "2022-07-01T19:06:11.155652Z",
        "credit_limit": 80386,
        "cutting_day": "13",
        "cutting_date": "2022-09-11",
        "next_payment_date": "2022-06-22",
        "limit_date": "2022-07-21",
        "limit_day": "10",
        "monthly_payment": null,
        "no_interest_payment": null,
        "last_payment_date": "2022-05-16",
        "last_period_balance": null,
        "interest_rate": null,
        "principal": null,
        "loan_type": null,
        "payment_due_day": null,
        "outstanding_balance": null,
        "outstanding_principal": null,
        "number_of_installments_total": null,
        "number_of_installments_outstanding": null,
        "contract_start_date": null,
        "contract_number": null,
        "interest_rates": null
      },
      "name": "Conta corrente",
      "balance": {
        "current": 44276.17,
        "available": 44276.17
      },
      "last_accessed_at": "2022-07-02T15:57:23",
      "balance_type": "LIABILITY"
    },
    "created_at": "2022-07-04T16:23:04.975026Z",
    "category": "Online Platforms & Leisure",
    "merchant": {
      "name": "Yoder, Berry and Smith",
      "website": "www.yoderberryandsmith.com",
      "logo": "www.yoderberryandsmith.com/logo.png"
    },
    "collected_at": "2022-07-04T01:21:36.941573Z",
    "currency": "BRL",
    "description": "CAMARON PRIME BR",
    "internal_identification": "5c21b500",
    "value_date": "2021-07-04",
    "accounting_date": "2022-07-03T02:30:23",
    "amount": 5000,
    "type": "OUTFLOW",
    "status": "PROCESSED",
    "reference": "6617",
    "balance": 60045.67,
    "observations": null,
    "gig_data": null
  }
]
             
             
       
      ;

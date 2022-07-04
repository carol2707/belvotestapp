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
    client.accounts.retrieve('7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91')
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
});
[
  {
    "id": "e7542361-0f27-4f79-a062-33a0d0d80644",
    "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
    "institution": {
      "name": "erebor_br_retail",
      "type": "bank"
    },
    "created_at": "2022-07-04T01:31:23.597765Z",
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
  {
    "id": "5c2dd082-4cd5-4f82-a6ea-b7ff9f8882aa",
    "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
    "institution": {
      "name": "erebor_br_retail",
      "type": "bank"
    },
    "created_at": "2022-07-04T01:31:23.597742Z",
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
  {
    "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
    "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
    "institution": {
      "name": "erebor_br_retail",
      "type": "bank"
    },
    "created_at": "2022-07-04T01:31:23.597706Z",
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
  {
    "id": "120ad5bd-aab0-4c1d-a477-abae2eeab7e8",
    "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
    "institution": {
      "name": "erebor_br_retail",
      "type": "bank"
    },
    "created_at": "2022-07-04T01:31:23.597648Z",
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
  }
];

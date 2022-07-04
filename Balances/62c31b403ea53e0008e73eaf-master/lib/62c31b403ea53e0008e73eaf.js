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
    client.balances.retrieve('7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91', '2022-01-20', { 'dateTo': '2022-04-05' })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
});

[
  {
    "id": "6ebe8f26-7fbf-4730-8790-e9e7cd969e55",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-04-05",
    "current_balance": null
  },
  {
    "id": "f212a325-9dbc-4884-9f85-b0682f798a14",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-04-04",
    "current_balance": null
  },
  {
    "id": "446e7e92-21e7-41af-9f03-da301060af0f",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-04-03",
    "current_balance": null
  },
  {
    "id": "d0b46417-2834-49f3-8767-47808eea10cd",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-04-02",
    "current_balance": null
  },
  {
    "id": "f3ec40f7-557c-4b21-8e63-6a3830d61093",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-04-01",
    "current_balance": null
  },
  {
    "id": "4cc2d714-1eda-4baf-b8ab-274db409d70f",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-31",
    "current_balance": null
  },
  {
    "id": "f61f1c61-212a-4878-b0c3-9b582b6542c9",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-30",
    "current_balance": null
  },
  {
    "id": "00fdf113-790f-49a2-aaea-1896d28323da",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-29",
    "current_balance": null
  },
  {
    "id": "88668e2d-b8ef-45f3-9c75-fe8dcafb3045",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-28",
    "current_balance": null
  },
  {
    "id": "505edf78-bf94-46cc-b216-2d72b138c96c",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-27",
    "current_balance": null
  },
  {
    "id": "357b1dbc-eea0-4163-a82b-9754bc23a368",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-26",
    "current_balance": null
  },
  {
    "id": "16dfcab1-6469-49df-ba8b-73d7755fc1c9",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-25",
    "current_balance": null
  },
  {
    "id": "a55c2c5d-0282-4a30-ba4a-e1e4adb99305",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-24",
    "current_balance": null
  },
  {
    "id": "7156d9a1-d93e-4427-b8a3-85a55b284564",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-23",
    "current_balance": null
  },
  {
    "id": "9ff0d087-aa93-4bc4-8cac-8da393420374",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-22",
    "current_balance": null
  },
  {
    "id": "f29ccbf7-2e0a-47aa-9e11-ddaf73611592",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-21",
    "current_balance": null
  },
  {
    "id": "c58a531e-95cc-4211-b635-851e7f5b13bf",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-20",
    "current_balance": null
  },
  {
    "id": "87bf280e-7eda-4e4f-88e5-ce03b0524f15",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-19",
    "current_balance": null
  },
  {
    "id": "65973f6c-1fa2-4bd1-8d96-f5029932f3ae",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-18",
    "current_balance": null
  },
  {
    "id": "14666611-8797-4473-92a3-cc4b383cc500",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-17",
    "current_balance": null
  },
  {
    "id": "db23e392-542b-4333-8582-371bddae6804",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-16",
    "current_balance": null
  },
  {
    "id": "e4ce557a-7800-4335-b078-1ab2fb381901",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-15",
    "current_balance": null
  },
  {
    "id": "779c1ca7-e6b6-4ab2-ae0b-0060b886a377",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-14",
    "current_balance": null
  },
  {
    "id": "1114b31d-4093-4087-b85b-c833f75ad5a7",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-13",
    "current_balance": null
  },
  {
    "id": "ad9c308c-9270-424c-b6af-59f47d06a46b",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-12",
    "current_balance": null
  },
  {
    "id": "2b7abc6c-f0b0-4683-8884-294f56d7ef3d",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-11",
    "current_balance": null
  },
  {
    "id": "b737e0ff-a278-4679-b161-fe3dbc40b92d",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-10",
    "current_balance": null
  },
  {
    "id": "ab359090-c145-45bf-a6e9-9c5f51215310",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-09",
    "current_balance": null
  },
  {
    "id": "72d79951-4def-4001-b8fb-f783d316ad30",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-08",
    "current_balance": null
  },
  {
    "id": "433dc51d-815a-4f4a-a53f-17447b81369a",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-07",
    "current_balance": null
  },
  {
    "id": "300f33f3-5a5b-49f2-979d-e36437894151",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-06",
    "current_balance": null
  },
  {
    "id": "739b89e2-4669-41f7-abf7-091a86ad095d",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-05",
    "current_balance": null
  },
  {
    "id": "5b21fa7f-0cff-40db-af82-bdc366cd7364",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-04",
    "current_balance": null
  },
  {
    "id": "413132c0-57fe-4360-b483-6fc61c4f74b2",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-03",
    "current_balance": null
  },
  {
    "id": "513865b8-e909-458d-9f3d-a2e6f9532502",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-02",
    "current_balance": null
  },
  {
    "id": "148b53f9-4c98-4b6d-ba8e-45c4f776309b",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-03-01",
    "current_balance": null
  },
  {
    "id": "2360dec7-03f6-4b72-8c0a-021f2243e71e",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-28",
    "current_balance": null
  },
  {
    "id": "16915de4-99ae-4e42-997a-fde00724dbd9",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-27",
    "current_balance": null
  },
  {
    "id": "a2c2e970-7ff4-42c1-a013-4c1624b57a73",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-26",
    "current_balance": null
  },
  {
    "id": "573bdcd6-374b-4716-b31f-e67bad7625f5",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-25",
    "current_balance": null
  },
  {
    "id": "411037d4-4ced-4c32-8138-792e9fe283a5",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-24",
    "current_balance": null
  },
  {
    "id": "cdbba8bb-8134-4983-bc04-f88dda3082f9",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-23",
    "current_balance": null
  },
  {
    "id": "1613de70-6e64-4475-832d-2b08628afabc",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-22",
    "current_balance": null
  },
  {
    "id": "68b98eec-012f-4c46-af80-9d0f964ebc46",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-21",
    "current_balance": null
  },
  {
    "id": "a6335ee4-b2f8-464c-bc17-d2dcb3195193",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-20",
    "current_balance": null
  },
  {
    "id": "b0ffd57d-b598-474e-b24a-8a3350f7cb97",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-19",
    "current_balance": null
  },
  {
    "id": "d404c460-58fa-4459-9f29-47435947d6e0",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-18",
    "current_balance": null
  },
  {
    "id": "a840652d-ce93-4547-9cf2-0d95069528aa",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-17",
    "current_balance": null
  },
  {
    "id": "7352a2e0-e62c-47e3-86b0-42fc842dba73",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-16",
    "current_balance": null
  },
  {
    "id": "bb2330b5-caff-4e9a-8fde-14c5e10ce095",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-15",
    "current_balance": null
  },
  {
    "id": "a4d621cd-b9a4-4b1f-9983-13ec0b7a9811",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-14",
    "current_balance": null
  },
  {
    "id": "fca7c1db-fda9-41e5-95e4-2d367a8d681f",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-13",
    "current_balance": null
  },
  {
    "id": "da4eddfe-0509-487a-a61e-47d4f73a49c5",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-12",
    "current_balance": null
  },
  {
    "id": "68e0340a-c920-495c-a18c-5e79bdb0bedd",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-11",
    "current_balance": null
  },
  {
    "id": "d0c3d279-d67b-4126-8204-9728adf1c9b9",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-10",
    "current_balance": null
  },
  {
    "id": "05c4c189-31bc-4787-8036-ce760541bc81",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-09",
    "current_balance": null
  },
  {
    "id": "1cf77ca4-43ef-4fb0-94b1-daadb1aff21e",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-08",
    "current_balance": null
  },
  {
    "id": "72b370f3-c3d6-4b52-bd5c-f70c30dff776",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-07",
    "current_balance": null
  },
  {
    "id": "33882dc6-0e09-4b4c-8eab-b5178067a1d6",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-06",
    "current_balance": null
  },
  {
    "id": "305911ef-bf93-46c0-8851-1b11a9354747",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-05",
    "current_balance": null
  },
  {
    "id": "a0616041-ea72-4ea1-b541-2ab66032839c",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-04",
    "current_balance": null
  },
  {
    "id": "ecfb97ce-9f6f-43bc-b2d0-7e20f0c77473",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-03",
    "current_balance": null
  },
  {
    "id": "6aeb88fa-4899-44d1-a7a5-8ef3270acb96",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-02",
    "current_balance": null
  },
  {
    "id": "8d28e9e7-5577-49ec-8526-357800bd6ab2",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-02-01",
    "current_balance": null
  },
  {
    "id": "0940e6a4-ae13-4399-88e6-7ae4ad63f349",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-01-31",
    "current_balance": null
  },
  {
    "id": "545241b2-8ec2-44c7-a153-244a49426fdc",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-01-30",
    "current_balance": null
  },
  {
    "id": "0eceeab7-7284-4ae8-9a13-727eb8349d4e",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-01-29",
    "current_balance": null
  },
  {
    "id": "c8cfb05b-44db-40bd-b7ec-01794ad5c373",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-01-28",
    "current_balance": null
  },
  {
    "id": "d3ea449b-0045-48fa-b082-df8b016d4904",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-01-27",
    "current_balance": null
  },
  {
    "id": "7795a2dd-e156-48b7-980e-9277a59e2bb8",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-01-26",
    "current_balance": null
  },
  {
    "id": "c7e1b937-7e95-484c-99ac-e86d779dc21e",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-01-25",
    "current_balance": null
  },
  {
    "id": "cf74e5e7-5058-49cf-93be-1d89341d7620",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-01-24",
    "current_balance": null
  },
  {
    "id": "48b2dafa-658a-4b9d-846b-aeab7c0f30f8",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-01-23",
    "current_balance": null
  },
  {
    "id": "7acb6e39-1d46-4fc5-8426-99801e7ea2bd",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-01-22",
    "current_balance": null
  },
  {
    "id": "a87a21ae-834d-4e9f-9b86-ce0d68e2dc15",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-01-21",
    "current_balance": null
  },
  {
    "id": "1ee8e37a-eb45-4976-8da0-720dd80ee9fb",
    "account": {
      "id": "023f22d6-be1c-4b55-a85a-050893f4c24c",
      "link": "7bb5d4eb-b347-4a99-8bb4-e843bfcb9f91",
      "institution": {
        "name": "erebor_br_retail",
        "type": "bank"
      },
      "created_at": "2022-07-04T16:56:51.466601Z",
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
    "collected_at": "2022-07-04T01:21:36.040898Z",
    "balance": null,
    "statement": null,
    "value_date": "2022-01-20",
    "current_balance": null
  }
];

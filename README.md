Belvo’s Challenge! 
 Developed by Ana Caroline Moura 

Answering developers questions:


Hi Carol!  My name is Jhon, I am a developer interested in Belvo’s services.
 I have some doubts about Belvo’s platform and functionalities, could you help me please?

Of course Jhon! How can I help you today?

Could you explain to me how do I  handle the 2FA for link creation at Belvo? What if the token expired? 


That was very clarifying, what’s the difference between a link created with access_mode = single vs access_mode = recurrent? 

The access mode “single” it can be use if you as a developer want to request through a call  the data from a financial institute or a app, we recommend using recurrent access mode, it’s setup by default cause in that way Belvo calls financial institute data every 6 hours, 12 hours or 24 hours if you don’t change the configuration will refreshed once every 7 days, in that way you don’t need to use POST command to receive the informations update, you only need to use GET and makes things simple.

3) How do I make sure my end application can open Belvo’s widget? 
You need to implement our script (src="https://cdn.belvo.io/belvo-widget-1-stable.js") with the parameter async and add “div id = Belvo” anywhere inside your  <body> application so you can run Belvo’s widget.  

4)How could I access a links transactions from 5 months ago using a GET request?

 5) I am facing an issue so I sended you a logs file. In some cases my team can’t check financial data from some final users, why is this happening?

Investigating your logs file I notice you are receiving the error 400 and the messages are “ login error” or “missing credentials” in that case we have some occasions that this error message can appear: 
When the credentials that your user provides are incorrect or missing
The MFA token your user provides is not supported by Belvo.
There is an issue with the institution that prevents logins.
The user’s account is either locked or the user does not have permission to access the internet banking.

 For the solution we can apply some troubleshootings such as asking your user to provide their correct credentials or MFA token, you can use widgets Belvo for that too. Ask your user to confirm with their bank that their account is active and that it isn’t blocked. If there is an issue with the institution, try logging in at a later time.


 Creating and preparing your Postman & Belvo’s Dashboard:

You will enter Belvo’s dashboard and sign up.
Once you are in the environment you have 3 package options: Sandbox (for tests and unlimited links) Developers (25 links and real data) and Production ( unlimited links and real data), for tests it’s better to use Sandbox. 
After that you need to generate your secretPassword and secretId at “Open Finance” than enter “API Keys” in the right corner click the button “ Generate API Keys” 
Now you have your credentials and it’s time to move forward and enter Postman to setup Belvo’s environment, going to Belvo’s Postman workspace you can “Fork” the API collection and add it to your workspace, also, to always be notified about new updates activate the “Watch” button on Belvo’s API than use “Merge changes” to pull the changes into your fork. 
Inside the Postman you should create a new environment, click at the right corner and select option “ No Environment”  < “ New Environment” you can name it BelvoSandbox for example, after that you should add variables, and it’s when you gonna need your credentials ( secretId and secretPassword) also baseUrl for the APIs calls.
Please when inserting the secretId, secretPassword and baseUrl as variables type exactly how it shows, after that complete at the initial value section with the IDs that were generated at the dashboard,at the initial value section for baseUrl just insert “https://sandbox.belvo.com” and click “Save”. 

We can test if it’s working by going into “Institutions” “ Get list all Institutions” and click at “Send” the result should be a list of all the institutions that are registered and the status: 200 OK 





Creating a link & Testing our Main Endpoints using Postman: 


Now that we are up and running let’s start testing the calls on Belvo’s API, first in “Institutions” at “Params” tab we use a new “Key” to create a filter, in that case let's filter the institution by country, using country_code and at value field put BR, again click at “Send” and it will display all the brazilians institutes. status: 200 OK

For this example we will use the Erebor Bank, we can see all the data from that institution, such as the resources it uses, what’s the credentials that is necessary to login and more, in that case let’s focus on the credentials, it only needs username and password, that information is inside of  forms_fields.


After that we should register a new link, for that we can navigate until Links < Post Register a new link  < Body  at institution field paste the rebor_br_retail and choose the password and username that you want to register the new link. After that press “Send” and see if the status displayed is status: 200 OK, that means that you have successfully registered your link! 

Also your ID was successfully created and you need to create a new variable LinkId2 so you can POST and retrieve the endpoints that you want.

 Now we can retrieve and have the Account, Transaction, Balances and Owners data:

1. You can retrieve the Account for that link in particular, that will show you all the accounts that person could have with the bank example ( pension fund, loan account, credit card, etc) 


2.To have access to all the transactions you need to provide only the “link”, “date_from”  and “date_to” press “Send” and  all the transactions on that period will be displayed. With the transaction information such as the description, type, category, and when that transaction happened. But you can also use other filters for display like “accounts” : Insert the credit card id for example and the result will be all the credit card transactions.

3. To retrieve the Balances you can use only “date_from” and “date_to” and it will display the period that you wish, so you can see the current balance, and the  available balance for example






















4. And last but not least important we can see all the data from the Owners, contact details, name, identity document and more.




















How the Widget Belvo’s work & How to create a link using backend and frontend 

The Belvo’s widget is a plug and play solution so the front end can add it to the application and create a link with the end user credentials, that link ( the same we saw earlier at the APIs and back end side) should be created with that widget, and how does it work? 

(descrever o fluxo da resposta errada) 

Simple: We need that the backend side generates the refresh and access token, for that to happen we can use RunKit and Belvo’s SDKs, so then we can implement the access token at the front end side, for that you can use CodePen. 

You can try using Runkit to use Belvo’s NPM, you can also use Belvo’s SDKs to make things easier. 
Some points that you can’t left out from your code:

Make the calls from Belvo’s SDKs to javascript.
Implement your sandbox Keys = secretId, secretPassword and baseUrl then instantiate the class Belvo with your credentials. 
You can create a path using  GET token and calling the API from Belvo so you can generate the token, use client.connect for every call that you make.
Inside the promise put the information from the widgetToken, also, if you want to customize the widget it’s possible, only have to add create options to your code.    
Then when you are done click above “endpoint” 



For the token appear you need to change the URL and add “\token”  so that way the refresh and access will be displayed



Now that we have the access and refresh token we need to upload the Belvo’s lib script at your application <head> tag  (src="https://cdn.belvo.io/belvo-widget-1-stable.js”)with the parameter async. To functionally load the widget add (<div id="belvo"></div>) anywhere inside the <body>. 


Notes: At API Keys page you can configure the Recurrent Links if you use recurrent as your access mode 

a widget foi desenvolvida com o Vue 

docker-compose 1.25+
GNU Make

Melhorias para o sistema e alimentação da API :
seria interessante adicionar esse endpoint com dados fiscais. Falar sobre utilizar os dados do INSS para acabar com as corretoras de consignado, com transparência, 

Problemas que empresas de cessão de crédito geram: 
Assédio aos clientes ( ligações incessantes até que finalize o contrato proposto, mensagens em meios de comunicação sem permissão prévia, pressão para finalizar a transação e terror psicológico e táticas de argumentação escusas) 
Disseminação de informação falsa ( caso não utilize o link da empresa para o empréstimo seu benefício será cancelado, se tentar com outras empresas sua margem para empréstimo pode ser bloqueado entre outros) 
Tentativas de golpe ( solicitação de repasse, promessas de pagamento inexistentes ou impossíveis) 
As piores propostas de empréstimo ( como para o agente não faz diferença qual o valor o cliente vai receber ao final da transação, costumam oferecer o menor valor possível com o banco que aprovaria com maior facilidade para somente acabar o processo mais rápido, não se importando com o benefício do cliente.) 

Qualquer pessoa pode abrir uma empresa de cessão de crédito somente com o intuito de lesar pessoas idosas e com pouco acesso a informação, em situações de desespero por conta de dívidas e má gestão das finanças.

Solução: 
Autonomia para o cliente ( pensionistas e aposentados) enviar sua proposta de acordo com sua margem e fator diário, maior transparência para o cliente e possibilidade de ter acesso às propostas de todos os bancos que gostaria de vincular sua conta e solicitar um empréstimo, dando permissão ao banco a acessar seus dados do INSS e créditos que deseja disponibilizar para conseguir uma boa aprovação de empréstimo.Tudo isso seria possível através do widget e banco de dados da API da Belvo.Seria possível conseguir a melhor taxa e a melhor proposta.







Excellent question Jhon! To create a token for your end user you need to make a call using your backend server and your SecretId and PasswordId that you created in Belvo’s dashboard, and our system will respond with an access token, that access token needs to be added in the widget. As we like to make things simple to you, we already provide the coding so you can add that Widget to your application therefore you only need to put the access token!  So when you run your application the system will prompt the end user, than when he put his credentials at Belvo’s prompt, Belvo’s can create the link ID, that Link ID will be share with your server, so when you need to access that client financial data you only need to provide the link ID and Belvo wil retrieve all the information you need. The access token can be used inside 60 minutes and will be invalidated if the user login successfully at the Widget, but if the token expires don’t worry, it’s expires just for security reasons because we work with sensitive data, but you can always refresh it and send a new one for your end user. 



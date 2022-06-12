# MataKu - Cloud Computing Team
Team Member:
- Shiela Farah Diva - c7008f0869@bangkit.academy
- Tedi Setiawan - c2010f1111@bangkit.academy

Cloud Computing team is responsible to make API to be used by Mobile app and allocate resource for server using GCP.

For the APIs, we make Login API to do the user registration, user login, and location update. For the API, we write it in Node.js using ExpressJS Framework.

| Endoint | Method | Description |
|---------|--------|-------------|
| /register | POST |Regist new account. User sends username, email, and password |
| /login | POST | Login the registered account |
| /location | POST | user send the coordinate location to server regularly |
| /location | GET | user get the list of the location 

After being tested locally, then we upload the source code to server. The server we use is Compute Engine VM and CloudSQL to store the data.
1. For the database, using PostgreSQL from CloudSQL.
2. Make the database instance, database, and table.
3. Build Compute Engine VM. Use static external IP Address.
4. SSH the VM. Clone this github repository inside the VM.
5. Install npm package needed in VM
6. Update the queries.js file in remote repository. Customize the database name, IP host of the CloudSQL, username, and the password. Commit change.
7. Pull the remote repository change in VM instance.
8. Run the program (npm run init)

For the testing, we use Postman first. Point the URL to the VM External API. The result is kinda be like this :

![1](https://user-images.githubusercontent.com/88976664/173221305-9683840a-a50f-4884-8f53-0e62e4da4188.png)
![2](https://user-images.githubusercontent.com/88976664/173221316-5c1fed7d-d96a-433c-8b52-9a9082533c38.png)
![unknown](https://user-images.githubusercontent.com/88976664/173221325-2df447a5-a8ff-4918-9478-a6b5d1e04012.png)
![4](https://user-images.githubusercontent.com/88976664/173221328-b1524cb9-ab8f-4d37-a0cb-83db7a4c5941.png)
![5](https://user-images.githubusercontent.com/88976664/173221329-7350ca27-9f6c-4ffe-864b-3e2a1064e1f5.png)
![7](https://user-images.githubusercontent.com/88976664/173221334-20bc04bd-6c55-41ef-818d-2b856baa5c66.png)

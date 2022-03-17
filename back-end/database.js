const {MongoClient} = require('mongodb');

async function main(){
    const uri = "mongodb+srv://admin:Learnality5@cluster0.uriqb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    
    const client = new MongoClient(uri);
try{
    await client.connect();

    /*await createUser(client,{
        emailAddress:"abc123@gmail.com",
        name: "alexica alex",
        userName: "alex",
        password: "12345"
    })*/

    /*await findUser(client, "alex" , "12345");*/

    /*await updateUser(client, "alex", "12345", {password: "56789"});*/

    /*await deleteUser(client, "alex", "56789");*/

}catch (e){
    console.error(e);
}finally{
    await client.close();
}
   
}

main().catch(console.error);

async function createUser(client, newUser){
    const createUser = await client.db("DigitalPhoenix").collection("Records").insertOne(newUser);

    console.log(`New User created with following id: '${createUser.insertedId}'`);
}

async function findUser(client, usernameUser, passwordUser){
    const readUser = await client.db("DigitalPhoenix").collection("Records").findOne({
        userName: usernameUser, password: passwordUser});
    
    if (readUser){
        console.log(`Username: '${usernameUser}'`);
        console.log(`Password: '${passwordUser}'`);
    }else{
        console.log(`No User Found with name '${usernameUser}'`);
    }
}

async function updateUser(client, usernameUpdate, passwordUpdate, newpasswordUpdate){
    const updateUser = await client.db("DigitalPhoenix").collection("Records").updateOne({
        userName: usernameUpdate, password: passwordUpdate}, 
        {$set: newpasswordUpdate});

    console.log(`${updateUser.matchedCount} User Matched`);
    console.log(`${updateUser.modifiedCount} User password Update`);  
}

async function deleteUser(client, usernameDelete, passwordDelete){
    const deleteUser = await client.db("DigitalPhoenix").collection("Records").deleteOne({
        userName: usernameDelete, password: passwordDelete
    });

    console.log(`${deleteUser.deletedCount} User '${usernameDelete}' has been deleted`);
}

/*async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases");
    databasesList.databases.forEach(db =>{
        console.log(` - ${db.name}`);
    })
}*/
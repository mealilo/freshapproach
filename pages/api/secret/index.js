
export default async(req,res) => {

    if(session) {
        res.send({
            content: "Welcome to the secret page"
        });
    } else{
        res.send({
            error: "You need to be signed in."
        })
    }
}


module.exports = {

    getHouses:(req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_houses()
            .then( houses => res.status(200).send(houses)) 
            .catch( err => {
                res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been infomred!"});
                console.log(err)
            });
    },
    
    addHouse: (req,res,next) => {
        const dbInstance = req.app.get('db');
        const { proptype, propadress, pcity, pstate, pzip, pimage,mortgage,rent } = req.body;
        console.log(req.body)
        dbInstance.add_house([proptype, propadress, pcity, pstate, pzip, pimage,mortgage,rent])
            .then( () => res.sendStatus(200) )
            .catch( err => {
                res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been infomred!"});
                console.log(err)
            });

        },

    
       
    deleteHouse: (req,res,next) => {
        const dbInstance = req.app.get('db');
        const {params} =req;

        dbInstance.delete_house([params.id])
            .then( () => res.sendStatus(200) )
            .catch( err => {
                res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been infomred!"});
                console.log(err)
            });
    }
}
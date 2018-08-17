

module.exports = {

    getHouses:(req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.getHouses()
            .then( houses => res.status(200).send(houses)) 
            .catch( err => {
                res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been infomred!"});
                console.log(err)
            });
    },
    
    addHouse: (req,res,next) => {
        const dbInstance = req.app.get('db');
        const { propType, propAdress, pCity, pState, pZip } = req.body;
        
        dbInstance.addAHouse([propType, propAdress, pCity, pState, pZip])
            .then( () => res.sendStatus(200) )
            .catch( err => {
                res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been infomred!"});
                console.log(err)
            });

        },

    updateImage:(req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.updateProductImage([params.id,query.image])
            .then( () => res.sendStatus(200) )
            .catch( err => {
                res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been infomred!"});
                console.log(err)
            });
    },

       
    deleteHouse: (req,res,next) => {
        const dbInstance = req.app.get('db');
        const {params} =req;

        dbInstance.deleteHouse([params.id])
            .then( () => res.sendStatus(200) )
            .catch( err => {
                res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been infomred!"});
                console.log(err)
            });
    }
}
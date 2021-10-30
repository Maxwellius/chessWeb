import game from '../../models/game';

async function getGames(req, res){
    try {
        const games = await game.find({}).exec();
        res.status(200).send(games)
    } catch (error) {
        res.status(500).send({message:'Internal server error'})
    }
}

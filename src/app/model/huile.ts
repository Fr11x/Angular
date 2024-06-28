export default 
class Huile{
    nom:String|null
    id:Number|null
    iode:Number|null
    ins:Number|null
    douceur:Number|null
    lavant:Number|null
    durete:Number|null
    solubilite:Number|null
    sechage:Number|null


    constructor(unNom:String,uneId:Number,unIode:Number,
                unIns:Number,uneDouceur:Number,unLavant:Number,
                uneDurete:Number,uneSolubilite:Number,unSechage:Number){
        this.id=uneId
        this.nom=unNom
        this.iode=unIode
        this.ins=unIns
        this.douceur=uneDouceur
        this.lavant=unLavant
        this.durete=uneDurete
        this.solubilite=uneSolubilite
        this.sechage= unSechage
    }
}
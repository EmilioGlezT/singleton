

export class DataBase {
    private static instancia: DataBase;
    private DataBase(){

    }


    public static getInstance(): DataBase{
        if(DataBase.instancia == null){
            DataBase.instancia = new DataBase();
        }
        return DataBase.instancia;
    }


}
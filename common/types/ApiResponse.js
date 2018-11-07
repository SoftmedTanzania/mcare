


export default class ApiResponse{
    
     
    
    get getErrors(){
      return this.errors
    }
    get getStatus(){
        this.status
    }
    get getData(){
        this.status
    }
    addData(val){
     this.data.push(val);
    }
    addError(err){
        this.errors.push(err);
    }
    setStatus(state){
        if(state instanceof Boolean)
        this.status=state;
    }
    
     
  constructor(res,err,status){
    this.data=[];
    this.errors=[];
    this.status=status;
    
   if(res instanceof Array){
       this.data=res
   }else{
       if(res)
       this.data.push(res);
   }

   if(err instanceof Array){
    this.data=err
    }else{
        if(err)
        this.errors.push(err);
    }
  }


}
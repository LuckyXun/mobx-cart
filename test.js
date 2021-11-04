/*
 * @Author: XunL
 * @Description: 
 */
var restoreIpAddresses = function(s) {
    let result = [];
    backTrace(4,s) 
    function backTrace(t=4,s,address=""){
      
      
      
        if(t===0&&!s){
        result.push(address.substring(1))
        return
      }   
      if(t===0||!s){
        return
      }
      let s3= s.substring(0,3);
      let s2 = s.substring(0,2);
      let s1 = s.substring(0,1)
      
      
      if(isValidIP(s3)&&s.length>=3){
          backTrace(t-1,s3,address+'.'+s3) 
       } 
       if(isValidIP(s2)&&s.length>=2){
         backTrace(t-1,s2,address+'.'+s2) 
      } 
       if(isValidIP(s1)&&s.length>=1){
       backTrace(t-1,s1,address+'.'+s1) 
       } 
    }
 
 
    function isValidIP(str){
        if(str[0]==='0'&&str.length>1){
            return false
        }

       return   +str <= 255
 
    }
    console.log(result)
    return result
 };
 restoreIpAddresses('"010010"')
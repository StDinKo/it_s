    function range(first, last, dp = 1) {
      let rangelist = [];
      if (dp > 0){
        for (first; first<=last; first += dp)
        rangelist.push (first);
        }
      else {
        for (first; first>=last; first += dp)
        rangelist.push (first);
      }    
      return rangelist;
      }
      
      function sum(rang) {
        let result = rang.reduce((i, b) => i + b, 0);
        return result;
      }
//console.log(range(5, 2, -2));
console.log(sum(range(1,10)));


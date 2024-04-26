function longestSubstring(s) {


    // Implementation of longestSubstring function
    var n = s.length;

        var res = 0; 

        
        let lastIndex = new Array(256).fill(-1);

        var i = 0;

     
        for (var j = 0; j < n; j++) {

           
            i = Math.max(i, lastIndex[s.charAt(j)] + 1);

            
            res = Math.max(res, j - i + 1);

            
            lastIndex[s.charAt(j)] = j;
        }
        return res;

    }  


module.exports = { longestSubstring };

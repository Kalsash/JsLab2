class MiniMaple{
    parse(poly, target) {
        poly = poly.replace(/ /g, "");
        if (poly.length === 0) return [];
        if (poly[0] !== "+" && poly[0] !== "-") {
            poly = "+" + poly;
        }
        poly = poly.replace("+" + target, "+1*" + target);
        poly = poly.replace("-" + target, "-1*" + target);
        let monomials = [];
        let k = 0;
        let s = "";
    
        while (k <= poly.length - 1) {
            if (poly[k] === target) {
                let temp = k;
                while (k >= 0 && poly[k] !== "+" && poly[k] !== "-") {
                    if (poly[k] !== "*" && poly[k] !== target) {
                        s += poly[k];
                    }
                    k--;
                }
                s += poly[k];
                s = s.split('').reverse().join('');
                monomials.push(s);
                s = target;
                k = temp + 1;
    
                while (k < poly.length && poly[k] !== "+" && poly[k] !== "-") {
                    s += poly[k];
                    k++;
                }
                monomials.push(s);
                s = "";
            }
            k++;
        }
    
        return monomials;
    }
    
    diff(lexems, target) {
        if (lexems.length === 0) return [];
        for (let i = 1; i < lexems.length; i += 2) {
            let digs = lexems[i - 1][0];
            let symb = "";
            for (let x of lexems[i - 1].slice(1)) {
                if (!"0123456789.".includes(x)) {
                    symb += x;
                } else {
                    digs += x;
                }
            }
            let poly = String(lexems[i]);
            if (poly.length > 1) {
                if (parseFloat(digs) * parseFloat(poly.slice(2)) > 0) {
                    lexems[i - 1] = "+" + Math.round(parseFloat(digs) * parseFloat(poly.slice(2))).toString();
                } else {
                    lexems[i - 1] = Math.round(parseFloat(digs) * parseFloat(poly.slice(2))).toString();
                }
                if (parseFloat(poly.slice(2)) > 2) {
                    lexems[i] = "*" + target + "^" + (Math.round(parseFloat(poly.slice(2))) - 1).toString();
                } else {
                    lexems[i] = "*" + target;
                }
            } else {
                lexems[i] = "";
            }
           // if (symb.length > 0 && poly.len > 1) {
             //   lexems[i - 1] += "*" + symb;
            //}
        }
        return lexems.filter(x => x.length > 0);
    }
    
    concat(lex, target) {
        if (lex.length === 0) return '';
        lex[0] = lex[0].replace("+", "");
        let s = "";
        for (let x of lex) {
            s = s.replace("1*" + target, target);
            s += String(x);
        }
        return s;
    }
    
   symbolic_diff(s, t) {
        const possibleTargets = "abcdefghijklmnopqrstuvwxyz";
        const possibleSymbols = "+-*^.";
        const digits = "0123456789";
        const allValid = possibleTargets + possibleSymbols + digits;
    
        if (t.length !== 1) return null;
        if (s.length === 0) return "";
    
        s = s.toLowerCase().replace(/ /g, "");
        for (let x of s) {
            if (!allValid.includes(x)) {
                return null;
            }
        }
        
        for (let d of digits) {
            for (let p of possibleTargets) {
                s = s.replace(new RegExp(p + "\\*" + d, "g"), d + "*" + p);
                s = s.replace(new RegExp(t + "\\*" + p, "g"), p + "*" + t);
            }
        }
    
        const monomials = this.parse(s, t);
        const lex = this.diff(monomials, t);
        if(lex.length == 0) 
        {
            return "0"; 
        }
        return this.concat(lex, t);
    }
    
    // Примеры вызова функции
    //console.log(symbolic_diff("2x + 4x^3-0.5*x^2+2*x-1+x+2*y", "x"));
    //console.log(symbolic_diff("4*x^3", "x"));
    //console.log(symbolic_diff("4*x^3", "y"));
    //console.log(symbolic_diff("4*x^3-x^2", "x"));
    //console.log(symbolic_diff("y*4*x^3-x^2", "x"));
    // console.log(symbolic_diff("4*y*x^y-x^2", "x"));

}

export {MiniMaple}
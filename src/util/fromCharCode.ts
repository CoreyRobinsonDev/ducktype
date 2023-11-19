// String.fromCharCode is wrong???
export function fromCharCode(charCode: number, shiftKey: boolean): string  {
    switch(charCode) {
        case 8: return "Backspace";
        case 9: return "Tab";
        case 13: return "Enter";
        case 32: return " ";
        case 48: return shiftKey ? ")" : "0";
        case 49: return shiftKey ? "!" : "1";
        case 50: return shiftKey ? "@" : "2";
        case 51: return shiftKey ? "#" : "3";
        case 52: return shiftKey ? "$" : "4";
        case 53: return shiftKey ? "%" : "5";
        case 54: return shiftKey ? "^" : "6";
        case 55: return shiftKey ? "&" : "7";
        case 56: return shiftKey ? "*" : "8";
        case 57: return shiftKey ? "(" : "9";
        case 65: return shiftKey ? "A" : "a";
        case 66: return shiftKey ? "B" : "b";
        case 67: return shiftKey ? "C" : "c";
        case 68: return shiftKey ? "D" : "d";
        case 69: return shiftKey ? "E" : "e";
        case 70: return shiftKey ? "F" : "f";
        case 71: return shiftKey ? "G" : "g";
        case 72: return shiftKey ? "H" : "h";
        case 73: return shiftKey ? "I" : "i";
        case 74: return shiftKey ? "J" : "j";
        case 75: return shiftKey ? "K" : "k";
        case 76: return shiftKey ? "L" : "l";
        case 77: return shiftKey ? "M" : "m";
        case 78: return shiftKey ? "N" : "n";
        case 79: return shiftKey ? "O" : "o";
        case 80: return shiftKey ? "P" : "p";
        case 81: return shiftKey ? "Q" : "q";
        case 82: return shiftKey ? "R" : "r";
        case 83: return shiftKey ? "S" : "s";
        case 84: return shiftKey ? "T" : "t";
        case 85: return shiftKey ? "U" : "u";
        case 86: return shiftKey ? "V" : "v";
        case 87: return shiftKey ? "W" : "w";
        case 88: return shiftKey ? "X" : "x";
        case 89: return shiftKey ? "Y" : "y";
        case 90: return shiftKey ? "Z" : "z";
        case 186: return shiftKey ? ":" : ";";
        case 219: return shiftKey ? "{" : "[";
        case 221: return shiftKey ? "}" : "]";
        case 191: return shiftKey ? "?" : "/";
        case 188: return shiftKey ? "<" : ",";
        case 190: return shiftKey ? ">" : ".";
        case 222: return shiftKey ? '"' : "'";
        case 189: return shiftKey ? "_" : "-";
        case 187: return shiftKey ? "=" : "+";
        default: return "";
    }
}

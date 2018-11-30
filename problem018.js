function reverse(a) {
    return function() {
        var flip = Array.from(arguments).reverse();
        return a.apply(null, flip);}
}
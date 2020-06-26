//
// 2020-06-25, jjuiddong
// 2D vector
//

Vec2 = function (x, y) {
    this.x = x || 0;
    this.y = y || 0;    
}

Vec2.prototype = {

    constructor: Vec2,

    set: function (vec2) {
        this.x = vec2.x;
        this.y = vec2.y;
    },

    set2: function (x, y) {
        this.x = x;
        this.y = y;
    },

    copy: function (v) {
        this.x = v.x;
        this.y = v.y;
        return this;
    },
};


// out = a
Vec2.set = function(out, a) {
    out.x = a.x;
    out.y = a.y;
};

// out = x,y
Vec2.set2 = function(out, x, y) {
    out.x = x;
    out.y = y;
};

// out = a + b
Vec2.add = function(out, a, b) {
    out.x = a.x + b.x;
    out.y = a.y + b.y;
};

// out = a - b
Vec2.sub = function(out, a, b) {
    out.x = a.x - b.x;
    out.y = a.y - b.y;
};

// out = a * b
Vec2.scale = function(out, a, b) {
    out.x = a.x * b;
    out.y = a.y * b;
};

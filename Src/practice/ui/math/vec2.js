//
// 2020-06-25, jjuiddong
// 2D vector
//

vec2 = function (x, y) {
    this.x = x || 0;
    this.y = y || 0;    
}

vec2.prototype = {

    constructor: vec2,

    set: function (x, y) {
        this.x = x;
        this.y = y;
    },

    copy: function (v) {
        this.x = v.x;
        this.y = v.y;
        return this;
    },

    // add: function(out, rhs) {
    //     out.x = this.x + rhs.x;
    //     out.y = this.y + rhs.y;
    // },

    // sub: function(out, rhs) {
    //     out.x = this.x - rhs.x;
    //     out.y = this.y - rhs.y;
    // },

    // mul: function(out, rhs) {
    //     out.x = this.x * rhs;
    //     out.y = this.y * rhs;
    // }

};

vec2.set = function(out, x, y) {
    out.x = x;
    out.y = y;
};

vec2.add = function(out, a, b) {
    out.x = a.x + b.x;
    out.y = a.y + b.y;
};

vec2.sub = function(out, a, b) {
    out.x = a.x - b.x;
    out.y = a.y - b.y;
};

vec2.scale = function(out, a, b) {
    out.x = a.x * b;
    out.y = a.y * b;
};

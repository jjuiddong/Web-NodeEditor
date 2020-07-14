//
// 2020-06-25, jjuiddong
// 2D vector
//
// 2020-07-13
//  - TypeScript Refactoring
//

export default class Vec2 {
    x: number = 0;
    y: number = 0;

    constructor(x:number=0, y:number=0) {
        this.x = x || 0;
        this.y = y || 0;    
    }

    set (pos:Vec2) {
        this.x = pos.x;
        this.y = pos.y;
    }

    set2 (x:number, y:number) {
        this.x = x;
        this.y = y;
    }

    copy (pos:Vec2) {
        this.x = pos.x;
        this.y = pos.y;
        return this;
    }

    // out = a
    static set (out:Vec2, a:Vec2) {
        out.x = a.x;
        out.y = a.y;
    }

    // out = x,y
    static set2 (out:Vec2, x:number, y:number) {
        out.x = x;
        out.y = y;
    };

    // out = a + b
    static add (out:Vec2, a:Vec2, b:Vec2) {
        out.x = a.x + b.x;
        out.y = a.y + b.y;
    };

    // out = a - b
    static sub (out:Vec2, a:Vec2, b:Vec2) {
        out.x = a.x - b.x;
        out.y = a.y - b.y;
    };

    // out = a * b
    static scale (out:Vec2, a:Vec2, b:number) {
        out.x = a.x * b;
        out.y = a.y * b;
    };
}

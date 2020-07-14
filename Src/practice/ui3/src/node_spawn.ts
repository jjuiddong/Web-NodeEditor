//
// 2020-06-30, jjuiddong
// spawn node class
//
// 2020-07-13
//  - TypeScript Refactoring
//
import Vec2 from './math/vec2'
import Rect from './math/rect'
import Node from './node'
import Slot, { SlotType, SlotState } from './slot'
import {Widgets} from './widgets'

export default class SpawnNode {
  constructor() {}

  //--------------------------------------------------------------------------------
  // spawn Boolean
  // pos: {x,y}
  static Boolean(pos:Vec2) {
    const node = new Node(-1, 'Boolean', new Rect(pos.x, pos.y, 200, 100));

    node.addSlot(new Slot(-1, null, "in", SlotType.Input));
    node.addSlot(new Slot(-1, null, "out", SlotType.Output));
    node.addWidget(new Widgets.Boolean());
    return node;
  }

  //--------------------------------------------------------------------------------
  // spawn Number
  // pos: {x,y}
  static Number(pos:Vec2) {
    const node = new Node(-1, 'Number', new Rect(pos.x, pos.y, 200, 100));

    node.addSlot(new Slot(-1, null, "in", SlotType.Input));
    node.addSlot(new Slot(-1, null, "out", SlotType.Output));
    node.addWidget(new Widgets.Number());
    return node;
  }

  // //--------------------------------------------------------------------------------
  // spawn String
  // pos: {x,y}
  static String(pos:Vec2) {
    const node = new Node(-1, 'String',new Rect(pos.x, pos.y, 200, 100));

    node.addSlot(new Slot(-1, null, "in", SlotType.Input));
    node.addSlot(new Slot(-1, null, "out", SlotType.Output));
    node.addWidget(new Widgets.String());
    return node;
  }

  //--------------------------------------------------------------------------------
  // spawn node1
  // pos: {x,y}
  static Node1(pos:Vec2) {
    const node = new Node(-1, 'Node1', new Rect(pos.x, pos.y, 200, 200));

    node.addSlot(new Slot(-1, null, "in-1", SlotType.Input));
    node.addSlot(new Slot(-1, null, "in-2", SlotType.Input));
    node.addSlot(new Slot(-1, null, "in-3", SlotType.Input));
    node.addSlot(new Slot(-1, null, "out-1", SlotType.Output));
    node.addSlot(new Slot(-1, null, "out-2", SlotType.Output));
    node.addSlot(new Slot(-1, null, "out-3", SlotType.Output));
    return node;
  }

  //--------------------------------------------------------------------------------
  // spawn node2
  // pos: {x,y}
  static Node2(pos:Vec2) {
    const node = new Node(-1, 'Node2',new Rect(pos.x, pos.y, 200, 150));

    node.addSlot(new Slot(-1, null, "in-1", SlotType.Input));
    node.addSlot(new Slot(-1, null, "in-2", SlotType.Input));
    node.addSlot(new Slot(-1, null, "out-1", SlotType.Output));
    node.addSlot(new Slot(-1, null, "out-2", SlotType.Output));
    return node;
  }

  //--------------------------------------------------------------------------------
  // spawn node3
  // pos: {x,y}
  static Node3(pos:Vec2) {
    const node = new Node(-1, 'Node3', new Rect(pos.x, pos.y, 200, 180));

    node.addSlot(new Slot(-1, null, "in-1", SlotType.Input));
    node.addSlot(new Slot(-1, null, "in-2", SlotType.Input));
    node.addSlot(new Slot(-1, null, "out-1", SlotType.Output));
    node.addSlot(new Slot(-1, null, "out-2", SlotType.Output));
    node.addSlot(new Slot(-1, null, "out-3", SlotType.Output));
    return node;
  }

  //--------------------------------------------------------------------------------
  // spawn Console
  // pos: {x,y}
  static Console(pos:Vec2) {
    const node = new Node(-1, 'Console', new Rect(pos.x, pos.y, 200, 100));

    node.addSlot(new Slot(-1, null, "in", SlotType.Input));
    node.addSlot(new Slot(-1, null, "out", SlotType.Output));
    return node;
  }  
}

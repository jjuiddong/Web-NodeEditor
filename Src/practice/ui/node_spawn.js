//
// 2020-06-30, jjuiddong
// spawn node class
//
class SpawnNode {
  constructor() {}


  //--------------------------------------------------------------------------------
  // spawn Boolean
  // pos: {x,y}
  static Boolean(pos) {
    const node = new Node(
      (option = {
        name: 'Boolean',
        rect: new Rect(pos.x, pos.y, 200, 100),
      })
    );

    node.addSlot(new Slot({ name: "in", type: SLOT_TYPE_INPUT }));
    node.addSlot(new Slot({ name: "out", type: SLOT_TYPE_OUTPUT }));
    node.addWidget(new Widgets.Boolean({}));
    return node;
  }

  //--------------------------------------------------------------------------------
  // spawn Number
  // pos: {x,y}
  static Number(pos) {
    const node = new Node(
      (option = {
        name: 'Number',
        rect: new Rect(pos.x, pos.y, 200, 100),
      })
    );

    node.addSlot(new Slot({ name: "in", type: SLOT_TYPE_INPUT }));
    node.addSlot(new Slot({ name: "out", type: SLOT_TYPE_OUTPUT }));
    node.addWidget(new Widgets.Number({}));
    return node;
  }

  //--------------------------------------------------------------------------------
  // spawn String
  // pos: {x,y}
  static String(pos) {
    const node = new Node(
      (option = {
        name: 'String',
        rect: new Rect(pos.x, pos.y, 200, 100),
      })
    );

    node.addSlot(new Slot({ name: "in", type: SLOT_TYPE_INPUT }));
    node.addSlot(new Slot({ name: "out", type: SLOT_TYPE_OUTPUT }));
    node.addWidget(new Widgets.String({}));
    return node;
  }

  //--------------------------------------------------------------------------------
  // spawn node1
  // pos: {x,y}
  static Node1(pos) {
    const node = new Node(
      (option = {
        name: 'Node1',
        rect: new Rect(pos.x, pos.y, 200, 200),
      })
    );

    node.addSlot(new Slot({ name: "in-1", type: SLOT_TYPE_INPUT }));
    node.addSlot(new Slot({ name: "in-2", type: SLOT_TYPE_INPUT }));
    node.addSlot(new Slot({ name: "in-3", type: SLOT_TYPE_INPUT }));
    node.addSlot(new Slot({ name: "out-1", type: SLOT_TYPE_OUTPUT }));
    node.addSlot(new Slot({ name: "out-2", type: SLOT_TYPE_OUTPUT }));
    node.addSlot(new Slot({ name: "out-3", type: SLOT_TYPE_OUTPUT }));
    return node;
  }

  //--------------------------------------------------------------------------------
  // spawn node2
  // pos: {x,y}
  static Node2(pos) {
    const node = new Node(
      (option = {
        name: 'Node2',
        rect: new Rect(pos.x, pos.y, 200, 150),
      })
    );

    node.addSlot(new Slot({ name: "in-1", type: SLOT_TYPE_INPUT }));
    node.addSlot(new Slot({ name: "in-2", type: SLOT_TYPE_INPUT }));
    node.addSlot(new Slot({ name: "out-1", type: SLOT_TYPE_OUTPUT }));
    node.addSlot(new Slot({ name: "out-2", type: SLOT_TYPE_OUTPUT }));
    return node;
  }

  //--------------------------------------------------------------------------------
  // spawn node3
  // pos: {x,y}
  static Node3(pos) {
    const node = new Node(
      (option = {
        name: 'Node3',
        rect: new Rect(pos.x, pos.y, 200, 180),
      })
    );

    node.addSlot(new Slot({ name: "in-1", type: SLOT_TYPE_INPUT }));
    node.addSlot(new Slot({ name: "in-2", type: SLOT_TYPE_INPUT }));
    node.addSlot(new Slot({ name: "out-1", type: SLOT_TYPE_OUTPUT }));
    node.addSlot(new Slot({ name: "out-2", type: SLOT_TYPE_OUTPUT }));
    node.addSlot(new Slot({ name: "out-3", type: SLOT_TYPE_OUTPUT }));
    return node;
  }

  //--------------------------------------------------------------------------------
  // spawn Console
  // pos: {x,y}
  static Console(pos) {
    const node = new Node(
      (option = {
        name: 'Console',
        rect: new Rect(pos.x, pos.y, 200, 100),
      })
    );

    node.addSlot(new Slot({ name: "in", type: SLOT_TYPE_INPUT }));
    node.addSlot(new Slot({ name: "out", type: SLOT_TYPE_OUTPUT }));
    return node;
  }  
}

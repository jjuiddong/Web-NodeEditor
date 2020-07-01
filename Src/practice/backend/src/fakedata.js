import NodeFile from './model/nodefile';

export default function createFakeData() {

    var file ={};
    file.title = 'nodefile name';
    file.version = 'v1.0';
    file.offsetX = 1000;
    file.offsetY = 1100;
    file.scale = 1.01;
    file.nodes = [
      {
        id: 1,
        name: 'node1',
        x: 100,
        y: 110,
        w: 200,
        h: 100,
        inputs:[
          //{
            // id: 2,
            // name: 'in-1',
            // type: 1,
          //},
        ],
        outputs:[
          // {
          //   id: 3,
          //   name: 'out-1',
          //   type: 1,
          // }
        ],
        widgets:[
          // {
          //   id: 2,
          //   name: 'widget',
          //   type: 1,
          //   value: 'true',
          // }
        ],
      },

      {
        id: 1,
        name: 'node2',
        x: 100,
        y: 110,
        w: 200,
        h: 100,
        inputs:[
          {
            id: 2,
            name: 'in-1',
            type: 1,
          },
          {
            id: 5,
            name: 'in-2',
            type: 1,
          },          
        ],
        outputs:[
          {
            id: 3,
            name: 'out-1',
            type: 1,
          }
        ],
        widgets:[
          {
            id: 2,
            name: 'widget',
            type: 1,
            value: 'true',
          }
        ],
      }      
    ];
    file.links = [
      {
        id: 100,
        from: 101,
        to: 201, 
      },
      {
        id: 110,
        from: 102,
        to: 203, 
      }
    ];

    var files = [file];
    NodeFile.insertMany(files, (err, docs) => {
      console.log(err);
      console.log(docs);
    });
        
}

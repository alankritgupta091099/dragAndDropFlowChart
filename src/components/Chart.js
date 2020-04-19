export const chartSimple = {
    offset: {
      x: 0,
      y: 0
    },
    nodes: {
      node1: {
        id: "node1",
        type: "output-only",
        position: {
          x: 800,
          y: 100
        },
        ports: {
          port1: {
            id: "port1",
            type: "output",
            properties: {
              value: "yes"
            }
          }
        }
      },
      node2: {
        id: "node2",
        type: "End",
        position: {
          x: 800,
          y: 300
        },
        ports: {
          port1: {
            id: "port1",
            type: "input"
          }
        }
      }
    },
    links: {
      link1: {
        id: "link1",
        from: {
          nodeId: "node1",
          portId: "port1"
        },
        to: {
          nodeId: "node2",
          portId: "port1"
        },
      },
    },
    selected: {},
    hovered: {}
  };
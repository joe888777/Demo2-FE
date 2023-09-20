import React from "react";
import { ForceGraph3D } from "react-force-graph";
import data from '../dataset/data.json';
function VisNetwork() {
    const dt = data;
    console.log(dt);
    const nodes = [
        { id: 1, label: "Node 1", title: "node 1 tootip text" },
        { id: 2, label: "Node 2", title: "node 2 tootip text" },
        { id: 3, label: "Node 3", title: "node 3 tootip text" },
        { id: 4, label: "Node 4", title: "node 4 tootip text" },
        { id: 5, label: "Node 5", title: "node 5 tootip text" }
      ];
      const edges = [
        { source: 1, target: 2 },
        { source: 1, target: 3 },
        { source: 2, target: 4 },
        { source: 2, target: 5 }
      ];
  return (
    <ForceGraph3D
    graphData={{nodes: nodes, links: edges}}
    />
  );
}
export default VisNetwork;
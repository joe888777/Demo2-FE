import MOCK_DATA from '../dataset/mock_data.json';
import { ForceGraph2D } from 'react-force-graph';
import { useState, useEffect } from 'react';
import { getNodes, getEdges } from '../utils/graph';

const TempGraph = (props) => {

    const [mockData, setMockData] = useState({
        nodes: [],
        links: []
    });

    useEffect(() => {
        console.log(getNodes(props.data));
        setMockData({
            nodes: getNodes(props.data),
            links: getEdges(props.data)
        });
        }, [props.data])
    return (
        <div className='relative p-4 sm:p-6 rounded-sm overflow-hidden mr-auto ml-auto w-10/12 '>
            <ForceGraph2D
            graphData={mockData}
            nodeOpacity={1}
            linkColor={"#d3d3d3"}
            linkWidth={1}
            linkOpacity={1}
            nodeLabel={node => node.id}
            linkLabel={link => link.amount}
            linkDirectionalArrowLength={2}
            linkDirectionalArrowRelPos={1}
            linkDirectionalParticles={5}
            linkDirectionalParticleColor={"red"}
            linkDirectionalParticleWidth={2}
            // dagMode='zin'
            />
        </div>
    )
}

export default TempGraph;
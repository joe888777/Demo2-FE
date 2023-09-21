import MOCK_DATA from '../dataset/mock_data.json';
import { ForceGraph3D } from 'react-force-graph';
import { useState, useEffect } from 'react';
import { getNodes, getEdges } from '../utils/graph';
import { graphMetaAtomF } from '../core/atom';
import { useRecoilState } from 'recoil';

const TempGraph = (props) => {
    const [good, setgood] =  useRecoilState(graphMetaAtomF(props.uid));
    const [mockData, setMockData] = useState({
        nodes: [],
        links: []
    });

    useEffect(() => {
        console.log(getNodes(props.data));
        const nodes = getNodes(props.data);
        console.log(nodes);
        setMockData({
            nodes: nodes,
            links: getEdges(props.data)
        });
        setgood({
            tx_amount_max: props.data.reduce((prev, curr) => {
                if (curr.amount > prev) {
                    return prev = curr.amount;
                }
                return prev;
            }, 0),
            tx_amount_min: props.data.reduce( (prev, dd) => {
                if (dd.amount < prev) {
                    return prev = dd.amount;
                } else{
                    return prev;
                }
            }, 10000000000000),
            receive_count_max: nodes.reduce((prev,node)=>{
                if (node.rxTimes > prev) {
                    return prev = node.rxTimes;
                }
                return prev;
            }, 0),
            tx_total: props.data.length,
            node_total: nodes.length
        });
        }, [props.data])
    return (
        <div className='relative p-4 sm:p-6 rounded-sm overflow-hidden mr-auto ml-auto w-10/12 '>
            <div className='text-center'>
                tx max amount: {good.tx_amount_max} TON <br />
                tx min amount: {good.tx_amount_min} TON<br />
                tx total count: {good.tx_total} <br />
                node total count: {good.node_total}<br />
                max receive count: {good.receive_count_max}<br />
            </div>
            <ForceGraph3D
            graphData={mockData}
            nodeOpacity={1}
            nodeResolution={8}
            linkColor={()=>"aqua"}
            linkWidth={.2}
            linkOpacity={1}
            linkCurvature={.1}
            nodeVal={node=>node.level*5}
            nodeLabel={node => (`${node.id.substr(0,6)}}`)}
            linkLabel={link => link.amount}
            linkDirectionalArrowLength={()=>2}
            linkDirectionalArrowWidth={()=>1}
            linkDirectionalArrowRelPos={1}
            linkDirectionalParticles={0}
            linkDirectionalParticleColor={()=>"#4EFEB3"}
            linkDirectionalParticleWidth={2}
            onNodeClick={(node) => {
                if(node.url){
                    window.open(node.url,"_blank")
                } else {
                    window.open(`https://tonviewer.com/${node.address}`, "_blank")
                }
            }}
            onLinkClick={(link) => {
                window.open(`https://tonviewer.com/transaction/${link.tx_id}`, "_blank")
            }}
            // dagMode='zin'
            />
        </div>
    )
}

export default TempGraph;
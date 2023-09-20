import MOCK_DATA from '../dataset/mock_data.json';
import { ForceGraph3D } from 'react-force-graph';
import { useState, useEffect } from 'react';
import { getNodes } from '../utils/api';

const TX_ATTR = {
    txId: "tx_id",
    blockId: "block_id",
    senderAddr: "sender_address",
    receiverAddr: "receiver_address",
    type: "type",
    amount: "amount",
    confirmTime: "confirm_time"
}
const MockGraph = () => {

    const [mockData, setMockData] = useState({
        nodes: [],
        links: []
    });
    const getNodes = (dataArray) => {
        console.log(dataArray);
        const nodes = {};
        dataArray.forEach((data) => {
            const txId = data[TX_ATTR.txId];
            const rxId = data[TX_ATTR.rxId];
            if (!nodes.hasOwnProperty(txId)) {
                nodes[txId] = 0;
            }
            if (!nodes.hasOwnProperty(rxId)) {
                nodes[rxId] = 1;
            } else {
                nodes[rxId] += 1;
            }
        });
        const resultArray = [];
        for (const [key, value] of Object.entries(nodes)) {
            resultArray.push({
                id: key,
                address: key,
                rxTimes: value,
                color: "blue"
            });
        }
        
        return resultArray;
    }
    const getEdges = (dataArray) => {
        return dataArray.map(data => {
            return {
                ...data,
                source: data[TX_ATTR.senderAddr],
                target: data[TX_ATTR.receiverAddr],
            }
        })
    }
    useEffect(() => {
        console.log(getNodes(MOCK_DATA));
        setMockData({
            nodes: getNodes(MOCK_DATA),
            links: getEdges(MOCK_DATA)
        });
        }, [])
    return (
        <div><ForceGraph3D
        graphData={mockData}
        /></div>
    )
}

export default MockGraph;
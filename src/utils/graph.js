import { getNodeInfos } from "./api";
const chosedDataTable = {
    "0x123": {
        name: 'VisualTon',
        type: 'DEFI',
        url: 'https://www.google.com.tw/?hl=zh_TW'
    },
    "0xtest1" : {
        name: 'test1',
        type: 'GAMEFI',
        url: 'https://www.google.com.tw/?hl=zh_TW'
    }
}
const TX_ATTR = {
    txId: "tx_id",
    blockId: "block_id",
    senderAddr: "sender_address",
    receiverAddr: "receiver_address",
    type: "type",
    amount: "amount",
    confirmTime: "confirm_time"
}
//node level
const getColor = (rxTimes) => {
    if (rxTimes > 50) {
        return "red";
    } else if (rxTimes > 10) {
        return "orange";
    } else if (rxTimes > 5) {
        return "yellow";
    } else {
        return "white";
    }
}

export const getNodes = (dataArray) => {
    
    const nodes = {};
    dataArray.forEach((data) => {
        const txId = data[TX_ATTR.senderAddr];
        const rxId = data[TX_ATTR.receiverAddr];
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
        if (chosedDataTable["0x123"].name === (key)) {
            resultArray.push({
                id: key,
                address: key,
                rxTimes: value,
                color: getColor(value),
                url: chosedDataTable["0x123"].url,
                type: chosedDataTable["0x123"].type
            });
            continue;
        }
        if (chosedDataTable["0xtest1"].name === (key)) {
            resultArray.push({
                id: key,
                address: key,
                rxTimes: value,
                color: getColor(value),
                url: chosedDataTable["0xtest1"].url,
                type: chosedDataTable["0xtest1"].type
            });
            continue;
        }
        resultArray.push({
            id: key,
            address: key,
            rxTimes: value,
            color: getColor(value),
        });
    }
    
    return resultArray;
}

export const getEdges = (dataArray) => {
    return dataArray.map(data => {
        return {
            ...data,
            source: data[TX_ATTR.senderAddr],
            target: data[TX_ATTR.receiverAddr],
            color: "yellow"
        }
    })
}
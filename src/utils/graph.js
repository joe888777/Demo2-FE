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
    console.log("nodes");
    console.log(dataArray);
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
        }
    })
}
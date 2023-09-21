import MOCK_DATA from '../dataset/mock_data.json';
import TempGraph2D from './tempGraph2D';
import { getNodeInfos } from '../utils/api';
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
const MockGraph = () => {
    const data = MOCK_DATA;
    const tgdata = data.map((dt) => {
        if (chosedDataTable.hasOwnProperty(dt.sender_address)) {
            dt.sender_address = chosedDataTable[dt.sender_address].name;
        }
        if (chosedDataTable.hasOwnProperty(dt.receiver_address)) {
            dt.receiver_address = chosedDataTable[dt.receiver_address].name;
        }
        return dt;
    })
    return (<TempGraph2D data={tgdata} uid="example"/>)
}

export default MockGraph;
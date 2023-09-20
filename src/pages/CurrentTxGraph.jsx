import { useState, useEffect } from 'react';
import { getFilteredNodes } from '../utils/api';
import TempGraph from './tempGraph';
import SliderComponent from '../partials/dashboard/Bars';
import { amountAtom } from '../core/atom';
import { useRecoilValue } from 'recoil';

const CurrentTransaction = () => {
    const [txData, setTxData] = useState([]);
    const amount = useRecoilValue(amountAtom);
    useEffect(() => {
        const init = async () => {
            getFilteredNodes(amount).then(data => setTxData(data));
        }
        init();
    }, [amount])
    return (
        <div className="w-full">
            <SliderComponent />
            <TempGraph data={txData}/>
        </div>
    )
    
}

export default CurrentTransaction;
import { useContext } from 'react'
import { AlternativeColorContext } from '../context/AlternativeColorProvider';
const useAltColor = () => {
    return useContext(AlternativeColorContext);
}
export default useAltColor;

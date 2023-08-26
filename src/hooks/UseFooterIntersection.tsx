import { useContext } from 'react'
import { IntersectionContext } from '../context/IntersectionProvider';
const UseFooterIntersection = () => {
    return useContext(IntersectionContext);
}
export default UseFooterIntersection
import { useParams } from 'react-router-dom';

import HunterRarities from './Pages/Information/HunterRarities';
import HunterBaseStats from './Pages/Information/HunterBaseStats';
import Characteristics from './Pages/Information/Characteristics';

const contentMap = {
    "Hunter Rarities": <HunterRarities/>,
    "Hunter Base Stats": <HunterBaseStats/>,
    "Characteristics": <Characteristics/>,
}

function GuideContent()
{
    const { page } = useParams();
    const activePage = decodeURIComponent(page || "");

    return contentMap[activePage] || (
        <p className="guide-placeholder">Content for "{activePage}" is not written yet.</p>
    );
}

export default GuideContent;
import { useEffect, useState } from 'react'
import { community } from '../../constants/constants'
import { Section } from '../../types/types';
export default function Community() {
    const [sections, setSections] = useState<Section[]>(community);
    const [sectionIndex, setSectionIndex] = useState<number>(-1);
    const [animation, setAnimation] = useState<string>("");
    useEffect(() => {
        setAnimation("show-card .7s ease");
    }, [sections]);
    const sectionFilter = (section: number) => {
        setSectionIndex(() => section);
        if (section === -1) {
            setSections(() => community);
            return;
        }
        const newSections: Section[] = community.filter(s => s.section === section);
        setSections(newSections);
    }
    const onAnimationEnd = () => setAnimation("");
    
    return (
        <div className="community">
            <div className="community-title"></div>
            <div className="community-nav">
                <button onClick={() => sectionFilter(-1)} className={`community-section ${sectionIndex === -1 ? "active" : ""}`}>Comunidad</button>
                <button onClick={() => sectionFilter(0)} className={`community-section ${sectionIndex === 0 ? "active" : ""}`}>Sentir 1.0</button>
                <button onClick={() => sectionFilter(1)} className={`community-section ${sectionIndex === 1 ? "active" : ""}`}>Sentir 2.0</button>
                <button onClick={() => sectionFilter(2)} className={`community-section ${sectionIndex === 2 ? "active" : ""}`}>Sentir 3.0</button>
                <button onClick={() => sectionFilter(3)} className={`community-section ${sectionIndex === 3 ? "active" : ""}`}>Sentir(nos)</button>
                <button onClick={() => sectionFilter(4)} className={`community-section ${sectionIndex === 4 ? "active" : ""}`}>Sentir en Konserta</button>
                <button onClick={() => sectionFilter(5)} className={`community-section ${sectionIndex === 4 ? "active" : ""}`}>Aniversario Sentir</button>
            </div>
            <div className="community-card-container">
                {
                    sections.map((e, i) => {
                        return (
                            <div
                                key={`${i}-community`}
                                style={{animation}}
                                className="community-card"
                                onAnimationEnd={() => onAnimationEnd()}
                                >
                                <div className="card-img">
                                    <img src={e.image} alt="image" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

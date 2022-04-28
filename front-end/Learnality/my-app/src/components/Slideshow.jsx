import React from 'react';
import "../slideshow.css";


const LearningStylePics = [
    { id: 1, name: "Visual", description: "This is a description for visual learners", image: require('../images/TeacherFeedbackPage/VisualLearnerPic.jpg') },
    { id: 2, name: "Auditory", description: "This is a description for auditory learners", image: require('../images/TeacherFeedbackPage/AuditoryLearnerPic.jpg') },
    { id: 3, name: "Reading/Writing", description: "This is a description for reading/writing learners", image: require('../images/TeacherFeedbackPage/ReadingLearnerPic.jpg') },
    { id: 4, name: "Kinestetic", description: "This is a description for kinestetic learners", image: require('../images/TeacherFeedbackPage/KinesteticLearnerPic.jpg') }
]

const delay = 2500;

export default function Slideshow(){
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === LearningStylePics.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {};
      }, [index]);

    return(
        <div className="slideshow">
            <div className="SlideshowSlider"  style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {LearningStylePics.map((SlideImage,index)=>(
                    <img
                         className="slide"
                         key={index.id}
                         src={SlideImage.image}
                         style={{SlideImage}}
                    />
                ))}
              
            </div>

            <div className="slideshowDots">
                {LearningStylePics.map((_, idx) => (
                <div 
                    key={idx} 
                    className={`slideshowDot${index === idx ? " active" : ""}`}
                    onClick={() => {
                        setIndex(idx);
                      }}
                    ></div>
                ))}
            </div>  
        </div>
    );
}
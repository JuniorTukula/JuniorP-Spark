import React from "react";
import PropTypes from "prop-types"; 

const  SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
    return(
        <div className={'flex items-center gap-5 ring-1 ring-inset ring-gray-400 rounded-2xl p-3 hover:bg-gray-100 transition-colors ' + classes}>
            <figure className="w-12 h-12 flex items-center justify-center bg-indigo-100/50 rounded-lg overflow-hidden group-hover:bg-grey-100 transition-colors ">
                <img 
                src={imgSrc}
                width={32}
                height={32}
                 alt={label}
                 />
            </figure>

            <div>
                <h3>{label}</h3>
                <p className="text-gray-500">
                    {desc}
                </p>
            </div>
        </div>
    )
}

SkillCard.propTypes={
    imgSrc: PropTypes.elementType.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default SkillCard